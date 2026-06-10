import {
  ARTIFACT_TYPE,
  GENERATED_AT,
  MODEL_VERSION,
  ROW_COUNT,
  SCHEMA_VERSION,
} from './ontology/meta.js';
import { concepts } from './ontology/concepts.js';
import { rosterStates } from './ontology/rosterStates.js';
import { archetypes } from './ontology/archetypes.js';
import { timelineRules } from './ontology/timelineRules.js';
import { explanationTemplates } from './ontology/explanationTemplates.js';
import { consumerManifest } from './ontology/consumerManifest.js';

function sortedById(entries) {
  return [...entries].sort((a, b) => a.id.localeCompare(b.id, 'en'));
}

/**
 * Assembles DYNASTY_STRATEGY_ONTOLOGY_V1. Pure and deterministic: no
 * wall-clock reads, no randomness, no environment reads. Arrays are sorted
 * by id so the artifact is byte-stable regardless of source declaration
 * order. Output is deep-cloned so callers cannot mutate the source data.
 */
export function buildOntology() {
  const artifact = {
    artifact_type: ARTIFACT_TYPE,
    schema_version: SCHEMA_VERSION,
    model_version: MODEL_VERSION,
    generated_at: GENERATED_AT,
    row_count: ROW_COUNT,
    concepts: sortedById(concepts),
    player_asset_archetypes: sortedById(archetypes),
    roster_state_definitions: sortedById(rosterStates),
    timeline_rules: sortedById(timelineRules),
    explanation_templates: sortedById(explanationTemplates),
    consumer_manifest: consumerManifest,
  };
  return JSON.parse(JSON.stringify(artifact));
}

export function serializeOntology(artifact) {
  return `${JSON.stringify(artifact, null, 2)}\n`;
}

export const PROMOTED_ARTIFACT_PATH =
  'exports/promoted/dynasty_strategy_ontology/dynasty_strategy_ontology_v1.json';

export const SCHEMA_PATH = 'schemas/dynasty_strategy_ontology_v1.schema.json';
