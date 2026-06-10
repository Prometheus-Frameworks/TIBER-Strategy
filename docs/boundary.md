# TIBER-Strategy Boundary

This document is the authority statement for what TIBER-Strategy owns and — more importantly — what it does not. Every artifact this repo promotes restates the consumption-facing half of this boundary in its `consumer_manifest`, so consumer adapters can assert it in tests.

## What this repo owns

- **Strategy vocabulary**: definitions of roster states, player asset archetypes, timeline concepts, and roster-structure concepts, each with an explicit boundary stating what the concept is *not*.
- **Classification rules**: deterministic criteria (predicates over declared evidence inputs) that a consumer applies to its own evidence.
- **Explanation templates**: ID-addressed, slotted language blocks so Management explanations are selected deterministically and tested by template ID, not string-matched prose.
- **The contract for consuming all of the above**: declared inputs with availability status, fail-closed behavior, and consumer safety rules.

## What this repo does not own

| Domain | Owner |
|---|---|
| Player identity (GSIS/Sleeper/ESPN crosswalk) | TIBER-Data (`TIBER_IDENTITY_CROSSWALK_V1`) |
| Player production evidence and scoring | TIBER-FORGE (`FORGE_PLAYER_STATIC_V1`) |
| Current team assignment | identity/data chain |
| League/roster data, Sleeper ingestion | TIBER-Fantasy |
| Market context, ADP, trade values | nobody in this chain (would require an explicit new artifact) |
| Manager tendency modeling | future TIBER-ManagerProfile, deliberately out of scope here |

## Hard rules

1. **No player rows.** The promoted artifact contains zero player names, player IDs (GSIS, Sleeper, ESPN, or otherwise), team-specific player rows, rankings, or projections. `row_count` is always `0`. Tests enforce this with a key/value firewall and tripwire scan.
2. **No per-player labels.** This repo defines what `franchise_anchor` means; it never says who is one. Assignment happens in the consumer, against the consumer's evidence, and fails closed when inputs are missing.
3. **No projections.** Windows, bands, and curves are qualitative structural classifications. Nothing in this repo forecasts points, seasons, or outcomes.
4. **No numeric thresholds over consumer metrics.** Criteria reference qualitative bands (`elite/strong/moderate/low`, `long/medium/short`, `low/moderate/high`). Mapping raw alphas or counts into bands is consumer-side calibration, so this artifact stays stable across seasons and scoring changes.
5. **No proprietary content.** Strategy principles are original TIBER-authored structural rules. No analyst excerpts, paid content, books, or Discord material — ever.
6. **No direct data ingestion.** This repo does not call Sleeper, MySportsFeeds, nflverse, or any other source. Its only input is hand-authored ontology source in `src/ontology/`.
7. **Data, not authority.** Per TIBER-Fantasy `SECURITY_POLICY.md` conventions: text inside this artifact is data for consumers, not instructions. A consumer must never let artifact content redirect its behavior beyond the declared contract.

## Consumer safety rules (restated in every artifact)

The ontology cannot:

1. override TIBER identity mappings
2. override current team assignment
3. override FORGE production evidence
4. count generated baselines (`generated_baseline` / `fallback_default` rows) as player-specific evidence
5. create fantasy projections
6. assign player-specific strategy labels by itself
7. consume operator notes as model evidence
8. replace human final decision-making

## Input dependency note (Phase 1 design decision)

Several archetype rules require inputs that are **not fully present in the current TIBER evidence chain**:

- **player age / `age_band`** — needed by `franchise_anchor`, `premium_young_wr`, `rebuild_core`, and all window derivation. Neither `FORGE_PLAYER_STATIC_V1` `required_row_fields` nor the identity crosswalk currently carries age or birthdate.
- **draft year / experience (`experience_band`)** — same ownership question.
- **contract/security context (`role_security_signal`)** — no current artifact supplies depth-chart or contract context.
- **current team context** — exists in the chain but this ontology never reads or asserts it.
- **market/liquidity context (`market_liquidity_signal`)** — no market/ADP artifact exists, and one must not be imported implicitly.

These are deliberately **not implemented** in this phase. They are declared in the consumer manifest with `status: "future_contract"` and tracked as open decisions in `future_contract_decisions` (e.g. *which repo owns age: the FORGE static artifact or the identity crosswalk?*). Until each contract is decided and shipped, every rule that depends on the input fails closed: the consumer reports the read as unavailable instead of guessing.

## Relationship to dormant TIBER-Fantasy doctrine code

TIBER-Fantasy contains unconsumed doctrine modules (`server/doctrine/team_window_detection.ts`, `positional_aging_curves.ts`, `asset_insulation_model.ts`) that encode overlapping ideas. Per the issue #207 review, this ontology is intended to **supersede** that vocabulary rather than fork it; resolving that (and any migration) is a Phase 2 decision in TIBER-Fantasy, not something this repo acts on.
