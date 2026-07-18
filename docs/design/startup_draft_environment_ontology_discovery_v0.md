# Startup-Draft Environment Ontology — Discovery v0

> **Status: D1 ACCEPTED; D2 RECORDED AT THIS REVISION. Q3–Q8, ALL LATER FRONTIERS, AND
> IMPLEMENTATION NOT ACTIVATED.**
>
> This document is the canonical discovery package for the bounded discovery defined in
> [TIBER-Strategy issue #2](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2).
> Sections 1–8 record **D1 — current ontology and ownership-boundary inventory** (accepted).
> Sections 11–13 record **D2 — startup-draft environment definition and format-input separation
> (Q1 + Q2 only)**.
>
> - **Program authority:** TIBER-Ops #34 (Decisions A–C), as recorded in issue #2.
> - **D1 activation:** signed comment by Joseph (`@Prometheus-Frameworks`), issue #2,
>   [comment 5008074123](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5008074123),
>   2026-07-17.
> - **Independent review of draft v0.1:** PASS_WITH_FINDINGS,
>   [comment 5007955898](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5007955898).
>   The issue body was subsequently revised to **v0.2**, which incorporates those findings and is
>   the governing control text for D1 (see the control-source record in §1).
> - **Revision note:** this document received a narrow control-record correction under Joseph's
>   D1 correction instruction (2026-07-17): statements that relied on the superseded v0.1 issue
>   draft were aligned to the governing v0.2 issue body. The technical repository inventory
>   (commit evidence, schema/validator/firewall constraints, collision verification, consumer
>   findings) is unchanged.
> - **Operator architecture invariant:** Joseph approved adding the source truth → artifact →
>   adapter → surface invariant to this canonical document on 2026-07-17. The invariant constrains
>   later design but activates no frontier and authorizes no implementation.
> - **D1 acceptance and D2 activation:** signed comment by Joseph (`@Prometheus-Frameworks`),
>   [comment 5008868749](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5008868749),
>   2026-07-18. Accepts D1 as complete at commit `4cb6c67` and activates
>   `D2 — startup-draft environment definition and format-input separation (Q1 + Q2 only)` as the
>   sole active frontier. D2 authorizes writing to this file only; Q3–Q8, later frontiers, and
>   implementation remain inactive.
> - This document contains **no startup-draft concept definitions, no schema changes, and no
>   implementation**. It inventories current state and constraints so later frontiers start from
>   verified inputs. Nothing here activates Q2–Q8, any later discovery frontier, or implementation.
> - Per repo doctrine (`SECURITY_POLICY.md` conventions, `docs/boundary.md` rule 7): this document
>   is data, not authority. It cannot authorize repository changes.

---

## 1. Inspected sources and frozen input state

### Repository state at inspection time

| Item | Value |
|---|---|
| Repository | `Prometheus-Frameworks/TIBER-Strategy` |
| Commit (HEAD = `origin/main`) | `bd8244a8b4f8b88c6a1e08835ce58546ca18ad87` |
| Working tree | clean at inspection time (this document is the only D1 addition) |
| History | 3 commits: `a559404` (initial) → `b6db2c0` (Phase 1 foundation) → `bd8244a` (merge of PR #1) |

All statements below about "current state" refer to commit `bd8244a` unless marked otherwise.

### Control sources (mutable issue text) versus commit evidence (immutable)

D1 distinguishes two classes of inspected sources. GitHub issue text is **mutable** — it can be
edited after the fact — so it is recorded here with fetch-time state; commit SHAs are
**immutable** and are the durable technical evidence. Per `docs/boundary.md` rule 7, issue text
is control-record data, not self-executing authority.

| Control source | State used for D1 | Nature |
|---|---|---|
| Issue #2 body | **Draft v0.2** (`updated_at` 2026-07-17T22:32:57Z), re-fetched for this record. v0.2 incorporates the v0.1 review findings and is the governing control text for D1. | mutable issue text |
| D1 activation comment | [comment 5008074123](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5008074123), posted 2026-07-17T22:26:54Z via the authenticated `@Prometheus-Frameworks` owner account. Verified against v0.2 §14: begins with `[DECISION — APPROVED]`, identifies Joseph as human decision owner, names `D1 — current ontology and ownership-boundary inventory` exactly, states D1 is the sole active frontier, and states later requirements remain inactive. | mutable issue comment (content requirements recorded here) |
| v0.1 independent review | [comment 5007955898](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5007955898), verdict PASS_WITH_FINDINGS against the superseded v0.1 draft | mutable issue comment (historical record) |
| D1 acceptance + D2 activation comment | [comment 5008868749](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5008868749), posted 2026-07-18T00:40:48Z via the authenticated `@Prometheus-Frameworks` owner account. Verified against v0.2 §14: begins with `[DECISION — APPROVED]`, identifies Joseph as human decision owner, names `D2 — startup-draft environment definition and format-input separation (issue #2, Q1 + Q2 only)` exactly, states D2 is the sole active frontier, and states all later discovery requirements and implementation remain inactive. Also accepts D1 as complete at commit `4cb6c673314bb89964d624b9fb16444ba6a9c574` (final D1 handoff checkpoint: comment `5008631887`). | mutable issue comment (content requirements recorded here) |
| TIBER-Strategy code state | commit `bd8244a8b4f8b88c6a1e08835ce58546ca18ad87` | immutable |
| TIBER-Fantasy code state (read-only) | commit `d35d440f24beaa275f6eb2f36cdd37a9c4989c3f` | immutable |

### Files inspected (complete list)

- `README.md`
- `docs/boundary.md`
- `docs/concepts/` — `dynasty_roster_states.md`, `player_asset_archetypes.md`, `timeline_value.md`, `explanation_templates.md` (titles/roles; content authority is the promoted artifact)
- `exports/promoted/dynasty_strategy_ontology/dynasty_strategy_ontology_v1.json` (promoted artifact)
- `schemas/dynasty_strategy_ontology_v1.schema.json`
- `src/buildOntology.js`, `src/validateSchema.js`, `src/contractChecks.js`
- `src/ontology/` — `meta.js`, `concepts.js`, `archetypes.js`, `rosterStates.js`, `timelineRules.js`, `explanationTemplates.js`, `consumerManifest.js`
- `scripts/build-dynasty-strategy-ontology.js`, `scripts/validate-dynasty-strategy-ontology.js`
- `tests/dynasty_strategy_ontology.test.js`
- `package.json`, `.gitignore`

### Behavior verified by execution (read-only / check modes)

| Command | Result |
|---|---|
| `npm test` | 10/10 tests pass |
| `npm run validate` | `VALID` — concepts=11, archetypes=10, roster_states=8, timeline_rules=9, templates=7 |
| `node scripts/build-dynasty-strategy-ontology.js --check` | `OK` — promoted artifact is byte-identical to builder output (not stale) |

### Cross-repository read-only verification

`Prometheus-Frameworks/TIBER-Fantasy` was inspected **read-only** at commit
`d35d440f24beaa275f6eb2f36cdd37a9c4989c3f` solely to verify ownership claims made by this
repository's `docs/boundary.md` and `README.md` (see §7). No TIBER-Fantasy file was modified.

---

## 2. Existing ontology structure and reusable patterns

### Artifact envelope (promoted-artifact family pattern)

`DYNASTY_STRATEGY_ONTOLOGY_V1` follows the envelope established by `FORGE_PLAYER_STATIC_V1` and
`TIBER_IDENTITY_CROSSWALK_V1`:

```text
artifact_type    const  "DYNASTY_STRATEGY_ONTOLOGY_V1"
schema_version   const  "dynasty_strategy_ontology_v1"
model_version    semver "dynasty-strategy-ontology-v1.0.0"
generated_at     fixed constant (deterministic; bumped with MODEL_VERSION on content change)
row_count        const  0  (rules-only artifact; player rows are forbidden)
```

Six content sections: `concepts` (11, in 2 groups), `player_asset_archetypes` (10),
`roster_state_definitions` (8), `timeline_rules` (9), `explanation_templates` (7),
`consumer_manifest` (1 object).

### Build and determinism pattern

- Hand-authored source in `src/ontology/*.js` is the only input; the promoted JSON is never edited
  directly.
- `buildOntology()` is pure: no clock, environment, network, or randomness; arrays sorted by `id`;
  output deep-cloned. Two builds are byte-identical, and tests assert the promoted artifact matches
  the builder.
- `--check` mode gives a CI-friendly staleness gate without writes.

### Validation stack (three layers, all reusable)

1. **JSON Schema** (`draft-07` subset) with `additionalProperties: false` at every level.
2. **Custom validator** (`src/validateSchema.js`) — dependency-free, with an explicit
   **supported-keyword allowlist**; any schema keyword outside
   `type/enum/const/pattern/minLength/format/properties/required/additionalProperties/items/minItems`
   is rejected loudly. Consequence for later frontiers: a future schema cannot quietly introduce
   `oneOf`, `$ref`, `maxItems`, etc. without extending the validator.
3. **Contract checks** (`src/contractChecks.js`) — completeness (id/label/description/boundary on
   every definition), structured archetype criteria (`in|not_in|equals` comparators only), template
   slot discipline (every slot appears as `{slot}` in text and vice versa), the 8 required consumer
   safety rules, cross-reference integrity (related concepts, templates, archetype exclusions, and
   every referenced input declared in `consumer_manifest.required_inputs`), and the
   **player-data firewall**.

### Player-data firewall (binding constraints on any future startup artifact)

`checkNoPlayerData` enforces, over the whole artifact tree:

- **Forbidden key names** (exact, case-insensitive):
  `player`, `player_id`, `player_name`, `players`, `sleeper_id(s)`, `gsis(_id)`, **`team`, `teams`**,
  `rank(s)`, `ranking(s)`, `projection(s)`, `adp`, `forge_alpha`, `alpha`, `tier_rank`, `points`.
- **No numeric values anywhere** except `row_count`. All quantities must be qualitative bands.
- GSIS-format ID regex tripwire and a player-name substring tripwire list.

Two consequences worth recording now for the startup-draft work (constraints, not designs):

- A field literally named `teams` (e.g. league size) would trip the firewall; league-size structure
  must be expressed under non-colliding names and as qualitative bands, not integers.
- "32-team" as a number cannot appear as an artifact **value**; stress-case arithmetic lives in
  documentation and synthetic examples, while artifact content stays band-based. This is consistent
  with `docs/boundary.md` hard rule 4 (no numeric thresholds over consumer metrics).

### Reusable definition shapes

- **Concept shape**: `id`, `label`, `group`, `description`, `boundary` (what it is NOT),
  `use_case`, `positive_signals`, `negative_signals`, `consumer_guidance`, `related_concepts`.
- **Input-contract shape**: `consumer_manifest.required_inputs[]` entries with
  `input_id / description / status / expected_source`, where `status ∈ {available, derived,
  future_contract}` — directly reusable for issue #2's format-static vs. board-dynamic separation
  (a runtime board-state input is naturally a consumer-computed `derived`/`future_contract` entry).
- **Fail-closed posture**: `missing_input_behavior: "do_not_assign_fail_closed"` as a schema
  `const`, plus `fail_closed_behavior` map for artifact/reference/input failure modes.
- **Guard-rule shape**: `timeline_rules` (`when` clauses → `derive` + `excludes_archetypes` +
  `note`) is the existing pattern for encoding "X does not imply Y" guards — the natural carrier
  for issue #2's heuristic-failure guards, phrased as structural consequences rather than advice.
- **Slotted explanation templates**: ID-addressed, mechanical fill; the pattern issue #2's Q7
  matrix rows should follow to avoid imperative phrasing.

---

## 3. Current ownership boundaries

Authority statement: `docs/boundary.md`, restated consumption-side in
`consumer_manifest` (8 `cannot_*` safety rules + `non_authority_boundaries`).

**TIBER-Strategy owns:** strategy vocabulary (with explicit per-concept boundaries), deterministic
classification/derivation rules over declared inputs, slotted explanation templates, and the
consumption contract (declared inputs with availability status, fail-closed behavior).

**TIBER-Strategy does not own** (with owner as declared in `docs/boundary.md`):

| Domain | Declared owner |
|---|---|
| Player identity | TIBER-Data (`TIBER_IDENTITY_CROSSWALK_V1`) |
| Production evidence/scoring | TIBER-FORGE (`FORGE_PLAYER_STATIC_V1`) |
| Current team assignment | identity/data chain |
| League/roster data, Sleeper ingestion | TIBER-Fantasy |
| Market context, ADP, trade values | **nobody in this chain** (explicit new artifact required) |
| Manager tendency modeling | future TIBER-ManagerProfile (out of scope) |

Hard rules currently enforced by tests: no player rows (`row_count` const 0 + firewall), no
per-player labels, no projections, no numeric thresholds over consumer metrics, no proprietary
content, no direct data ingestion, and "data, not authority."

Issue #2 §2's ownership statement is consistent with this boundary; no conflict was found between
the draft issue and the current repository doctrine.

---

## 4. Fields supported by the current schema

`schemas/dynasty_strategy_ontology_v1.schema.json` is closed (`additionalProperties: false`
everywhere), so **any** field addition, anywhere, is a schema change by construction.

Per-collection required fields today:

| Collection | Required fields | Notable constraints |
|---|---|---|
| `concepts` | id, label, group, description, boundary, use_case, positive_signals, negative_signals, consumer_guidance, related_concepts | **`group` enum is closed: `timeline_value` \| `roster_structure`** |
| `player_asset_archetypes` | id, label, description, boundary, criteria, required_inputs, missing_input_behavior, positive_signals, negative_signals, consumer_guidance | criteria comparators `in\|not_in\|equals`; `missing_input_behavior` const |
| `roster_state_definitions` | id, label, description, boundary, evidence_signals, **misread_risks**, consumer_guidance, related_templates | `misread_risks` exists **only** here |
| `timeline_rules` | id (`tr_*`), label, description, boundary, when, then (derive + excludes_archetypes + note), required_inputs, consumer_guidance | |
| `explanation_templates` | id, label, description, boundary, applies_to, slots, text, consumer_guidance | slot/text agreement enforced |
| `consumer_manifest` | contract_name (const), intended_consumers, consumer_safety_rules (≥8, `cannot_*`), required_inputs (status enum), non_authority_boundaries, missing_input_behavior (const), fail_closed_behavior (5 keys), future_contract_decisions | |

Envelope constants pin `artifact_type` and `schema_version`, so a differently named artifact
(issue #2 path B) requires a new schema file and new consts, while extending V1 (path A) requires
editing this schema plus the version bump discipline in §2.

---

## 5. Fields proposed by issue #2 that would require a schema change

Issue #2 v0.2 §6 requires every accepted concept to carry: stable ID; label; group;
**`input_class: format_static | board_dynamic | hybrid`**; description; explicit boundary;
use case; positive signals; negative signals; **misread risks**; **required structural inputs
with availability status** (`required_structural_inputs`); consumer guidance; related concepts.
v0.2 §3 itself now states that path A "requires an explicit schema-version and migration
decision rather than a silent same-schema addition" — consistent with the deltas below.

Delta against the current `concepts` item schema (10 fields):

| Proposed field | Current schema status | Change required |
|---|---|---|
| `misread_risks` | absent from `concepts` (present only on `roster_state_definitions`) | add to concept item schema (or new artifact's schema) |
| `required_structural_inputs` (with availability status) | absent from `concepts` (plain `required_inputs` exists on archetypes/timeline rules, without per-entry status) | add; and contract-check cross-referencing against declared manifest inputs should extend to it |
| `group` values for startup families (league/lineup structure, board/supply state, pick cadence and transaction structure, roster construction, decision-environment framing) | `group` enum closed to 2 values | extend enum (path A) or define new enum (path B) |
| `input_class` (`format_static \| board_dynamic \| hybrid`) | absent | **explicitly required by v0.2 §6** (v0.1 omitted it; review finding 5, adopted in v0.2); add as enum field |

Additional structural consequences already fixed by current tooling:

- **Any** of the above trips `additionalProperties: false` → schema edit is unavoidable for both
  path A and path B; path A additionally forces `schema_version`/`model_version` bump and migration
  notes for the existing live consumer (see §7).
- New schema constructs beyond the validator's keyword allowlist would require extending
  `src/validateSchema.js` (§2). Staying inside the current keyword subset is feasible for all
  fields listed above and avoids validator work.
- The numeric-value firewall and forbidden-key list (§2) constrain startup concept **content**:
  qualitative bands only, and no keys named `team(s)`, `rank*`, `adp`, `tier_rank`, `points`,
  `alpha`.

None of these changes are authorized or performed under D1; this section records the delta only.

---

## 6. Naming and semantic collisions with existing concepts

Verified against the promoted artifact's actual ID inventory at `bd8244a`. Candidate-inventory
statements below are versioned: the v0.1 draft inventory was revised by issue body v0.2, which
already resolves several v0.1-review findings. Historical v0.1 items are recorded as history, not
as unresolved current candidates.

### Live collisions in the current v0.2 inventory (against artifact @ `bd8244a`)

| v0.2 candidate | Existing artifact entry | Collision type |
|---|---|---|
| `waiver_scarcity_transfer` | `market_liquidity` (concept, future-contract status) | adjacent semantics: both describe post-acquisition liquidity; must be distinguished (trade-market liquidity vs. waiver-pool depletion) and both are future-contract-input territory |
| any concentration concept (none currently named in v0.2) | `alpha_concentration` (concept, `roster_structure`) + `tr_concentration_share_is_not_quality` (rule) | v0.2 §6 already directs: "any concentration concept must explicitly reuse, extend, or distinguish itself from existing `alpha_concentration`" — the tested "concentration ≠ quality" guard is the reuse target |
| any slot-security replacement (none currently named in v0.2) | `role_security` (concept, `timeline_value`) | v0.2 §6 already directs: any replacement for the dropped `structural_slot_security` "must use a name clearly distinguishable from existing player-level `role_security`" |

### v0.1 candidates already resolved by issue body v0.2 (historical record)

| v0.1 candidate | v0.2 resolution |
|---|---|
| `turn_distance` | **reclassified as a consumer-owned input** — v0.2 §6: "`turn_distance` is an input, not an ontology concept"; v0.2 Q4 places pick/turn numerics with the consumer |
| `best_surviving_build_path` | **replaced by `surviving_build_paths`** (valuation word removed); v0.2 §6 also bans concept IDs implying a computed optimum, mandatory choice, or recommendation |
| `scarcity_adjusted_choice` | **replaced by `scarcity_conditioned_tradeoff`** (decision word removed) |
| `local_value_vs_path_value` | renamed `local_value_path_tension` |
| `structural_slot_security` | dropped; replaced by the naming constraint vs. `role_security` noted above |
| `concentration_tradeoff` | dropped; replaced by the explicit reuse/extend/distinguish directive vs. `alpha_concentration` noted above |
| `tier_survival_window` | dropped as a named candidate; v0.2 directs merging tier-extinction risk with "any tier-survival-window framing" |

### Duplicate clusters still directed to merge-or-distinguish in v0.2

Retained from the v0.1 review only where v0.2 keeps them open as explicit discovery work:

- `round_trip_exposure` / `selection_gap_risk` (v0.2 §6, pick cadence group);
- `tier_extinction_risk` / any tier-survival-window framing (v0.2 §6, board state group);
- `roster_path_optionality` / `surviving_build_paths` / local-value-versus-path-value framing
  (v0.2 §6, roster construction group).

### Non-collisions (clean namespace against artifact @ `bd8244a`)

The remaining current v0.2 candidates — `league_size_compression`, `starter_demand_ratio`,
`bench_demand_pressure`, `flex_elasticity`, `superflex_quarterback_pressure`, `draft_mechanism`,
`player_pool_composition`, `roster_mechanics_pressure`, `positional_supply_pressure`,
`replacement_cliff`, `replacement_displacement`, `tier_extinction_risk`, `position_run_exposure`,
`round_trip_exposure`, `selection_gap_risk`, `cadence_mutability`, `pick_liquidity`,
`roster_path_optionality`, `build_path_fragility`, `structural_coverage`,
`future_slot_obligation`, `surviving_build_paths`, `scarcity_conditioned_tradeoff`,
`format_assumption_mismatch`, `local_value_path_tension` — have no existing counterpart in any
promoted-artifact collection.

### Cross-repository semantic overlap (verified, see §7)

TIBER-Fantasy's dormant doctrine directory contains `roster_construction_heuristics.ts`
("evaluate the structural health of a dynasty roster") and `league_market_model.ts` — overlapping
subject matter with issue #2's Q7 heuristic matrix and `waiver_scarcity_transfer`/liquidity
territory. `docs/boundary.md` already records that this ontology **supersedes** (not forks) the
dormant doctrine vocabulary; that supersede-versus-fork decision extends to the startup-draft
heuristics and is a consumer-side (TIBER-Fantasy Phase 2) migration question, not a TIBER-Strategy
action.

---

## 7. Cross-repository ownership claims: verified versus pending confirmation

### Verified by direct read-only inspection (TIBER-Fantasy @ `d35d440`)

| Claim (source) | Status | Evidence |
|---|---|---|
| Dormant doctrine modules exist in TIBER-Fantasy (`docs/boundary.md`) | **Verified, understated** | `server/doctrine/` contains the three named modules (`team_window_detection.ts`, `positional_aging_curves.ts`, `asset_insulation_model.ts`) **plus** `roster_construction_heuristics.ts` and `league_market_model.ts`, not named in `boundary.md`. `MODULE.md` classifies the directory `EXTRACT` (no net-new doctrine reasoning; destination is an external service boundary) |
| FORGE artifact consumption pattern exists (`README.md`) | **Verified** | `server/modules/externalModels/forge/` — client/adapter/service/types/tests for `FORGE_PLAYER_STATIC_V1` |
| Identity crosswalk consumption pattern exists (`README.md`, `docs/boundary.md`) | **Verified** | `server/modules/externalModels/identity/` — client/adapter/tests for `TIBER_IDENTITY_CROSSWALK_V1` |
| FORGE static contract lacks age inputs (`docs/boundary.md`, consumer manifest `future_contract` entries) | **Verified** (at consumer contract level) | no `age_band`/`ageBand` field in `forgePlayerStaticTypes.ts` |
| "Not yet wired into TIBER-Fantasy — that is Phase 2" (`README.md` consumption status) | **STALE — claim no longer holds** | TIBER-Fantasy contains a full fail-closed consumer: `server/modules/externalModels/strategyOntology/` (client, adapter, `StrategyOntologyIntegration.ts`, types, tests) plus `shared/strategyTemplateDiagnostics.ts`, management strategy-context integration and route tests, all referencing `DYNASTY_STRATEGY_ONTOLOGY_V1` |

The stale README claim is the **most consequential D1 finding**: issue #2 §3's artifact-shape
decision (extend V1 vs. new artifact) must treat V1 as having a **live consumer with a shipped
adapter**, so path A carries real consumer-migration impact (schema/version bump against existing
adapter expectations), not hypothetical impact. Updating the README is **not** authorized under D1
and has not been done; it is recorded here as a finding.

### Assumptions pending confirmation (not verifiable from this session's repository scope)

- TIBER-Data / `TIBER_IDENTITY_CROSSWALK_V1` ownership of player identity, and whether the
  crosswalk carries birthdate/age (declared undecided in `future_contract_decisions`).
- TIBER-Forecast, TIBER-Teamstate, TIBER-Rookies scope and contracts (named in issue #2 §7
  deliverable 1; repositories not in this session's access scope).
- TIBER-Ops #34 content (authority record referenced by issue #2; not directly readable here —
  D1 authority instead rests on Joseph's signed activation comment on issue #2 itself).
- Absence of any market-data producer in the chain (asserted by `docs/boundary.md`; consistent
  with everything inspected, but non-existence across the org is not provable from this scope).

Issue body v0.2 §2 codifies this requirement: cross-repository ownership statements must be
classified as `verified_from_current_source` or `declared_assumption_pending_confirmation`, and
an inaccessible external repository must not by itself make the discovery incomplete. The tables
above already follow that classification.

---

## 8. Blocked or parked questions

| # | Question | State | Notes |
|---|---|---|---|
| P1 | Where do later discovery deliverables (concept map, heuristic matrix, implementation proposal, review record) live? | **Resolved (v0.2)** | Issue body v0.2 §4 fixes the canonical discovery package at `docs/design/startup_draft_environment_ontology_discovery_v0.md` (this file) and requires the independent completion review to be a permanent issue #2 comment citing the exact reviewed commit SHA and document path. Review finding 1a is closed. |
| P2 | Concrete definition of a valid "signed" activation comment | **Resolved (v0.2)** | Issue body v0.2 §14 defines the concrete test: posted through Joseph's authenticated `@Prometheus-Frameworks` account, begins with the exact provenance label `[DECISION — APPROVED]`, identifies Joseph as human decision owner, names the exact frontier, states it is the sole active frontier, and states later requirements remain inactive. The D1 activation comment `5008074123` satisfies all six requirements (verified in §1). Review finding 3 is closed. |
| P3 | README consumption-status claim is stale (live consumer exists) | **Blocked under D1** | Fix requires touching `README.md`, which D1 does not authorize. Should be corrected under whatever frontier next authorizes repo-doc changes, or a separately authorized housekeeping commit. |
| P4 | How league-size/lineup quantities are expressed under the no-numerics firewall and forbidden-key list (`teams`, etc.) | **Parked** | Constraint recorded in §2/§5; resolution belongs to the artifact-shape/schema frontier, not D1. |
| P5 | Path A vs. path B (extend V1 vs. new `STARTUP_DRAFT_ENVIRONMENT_ONTOLOGY_V1`) | **Parked by design** | Issue #2 deliverable 7. D1 contributes the constraint set: closed schema, closed `group` enum, envelope consts, validator allowlist, live V1 consumer (§7). |
| P6 | Tier-based candidate concepts presuppose a consumer tiering model that no artifact in the chain currently produces | **Resolved at spec level (v0.2)** | v0.2 Q8/§6 now mandate that tier-dependent concepts declare their tier input `future_contract` until a consumer-side tier producer exists (review finding 2 adopted). The tier producer itself remains future work. |
| P7 | Supersede-vs-fork of TIBER-Fantasy dormant doctrine now provably extends to startup heuristics (`roster_construction_heuristics.ts`) | **Parked (consumer-side)** | TIBER-Fantasy Phase 2 migration question; recorded so the Q7 frontier does not re-invent vocabulary the consumer must later reconcile. |
| P8 | TIBER-Ops #34 not directly verifiable from this scope | **Accepted risk for D1** | Mitigated by the owner-signed activation comment on issue #2. |

No D1-blocking condition was found: the current ontology, boundary, and toolchain were all
verifiable and internally consistent (build deterministic, artifact non-stale, 10/10 tests).
D1 therefore did **not** need to fail closed.

---

## 9. Architecture invariant — source truth → artifact → adapter → surface

This operator-approved invariant constrains all later startup-draft capability design. It does not
activate D2, authorize implementation, or expand the writable path set.

1. **Source truth** owns the underlying fact, observation, model output, strategy definition, or
   operator declaration. Sources must remain distinguishable by owner, provenance, timestamp,
   freshness, and authority class.

2. **Artifact** binds source material into a deterministic, versioned, schema-validated contract.
   Missing or invalid required inputs fail closed rather than being inferred, blended, or smoothed
   over.

3. **Adapter** validates artifact identity and version, preserves provenance and unknowns, and maps
   the artifact into stable consumer-facing types. An adapter must not silently introduce new
   strategy, model inference, recommendation, or action authority.

4. **Surface** presents observed state, structural reads, uncertainty, tradeoffs, and required
   operator inputs. Presentation does not create new authority and must not convert conditional
   strategy into an autonomous recommendation or action.

Ownership under this invariant:

- **TIBER-Strategy** owns stable structural vocabulary, definitions, guard rules, and explanation
  contracts. It ships rules, not player-specific labels or live decision instances.
- A **runtime producer** owns the league-specific decision-envelope instance and binds current
  league rules, board state, source artifacts, and operator declarations without confusing those
  source classes.
- **TIBER-Fantasy** owns league context, consumer adapters/orchestration, and product presentation.
- **The human operator** owns the final decision and action.

The startup-draft work must preserve two adjacent but separate artifact responsibilities:

```text
Strategy source truth
→ stable strategy ontology artifact
→ strategy adapter
→ teaching / interpretation surface

Live league, draft, model, and operator source truths
→ runtime decision-envelope artifact
→ runtime adapter / orchestration
→ contextual decision-support surface
```

The stable Strategy artifact defines what a concept means. The runtime decision envelope records
whether and how that concept applies in one current league state. Neither artifact may claim that
the system selected an optimal player or action.

Operator review questions for every later checkpoint:

1. **Source truth:** Where did this claim come from, who owns it, how current is it, and what
   authority class does it carry?
2. **Artifact:** What versioned object binds it, and does missing evidence fail closed?
3. **Adapter:** Is the adapter only validating and translating, or is it quietly inventing new
   reasoning or authority?
4. **Surface:** What does the user see, and did presentation gain more authority than the
   underlying evidence supports?

---

## 10. D2 frontier proposal (historical — subsequently activated)

> This section is preserved as the D1-era proposal record. D2 was activated by
> [comment 5008868749](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5008868749)
> (verified in §1) and its output is recorded in §§11–13 below.

```text
D2 — startup-draft environment definition and format-input separation
     (issue #2, Q1 + Q2 only)
```

Rationale: Q1 (what the environment *is*, independent of players) and Q2 (format-static vs.
board-state-dynamic separation) are the foundation every later frontier depends on — the concept
inventory (Q5–Q7 clusters), the replacement taxonomy (Q3), and the input contract (Q8, deliverable
3) all consume the Q1/Q2 vocabulary. D1's inventory shows the existing
`required_inputs.status` enum (`available/derived/future_contract`) is a directly reusable carrier
for that separation, so D2 can be specified against verified current machinery.

Suggested D2 boundaries, for the activation decision: same single-document scope — issue body
v0.2 §4 fixes this file as the canonical (and sole authorized) discovery-package path unless
Joseph separately approves an amended path list — no schema or source changes, and
players/ranks/ADP prohibitions unchanged. Any D2 activation comment must satisfy the v0.2 §14
requirements verified in §1.

**No activation is implied by this proposal.** D2, all other frontiers (Q2–Q8 work, D4–D6,
TIBER-Ops #31 / amendment v0.2 / #15 R2), and implementation remain inactive until a signed
human activation comment on issue #2 authorizes them explicitly.

*(End of historical D1 proposal. D2 was subsequently activated; see §§11–13.)*

---

## 11. D2 — Startup-draft environment definition (Q1)

> D2 record. Authorized by [comment 5008868749](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5008868749);
> Q1 + Q2 only. This section defines the environment and its structural dimensions. It accepts,
> rejects, or names **no** ontology concepts (concept-inventory decisions are a later frontier);
> where candidate vocabulary from issue #2 v0.2 §6 is mentioned, it is a pointer, not an
> acceptance.

### 11.1 Definition

A **startup-draft environment** is the complete structural configuration inside which a dynasty
startup draft's roster-construction decisions occur, defined entirely without reference to any
player:

> the league's fixed rule structure (which slots must be filled, by how many franchises, under
> which roster and scoring mechanics, through which draft mechanism, from which asset pool, under
> which transaction rules), **plus** the current observable board state (what has been consumed,
> what supply remains, where the manager sits in the selection order), **plus** the set of
> complete-roster outcomes still reachable from the current position.

Defining property (player-independence): two managers facing identical environments face identical
structural constraints regardless of which named players exist. Player identity, quality, and
value enter only through consumer-side evidence applied *within* the environment; they are never
part of the environment definition itself. The environment constrains which roster-construction
paths are possible; it never says which path is best.

### 11.2 Structural dimension decomposition (finite, E1–E10)

Each dimension record carries the eight attributes required by the D2 instruction: definition;
source/owner; input class (per §12.1); availability status (per the V1 manifest enum plus
`consumer_owned`); ownership verification (`verified_from_current_source` /
`declared_assumption_pending_confirmation`, per issue v0.2 §2); what Strategy may define; what the
consumer must compute; and the primary misread risk.

#### E1 — Franchise and lineup structure

- **Definition:** the number of franchises and the required starting-lineup slots per franchise
  by position and flex class — the total simultaneous starter demand the league imposes.
- **Source / owner:** league constitution / platform settings; league context is owned by
  TIBER-Fantasy.
- **Input class:** `format_static`.
- **Availability:** `consumer_owned` values today; no Strategy input contract exists, so any
  future Strategy rule consuming them needs a `future_contract` input.
- **Ownership:** `verified_from_current_source` (`docs/boundary.md`: league/roster data →
  TIBER-Fantasy).
- **Strategy may define:** what starter demand means structurally; qualitative demand-versus-
  supply bands; guard rules against misreads. Never franchise counts or slot numbers as values
  (numeric firewall, §2).
- **Consumer must compute:** actual franchise count, lineup requirements, and any demand ratios.
- **Misread risk:** treating a large league as a small league scaled up (issue v0.2 §9's first
  negative case); conflating starting-lineup demand with total roster demand (E2).

#### E2 — Roster mechanics (bench, taxi, IR, positional caps)

- **Definition:** non-starting roster capacity and its constraints: bench size, taxi-squad
  eligibility and size, injured-reserve slots, and per-position roster caps where present.
- **Source / owner:** league constitution / platform settings → TIBER-Fantasy.
- **Input class:** `format_static`.
- **Availability:** `consumer_owned` today; `future_contract` for any Strategy rule that needs it.
- **Ownership:** `verified_from_current_source` (same boundary line as E1).
- **Strategy may define:** how capacity mechanics restructure demand and supply (e.g. that taxi
  eligibility partitions rookie demand away from active-roster demand; that caps truncate
  positional accumulation), as qualitative structure.
- **Consumer must compute:** actual sizes, eligibility rules, cap values, remaining capacity.
- **Misread risk:** judging bench pressure while ignoring taxi/IR relief; reading a positional cap
  as an instruction to fill it.

#### E3 — Scoring and lineup modifiers

- **Definition:** rule-level modifiers that change positional eligibility or positional scoring
  weight: superflex, flex count and eligible-position classes, TE premium, and comparable skews.
- **Source / owner:** league scoring settings → TIBER-Fantasy.
- **Input class:** `format_static`.
- **Availability:** `consumer_owned` today; `future_contract` for Strategy-rule consumption.
- **Ownership:** `verified_from_current_source`.
- **Strategy may define:** the structural consequence classes of eligibility substitution and
  scoring skew (a modifier changes which positions compete for the same slot, and therefore how
  scarcity propagates). Never point values, multipliers, or projected effects.
- **Consumer must compute:** actual scoring rules and any quantitative effect of them.
- **Misread risk:** converting a rule-level skew into a ranking instruction ("TE premium therefore
  draft TEs"); treating scoring effects on value as Strategy-computable.

#### E4 — Draft mechanism

- **Definition:** the selection-ordering and acquisition mechanism of the startup: snake, linear,
  third-round reversal, auction/salary, or another mechanism. Determines whether pick cadence
  (E8) exists at all and what shape it takes.
- **Source / owner:** draft/platform configuration → TIBER-Fantasy (Sleeper ingestion is
  TIBER-Fantasy-owned).
- **Input class:** `format_static`.
- **Availability:** `consumer_owned` today; `future_contract` for Strategy-rule consumption.
- **Ownership:** `verified_from_current_source`.
- **Strategy may define:** a mechanism taxonomy and which cadence-dependent structure applies
  under each mechanism; the fact that auction/salary startups have no selection cadence. Whether
  auctions are scoped out of v0 is a Q4/concept-inventory decision — deliberately **not decided
  here**.
- **Consumer must compute:** the actual mechanism and realized draft order.
- **Misread risk:** silently assuming snake (the v0.1 draft's own failure, corrected in v0.2);
  applying cadence concepts to mechanisms without cadence.

#### E5 — Player-pool composition

- **Definition:** which asset classes are draftable in the startup: veterans only versus a
  combined rookie/veteran pool, a separate subsequent rookie draft, and whether future draft
  picks are themselves draftable or tradable assets.
- **Source / owner:** league constitution / draft configuration → TIBER-Fantasy.
- **Input class:** `format_static`.
- **Availability:** `consumer_owned` today; `future_contract` for Strategy-rule consumption.
- **Ownership:** `verified_from_current_source`.
- **Strategy may define:** composition categories and their structural consequences for supply
  (a combined pool enlarges supply and moves rookie scarcity into the startup; a separate rookie
  draft defers it; both change what E9 waiver replacement can mean).
- **Consumer must compute:** the actual pool contents and their partition.
- **Misread risk:** assuming one composition across leagues; letting composition claims drift into
  named-rookie or class-strength claims (player content — prohibited).

#### E6 — In-draft pick-trading rules

- **Definition:** whether and under what constraints picks may be traded during the draft. The
  *permission* is a league rule; realized trades are board events (E7/E8).
- **Source / owner:** league constitution / platform capability → TIBER-Fantasy.
- **Input class:** `format_static` (the rule). Realized trades are `board_dynamic` events that
  mutate E8's realized cadence.
- **Availability:** `consumer_owned` today; `future_contract` for Strategy-rule consumption.
- **Ownership:** `verified_from_current_source`.
- **Strategy may define:** the structural distinction between fixed-cadence and mutable-cadence
  environments (candidate vocabulary: `cadence_mutability`, `pick_liquidity` — pointers only, not
  accepted here).
- **Consumer must compute:** actual trades, resulting order changes, current pick inventory.
- **Misread risk:** treating cadence as fixed in trade-enabled drafts; reading trade permission as
  trade advice; drifting into manager-tendency modeling (prohibited).

#### E7 — Board depletion and remaining positional supply

- **Definition:** which portion of the draftable pool has been consumed and what positional supply
  remains, relative to remaining league-wide demand, at a given moment of the draft.
- **Source / owner:** live draft board → runtime consumer. Live draft-board ingestion is
  explicitly outside TIBER-Strategy (`docs/boundary.md`; issue v0.2 §2).
- **Input class:** `board_dynamic`.
- **Availability:** `consumer_owned` (drafted/available players, positional counts). Any
  tier-shaped view of supply is additionally `future_contract` — no tier producer exists in the
  chain (D1 §7, P6).
- **Ownership:** `verified_from_current_source` (boundary excludes it from Strategy; the concrete
  runtime producer is the open decision recorded in §13.2).
- **Strategy may define:** what depletion and supply pressure *mean*, their misread guards, and
  how they relate to E1–E3 demand structure. Never current counts, never current board facts.
- **Consumer must compute:** all counts, remaining-supply states, and any tier counts.
- **Misread risk:** substituting prior expectations for observed board state; assuming tier
  structure exists without a declared tier contract (issue v0.2 §9 negative case).

#### E8 — Pick cadence

- **Definition:** the structural spacing of a franchise's selections: draft-slot position and the
  gap structure between its picks, as implied by mechanism, league size, and any realized pick
  trades.
- **Source / owner:** rule skeleton (mechanism + order + size) → league configuration; realized
  cadence (after trades) → live board. Both consumer-side.
- **Input class:** `hybrid` — the cadence *skeleton* is derivable from rules alone
  (`format_static`); the *realized* cadence in a trade-enabled draft is `board_dynamic`.
- **Availability:** `consumer_owned`. Issue v0.2 Q4 fixes that numeric values — current pick,
  picks until next selection, turn distance — are consumer-owned inputs, not Strategy concepts.
- **Ownership:** `verified_from_current_source` (v0.2 Q4 text; boundary doc).
- **Strategy may define:** qualitative exposure structure — early/middle/late slot asymmetry
  classes, long-gap versus turn-pick structure, and how mechanism (E4) changes them.
- **Consumer must compute:** every numeric cadence value and the realized selection schedule.
- **Misread risk:** re-promoting cadence numerics into concepts (the resolved `turn_distance`
  failure, D1 §6); equating the rule skeleton with realized cadence when trading is enabled.

#### E9 — Waiver consequences

- **Definition:** the structural state of the post-startup acquisition pool: what "adding a player
  after the draft" can mean given league size, total rostered players, pool composition, and the
  waiver system in force.
- **Source / owner:** waiver-system rules → league configuration (TIBER-Fantasy); realized
  post-draft pool → runtime consumer.
- **Input class:** `hybrid` — the waiver system and roster totals are `format_static`; the
  realized residual pool is a `board_dynamic` outcome of the completed draft.
- **Availability:** `consumer_owned` today; `future_contract` for Strategy-rule consumption.
- **Ownership:** `verified_from_current_source` for the rule side; the residual-pool producer
  follows the same open runtime-producer decision as E7 (§13.2).
- **Strategy may define:** the structural claim class that post-startup waiver liquidity is
  format-conditional and can approach zero in extreme-depth formats — as a definition and misread
  guard, not as a measured claim about any league. This is distinct from trade-market liquidity
  (existing `market_liquidity` concept; D1 §6 collision note stands).
- **Consumer must compute:** the actual residual pool and its positional composition.
- **Misread risk:** assuming waiver liquidity exists after the startup (issue v0.2 §9 negative
  case); conflating waiver-pool depletion with trade-market liquidity.

#### E10 — Reachable roster-construction paths

- **Definition:** the set of complete-roster outcomes still attainable from the manager's current
  position, given remaining supply (E7), remaining picks (E8), roster mechanics (E2), and lineup
  demand (E1/E3). The environment's core *derived* structure: every other dimension feeds it.
- **Source / owner:** derived at runtime by the consumer from all prior dimensions; Strategy owns
  only the meaning of path reachability and its guards.
- **Input class:** `hybrid` — the constraint system is `format_static`; reachability under it is
  `board_dynamic`.
- **Availability:** `derived` on the consumer side, and blocked until the underlying
  `future_contract` inputs exist; no current artifact carries it.
- **Ownership:** `declared_assumption_pending_confirmation` for the producing component — path
  derivation belongs to the unresolved runtime decision-envelope producer (§13.2), not to
  TIBER-Strategy (that half is verified: Strategy ships rules, not live decision instances).
- **Strategy may define:** what a reachable path is; that path optionality is a structural
  property, not indecision, automatic diversification, mandatory balance, an optimization result,
  or a pick recommendation (issue v0.2 Q5 boundary, referenced as a boundary only — Q5 work is
  a later frontier). Candidate vocabulary (`roster_path_optionality`, `surviving_build_paths`)
  remains unmerged and unaccepted, per the v0.2 merge-or-distinguish directive.
- **Consumer must compute:** actual path enumeration, feasibility, and any narrowing over time.
- **Misread risk:** presenting path structure as a recommendation; claiming the system identified
  an optimal path (prohibited by the §9 invariant and the consumer safety rules).

---

## 12. D2 — Format-input separation (Q2)

### 12.1 The six classes

Issue v0.2 Q2 requires every accepted concept to carry exactly one `input_class` from
`format_static | board_dynamic | hybrid`. D2 additionally separates three input categories that
are not concept classes but recur in every dimension record:

| Class | Definition | Test |
|---|---|---|
| `format_static` | Fully determined by league rules before the first pick; cannot change during the draft absent a rule change. | Could a correct value be written down from the league constitution alone, before pick 1? |
| `board_dynamic` | Meaningless without current board state; changes as picks (and trades) occur. | Does the value differ between pick 12 and pick 13 with no rule change? |
| `hybrid` | A static constraint skeleton whose realized state requires board observation. | Is there a rule-derivable skeleton *and* a board-dependent realization? |
| `consumer_owned` (runtime values) | Concrete quantities the consumer computes at runtime — never Strategy content, whatever their class. Per issue v0.2 Q4/Q8: current pick number, picks until next selection, turn distance, drafted and available players, tier counts, starting requirements and roster limits as values, manager roster state, player-specific evidence. | Is it a number, list, or league-specific fact? Then Strategy defines at most its meaning, never its value. |
| unavailable inputs | Inputs no producer in the chain currently emits and no contract declares: market/ADP data (owned by nobody, per `docs/boundary.md`; must not be imported implicitly) and any consumer-side tier producer (does not exist; D1 P6). | Is there a shipped artifact or declared contract? If neither, the input is unavailable. |
| `future_contract` inputs | Inputs that later Strategy rules would need but that require a new declared cross-repo contract before any rule may consume them — following the existing V1 manifest pattern (`age_band`, `market_liquidity_signal`, …). All E1–E6 rule facts, tier-shaped supply views (E7), and residual-pool state (E9) enter this category for Strategy purposes until declared. | Named by a rule but not yet contracted? Fail closed until the contract exists. |

### 12.2 Class assignment summary (E1–E10)

| Dimension | Input class | Availability today | Ownership status |
|---|---|---|---|
| E1 franchise/lineup structure | `format_static` | consumer-owned; `future_contract` for Strategy rules | verified |
| E2 roster mechanics | `format_static` | consumer-owned; `future_contract` for Strategy rules | verified |
| E3 scoring/lineup modifiers | `format_static` | consumer-owned; `future_contract` for Strategy rules | verified |
| E4 draft mechanism | `format_static` | consumer-owned; `future_contract` for Strategy rules | verified |
| E5 player-pool composition | `format_static` | consumer-owned; `future_contract` for Strategy rules | verified |
| E6 pick-trading rules | `format_static` (rule); trades themselves `board_dynamic` | consumer-owned; `future_contract` for Strategy rules | verified |
| E7 board depletion / supply | `board_dynamic` | consumer-owned; tier views also unavailable + `future_contract` | verified (excluded from Strategy); runtime producer open (§13.2) |
| E8 pick cadence | `hybrid` (static skeleton, dynamic realization) | consumer-owned numerics | verified (v0.2 Q4) |
| E9 waiver consequences | `hybrid` (static system, dynamic residual pool) | consumer-owned; `future_contract` for Strategy rules | rule side verified; pool producer open (§13.2) |
| E10 reachable paths | `hybrid` (static constraints, dynamic reachability) | derived, blocked on `future_contract` inputs | producer open — declared assumption (§13.2) |

### 12.3 Why static rules and dynamic observations must not blend into one unversioned judgment

The separation in §12.1–12.2 is load-bearing, not taxonomic tidiness:

1. **Different truth lifetimes.** A `format_static` fact is fixed and versionable at draft start;
   a `board_dynamic` fact can be false one pick later. A blended judgment carries the *shorter*
   lifetime while presenting itself with the *longer* one — it reads as stable league analysis
   while silently depending on a board state that has already changed.
2. **Provenance and authority collapse.** The §9 invariant requires source truths to remain
   distinguishable by owner, provenance, timestamp, freshness, and authority class. League rules,
   board observations, model evidence, market evidence, and operator declarations are five
   different source classes. One unversioned judgment erases which class asserted what — making
   the claim unauditable under the invariant's four operator review questions.
3. **Fail-closed becomes impossible.** The V1 pattern fails closed per missing input. A blended
   judgment has no per-input seam: when one contributing input is missing or stale, the whole
   judgment silently degrades instead of visibly failing.
4. **Untestable and unfalsifiable.** A pure rule claim is testable against the constitution; a
   pure board claim is testable against the board log. A blend is testable against neither, which
   violates the repo's determinism and contract-check discipline (§2).
5. **The autonomy smuggle.** Historically, "static analysis + current board + implicit weighting"
   is precisely the shape of a pick recommendation. Keeping the classes separate keeps Strategy
   shipping meanings while the consumer computes state — and keeps the human decision boundary
   intact (consumer safety rule `cannot_replace_human_decision`).

Consequence for later frontiers: the stable Strategy artifact and the runtime decision-envelope
artifact (§9) must remain **two** versioned objects. A concept definition may state how a static
structure and a dynamic observation *relate*; only the runtime envelope may bind their current
values, and only with per-input provenance and fail-closed gaps.

### 12.4 Non-valuation statement

Input classification is structural bookkeeping only. Nothing in §§11–12 establishes, implies, or
permits deriving: player value; positional scarcity premiums; rankings or tiers; an optimal pick,
path, or strategy; or any recommendation. Classifying an input as `format_static` or
`board_dynamic` says *who owns it, when it can change, and who may compute it* — never what any
manager should do. All D2 statements are definitions over synthetic structure, contain no players,
no numeric league values, no ADP or market data, and no reference to any live draft.

---

## 13. D2 — Invariant preservation and open boundary decisions

### 13.1 Mapping D2 onto the §9 invariant

- **Source truth:** E1–E6 are league-rule source truths; E7–E9 realized states are board source
  truths; player evidence, market evidence, and operator declarations remain separate classes that
  D2 does not touch. Each dimension record in §11.2 names its owner and verification status,
  satisfying the invariant's provenance requirement.
- **Artifact:** dimension *meanings* (§11) belong to the stable Strategy ontology artifact
  (whether via path A or B — undecided, D1 P5). Dimension *values* belong to the future runtime
  decision-envelope artifact. No value appears in this document.
- **Adapter:** the classification table (§12.2) is the raw material for a future input contract in
  the V1 manifest style; adapters validate and translate it without inventing authority. No
  adapter is designed here (explicitly outside D2 authority).
- **Surface:** nothing in D2 defines presentation; §12.4 restates that no surface may convert this
  structure into a recommendation.
- **Human decision:** unchanged and final, per §9 and the consumer safety rules.

### 13.2 Open boundary decision — runtime decision-envelope producer (unassigned)

D2 instruction 6 and activation clause 8 require this to remain open unless verified evidence
assigns it. Current verified evidence assigns **league context, consumer adapters/orchestration,
and product presentation** to TIBER-Fantasy, and **stable vocabulary** to TIBER-Strategy — but no
current source assigns the *runtime decision-envelope producer* (the component that would bind
E7/E9/E10 realized state with per-source provenance). TIBER-Fantasy's dormant doctrine modules are
classified `EXTRACT` with an external-service destination (D1 §7), which cuts *against* assuming
TIBER-Fantasy core as the long-term home but decides nothing. **Status:
`declared_assumption_pending_confirmation` — open boundary decision, owner to be assigned by a
future signed decision.**

### 13.3 D2 boundary confirmation

Q3–Q8 were not performed beyond what bounding Q1/Q2 strictly required (Q4's consumer-owned
numerics rule and Q5's optionality boundary are cited as boundaries, not completed). No concept
was accepted, rejected, merged, or named. No numeric threshold, replacement value, VOR, tier,
rank, ADP, market datum, named player, or live-draft fact appears. No file other than this
document was modified. No PR was opened. No later frontier was activated.

---

## 14. Proposed next frontier (NOT activated)

```text
D3 — replacement-level taxonomy (issue #2, Q3 only)
```

Rationale: Q3 is the next foundational dependency. The D2 dimension records show that several
board/supply meanings (E7, E9) and the eventual concept inventory all presuppose *which
replacement baseline is meant* — and issue v0.2 Q3 now enumerates six distinct baselines
(ordinary waiver, startup-draft, next-pick, starters-filled, flex/superflex substitution, and
caps/taxi/rookie-pool-conditioned replacement) with a hard prohibition on numeric replacement
values, VOR, replacement-adjusted ranks, and player-specific scarcity premiums. D2's input-class
machinery (§12.1) gives each baseline a ready classification frame.

**D3 is proposed only. It is NOT activated.** Q3–Q8 work, concept-inventory decisions, all later
frontiers, and implementation remain inactive until a signed activation comment on issue #2
satisfying the v0.2 §14 requirements authorizes the next frontier explicitly.

---

*End of D2 record.*
