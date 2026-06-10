import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  buildOntology,
  serializeOntology,
  PROMOTED_ARTIFACT_PATH,
  SCHEMA_PATH,
} from '../src/buildOntology.js';
import { validateAgainstSchema } from '../src/validateSchema.js';
import {
  REQUIRED_SAFETY_RULE_IDS,
  checkArchetypeCriteria,
  checkConsumerSafetyRules,
  checkConsumerSuitability,
  checkDefinitionCompleteness,
  checkExplanationTemplates,
  checkNoPlayerData,
} from '../src/contractChecks.js';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const promotedRaw = readFileSync(resolve(repoRoot, PROMOTED_ARTIFACT_PATH), 'utf8');
const promoted = JSON.parse(promotedRaw);
const schema = JSON.parse(readFileSync(resolve(repoRoot, SCHEMA_PATH), 'utf8'));

test('1. promoted artifact validates against the JSON schema', () => {
  assert.deepEqual(validateAgainstSchema(promoted, schema), []);
});

test('1b. schema rejects malformed artifacts (validator is not a rubber stamp)', () => {
  const broken = JSON.parse(promotedRaw);
  broken.row_count = 5;
  delete broken.concepts[0].boundary;
  broken.player_asset_archetypes[0].criteria[0].comparator = 'fuzzy_match';
  const errors = validateAgainstSchema(broken, schema);
  assert.ok(errors.some((e) => e.includes('row_count')), `expected row_count error in: ${errors}`);
  assert.ok(errors.some((e) => e.includes('boundary')), `expected boundary error in: ${errors}`);
  assert.ok(errors.some((e) => e.includes('comparator')), `expected comparator error in: ${errors}`);
});

test('2. build is deterministic and the promoted artifact matches it', () => {
  const first = serializeOntology(buildOntology());
  const second = serializeOntology(buildOntology());
  assert.equal(first, second, 'two builds in-process differ');
  assert.equal(promotedRaw, first, 'promoted artifact is stale relative to builder output');

  // Determinism across processes (no in-process memoization masking drift).
  const out = execFileSync(
    process.execPath,
    [resolve(repoRoot, 'scripts/build-dynasty-strategy-ontology.js'), '--check'],
    { cwd: repoRoot, encoding: 'utf8' },
  );
  assert.match(out, /OK: promoted artifact matches builder output/);
});

test('3. every concept, roster state, archetype, and timeline rule has id, label, description, and boundary', () => {
  assert.deepEqual(checkDefinitionCompleteness(promoted), []);
  // The check itself must catch omissions.
  const broken = JSON.parse(promotedRaw);
  broken.timeline_rules[0].boundary = '   ';
  assert.ok(checkDefinitionCompleteness(broken).length > 0);
});

test('4. every archetype has structured criteria fields, not only prose', () => {
  assert.deepEqual(checkArchetypeCriteria(promoted), []);
  for (const archetype of promoted.player_asset_archetypes) {
    assert.ok(archetype.criteria.length >= 1, `${archetype.id} has no criteria`);
    for (const criterion of archetype.criteria) {
      assert.ok(criterion.criterion_id && criterion.input && criterion.comparator !== undefined);
    }
    assert.equal(archetype.missing_input_behavior, 'do_not_assign_fail_closed');
  }
  const expectedArchetypes = [
    'ascending_young_asset',
    'consolidation_target',
    'contender_patch',
    'elite_short_window_veteran',
    'fragile_depth_piece',
    'franchise_anchor',
    'liquidation_candidate',
    'premium_young_wr',
    'productive_veteran',
    'rebuild_core',
  ];
  assert.deepEqual(promoted.player_asset_archetypes.map((a) => a.id), expectedArchetypes);
});

test('5. explanation templates have IDs and named slots, and every slot appears in the text', () => {
  assert.deepEqual(checkExplanationTemplates(promoted), []);
  for (const template of promoted.explanation_templates) {
    assert.ok(template.id, 'template missing id');
    assert.ok(template.slots.length >= 1, `${template.id} has no slots`);
    for (const slot of template.slots) {
      assert.ok(template.text.includes(`{${slot}}`), `${template.id}: slot ${slot} unused in text`);
    }
  }
  const templateIds = promoted.explanation_templates.map((t) => t.id);
  for (const required of [
    'rebuild_premium_assets_timeline_mismatch',
    'rebuild_low_alpha_concentration',
    'contender_with_future_pick_drag',
    'fragile_contender_short_window_core',
    'productive_rebuild_with_anchor_base',
  ]) {
    assert.ok(templateIds.includes(required), `missing required template ${required}`);
  }
});

test('6. consumer safety rules are present and explicit', () => {
  assert.deepEqual(checkConsumerSafetyRules(promoted), []);
  const ruleIds = promoted.consumer_manifest.consumer_safety_rules.map((r) => r.rule_id);
  for (const required of REQUIRED_SAFETY_RULE_IDS) {
    assert.ok(ruleIds.includes(required), `missing safety rule ${required}`);
  }
  assert.equal(REQUIRED_SAFETY_RULE_IDS.length, 8);
});

test('7. no player names, Sleeper IDs, rankings, projections, or team-specific player rows', () => {
  assert.deepEqual(checkNoPlayerData(promoted), []);
  assert.equal(promoted.row_count, 0);

  // The firewall must actually trip on player-shaped content.
  const poisoned = JSON.parse(promotedRaw);
  poisoned.concepts[0].description += ' For example, McCaffrey fits here.';
  assert.ok(checkNoPlayerData(poisoned).some((e) => e.includes('tripwire')));

  const playerRow = JSON.parse(promotedRaw);
  playerRow.concepts[0].player_id = '00-0034796';
  assert.ok(checkNoPlayerData(playerRow).some((e) => e.includes('forbidden key')));

  const ranked = JSON.parse(promotedRaw);
  ranked.player_asset_archetypes[0].rank = 1;
  assert.ok(checkNoPlayerData(ranked).length > 0);
});

test('8. artifact is suitable for future TIBER-Fantasy adapter consumption', () => {
  assert.deepEqual(checkConsumerSuitability(promoted), []);

  // Envelope follows the established TIBER promoted-artifact pattern.
  assert.equal(promoted.artifact_type, 'DYNASTY_STRATEGY_ONTOLOGY_V1');
  assert.equal(promoted.schema_version, 'dynasty_strategy_ontology_v1');
  assert.equal(promoted.model_version, 'dynasty-strategy-ontology-v1.0.0');
  assert.ok(!Number.isNaN(Date.parse(promoted.generated_at)));
  assert.ok(promoted.consumer_manifest.intended_consumers.includes('TIBER-Fantasy'));
  assert.equal(
    promoted.consumer_manifest.contract_name,
    'DYNASTY_STRATEGY_ONTOLOGY_V1_DOWNSTREAM_CONSUMPTION',
  );
  assert.equal(promoted.consumer_manifest.missing_input_behavior, 'do_not_assign_fail_closed');
  assert.ok(promoted.consumer_manifest.fail_closed_behavior.missing_artifact);

  // Future-contract inputs are documented, not silently assumed available.
  const futureInputs = promoted.consumer_manifest.required_inputs
    .filter((input) => input.status === 'future_contract')
    .map((input) => input.input_id);
  for (const expected of ['age_band', 'experience_band', 'role_security_signal', 'market_liquidity_signal']) {
    assert.ok(futureInputs.includes(expected), `${expected} must be flagged future_contract`);
  }
  assert.ok(promoted.consumer_manifest.future_contract_decisions.length >= 1);

  // Validate script (the adapter's preflight) passes end to end.
  const out = execFileSync(
    process.execPath,
    [resolve(repoRoot, 'scripts/validate-dynasty-strategy-ontology.js')],
    { cwd: repoRoot, encoding: 'utf8' },
  );
  assert.match(out, /^VALID:/);
});

test('8b. arrays are sorted by id so consumers get stable ordering', () => {
  for (const collection of [
    'concepts',
    'player_asset_archetypes',
    'roster_state_definitions',
    'timeline_rules',
    'explanation_templates',
  ]) {
    const ids = promoted[collection].map((entry) => entry.id);
    assert.deepEqual(ids, [...ids].sort(), `${collection} is not sorted by id`);
  }
});
