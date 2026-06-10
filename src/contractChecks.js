/**
 * Contract invariants for DYNASTY_STRATEGY_ONTOLOGY_V1 beyond JSON Schema
 * shape: completeness, structured criteria, slot discipline, safety rules,
 * cross-reference integrity, and the player-data firewall.
 *
 * Every check returns an array of error strings (empty = pass) so the
 * validate script and the test suite share one implementation.
 */

export const REQUIRED_SAFETY_RULE_IDS = [
  'cannot_override_identity',
  'cannot_override_team_assignment',
  'cannot_override_forge_evidence',
  'cannot_count_generated_baselines_as_evidence',
  'cannot_create_projections',
  'cannot_assign_player_labels_itself',
  'cannot_consume_operator_notes_as_evidence',
  'cannot_replace_human_decision',
];

const DEFINITION_COLLECTIONS = [
  'concepts',
  'player_asset_archetypes',
  'roster_state_definitions',
  'timeline_rules',
];

const ID_PATTERN = /^[a-z][a-z0-9_]*$/;

/**
 * Vocabulary that must never appear in a rules-only strategy artifact.
 * Key names that would indicate player rows / rankings / projections, and
 * value patterns for player identifiers. The name blocklist is a tripwire,
 * not an exhaustive roster: any hit means the "no per-player content"
 * boundary was crossed somewhere upstream.
 */
const FORBIDDEN_KEY_PATTERN =
  /^(player|player_id|player_name|players|sleeper_id|sleeper_ids|gsis_id|gsis|team|teams|rank|ranks|ranking|rankings|projection|projections|adp|forge_alpha|alpha|tier_rank|points)$/i;

const GSIS_ID_PATTERN = /\b00-\d{7}\b/;

const PLAYER_NAME_TRIPWIRES = [
  'mccaffrey',
  'nacua',
  'mcconkey',
  'hockenson',
  'bijan',
  'herbert',
  'mahomes',
  'jefferson',
  "ja'marr",
  'jeanty',
  'kelce',
  'kupp',
  'achane',
  'lamar jackson',
  'josh allen',
  'derrick henry',
];

function walk(value, path, visit) {
  visit(value, path);
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, `${path}[${index}]`, visit));
  } else if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      walk(child, `${path}.${key}`, visit);
    }
  }
}

function nonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

/** Check 3: every definition entry carries id, label, description, boundary. */
export function checkDefinitionCompleteness(artifact) {
  const errors = [];
  for (const collection of DEFINITION_COLLECTIONS) {
    const entries = artifact[collection] ?? [];
    entries.forEach((entry, index) => {
      const where = `${collection}[${index}]`;
      for (const field of ['id', 'label', 'description', 'boundary']) {
        if (!nonEmptyString(entry[field])) {
          errors.push(`${where}: missing or empty "${field}"`);
        }
      }
      if (nonEmptyString(entry.id) && !ID_PATTERN.test(entry.id)) {
        errors.push(`${where}: id "${entry.id}" is not snake_case`);
      }
    });
  }
  return errors;
}

/** Check 4: archetypes carry structured criteria, not only prose. */
export function checkArchetypeCriteria(artifact) {
  const errors = [];
  for (const archetype of artifact.player_asset_archetypes ?? []) {
    const where = `player_asset_archetypes(${archetype.id})`;
    if (!Array.isArray(archetype.criteria) || archetype.criteria.length === 0) {
      errors.push(`${where}: criteria must be a non-empty array`);
      continue;
    }
    archetype.criteria.forEach((criterion, index) => {
      const cWhere = `${where}.criteria[${index}]`;
      if (!nonEmptyString(criterion.criterion_id)) errors.push(`${cWhere}: missing criterion_id`);
      if (!nonEmptyString(criterion.input)) errors.push(`${cWhere}: missing input`);
      if (!['in', 'not_in', 'equals'].includes(criterion.comparator)) {
        errors.push(`${cWhere}: comparator must be in|not_in|equals`);
      }
      if (criterion.comparator === 'equals' && !nonEmptyString(criterion.value)) {
        errors.push(`${cWhere}: equals comparator requires a string value`);
      }
      if (['in', 'not_in'].includes(criterion.comparator)) {
        if (!Array.isArray(criterion.value) || criterion.value.length === 0 || !criterion.value.every(nonEmptyString)) {
          errors.push(`${cWhere}: ${criterion.comparator} comparator requires a non-empty string array value`);
        }
      }
    });
    if (!Array.isArray(archetype.required_inputs) || archetype.required_inputs.length === 0) {
      errors.push(`${where}: required_inputs must be a non-empty array`);
    }
    if (archetype.missing_input_behavior !== 'do_not_assign_fail_closed') {
      errors.push(`${where}: missing_input_behavior must be do_not_assign_fail_closed`);
    }
  }
  return errors;
}

/** Check 5: templates have IDs and named slots, and every slot is used in text. */
export function checkExplanationTemplates(artifact) {
  const errors = [];
  for (const template of artifact.explanation_templates ?? []) {
    const where = `explanation_templates(${template.id ?? '?'})`;
    if (!nonEmptyString(template.id) || !ID_PATTERN.test(template.id)) {
      errors.push(`${where}: missing or non-snake_case template id`);
    }
    if (!Array.isArray(template.slots) || template.slots.length === 0) {
      errors.push(`${where}: slots must be a non-empty array`);
      continue;
    }
    for (const slot of template.slots) {
      if (!ID_PATTERN.test(slot)) {
        errors.push(`${where}: slot "${slot}" is not snake_case`);
      }
      if (!template.text.includes(`{${slot}}`)) {
        errors.push(`${where}: slot "${slot}" does not appear as {${slot}} in text`);
      }
    }
    const placeholders = [...template.text.matchAll(/\{([a-z0-9_]+)\}/g)].map((m) => m[1]);
    for (const placeholder of placeholders) {
      if (!template.slots.includes(placeholder)) {
        errors.push(`${where}: text placeholder {${placeholder}} is not a declared slot`);
      }
    }
    if (!Array.isArray(template.applies_to) || template.applies_to.length === 0) {
      errors.push(`${where}: applies_to must be a non-empty array`);
    }
  }
  return errors;
}

/** Check 6: all required consumer safety rules are present. */
export function checkConsumerSafetyRules(artifact) {
  const errors = [];
  const rules = artifact.consumer_manifest?.consumer_safety_rules ?? [];
  const present = new Set(rules.map((rule) => rule.rule_id));
  for (const required of REQUIRED_SAFETY_RULE_IDS) {
    if (!present.has(required)) {
      errors.push(`consumer_manifest.consumer_safety_rules: missing required rule "${required}"`);
    }
  }
  for (const rule of rules) {
    if (!nonEmptyString(rule.statement)) {
      errors.push(`consumer_manifest.consumer_safety_rules(${rule.rule_id}): empty statement`);
    }
  }
  return errors;
}

/** Check 7: the player-data firewall — no player rows, IDs, names, rankings, or projections. */
export function checkNoPlayerData(artifact) {
  const errors = [];
  walk(artifact, '$', (value, path) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      for (const key of Object.keys(value)) {
        if (FORBIDDEN_KEY_PATTERN.test(key)) {
          errors.push(`${path}: forbidden key "${key}" (player-row / ranking / projection vocabulary)`);
        }
      }
    }
    if (typeof value === 'number' && path !== '$.row_count') {
      errors.push(`${path}: unexpected numeric value ${value} — the ontology ships qualitative rules only`);
    }
    if (typeof value === 'string') {
      if (GSIS_ID_PATTERN.test(value)) {
        errors.push(`${path}: contains a GSIS-format player id`);
      }
      const lower = value.toLowerCase();
      for (const name of PLAYER_NAME_TRIPWIRES) {
        if (lower.includes(name)) {
          errors.push(`${path}: contains player-name tripwire "${name}"`);
        }
      }
    }
  });
  if (artifact.row_count !== 0) {
    errors.push(`$.row_count: must be 0 (this artifact never contains player rows), got ${artifact.row_count}`);
  }
  return errors;
}

/** Check 8: envelope + reference integrity for future adapter consumption. */
export function checkConsumerSuitability(artifact) {
  const errors = [];

  if (artifact.artifact_type !== 'DYNASTY_STRATEGY_ONTOLOGY_V1') {
    errors.push(`$.artifact_type: expected DYNASTY_STRATEGY_ONTOLOGY_V1, got ${artifact.artifact_type}`);
  }
  if (artifact.schema_version !== 'dynasty_strategy_ontology_v1') {
    errors.push(`$.schema_version: expected dynasty_strategy_ontology_v1, got ${artifact.schema_version}`);
  }
  if (!/^dynasty-strategy-ontology-v\d+\.\d+\.\d+$/.test(artifact.model_version ?? '')) {
    errors.push(`$.model_version: not semver-shaped: ${artifact.model_version}`);
  }
  if (Number.isNaN(Date.parse(artifact.generated_at ?? ''))) {
    errors.push(`$.generated_at: not parseable as a date: ${artifact.generated_at}`);
  }
  const manifest = artifact.consumer_manifest ?? {};
  if (!(manifest.intended_consumers ?? []).includes('TIBER-Fantasy')) {
    errors.push('consumer_manifest.intended_consumers: must include TIBER-Fantasy');
  }
  if (!manifest.fail_closed_behavior || typeof manifest.fail_closed_behavior !== 'object') {
    errors.push('consumer_manifest.fail_closed_behavior: missing');
  }

  const ids = [];
  for (const collection of [...DEFINITION_COLLECTIONS, 'explanation_templates']) {
    for (const entry of artifact[collection] ?? []) ids.push(entry.id);
  }
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) errors.push(`duplicate id across collections: "${id}"`);
    seen.add(id);
  }

  const conceptIds = new Set((artifact.concepts ?? []).map((c) => c.id));
  const stateIds = new Set((artifact.roster_state_definitions ?? []).map((s) => s.id));
  const archetypeIds = new Set((artifact.player_asset_archetypes ?? []).map((a) => a.id));
  const templateIds = new Set((artifact.explanation_templates ?? []).map((t) => t.id));
  const declaredInputs = new Set((manifest.required_inputs ?? []).map((input) => input.input_id));

  for (const concept of artifact.concepts ?? []) {
    for (const related of concept.related_concepts ?? []) {
      if (!conceptIds.has(related)) {
        errors.push(`concepts(${concept.id}).related_concepts: unknown concept "${related}"`);
      }
    }
  }
  for (const state of artifact.roster_state_definitions ?? []) {
    for (const related of state.related_templates ?? []) {
      if (!templateIds.has(related)) {
        errors.push(`roster_state_definitions(${state.id}).related_templates: unknown template "${related}"`);
      }
    }
  }
  for (const template of artifact.explanation_templates ?? []) {
    for (const target of template.applies_to ?? []) {
      if (!stateIds.has(target)) {
        errors.push(`explanation_templates(${template.id}).applies_to: unknown roster state "${target}"`);
      }
    }
  }
  for (const archetype of artifact.player_asset_archetypes ?? []) {
    for (const criterion of archetype.criteria ?? []) {
      if (!declaredInputs.has(criterion.input)) {
        errors.push(`player_asset_archetypes(${archetype.id}): criterion input "${criterion.input}" not declared in consumer_manifest.required_inputs`);
      }
    }
    for (const input of archetype.required_inputs ?? []) {
      if (!declaredInputs.has(input)) {
        errors.push(`player_asset_archetypes(${archetype.id}): required input "${input}" not declared in consumer_manifest.required_inputs`);
      }
    }
  }
  for (const rule of artifact.timeline_rules ?? []) {
    for (const clause of rule.when ?? []) {
      if (!declaredInputs.has(clause.input)) {
        errors.push(`timeline_rules(${rule.id}): when-clause input "${clause.input}" not declared in consumer_manifest.required_inputs`);
      }
    }
    for (const input of rule.required_inputs ?? []) {
      if (!declaredInputs.has(input)) {
        errors.push(`timeline_rules(${rule.id}): required input "${input}" not declared in consumer_manifest.required_inputs`);
      }
    }
    for (const excluded of rule.then?.excludes_archetypes ?? []) {
      if (!archetypeIds.has(excluded)) {
        errors.push(`timeline_rules(${rule.id}): excluded archetype "${excluded}" does not exist`);
      }
    }
  }

  return errors;
}

export function runAllContractChecks(artifact) {
  return [
    ...checkDefinitionCompleteness(artifact),
    ...checkArchetypeCriteria(artifact),
    ...checkExplanationTemplates(artifact),
    ...checkConsumerSafetyRules(artifact),
    ...checkNoPlayerData(artifact),
    ...checkConsumerSuitability(artifact),
  ];
}
