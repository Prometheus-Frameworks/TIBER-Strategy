# Timeline Value

The timeline layer is what the original Team Direction classifier could not see: with only alpha averages and concentration shares, an aging elite producer and a young elite producer are indistinguishable. Timeline concepts make "productive right now" and "durably valuable" separable claims. Canonical definitions: `concepts` (group `timeline_value`) and `timeline_rules` in the promoted artifact.

## Core concepts

- **`production_window`** — qualitative span (`long` / `medium` / `short` / `unknown`) over which an asset is expected to remain a meaningful producer. A classification, never a projection.
- **`long_window_asset` / `short_window_asset`** — window classifications. Critically, *short-window* is not *bad*: elite current producers are often short-window assets. The constraint is duration, not output.
- **`durable_anchor`** — production evidence **and** timeline durability together. Either alone is insufficient.
- **`durable_anchor_density`** — roster-level count of anchors relative to a viable core, in qualitative bands. The honest replacement for "no difference-makers" language.
- **`age_curve_risk`** — position-typical decline structure (the typical RB curve declines earlier and more steeply than WR/QB/TE). Describes patterns, never predicts an individual.
- **`role_security`** — how firmly the asset holds its role; modulates what current production says about future seasons.
- **`roster_lifecycle_fit`** — alignment between asset window and roster timeline. The same asset can be a great contender piece and a poor rebuild hold without its quality changing.

## Derivation rules

`timeline_rules` define window derivation deterministically:

- `tr_window_short_from_aged_band` — late-prime/aged band ⇒ short window; excludes `franchise_anchor`/`rebuild_core` regardless of tier
- `tr_window_long_from_young_band` — young/ascending band ⇒ long window
- `tr_prime_band_window_by_position_curve` — prime band is position-dependent: RB ⇒ medium, QB/WR/TE ⇒ long (the single place RB window compression enters the system)
- `tr_elite_short_window_not_anchor` — the canonical "useful but not a rebuild anchor" rule
- `tr_timeline_mismatch_flag` — rebuild-family state + multiple premium short-window assets ⇒ raise `timeline_mismatch`
- `tr_missing_inputs_fail_closed` — any missing or non-evidence input ⇒ no classification

`age_band` is **position-relative by design**: the same calendar age can be `prime` at QB and `aged` at RB. Band derivation from raw age happens consumer-side, once age inputs exist.

## The missing input

All of this is gated on inputs that are not in the TIBER evidence chain yet — player age, draft year/experience, role/contract security (see [boundary.md](../boundary.md), `future_contract_decisions`). Phase 1 deliberately ships the rules without the inputs. Until the input contracts are decided, window derivation returns `unknown`, and every dependent archetype fails closed. An unknown window is reported as unknown — never defaulted to long or short.

## No numbers

Timeline rules contain no ages, no thresholds, no year counts. Bands and windows are qualitative so the ontology stays stable across seasons and so it can never leak projection-like claims. Numeric calibration (what counts as `elite` tier, where band cutoffs sit) is consumer-side and out of this repo's authority.
