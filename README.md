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

The envelope (`artifact_type`, `schema_version`, `model_version`, `generated_at`, `row_count`, `consumer_manifest`) follows the promoted-artifact pattern established by `FORGE_PLAYER_STATIC_V1` and `TIBER_IDENTITY_CROSSWALK_V1`, so a future TIBER-Fantasy adapter can consume it the same way.

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

## Consumption status

Not yet wired into TIBER-Fantasy — that is Phase 2, gated on this artifact stabilizing. Several archetype rules require inputs that do not exist in the TIBER evidence chain yet (player age, draft year/experience, role/contract security, market liquidity); these are declared with `status: "future_contract"` in the consumer manifest and documented as open decisions in `future_contract_decisions`. Until those inputs exist, consumers must fail closed: no input, no label.
