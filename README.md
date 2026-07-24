# TIBER-Strategy

TIBER-Strategy teaches TIBER the structure of dynasty/fantasy football decision-making. It is an **artifact producer**: its output is deterministic, schema-validated strategy vocabulary contracts that other TIBER repos (first consumer: TIBER-Fantasy) apply to their own evidence.

**Core principle: ship rules, not per-player labels.**

This repo defines what concepts like `elite_short_window_veteran`, `premium_young_wr`, `rebuild_core`, `liquidation_candidate`, `timeline_mismatch`, and `durable_anchor_density` *mean* — as structured definitions, deterministic criteria, and slotted explanation templates. It never says which player is which. Archetype assignment happens in the consumer, applied to the consumer's own evidence (FORGE, TIBER-Data identity, TeamState, roster data), and fails closed when required inputs are missing.

Origin: [TIBER-Fantasy issue #207](https://github.com/Prometheus-Frameworks/TIBER-Fantasy/issues/207).

## What this repo is not

- Not a projection or ranking system — see [docs/boundary.md](docs/boundary.md)
- Not a player database; the artifact contains zero player rows (`row_count` is always `0`) and tests enforce a player-data firewall
- Not an LLM prompt repository; output is structured contract JSON, not prose essays or chat
- Not TIBER-ManagerProfile (how a *specific manager* plays the game is a separate future layer)
- Not an autopilot: every concept preserves human final decision authority

## Promoted artifact

```
exports/promoted/dynasty_strategy_ontology/dynasty_strategy_ontology_v1.json
```

`DYNASTY_STRATEGY_ONTOLOGY_V1` contains:

| Section | Contents |
|---|---|
| `concepts` | General strategy vocabulary (timeline value, roster structure) with definitions and boundaries |
| `player_asset_archetypes` | Asset classification rules as deterministic criteria over declared evidence inputs |
| `roster_state_definitions` | Roster postures (contender, rebuild, timeline_mismatch, …) with evidence signals and misread risks |
| `timeline_rules` | Derivation and guard rules (e.g. elite + short window ≠ anchor; concentration ≠ quality) |
| `explanation_templates` | ID-addressed, slotted explanation language for Management |
| `consumer_manifest` | Safety rules, declared inputs (with availability status), fail-closed behavior, open contract decisions |

The envelope (`artifact_type`, `schema_version`, `model_version`, `generated_at`, `row_count`, `consumer_manifest`) follows the promoted-artifact pattern established by `FORGE_PLAYER_STATIC_V1` and `TIBER_IDENTITY_CROSSWALK_V1`. TIBER-Fantasy consumes the promoted ontology through the same versioned artifact boundary rather than a live runtime dependency.

## Concept documentation

- [docs/boundary.md](docs/boundary.md) — what this repo owns and explicitly does not own
- [docs/concepts/dynasty_roster_states.md](docs/concepts/dynasty_roster_states.md)
- [docs/concepts/player_asset_archetypes.md](docs/concepts/player_asset_archetypes.md)
- [docs/concepts/timeline_value.md](docs/concepts/timeline_value.md)
- [docs/concepts/explanation_templates.md](docs/concepts/explanation_templates.md)

## Commands

```bash
npm run build      # Rebuild the promoted artifact from src/ontology/ (deterministic)
npm run validate   # Schema + contract invariants + determinism check
npm test           # Full test suite (node --test, zero dependencies)
```

`node scripts/build-dynasty-strategy-ontology.js --check` verifies the promoted artifact is not stale without rewriting it (CI-friendly).

## Determinism

The build reads no clock, no environment, and no network. `generated_at` is a fixed constant in `src/ontology/meta.js`, bumped together with `model_version` when ontology content changes. Arrays are sorted by `id`. Two builds always produce byte-identical output, and the test suite asserts the promoted artifact matches the builder.

## Editing the ontology

1. Edit the source data in `src/ontology/` (never the promoted JSON directly).
2. Bump `MODEL_VERSION` and `GENERATED_AT` in `src/ontology/meta.js` for content changes.
3. `npm run build && npm test`.

## Consumption status — read-only diagnostics

`DYNASTY_STRATEGY_ONTOLOGY_V1` is now consumed by TIBER-Fantasy as a versioned, read-only Management diagnostic artifact. TIBER-Fantasy loads and validates a bundled copy of the promoted export and fails closed when the artifact is disabled, missing, or malformed.

This integration does not activate strategy advice or player classification. Archetype assignment, template selection, template rendering, slot interpolation, recommendations, and Team Direction recalculation remain disabled.

Several archetype rules still require inputs that do not exist in the governed TIBER evidence chain yet (player age, draft year/experience, role/contract security, market liquidity). These remain declared with `status: "future_contract"` in the consumer manifest and documented as open decisions in `future_contract_decisions`. Until those inputs and their activation gates exist, the rule remains: **no input, no label**.

The handoff is artifact-based rather than a live runtime dependency. TIBER-Strategy remains the authoritative producer; downstream mirrors should update only from a validated promoted artifact.
