# Startup-Draft Environment Ontology — Discovery v0

> **Status: D1 ONLY. LATER FRONTIERS NOT ACTIVATED.**
>
> This document records **D1 — current ontology and ownership-boundary inventory**, the sole
> active frontier of the bounded discovery defined in
> [TIBER-Strategy issue #2](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2).
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

## 9. Proposed next frontier (NOT activated)

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

---

*End of D1 record.*
