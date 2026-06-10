#!/usr/bin/env node
/**
 * Validates the promoted DYNASTY_STRATEGY_ONTOLOGY_V1 artifact:
 *   1. JSON Schema shape (schemas/dynasty_strategy_ontology_v1.schema.json)
 *   2. Contract invariants (completeness, criteria, slots, safety rules,
 *      cross-references, player-data firewall)
 *   3. Determinism: promoted artifact is byte-identical to builder output
 *
 * Exits non-zero with a list of violations on failure.
 */
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
import { runAllContractChecks } from '../src/contractChecks.js';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const artifactPath = resolve(repoRoot, process.argv[2] ?? PROMOTED_ARTIFACT_PATH);
const schemaPath = resolve(repoRoot, SCHEMA_PATH);

const raw = readFileSync(artifactPath, 'utf8');
const artifact = JSON.parse(raw);
const schema = JSON.parse(readFileSync(schemaPath, 'utf8'));

const errors = [
  ...validateAgainstSchema(artifact, schema),
  ...runAllContractChecks(artifact),
];

if (raw !== serializeOntology(buildOntology())) {
  errors.push('determinism: promoted artifact does not match builder output (run npm run build)');
}

if (errors.length > 0) {
  console.error(`INVALID: ${artifactPath}`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`VALID: ${artifactPath}`);
console.log(
  `  concepts=${artifact.concepts.length} archetypes=${artifact.player_asset_archetypes.length} roster_states=${artifact.roster_state_definitions.length} timeline_rules=${artifact.timeline_rules.length} templates=${artifact.explanation_templates.length}`,
);
