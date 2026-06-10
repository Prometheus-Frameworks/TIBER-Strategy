#!/usr/bin/env node
/**
 * Builds the DYNASTY_STRATEGY_ONTOLOGY_V1 promoted artifact from the
 * hand-authored ontology source under src/ontology/.
 *
 * Deterministic: the same source always produces byte-identical output.
 *
 * Usage:
 *   node scripts/build-dynasty-strategy-ontology.js          # write promoted artifact
 *   node scripts/build-dynasty-strategy-ontology.js --check  # fail if promoted artifact is stale
 *   node scripts/build-dynasty-strategy-ontology.js --out <path>
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildOntology, serializeOntology, PROMOTED_ARTIFACT_PATH } from '../src/buildOntology.js';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const checkMode = args.includes('--check');
const outFlagIndex = args.indexOf('--out');
const outPath = resolve(
  repoRoot,
  outFlagIndex !== -1 ? args[outFlagIndex + 1] : PROMOTED_ARTIFACT_PATH,
);

const serialized = serializeOntology(buildOntology());

if (checkMode) {
  let existing = null;
  try {
    existing = readFileSync(outPath, 'utf8');
  } catch {
    console.error(`STALE: promoted artifact missing at ${outPath}`);
    process.exit(1);
  }
  if (existing !== serialized) {
    console.error(`STALE: ${outPath} does not match builder output. Run: npm run build`);
    process.exit(1);
  }
  console.log(`OK: promoted artifact matches builder output (${outPath})`);
  process.exit(0);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, serialized, 'utf8');
console.log(`Wrote ${outPath} (${serialized.length} bytes)`);
