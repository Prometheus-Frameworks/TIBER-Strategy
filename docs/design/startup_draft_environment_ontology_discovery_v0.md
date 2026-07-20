# Startup-Draft Environment Ontology — Discovery v0

> **Status: D1–D6 ACCEPTED; D7 RECORDED AT THIS REVISION. Q8, ALL LATER FRONTIERS, AND
> IMPLEMENTATION NOT ACTIVATED.**
>
> This document is the canonical discovery package for the bounded discovery defined in
> [TIBER-Strategy issue #2](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2).
> Sections 1–8 record **D1 — current ontology and ownership-boundary inventory** (accepted).
> Sections 11–13 record **D2 — startup-draft environment definition and format-input separation
> (Q1 + Q2 only)** (accepted). Sections 15–16 record **D3 — replacement-level taxonomy (Q3
> only)** (accepted as corrected). Sections 18–19 record **D4 — draft-mechanism and cadence
> consequences (Q4 only)** (accepted as corrected). Sections 21–22 record **D5 — roster-path
> optionality (Q5 only)** (accepted). Sections 24–25 record **D6 — unusual-format stress-test
> matrix (Q6 only)** (accepted as corrected; independent review PASS). Sections 27–28 record
> **D7 — heuristic failure matrix (Q7 only)**.
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
> - **D2 acceptance and D3 activation:** signed comment by Joseph (`@Prometheus-Frameworks`),
>   [comment 5009488957](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5009488957),
>   2026-07-18. Accepts D2 as complete at commit `8164008` and activates
>   `D3 — replacement-level taxonomy (issue #2, Q3 only)` as the sole active frontier. D3
>   identifies which comparison pool or baseline is meant; it never calculates baseline values.
>   Q4–Q8, later frontiers, and implementation remain inactive.
> - **D3 taxonomy correction:** narrow operator-directed correction (2026-07-18): the six
>   replacement families were reclassified into three primary pool baselines (R1–R3) and three
>   conditioning overlays (R4–R6); the composition rule and anti-conflation tests were corrected
>   accordingly; hidden valuation wording was replaced with pool-membership language; R1's
>   defined-empty / undefined / unresolved distinction was corrected. No family was removed and
>   no numeric or valuation content was added.
> - **D3 acceptance and D4 activation:** signed comment by Joseph (`@Prometheus-Frameworks`),
>   [comment 5009600942](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5009600942),
>   2026-07-18. Accepts the corrected D3 at commit `f460118` (superseding the `382e66b`
>   checkpoint) and activates `D4 — draft-mechanism and cadence consequences (issue #2, Q4 only)`
>   as the sole active frontier. Q5–Q8, later frontiers, and implementation remain inactive.
> - **D4 correction, acceptance, and D5 activation:** the D4 T12 state-semantics correction was
>   recorded at commit `69d90e5606d038c1da1f0ce5c7fbe93fee9f4830` and
>   [comment 5012368332](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5012368332).
>   Joseph's signed
>   [comment 5012422445](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5012422445),
>   2026-07-18, accepts corrected D4 at that exact head and activates
>   `D5 — roster-path optionality (issue #2, Q5 only)` as the sole active frontier. Q6–Q8,
>   concept-inventory decisions, later frontiers, and implementation remain inactive.
> - **D5 acceptance and D6 activation:** signed comment by Joseph (`@Prometheus-Frameworks`),
>   [comment 5013201489](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5013201489),
>   2026-07-18. Accepts D5 as complete at exact head `bbf80cde94aa1bdf89cb0c7ce6615255cd95907f`
>   with accepted document blob `85af74ca21561249be9f368704f6c5545963eb44` (D5 checkpoint:
>   comment `5012441470`), and activates `D6 — unusual-format stress-test matrix (issue #2, Q6
>   only)` as the sole active frontier. D6 permits structural format numbers (league size, lineup
>   shape, roster capacity) in synthetic cases; Q7–Q8, concept decisions, and implementation
>   remain inactive.
> - **D6 semantic correction:** independent review of D6 head `4d22a98` returned
>   REQUIRES_REVISION on semantics only (authority, pins, scope, family coverage, and guard
>   coverage passed). This revision separates the three D6 axes (definition survival, runtime
>   resolution, guard result), restores the exact accepted D5 runtime tokens, restores exact
>   defined-empty semantics with stipulated synthetic observations, corrects F2/F5/F7/F8
>   consequence claims, and removes overclaims. Accepted D1–D5 semantics were clarified, not
>   reopened.
> - **Second D6 semantic correction:** the second independent review (verdict REQUIRES_REVISION
>   on head `a41e42e`; prior seven findings materially corrected) required one further bounded
>   correction: observation splitting by read type (cadence/R3/path), complete path-observation
>   discipline, separated R2-versus-path input contracts under M4, R6 rookie-pool filtering in
>   F7c, an Axis-A refactor into separate mechanical fields, an explicit guard-registry result
>   set, separate D3-pool versus D5-path state namespaces, and removal of remaining unsupported
>   consequences. The D3 empty-versus-nearly-empty terminology ambiguity is recorded as an
>   unresolved synthesis item rather than altering accepted D3 text.
> - **D6 acceptance and D7 activation:** signed comment by Joseph (`@Prometheus-Frameworks`),
>   [comment 5021737357](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5021737357),
>   2026-07-20. Accepts corrected D6 at exact head `947ffc5b65d04695c1cc75606ab61fc0a6d461f6`
>   with document blob `e74b6ac3048c4d6a65b2f72892a1df0a189cc556` (superseding D6 checkpoint
>   `5018212640`; independent review verdict PASS at that head), and activates
>   `D7 — heuristic failure matrix (issue #2, Q7 only)` as the sole active frontier. D7 may not
>   resolve S1 or alter accepted D1–D6; Q8, later frontiers, and implementation remain inactive.
> - **D7 semantic correction:** operator-directed correction within the active D7 frontier
>   (2026-07-20; not D7 acceptance): the classification model was refactored into single-valued
>   claim-component fields (with `prohibited_output` distinct from missing-evidence
>   `unresolved`, and `universal_form_rejected` as a form/guard result that competes with
>   nothing); H5/T36 narrowed to eligible-membership semantics; H6's run predicate limited to
>   ordered-pick mechanisms with the auction acquisition-clustering analogue recorded
>   undeclared/unresolved and follow/fade reclassified as prohibited output; H1/H3/H4
>   transition claims bound to stipulated T16/T18 transitions; H7 narrowed to what V1 actually
>   establishes; H8's semantic applicability separated from runtime instance resolution; all D6
>   relationships made explicit per component; H2 wording aligned to the accepted D6 statement.
>   Accepted D1–D6 semantics unchanged; S1 untouched.
> - **Second D7 semantic correction (mechanical contract):** operator-directed correction after
>   independent review (REQUIRES_REVISION on the mechanical contract only; the operational
>   package passed). Component rows are now atomic context-keyed instances with one declared
>   token per scalar field; null values are declared tokens (`none` / `not_applicable` /
>   `no_runtime_read`); the policy axis is separated from evidence resolution
>   (`policy_boundary` plus exact runtime state); runtime namespaces are exactly typed, with
>   `d7_consumer_evidence` declared as a D7-only namespace distinct from accepted D6
>   namespaces; H4 bindingness under M4 corrected; guard results use one D6 Axis-C result per
>   guard ID per row, with explicitly supplied malformed reads recording
>   `rejects_attempted_read`. Substantive H2/H5/H6/H7/H8 corrections preserved.
> - **Third D7 semantic correction (typed matrix contract):** operator-directed correction after
>   independent review (REQUIRES_REVISION on the Markdown matrix's own contract; the operational
>   package passed). Component and context identifiers are now registered typed IDs
>   (`component_kind` enum + `component_id` + `context_id` registries); H3/H4 rows carry exact
>   D5 witness-result cases with the M4 O-F8p′ defined-empty case added; H5's F8 R1 contract
>   aligned to accepted D6 §24.3 (`same_as_control`); `d4_cadence` regained accepted
>   `undefined` with `timing_boundary_declaration` registered; guard coverage made total with
>   corrected fired results; the M1–M3 run predicate recorded as undeclared
>   (`run_predicate_declaration`) so no read resolves from freshness alone; H7/H8 narrative
>   contract fields completed; §27.3 made an explicitly non-exhaustive ID-matched projection;
>   T32/T35/T37/T41 updated; an explicit table audit was run and passed.
> - This document makes **no final startup-draft concept-inventory decisions, no schema changes,
>   and no implementation**. D7 adds the Q7 heuristic failure matrix and guards only. Nothing
>   here activates Q8, any later discovery frontier, or implementation.
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
| D2 acceptance + D3 activation comment | [comment 5009488957](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5009488957), posted 2026-07-18T02:27:53Z via the authenticated `@Prometheus-Frameworks` owner account. Verified against v0.2 §14: begins with `[DECISION — APPROVED]`, identifies Joseph as human decision owner, names `D3 — replacement-level taxonomy (issue #2, Q3 only)` exactly, states D3 is the sole active frontier, and states all later discovery requirements and implementation remain inactive. Also accepts D2 as complete at commit `8164008ec809e4b62f4fa050258f885eda5087a4` (D2 checkpoint: comment `5008905472`). | mutable issue comment (content requirements recorded here) |
| D3 acceptance + D4 activation comment | [comment 5009600942](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5009600942), posted 2026-07-18T02:52:04Z via the authenticated `@Prometheus-Frameworks` owner account. Verified against v0.2 §14: begins with `[DECISION — APPROVED]`, identifies Joseph as human decision owner, names `D4 — draft-mechanism and cadence consequences (issue #2, Q4 only)` exactly, states D4 is the sole active frontier, and states all later discovery requirements and implementation remain inactive. Also accepts the corrected D3 at commit `f4601180113dcbdd993b2aec7630287109511c21` (superseding D3 checkpoint: comment `5009562473`), including the primary/overlay reclassification. | mutable issue comment (content requirements recorded here) |
| Corrected D4 acceptance + D5 activation comment | [comment 5012422445](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5012422445), re-fetched 2026-07-18 via the authenticated `@Prometheus-Frameworks` owner account. Begins with `[DECISION — APPROVED]`, identifies Joseph as human decision owner, accepts corrected D4 at exact commit `69d90e5606d038c1da1f0ce5c7fbe93fee9f4830` (superseding original D4 head `f07d5b605e949a2776f6f875506d0f167ec08d30`), activates `D5 — roster-path optionality (issue #2, Q5 only)` as the sole active frontier, limits writes to this canonical document on the existing branch, and keeps Q6–Q8, concept-inventory decisions, implementation, and all other listed work inactive. | mutable issue comment (content requirements recorded here) |
| D5 acceptance + D6 activation comment | [comment 5013201489](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5013201489), posted 2026-07-18T22:39:48Z via the authenticated `@Prometheus-Frameworks` owner account and re-fetched before D6 work began. Begins with `[DECISION — APPROVED]`, identifies Joseph as human decision owner, accepts D5 at exact head `bbf80cde94aa1bdf89cb0c7ce6615255cd95907f` **and pins the accepted document blob `85af74ca21561249be9f368704f6c5545963eb44`** (both pins verified against the fetched remote branch before any change), names `D6 — unusual-format stress-test matrix (issue #2, Q6 only)` exactly, states D6 is the sole active frontier, limits writes to this canonical document on the existing branch from that exact head, and keeps Q7–Q8, concept decisions, artifact-shape work, runtime-producer assignment, PRs, and implementation inactive. | mutable issue comment (content requirements recorded here) |
| D6 acceptance + D7 activation comment | [comment 5021737357](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5021737357), posted 2026-07-20T11:30:10Z via the authenticated `@Prometheus-Frameworks` owner account and re-fetched before D7 work began. Begins with `[DECISION — APPROVED]`, identifies Joseph as human decision owner, accepts corrected D6 at exact head `947ffc5b65d04695c1cc75606ab61fc0a6d461f6` **and pins the accepted document blob `e74b6ac3048c4d6a65b2f72892a1df0a189cc556`** (both pins verified against the fetched remote branch before any change; superseding D6 checkpoint `5018212640` accepted; independent review verdict PASS at that head; S1 accepted as unresolved and untouchable under D7), names `D7 — heuristic failure matrix (issue #2, Q7 only)` exactly, states D7 is the sole active frontier, limits writes to this canonical document on the existing branch from that exact head, and keeps Q8, concept decisions, artifact-shape work, runtime-producer assignment, PRs, and implementation inactive. | mutable issue comment (content requirements recorded here) |
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

## 14. D3 frontier proposal (historical — subsequently activated)

> This section is preserved as the D2-era proposal record. D3 was activated by
> [comment 5009488957](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5009488957)
> (verified in §1) and its output is recorded in §§15–16 below.

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

*(End of historical D3 proposal. D3 was subsequently activated; see §§15–16.)*

---

## 15. D3 — Replacement-level taxonomy (Q3)

> D3 record. Authorized by [comment 5009488957](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5009488957);
> Q3 only. The taxonomy identifies **which comparison pool or baseline is meant** when
> "replacement" is invoked. It never calculates a baseline's value. Baseline IDs below are
> **descriptive discovery labels for this document only** — they are not accepted ontology concept
> IDs; concept-inventory decisions (naming, acceptance, merging) remain a later frontier.

### 15.1 Scope and structure — primary pool baselines and conditioning overlays

Issue v0.2 Q3 prohibits one universal replacement baseline across formats. D3 defines **six
replacement families** in two structurally different roles:

**Primary comparison-pool baselines** — each independently identifies the *source pool* a
replacement claim compares against:

- **R1** — ordinary waiver replacement (the unrostered acquisition pool);
- **R2** — current startup-board replacement (the draftable board pool, now);
- **R3** — expected next-selection replacement (the future board pool at the manager's next
  selection).

**Conditioning overlays** — none independently identifies a source pool; each *transforms,
filters, or qualifies* the pool (or the demand regime it is compared under) of a named primary
baseline:

- **R4** — post-required-starters / roster-fill regime overlay;
- **R5** — flex/superflex slot-eligibility substitution overlay;
- **R6** — roster-mechanics and player-pool filtering overlay.

An overlay invoked without a primary baseline is an **incomplete replacement reference**: there is
no pool to transform. All six families required by issue v0.2 Q3 are retained; the classification
changes what each family may claim, not whether it exists.

Each record carries the twelve attributes required by the D3 instruction. Input classes and
E-dimension references use the D2 framework (§§11–12) unchanged. Throughout, Strategy defines
**pools and their boundaries** — eligible comparison-set membership, availability, depletion, and
degeneracy. Selecting a pool's "best" member, ordering members, or valuing them is a
**consumer-resolved frontier under a separately declared ordering/evidence contract** (none exists
today) and is never a Strategy output.

**Global composition rule.** Every replacement claim must name:

1. exactly **one** primary pool baseline from R1–R3;
2. **every** conditioning overlay from R4–R6 that applies in the format and roster context;
3. explicit **provenance** for the runtime resolution of each named component (which source
   resolved the pool observation, the fill state, the eligibility union, the mechanics filter).

Fail closed when: no primary pool baseline is named; more than one incompatible primary baseline
is silently blended; an overlay is used as though it were a standalone pool; an applicable
overlay is omitted; or a composition is asserted without its required format, roster, or board
evidence (tests T1/T9, §16.3).

### 15.2 Baseline records

#### R1 — `baseline_waiver_ordinary` (ordinary waiver replacement) — primary pool baseline

- **Comparison pool:** the eligible comparison pool of unrostered assets acquirable through the
  league's waiver/free-agent mechanism at a given moment, partitioned by position or slot
  eligibility class. Strategy defines the pool's boundary; identifying, ordering, or valuing pool
  members is a consumer-resolved frontier under a separately declared ordering/evidence contract.
- **When it exists (three-way distinction):**
  - *defined-empty / degenerate* — the acquisition mechanism exists but the eligible unrostered
    pool is empty or nearly empty (the extreme-depth post-startup state, E9): the baseline is
    defined and its pool is observed to be depleted;
  - *undefined* — the format has **no unrostered acquisition mechanism at all** (no waiver or
    free-agent process): R1 does not exist in that format;
  - *unresolved* — the mechanism exists but the current pool observation is unavailable: **fail
    closed** and report unresolved; an unresolved pool must never be reported as empty.
- **Source / owner:** waiver-system rules → league configuration (TIBER-Fantasy, verified);
  realized pool state → runtime consumer (producer unassigned, §13.2).
- **Input class:** `hybrid` — waiver system and roster totals are `format_static`; the realized
  pool is `board_dynamic` (a post-draft outcome that keeps evolving in season).
- **Availability:** `consumer_owned` today; `future_contract` for any Strategy rule consuming it.
- **E-dimensions required:** E1 (franchise count), E2 (roster totals/mechanics), E5 (pool
  composition), E9 (waiver consequences).
- **Strategy may define:** the pool's boundary and format-conditioning; the
  defined-empty / undefined / unresolved distinction; misread guards. Never pool membership
  selection, ordering, or value.
- **Consumer must compute:** the actual unrostered pool and its per-position composition.
- **What it is not:** a constant; a startup-board baseline; a claim that any particular pool
  member is adequate; a player label.
- **Misread risks:** importing shallow-league waiver intuition into deep formats; assuming
  post-startup pool availability (issue v0.2 §9 negative case); treating the current pool state
  as permanent (see non-equivalence NE7, §16.2); reporting an unresolved pool observation as an
  empty pool.
- **Synthetic example:** in an ordinary 12-team one-QB format, the unrostered pool after a
  startup retains startable-position depth; in a 32-team format with the same roster mechanics,
  nearly the entire startable population is rostered when the draft ends, so R1 is defined but
  degenerate — "replacement from waivers" names an almost-empty comparison pool. In a
  hypothetical format with no waiver or free-agent process at all, R1 is undefined — not empty.

#### R2 — `baseline_startup_board` (startup-draft replacement) — primary pool baseline

- **Comparison pool:** the eligible comparison pool of assets still available on the startup
  draft board at the current board state, partitioned by position or eligibility class. Strategy
  defines pool membership boundaries; identifying or ordering members is consumer-resolved under
  a separately declared ordering/evidence contract.
- **When it exists:** only while the startup draft is in progress; it ceases to exist at the
  final selection. Transient by construction.
- **Source / owner:** live draft board → runtime consumer (live board ingestion is explicitly
  outside TIBER-Strategy — verified boundary; producer unassigned, §13.2).
- **Input class:** `board_dynamic`.
- **Availability:** `consumer_owned`; `future_contract` for Strategy-rule consumption; any
  tier-shaped view additionally depends on the nonexistent tier producer (D1 P6).
- **E-dimensions required:** E4 (mechanism), E5 (pool composition), E7 (board depletion/supply),
  with E1 demand as context.
- **Strategy may define:** that startup replacement is board-relative and transient; that its
  pool is the *draftable* pool, not the post-draft residue; misread guards.
- **Consumer must compute:** actual board availability at the moment of reference.
- **What it is not:** waiver replacement (different pool); a stable baseline; a survival claim
  about any future pick (that is R3).
- **Misread risks:** substituting remembered or assumed board state for observed state;
  conflating with R1 because both are "available pool" phrasings over different pools.
- **Synthetic example:** in a combined rookie/veteran startup, mid-draft board replacement at a
  position includes undrafted rookies; in a vets-only startup with a separate rookie draft, the
  same phrase names a strictly smaller pool — same words, different baseline resolution via E5.

#### R3 — `baseline_next_selection` (next-selection replacement) — primary pool baseline

- **Comparison pool:** the future comparison pool expected to remain available on the board at
  the manager's next selection — a pool-membership expectation about a future board state, not
  the current one, and **not** an identification of any particular expected survivor. Which
  members the expected pool contains, and any ordering over them, is consumer-resolved under a
  separately declared ordering/evidence contract.
- **When it exists:** only while the manager holds at least one future pick **and** the mechanism
  is selection-order-based. Undefined when no pick remains, and undefined under auction/salary
  mechanisms, where acquisition is not order-constrained (E4). Reshaped mid-draft by pick trades
  (E6).
- **Source / owner:** current board → runtime consumer; survival expectation → an
  evidence-class question this taxonomy deliberately does not assign (forecast-class evidence is
  outside Strategy; TIBER-Forecast's role here is `declared_assumption_pending_confirmation`).
- **Input class:** `board_dynamic`, over a `hybrid` cadence skeleton (E8).
- **Availability:** `consumer_owned` inputs; the survival expectation itself has **no current
  producer** (unavailable) and would require a declared contract before any Strategy rule could
  reference it.
- **E-dimensions required:** E4, E6, E7, E8.
- **Strategy may define:** that this baseline is expectation-conditioned and evidence-dependent —
  it may not be asserted from format priors alone (issue v0.2 §9: no tier-survival assumption
  without board-state evidence and a declared tier contract); its undefined-conditions.
- **Consumer must compute:** current board state, realized cadence, and any survival estimation
  (with its own evidence contract).
- **What it is not:** a stable season-long baseline; current-board replacement (R2); a guarantee
  of anything surviving; an identification of a best expected survivor; a Strategy-computable
  quantity.
- **Misread risks:** treating a per-pick, expectation-conditioned pool as a durable season-long
  comparison pool (NE2); assuming survival without evidence; ignoring that pick trades mutate the
  gap it is defined over.
- **Synthetic example:** a manager at the turn of a snake draft has two consecutive picks then a
  long gap: for the first pick of the pair, the expected remaining pool is nearly the current
  board pool (one selection elapses); for the second, it is conditioned on two full rounds of
  depletion. Same manager, same round — two different R3 pool resolutions.

#### R4 — `overlay_roster_fill_regime` (post-required-starters / roster-fill regime) — conditioning overlay

*(Discovery label revised from `baseline_post_starters`; the family itself is unchanged.)*

- **Overlay effect (not a source pool):** qualifies which **demand regime** governs the
  comparison over a named primary baseline's pool (R2/R3 in-draft, R1 in season): before a
  roster's required starting obligations are filled, the comparison is governed by unmet starter
  demand; once obligations are met, the *same* primary pool is compared under bench/depth demand.
  R4 never identifies a pool of its own — it states which question is being asked of an R1–R3
  pool.
- **When it applies:** per-roster and regime-dependent; two managers at adjacent picks can be in
  different regimes over the identical primary pool.
- **Source / owner:** lineup requirements → league configuration (verified); roster fill state →
  manager roster state, a consumer-owned runtime value (issue v0.2 Q8).
- **Input class:** `hybrid` — requirements are `format_static`; fill state is runtime.
- **Availability:** `consumer_owned`; `future_contract` for Strategy-rule consumption.
- **E-dimensions required:** E1, E2, E3, plus manager roster state (a consumer-owned runtime
  value, not an E-dimension) — plus whichever dimensions the named primary baseline requires.
- **Strategy may define:** the two-regime structure and the fact of the switch; that the overlay
  is roster-relative, never league-wide; that it composes with a primary and cannot stand alone.
- **Consumer must compute:** each roster's actual fill state and the composed comparison over the
  named primary pool.
- **What it is not:** a standalone pool; a league-wide baseline; identical across managers; a
  statement about which regime is better.
- **Misread risks:** invoking R4 as though it named a pool (overlay-alone reference — fail
  closed, T1/T9); applying one roster's regime to another roster; missing the regime switch and
  comparing bench demand against starter-demand pool boundaries (NE3).
- **Synthetic example:** two 16-team managers pick back-to-back over an identical board — one
  shared R2 primary pool; one manager has every required starter filled, the other has an open
  starting slot. The primary pool is the same; R4 resolves differently per roster, so the two
  composed reads (`R2 + R4`) differ while neither manager has a private board.

#### R5 — `overlay_slot_eligibility_substitution` (flex/superflex substitution) — conditioning overlay

*(Discovery label revised from `baseline_eligibility_substitution`; the family itself is
unchanged.)*

- **Overlay effect (not a source pool):** re-partitions a named primary baseline's pool by slot
  eligibility: for a flex-class slot, the eligible comparison set is the **union of all positions
  the slot accepts**, applied to whichever primary pool is named (the board pool for R2/R3, the
  unrostered pool for R1). Superflex is the special case where quarterback eligibility joins a
  flex union. R5 defines union *membership boundaries* only; it never identifies, orders, or
  values any member of the union.
- **When it applies:** whenever the lineup contains flex-class slots (E3). In lineups with no
  flex slots it is the identity overlay — the positional partition of the primary pool is
  unchanged.
- **Source / owner:** eligibility rules → league configuration (verified); realized union
  membership → runtime consumer.
- **Input class:** `hybrid` — the eligibility union is `format_static`; realized membership is
  `board_dynamic`.
- **Availability:** `consumer_owned`; `future_contract` for Strategy-rule consumption.
- **E-dimensions required:** E1, E3, E7, plus whichever dimensions the named primary baseline
  requires.
- **Strategy may define:** the slot-relative/position-relative partition distinction; that
  eligibility substitution changes which positions compete within the same primary pool; that
  superflex creates cross-position eligibility **without establishing any numeric quarterback
  premium** — the magnitude of any premium is a valuation question this taxonomy does not answer
  and Strategy may never compute.
- **Consumer must compute:** actual union membership within the named primary pool.
- **What it is not:** a standalone pool; same-position replacement (NE4); a premium calculation
  (NE5); a directive to draft any position early.
- **Misread risks:** invoking R5 as though "flex replacement" named a pool without an R1–R3
  primary (overlay-alone reference — fail closed, T1/T9); collapsing a slot-union comparison set
  into a positional one; converting superflex eligibility into a numeric premium (prohibited);
  ignoring that flex unions couple positional runs across positions.
- **Synthetic example:** a lineup with one RB/WR/TE flex partitions the named primary pool (say
  R2, the current board) by a three-position union for that slot; adding superflex adds a second
  union slot that also accepts QB. The *structure* of the comparison set changes; nothing numeric
  about any position's value follows.

#### R6 — `overlay_mechanics_pool_filter` (roster-mechanics and player-pool filtering) — conditioning overlay

*(Discovery label revised from `baseline_mechanics_conditioned`; the family itself is unchanged.)*

- **Overlay effect (not a source pool):** filters a named primary baseline's pool by eligibility
  mechanics: taxi eligibility (rookie-only stash slots), IR designation rules, positional roster
  caps, and combined-versus-separated rookie pools. The filter is applied to the primary pool
  **before** any comparison; R6 has no pool of its own to offer.
- **When it applies:** whenever E2/E5 mechanics constrain who may occupy which roster slot.
  Boundary condition: for a roster at a positional cap, per-roster positional resolution of
  **any** primary baseline is undefined for that position even if pool supply remains.
- **Source / owner:** mechanics rules → league configuration (verified); filtered realized pools
  → runtime consumer.
- **Input class:** `hybrid` (static mechanics over dynamic pools).
- **Availability:** `consumer_owned`; `future_contract` for Strategy-rule consumption.
- **E-dimensions required:** E2, E5, plus whichever dimensions the named primary baseline
  requires.
- **Strategy may define:** filter semantics — how each mechanic transforms an eligible comparison
  pool's membership boundary; the undefined-conditions it creates.
- **Consumer must compute:** the actual filtered pool membership per roster and mechanic.
- **What it is not:** a standalone pool or universal baseline; a reason to treat capped or
  taxi-gated assets as interchangeable with active-roster assets.
- **Misread risks:** invoking R6 as though "after taxi filtering" named a pool without an R1–R3
  primary (overlay-alone reference — fail closed, T1/T9); comparing over an unfiltered
  (ineligible-inclusive) pool: counting taxi-stashed assets as active-roster comparison members,
  or counting cap-blocked positions as open; ignoring that rookie-pool separation changes R1/R2
  pool membership structurally.
- **Synthetic example:** a league with a rookies-only taxi squad: for an active-roster question,
  taxi-eligible rookies are outside the comparison-set membership even though they are rostered
  assets; for a taxi-slot question, the membership is rookies only. One league, one moment, one
  named primary pool — two differently filtered comparison sets.

---

## 16. D3 — Baseline relationships, non-equivalences, and anti-conflation tests

### 16.1 Baseline relationships: primary pairs and overlay application

Primary baselines (R1–R3) are **alternatives**: a single replacement read names exactly one.
Overlays (R4–R6) are **not** alternatives to primaries or to each other: each composes over
whichever primary is named, and none stands alone.

**Primary × primary relations** (codes: **C** — can coincide, only with the stated evidence;
**D** — ordinarily differ; **N** — must never be substituted without explicit evidence; **U** —
undefinedness conditions apply, see register):

| Primary pair | Relation | Note |
|---|---|---|
| R1 waiver ↔ R2 startup board | D, N (conditional C) | Different pools: post-draft unrostered residue vs. current draftable board. Late-draft board ≈ early waiver pool only in shallow formats, and only with that format evidence cited. |
| R1 waiver ↔ R3 next selection | D, N, U | R3 is undefined post-draft; R1 can be degenerate in-draft. Never interchangeable. |
| R2 startup board ↔ R3 next selection | D, N, C-at-clock, U | Coincide exactly when the referenced selection is the current pick. R3 is undefined under auction mechanisms or with no remaining pick; R2 is undefined outside the draft. |

**Overlay application** (each overlay composes over each primary; overlay-alone references fail
closed):

| Overlay | Over R1 (waiver pool) | Over R2 (current board) | Over R3 (expected future pool) | Undefinedness introduced |
|---|---|---|---|---|
| R4 fill regime | applies in season: same pool, bench-demand vs. starter-demand regime per roster | applies in-draft, per roster | applies to future-pool comparisons, per roster | none — a regime switch, not undefinedness |
| R5 slot eligibility | re-partitions unrostered pool membership by slot unions | re-partitions board pool membership | re-partitions expected pool membership | none — identity overlay where no flex slots exist |
| R6 mechanics filter | filters acquirable membership (taxi/IR/caps/pool separation) | filters draftable membership | filters expected membership | at a reached positional cap, per-roster positional resolution of **any** primary is undefined |

**Undefined-condition register:**

- **R2** is undefined outside the startup draft.
- **R3** is undefined when the manager holds no further pick, and under auction/salary mechanisms
  where acquisition is not selection-order-constrained (E4). It is *reshaped* (not voided) by
  in-draft pick trades (E6).
- **R1 three-way distinction:** *defined-empty / degenerate* when the acquisition mechanism
  exists but the eligible unrostered pool is empty or nearly empty (an observed state, not
  undefinedness); **undefined** when the format has no unrostered acquisition mechanism at all;
  *unresolved → fail closed* when the mechanism exists but the pool observation is unavailable —
  unresolved must never be reported as empty, and none of the three states may be conflated.
- **Per-roster positional resolution** of any primary baseline is undefined at a reached
  positional cap (R6).

### 16.2 Mandatory non-equivalences

- **NE1 — waiver ≠ startup-draft replacement.** R1 and R2 range over different pools (post-draft
  residue vs. draftable board). Substituting one for the other requires format evidence (matrix
  N-cell), not habit.
- **NE2 — next-pick replacement is not a season-long baseline.** R3 is per-pick,
  expectation-conditioned, and dies with the draft. Nothing derived from R3 may be carried
  forward as a stable season-long comparison pool.
- **NE3 — the post-starters overlay switches regimes.** R4 changes the governing demand regime at
  the moment lineup obligations are met; any claim citing R4 must state which regime the roster
  is in, and must name the primary pool the regime governs.
- **NE4 — flex substitution ≠ same-position replacement.** A slot-union comparison set (R5 over a
  named primary) and a positional comparison set answer different questions; collapsing them
  mislabels which pool membership was compared.
- **NE5 — superflex eligibility establishes no numeric quarterback premium.** R5 defines *who
  competes for the slot*; the magnitude of any resulting premium is a valuation output that this
  taxonomy does not produce and Strategy may never compute.
- **NE6 — taxi, IR, positional caps, and rookie-pool separation change the eligible comparison
  pool.** Every baseline is resolved only after R6 filtering; an unfiltered pool is the wrong
  pool.
- **NE7 — a dry waiver pool does not prove no future waiver opportunity can emerge.** R1's pool
  state is a time-indexed observation; rosters cut, mechanics free slots, and pool composition
  changes over a season. Degenerate-now is evidence about now, not a permanent law — and equally,
  future liquidity may not be *assumed* (the v0.2 §9 negative case cuts both ways).
- **NE8 — "replacement-level player" must never become a player label inside Strategy.** Every
  baseline names a pool, not a person. Attaching any baseline to a specific player is a
  per-player label, prohibited by the repository's hard rules (`docs/boundary.md` rule 2, the
  player-data firewall, and consumer safety rule `cannot_assign_player_labels_itself`).
  Baseline-to-player resolution, where it ever happens, is consumer-side, evidence-gated, and
  fail-closed.

### 16.3 Anti-conflation tests (mechanically encodable)

Decision questions a later, separately authorized implementation could encode as contract checks.
Each failing test means **fail closed** — report the read unavailable rather than guessing.

- **T1 — Composition complete.** Does the claim name exactly **one** primary pool baseline
  (R1–R3), **every** conditioning overlay (R4–R6) applicable in the format and roster context,
  and explicit provenance for each component's runtime resolution? Fail closed when: no primary
  is named; more than one incompatible primary is silently blended; an overlay is used as though
  it were a standalone pool; an applicable overlay is omitted; or a composition is asserted
  without its required format, roster, or board evidence.
- **T2 — Pool exists and is resolved.** Is the named primary defined in this format, mechanism,
  and moment (R2 in-draft only; R3 requires a remaining pick and a selection-order mechanism; R1
  requires an unrostered acquisition mechanism)? If defined, is the pool observation actually
  available? **Undefined ≠ empty ≠ unresolved:** defined-empty is a valid observed state;
  undefined means the baseline does not exist here; unresolved (observation unavailable) means
  fail closed without asserting either. Cap-reached positions void per-roster positional
  resolution (R6).
- **T3 — Mechanics filtered.** Has the R6 filter (taxi/IR/caps/pool separation) been applied to
  the named primary pool before any comparison? Unfiltered pool → wrong pool.
- **T4 — Roster-relative reads stay home.** If the composition includes the roster-relative
  overlay (R4), was it resolved against the same roster whose state was read?
- **T5 — Slot/position match.** Does the claim's wording match the comparison-set membership
  actually used (slot-union R5 over a named primary vs. positional partition)?
- **T6 — Primary substitution evidenced.** If one primary baseline stands in for another, does a
  C relation in the primary-pair table apply *and* is the enabling format/board evidence cited?
  N relations without evidence → reject. (Overlays never "stand in" for primaries at all — that
  is a T1 failure, not a substitution.)
- **T7 — No numerics.** Does the statement attach a number, score, rank, premium, or threshold to
  any baseline? Inside Strategy → prohibited outright; numeric replacement and VOR computation
  are consumer-owned per issue v0.2 Q8 and prohibited in Strategy by §9's negative cases.
- **T8 — No player labels.** Does any output bind a baseline to a named player or player ID
  inside Strategy? → firewall violation (NE8).
- **T9 — Composed-read validity (worked test).** `R2 + R5 + R6` is a **valid** composed
  startup-board replacement read in a flex-format draft with taxi/cap mechanics: R2 names the
  source pool (current board), R5 re-partitions its membership by slot unions, R6 filters
  eligibility — provided each component carries its provenance (board observation, lineup rules,
  mechanics rules). By contrast, `R5` alone ("flex replacement") or `R6` alone ("after taxi
  filtering") names **no source pool** and must fail closed under T1. An implementation encoding
  this taxonomy must accept the former and reject both of the latter.

### 16.4 D3 boundary confirmation

The taxonomy defines which composed baseline is meant — exactly one primary pool baseline
(R1–R3) plus every applicable conditioning overlay (R4–R6) — and nothing more. Strategy defines
eligible comparison pools and their membership boundaries; **selecting, ordering, or valuing pool
members is a consumer-resolved frontier under a separately declared ordering/evidence contract,
and no such contract exists today.** **No numeric replacement value, VOR, replacement-adjusted
rank, scarcity premium, point value, projection, or threshold appears anywhere in §§15–16, and no
baseline or composition is designated optimal or universal.** All examples are synthetic and
player-free. The source truth → artifact → adapter → surface invariant (§9) is
preserved: baseline *meanings* belong to the stable Strategy artifact; baseline *resolutions*
(actual pools, fill states, survival evidence) belong to consumer-side runtime computation with
per-input provenance and fail-closed gaps; no surface may convert a baseline statement into a
recommendation; the human manager's final decision authority is unchanged. Ownership statuses
reuse D2's verified classifications; the runtime decision-envelope producer remains **unassigned**
(§13.2), and R3's survival-evidence owner is recorded as
`declared_assumption_pending_confirmation`. Q4–Q8 were touched only as boundary references (E4
mechanism undefinedness, v0.2 Q8 consumer-owned numerics); no concept-inventory decision was made;
no other file or repository changed; no PR was opened; no later frontier was activated.

---

## 17. D4 frontier proposal (historical — subsequently activated)

> This section is preserved as the D3-era proposal record. D4 was activated by
> [comment 5009600942](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5009600942)
> (verified in §1) and its output is recorded in §§18–19 below.

```text
D4 — draft-mechanism and cadence consequences (issue #2, Q4 only)
```

Rationale: Q4 is the next dependency with the most D3 output feeding it: R3's
undefined-conditions under auction mechanisms, the pick-trading reshaping of selection gaps, and
the E8 skeleton/realization split all become Q4's subject matter. Q4 also carries the deferred v0
scoping decision for auction/salary startups (an explicit exclusion with rationale is permitted
by issue v0.2 Q4/Q6), which D2/D3 have twice deferred and which blocks the eventual
concept-inventory frontier for the cadence group.

**D4 is proposed only. It is NOT activated.** Q4–Q8 work, concept-inventory decisions, all later
frontiers, and implementation remain inactive until a signed activation comment on issue #2
satisfying the v0.2 §14 requirements authorizes the next frontier explicitly.

*(End of historical D4 proposal. D4 was subsequently activated; see §§18–19.)*

---

## 18. D4 — Draft-mechanism and cadence consequences (Q4)

> D4 record. Authorized by [comment 5009600942](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5009600942);
> Q4 only. Mechanism labels (M1–M5) and cadence-structure terms below are **descriptive discovery
> labels for this document only**, not accepted ontology concepts; candidate vocabulary from
> issue v0.2 §6 (`round_trip_exposure`, `selection_gap_risk`, `cadence_mutability`,
> `pick_liquidity`) is referenced as pointers only. All cadence numerics are consumer-owned
> (§18.4); Strategy defines structure and meaning, never values, orderings, or recommendations.

### 18.1 Mechanism taxonomy (finite, M1–M5)

The taxonomy is total by construction: every draft is one of M1–M4, or falls into M5, the
fail-closed guard family for unsupported or undeclared mechanisms.

#### M1 — snake

- **Ordered selection cadence exists:** yes.
- **Static rule skeleton:** a base selection order that reverses every round; each franchise's
  selection schedule is fully derivable from slot, league size, and round count.
- **What may change dynamically:** realized cadence under in-draft pick trades (E6); board
  depletion between selections (E7).
- **R2 exists:** yes (current board pool). **R3 exists:** yes, while the manager holds a future
  pick.
- **Undefined conditions:** R3 undefined once no pick remains; per-roster positional resolution
  undefined at caps (R6) as everywhere.
- **Consumer-owned inputs:** slot, realized order, current pick, picks until next selection, all
  gap numerics, trade events.
- **Strategy-owned meanings:** turn-pick structure, round-trip structure, alternating gap
  asymmetry by slot region (§18.2); their misread guards.
- **Misread risks:** treating the skeleton as the realized schedule when trades are allowed
  (§18.2.6); exporting snake turn/round-trip logic to other mechanisms (T11).

#### M2 — linear

- **Ordered selection cadence exists:** yes.
- **Static rule skeleton:** the same base order every round; inter-selection gap structure is
  uniform per franchise across rounds (no reversal, no turn compression).
- **What may change dynamically:** realized cadence under pick trades; board depletion.
- **R2 exists:** yes. **R3 exists:** yes, while a future pick remains.
- **Undefined conditions:** as M1.
- **Consumer-owned inputs:** as M1.
- **Strategy-owned meanings:** persistent slot-order asymmetry (early slots retain their order
  position every round — a structurally different asymmetry than snake's alternating gaps); the
  absence of turn picks.
- **Misread risks:** applying snake round-trip or turn-pick reasoning to linear drafts (there is
  no reversal to reason about — T11); assuming linear's uniform gaps imply uniform exposure
  across slots (order persistence is itself an asymmetry).

#### M3 — third-round reversal (3RR)

- **Ordered selection cadence exists:** yes.
- **Static rule skeleton:** a snake variant in which the reversal pattern shifts at the
  round-two/round-three boundary (the same order repeats for two consecutive rounds once),
  partially rebalancing edge-slot advantage; fully derivable from slot and league size.
- **What may change dynamically:** as M1.
- **R2 exists:** yes. **R3 exists:** yes, while a future pick remains.
- **Undefined conditions:** as M1.
- **Consumer-owned inputs:** as M1.
- **Strategy-owned meanings:** boundary-round turn structure (which slots receive a
  double-length or compressed turn at the reversal shift) and how 3RR redistributes edge-slot
  asymmetry relative to plain snake.
- **Misread risks:** treating 3RR as plain snake — correct in rounds one and two, wrong at and
  after the boundary; reading the rebalancing as a valuation claim about any slot.

#### M4 — auction / salary

- **Ordered selection cadence exists:** **no.** A nomination order may exist, but *acquisition*
  is budget-constrained, not selection-order-constrained: any franchise can acquire any nominated
  asset at any time subject to budget state.
- **Static rule skeleton:** budget size, nomination order rules, roster requirements — but no
  selection schedule exists to derive.
- **What may change dynamically:** remaining pool, budget states, nomination sequence.
- **R2 exists:** yes — the current remaining (un-acquired) pool is well-defined, so
  startup-board replacement survives under auctions.
- **R3 exists:** **no — undefined.** "The pool at my next selection" has no referent when
  acquisition is not tied to an ordered future selection.
- **Undefined conditions:** R3 and every cadence-family structure in §18.2 (turns, round trips,
  selection gaps, slot asymmetry, cadence mutation) are **not applicable** under M4 — see the v0
  scoping decision in §18.3.
- **Consumer-owned inputs:** nomination sequence, budget states, remaining pool. (Budget numerics
  are consumer-owned like all numerics; Strategy defines no budget values.)
- **Strategy-owned meanings:** the fact that M4 severs cadence from acquisition; that pool
  concepts (R2, depletion, E7) survive while cadence concepts do not.
- **Misread risks:** forcing cadence vocabulary onto auctions (T12); treating nomination order as
  a selection cadence; smuggling budget valuation into Strategy (out of scope, §18.3).

#### M5 — unsupported / unknown mechanism

- **Ordered selection cadence exists:** unresolved.
- **Static rule skeleton:** undeclared.
- **What may change dynamically:** unresolved.
- **R2 exists / R3 exists:** unresolved — **fail closed**, do not assume either.
- **Undefined conditions:** all cadence and pool-existence questions are unresolved (which is
  distinct from undefined and from defined-empty, per the D3 three-way discipline).
- **Consumer-owned inputs:** the mechanism declaration itself is a required consumer-owned input;
  until it is supplied and mapped to M1–M4, no mechanism-dependent read may resolve.
- **Strategy-owned meanings:** the guard itself: an undeclared mechanism poisons every
  mechanism-dependent claim downstream.
- **Misread risks:** defaulting an unknown mechanism to snake (the pre-v0.2 hidden assumption
  this taxonomy exists to prevent); resolving M5 by guess instead of by declaration.

### 18.2 Cadence structures (Strategy-owned meanings; all values consumer-owned)

1. **Turn picks** — the pair of near-consecutive selections a franchise receives where a snake
   (or 3RR-shifted) reversal occurs: minimal gap inside the turn, maximal gap on either side of
   it. A structural property of edge-region slots under reversing mechanisms only.
2. **Round trips** — under reversing mechanisms, the interval between a franchise's selection and
   its next one, spanning one full traversal of the remaining order and back. The structural unit
   over which board depletion accrues between that franchise's decisions.
3. **Long selection gaps** — qualitative gap classes (short / ordinary / long, relative to the
   mechanism and league size) describing stretches of board depletion without the manager's
   participation. Gap *classes* are Strategy vocabulary; every gap *value* is consumer-owned.
4. **Early/middle/late slot asymmetry** — mechanism-conditional: under M1, edge slots alternate
   extreme short/long gaps (turn structure) while middle slots see near-uniform gaps; under M2,
   asymmetry is order persistence, not gap alternation; under M3, edge asymmetry is partially
   redistributed at the boundary rounds. No slot is designated advantaged — the asymmetry is
   structural description, not slot valuation.
5. **Cadence mutation through pick trades** — where E6 permits in-draft pick trading, the
   format-static skeleton is only a prior: every executed trade rewrites the realized schedule
   for both parties. Realized cadence is board state, not rule state (D2 §12.3 applies in full).
6. **Stale-cadence invalidation** — every cadence-dependent read (including any R3 composition)
   is implicitly stamped by the set of trade events it observed. A subsequent trade event
   invalidates the read: it must be re-resolved against current board state, and a stale read
   must never be presented as current (T13). Staleness is an *unresolved* state — fail closed,
   per the D3 three-way discipline.

### 18.3 Auction/salary v0 scoping decision (exactly one)

**Decision: M4 auction/salary startups are structurally INCLUDED in the v0 mechanism taxonomy,
with all selection-cadence concepts explicitly marked NOT APPLICABLE under M4.**

Rationale: inclusion keeps the taxonomy total (no format falls outside it), preserves the
correct partial survival of pool concepts (R2, board depletion, E7 remain well-defined under
auctions), and avoids a false format boundary that would push auction leagues into the M5
fail-closed guard where even pool concepts would wrongly unresolve. The not-applicable marking is
itself a fail-closed guard: any cadence-family concept (turns, round trips, selection gaps, slot
asymmetry, cadence mutation, R3) invoked under M4 must be rejected as not-applicable rather than
resolved (T12). **Budget-pressure structure — the auction analog of cadence exposure — is
explicitly deferred, not denied:** defining it would require its own bounded frontier and is out
of v0 scope.

### 18.4 Consumer-owned cadence numerics (restated)

Per issue v0.2 Q4 and the D2 classification: **current pick, next pick, picks until next
selection, turn distance, and the realized selection order are consumer-owned runtime inputs.**
Budget states (M4) and trade events (E6) are likewise consumer-owned. Strategy defines the
structures in §18.2 and never emits, stores, or computes any of these values.

### 18.5 Synthetic cases (player-free)

- **S1 — snake (M1):** a 12-team snake league; the slot-1 franchise alternates the round's
  shortest and longest gaps (turn structure at the edge), the slot-6 franchise sees near-uniform
  gaps every round, the slot-12 franchise mirrors slot 1 at the other edge. Same league, same
  rules — three structurally different exposure patterns, no slot valuated.
- **S2 — linear (M2):** the same league drafted linear: every franchise's gap structure is
  uniform across rounds and there are no turn picks; the slot-1 franchise instead holds its order
  position every round. A snake round-trip read applied here would reference a reversal that does
  not exist — it must be rejected, not approximated (T11).
- **S3 — third-round reversal (M3):** the same league with 3RR: rounds one and two behave as
  snake, then the reversal shift gives the round-two edge a repeated-order turn at the boundary.
  A plain-snake skeleton read is correct through round two and silently wrong from the boundary
  on — the mechanism must be declared as M3, not approximated as M1.
- **S4 — pick-trading mutation (M1 + E6):** mid-draft, a franchise trades for another's
  next-round pick. Both franchises' realized schedules diverge from their skeletons; any R3
  composition either franchise resolved before the trade observed a schedule that no longer
  exists and is stale — it must be re-resolved, not reused (T13).
- **S5 — auction (M4):** the same league as an auction startup: an R3 read ("the expected pool at
  my next selection") has no referent and is rejected as not-applicable; an R2 read (the current
  remaining pool) resolves normally. Pool vocabulary survives the mechanism change; cadence
  vocabulary does not.

---

## 19. D4 — Anti-conflation tests and boundary confirmation

### 19.1 Mechanically encodable tests (extending T1–T9)

- **T10 — Skeleton ≠ realized cadence.** Where the format permits in-draft pick trading (E6),
  a static-order skeleton must not be presented as the realized cadence; a realized-cadence claim
  requires board-event provenance (the trade events it observed). Skeleton-only provenance in a
  trade-enabled format → fail closed.
- **T11 — Mechanism match.** Every cadence-dependent claim must name the mechanism it
  presupposes, and the named mechanism must support that structure (snake round-trip/turn logic
  is invalid under M2 linear and M4 auction; boundary-turn logic requires M3). Mechanism
  undeclared (M5) → fail closed.
- **T12 — R3 mechanism gate.** R3 is undefined under M4, where no ordered future selection
  exists, and under M1–M3 when no future pick remains. Under M5, mechanism applicability is
  unresolved and the claim fails closed. Reject the reference in every case; do not resolve it.
  Undefined and unresolved are distinct states and must not be interchanged.
- **T13 — Staleness gate.** Every cadence-dependent read carries the trade-event stamp it
  observed; any later trade event invalidates it. A stale read must not be presented as current —
  re-resolve or fail closed. Stale ≠ current, and unresolved ≠ either.
- **T14 — No recommendation from exposure.** Cadence-exposure statements are structural
  descriptions. Any output converting gap structure, turn structure, or slot asymmetry into a
  pick directive, slot preference, or player selection violates the §9 invariant and the
  consumer safety rules — reject at the surface boundary.
- **T15 — Tier-survival evidence gate.** No claim that a tier (or any pool stratum) survives a
  selection gap may be asserted without both board-state evidence and a declared tier/survival
  evidence contract; none exists in the chain today (D1 P6; R3 record). Assertion without the
  contract → fail closed.

### 19.2 D4 boundary confirmation

The mechanism taxonomy is total (M1–M5) and every cadence structure is defined without a single
numeric value: **no gap value, pick number, turn distance, order listing, budget value, premium,
threshold, or slot valuation appears anywhere in §§18–19, and no slot, mechanism, or strategy is
designated advantaged or recommended.** All examples are synthetic and player-free. Q5–Q8 were
touched only as boundary references (R2/R3 interaction per the D4 activation clause 7; tier
evidence per T15). No ontology concept was accepted, rejected, merged, or named — candidate
cadence vocabulary remains pointers. Ownership statuses are unchanged from D2/D3: mechanism and
trading rules are league configuration (`verified_from_current_source`, TIBER-Fantasy-owned);
realized board/cadence state belongs to the unassigned runtime producer (§13.2, untouched); R3's
survival-evidence owner remains `declared_assumption_pending_confirmation`. The source truth →
artifact → adapter → surface invariant and the human final-decision boundary are preserved. No
other file or repository changed; no PR was opened; no later frontier was activated.

---

## 20. D5 frontier proposal (historical — subsequently activated)

> This section is preserved as the D4-era proposal record. D5 was activated by
> [comment 5012422445](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5012422445)
> (verified in §1) from corrected D4 head
> `69d90e5606d038c1da1f0ce5c7fbe93fee9f4830`; its output is recorded in §§21–22 below.

```text
D5 — roster-path optionality (issue #2, Q5 only)
```

Rationale: Q5 is the last foundational definition the concept inventory needs. E10 (reachable
roster-construction paths) was defined as a dimension in D2; D3 supplied the composed-baseline
machinery paths are evaluated against; D4 supplied the cadence and mechanism structure that
narrows paths between selections. Q5's remaining work is the meaning of path optionality itself —
including the v0.2 Q5 negative boundary that optionality is not indecision, automatic
diversification, mandatory balance, an optimization result, or a pick recommendation — after
which the concept-inventory frontier (Q6–Q7 material) can be scoped against a complete
definitional base.

The proposal above was inactive when written. The signed activation cited above later authorized
Q5 only; Q6–Q8, concept-inventory decisions, all later frontiers, and implementation remained
inactive.

---

## 21. D5 — Roster-path optionality (Q5)

### 21.1 Structural path and reachability model

A **roster-construction path** is a player-independent sequence of admissible structural-state
transitions from the current draft state to a complete-roster state that satisfies the declared
format constraints. Its state description may contain only structural facts: remaining lineup and
roster obligations, slot-eligibility and cap conditions, available acquisition-opportunity types,
remaining-supply classes, and the provenance and freshness of those facts. It contains no player
identity, ranking, projection, tier, ADP, market value, or preferred outcome.

For D5, two executions belong to the same structural path when they pass through the same classes
of constraints and obligations, even if a future consumer would populate them with different
players. A **complete-roster state** means only that declared structural requirements can be
satisfied; it says nothing about quality, competitiveness, balance, concentration, or fitness for
a particular manager.

Let `P(s, I)` denote the set of structural paths reachable from state `s` under declared inputs
`I`. Reachability means that at least one admissible sequence of remaining acquisition
opportunities has a witness satisfying every applicable format constraint. Strategy may define
that predicate and its guards. A consumer must resolve `s`, `I`, the witness set, and every state
transition at runtime. `P` is a set of possibilities, not a score, ordering, objective function,
or recommendation.

The terms in this section are Q5 descriptive machinery only. They do **not** accept, reject,
merge, rename, or finally name any candidate in the issue's concept inventory. In particular,
`roster_path_optionality`, `surviving_build_paths`, and `local_value_path_tension` remain unmerged
and unaccepted pointers pending a separately activated concept-inventory frontier.

### 21.2 Local comparison versus the reachable path set

A **local comparison** ranges only over structurally eligible choices available at the current
state. D5 does not order or value those choices. A **path-set read** asks a different question:
after a structurally described selection transition, which complete-roster constraint patterns
still have at least one admissible witness?

Formally, a current action `a` may move state `s` to `s′`; the relevant structural consequence is
the relationship between `P(s, I)` and `P(s′, I′)`, where `I′` includes the board and transaction
events observed by the successor state. Membership in the local choice set does not establish
path preservation, and path preservation does not make a local choice preferable.

| Selection consequence | Mechanical meaning | Required guard |
|---|---|---|
| preserves multiple paths | after the transition, more than one distinct complete-roster constraint pattern still has a resolved witness | says only that alternatives remain reachable; it does not require diversification or keeping them open |
| closes a path | a path with a resolved witness before the transition has a defined-empty witness set after it, under fresh inputs | requires comparable pre/post state and event provenance; it is not a claim that the selection was wrong |
| makes a path unresolved | the transition leaves a required input missing, unavailable, undeclared, or stale, so current reachability cannot be determined | fail closed; do not relabel the path closed, empty, or unreachable |
| leaves a defined path structurally unreachable | the path specification remains applicable, all required inputs are resolved, and its current witness set is defined-empty | preserve the definition/witness distinction; theoretical meaning does not imply current attainability |

A later board or transaction event may change reachability again. A claim that a path was closed or
preserved is state-stamped, not permanent. D5 defines no requirement to keep every path open and no
preference between a wider, narrower, balanced, or concentrated reachable set.

### 21.3 Four-state semantics

Every path or path-set claim must emit exactly one applicable state:

- **defined** — the path predicate applies, every required input is declared, available, and
  current, and the witness set is resolved. When it contains a witness, the path is currently
  reachable.
- **defined-empty** — the predicate applies and every required input is resolved and current, but
  no admissible witness satisfies the path's constraints from the present state. This is the
  mechanically precise state for a theoretically defined but structurally unreachable path.
- **undefined** — the referenced path predicate has no referent or is not applicable under the
  declared mechanism or format. Absence of an applicable opportunity is not an observed empty
  witness set.
- **unresolved** — applicability or reachability cannot be determined because a required
  declaration, observation, contract, provenance stamp, or freshness condition is missing. Fail
  closed without asserting defined, defined-empty, or undefined.

State propagation is strict. A defined-empty result is permitted only after all required inputs
are defined and current and the consumer has resolved the witness set. Missing or stale evidence
propagates `unresolved`; a genuinely inapplicable required predicate propagates `undefined` to the
claim that depends on it. The states must never be interchanged.

Mechanism-specific consequences preserve D4: under M4, R3 is `undefined`, but auction/salary path
reachability need not be undefined when current-pool, budget-state, eligibility, and roster
constraints are all resolved. Under M5, mechanism-dependent reachability is `unresolved`. Under
M1–M3 with no future pick, R3 is `undefined`; whether a complete-roster path is defined-empty or
remains reachable through another declared acquisition opportunity is a separate, resolved
structural question.

### 21.4 Composition with D2, D3, and D4

- **D2 / E10:** D5 supplies the reachability semantics that E10 deliberately deferred. E1–E6
  provide the static constraint skeleton; E7–E9 provide dynamic supply, cadence, and residual-pool
  state where a claim requires them; E10 is the derived hybrid path set. No E-dimension value moves
  into Strategy.
- **D3 replacement taxonomy:** a path claim that uses replacement evidence must name exactly one
  applicable primary baseline (R1–R3) and every applicable conditioning overlay (R4–R6), following
  T1–T9. A baseline describes a comparison pool, never a path, and cannot by itself prove that a
  path is reachable. Undefined, unresolved, or stale baseline components propagate through any
  path claim that requires them; an observed defined-empty pool may support a defined-empty path
  witness set only after all other constraints are resolved.
- **D4 mechanism and cadence:** under M1–M3, future-selection opportunities and realized cadence
  may constrain witnesses. Under M4, selection cadence and R3 do not apply, while current-pool and
  budget-constrained acquisition opportunities may still support path witnesses. Under M5, every
  mechanism-dependent path claim is unresolved. Where pick trading is allowed, the static cadence
  skeleton is insufficient; a later trade invalidates the prior path read until both cadence and
  reachability are re-resolved from current event provenance (T10/T13).
- **Invariant composition:** stable path meanings belong to Strategy; current path instances stay
  in the runtime decision envelope. No adapter or surface may turn reachability, closure, or path
  count into a directive. Human decision authority remains final.

### 21.5 Required inputs, availability, and ownership

The structural class and runtime/contract status are separate axes. `consumer_owned` values never
become Strategy content; `future_contract` marks the interface required before a Strategy rule may
consume them. `unavailable` means no current producer or declared contract can resolve the input.

| Required input | Structural class | Runtime / availability status | Ownership and D5 use |
|---|---|---|---|
| E1–E6 format constraints: lineup and roster obligations, eligibility/caps, scoring modifiers, mechanism, pool composition, and pick-trading permission | `format_static` | `consumer_owned`; `future_contract` for Strategy-rule use | league configuration is verified TIBER-Fantasy-owned; Strategy defines constraint meanings only |
| current structural roster state: occupied eligibility classes, open obligations, and reached caps, without player identity | `board_dynamic` | `consumer_owned`; `future_contract` for Strategy-rule use | runtime consumer resolves it; D5 performs no roster ingestion |
| E7 current board depletion and remaining structural supply | `board_dynamic` | `consumer_owned`; tier-shaped evidence remains `unavailable` and would require a `future_contract` | runtime producer remains unassigned; D5 uses no tiers or player rows |
| E8 future acquisition opportunities and realized cadence under M1–M3 | `hybrid` | `consumer_owned`; `future_contract`; any R3 survival evidence remains `unavailable` | static skeleton comes from rules; runtime consumer resolves current opportunities and event stamps |
| D3 primary-baseline plus applicable-overlay composition, when a path claim depends on replacement evidence | `hybrid` | component values are `consumer_owned`; `future_contract` for Strategy-rule use | Strategy owns composition guards; consumer resolves pools and filters |
| executed pick trades and freshness/provenance stamps | `board_dynamic` | `consumer_owned`; `future_contract` | runtime consumer resolves them; any stale dependent read becomes unresolved |
| M4 current-pool, budget-state, eligibility, and roster constraints | `board_dynamic` over a `format_static` mechanism, therefore `hybrid` as a composition | `consumer_owned`; `future_contract` | runtime consumer resolves all values; Strategy defines no budget number or valuation |
| E9 residual acquisition state, only when a path extends through a declared post-startup mechanism | `hybrid` | `consumer_owned`; `future_contract` | runtime producer remains unassigned; an unavailable pool observation makes the dependent claim unresolved |
| E10 path witnesses and the resulting reachable-set state | `hybrid` | derived runtime value; producer and contract currently `unavailable`; requires a `future_contract` | Strategy owns the predicate and state guards; the unassigned runtime decision-envelope producer must resolve instances |

This table does not assign the runtime producer. The owner remains
`declared_assumption_pending_confirmation` under §13.2.

### 21.6 Synthetic cases (player-free)

1. **D5-S1 — ordinary ordered startup, alternatives preserved.** A declared snake format has
   fresh roster-obligation, current-board, and realized-cadence inputs. A structurally eligible
   selection satisfies one open obligation while leaving witnesses for distinct completion
   patterns through later declared opportunities. The successor path set is defined and multiple;
   no path is preferred and no diversification instruction follows.
2. **D5-S2 — extreme-depth defined-empty path.** In an extreme-depth format, fresh board evidence
   shows that a structural supply class required by one otherwise valid completion pattern has no
   remaining eligible witness. The path specification remains defined, but its current witness set
   is defined-empty and the path is structurally unreachable. It is neither undefined nor
   unresolved, and the result contains no player valuation.
3. **D5-S3 — pick-trading staleness.** A path read under an ordered mechanism cites the observed
   trade-event set and realized future opportunities. A later pick trade changes those
   opportunities. The prior reachability claim becomes unresolved; it may be described as closed,
   preserved, or reopened only after re-resolution against the new event state.
4. **D5-S4 — auction path without R3.** Under M4, R3 and selection-cadence predicates are
   undefined. With fresh current-pool, budget-state, eligibility, and roster-constraint inputs, an
   auction acquisition path can nevertheless be defined and its witness set resolved. Importing a
   next-selection gap would be invalid; importing budget valuation would exceed D5.
5. **D5-S5 — undeclared mechanism.** With M5, the mechanism declaration needed to choose the
   applicable acquisition-opportunity model is absent. Mechanism-dependent path reachability is
   unresolved and fails closed. It must not be reported as a defined-empty path or silently
   resolved using snake assumptions.

---

## 22. D5 — Anti-conflation tests and boundary confirmation

### 22.1 Mechanically encodable tests (extending T1–T15)

- **T16 — Local choice ≠ reachable path set.** A currently eligible choice and a path witness are
  different objects. Local availability alone cannot prove path preservation, closure, quality,
  or preference; a path claim requires a successor-state reachability resolution.
- **T17 — Four-state gate.** `defined`, `defined-empty`, `undefined`, and `unresolved` are distinct.
  Emit defined-empty only after all required inputs are resolved and no witness exists; missing,
  stale, or undeclared evidence emits unresolved; inapplicability emits undefined. Any interchange
  fails validation.
- **T18 — Path-transition provenance.** A preserve/close claim must cite comparable pre-transition
  and post-transition structural states plus the board and transaction events observed. Missing or
  mismatched provenance makes the transition claim unresolved.
- **T19 — D3 composition gate.** When path reachability depends on replacement evidence, the claim
  must name one primary baseline and all applicable overlays. A baseline or overlay cannot stand
  in for a path, and an unresolved or undefined required component must propagate rather than be
  treated as an empty path set.
- **T20 — Mechanism-opportunity match.** M1–M3 witnesses may depend on ordered future selections;
  M4 witnesses must use auction/salary opportunity inputs and must not reference R3 or cadence;
  M5 mechanism-dependent witnesses are unresolved. A mechanism-mismatched witness is rejected.
- **T21 — Stale opportunity invalidation.** In a trade-enabled format, any later trade event
  invalidates a path read that depended on the prior realized opportunity set. Re-resolve from the
  new event state or fail closed; do not preserve the old result as current.
- **T22 — No advice, optimization, or superiority.** No path width, closure, concentration, or
  balance statement may emit a pick directive, computed best path, requirement to keep every path
  open, manager-specific strategy, or claim that balanced or concentrated construction is
  superior. Any such conversion is rejected at the artifact, adapter, and surface boundaries.

### 22.2 D5 boundary confirmation

D5 answers Q5 only. It defines structural paths, reachability transitions, four-state semantics,
cross-frontier composition, required input classes, and fail-closed tests without evaluating a
player or selecting a path. All examples are synthetic and contain no player, ranking, tier,
projection, ADP, market, live-draft, or roster-ingestion data. No numeric cadence, budget,
replacement, scarcity, or valuation value is introduced. No path is called optimal; no balanced
or concentrated structure is preferred; no imperative or recommendation is emitted.

No candidate concept was accepted, rejected, merged, renamed, or finally named. Q6–Q8, heuristic
evaluation, artifact-shape selection, schema or implementation proposals, runtime-producer
assignment, adapters, product behavior, promoted-ontology changes, implementation, and all other
repositories remain inactive. Only this canonical document changed; no PR or merge is authorized.

---

## 23. D6 frontier proposal (historical — subsequently activated)

> This section is preserved as the D5-era proposal record. D6 was activated by
> [comment 5013201489](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5013201489)
> (verified in §1) and its output is recorded in §§24–25 below.

```text
D6 — unusual-format stress-test matrix (issue #2, Q6 only)
```

Rationale: D1–D5 now provide the ownership, environment, replacement, mechanism/cadence, and path
semantics needed to test which hidden ordinary-format assumptions fail under the synthetic cases
required by Q6. A bounded Q6-only frontier can exercise those meanings across the required format
families without evaluating heuristics, deciding the concept inventory, selecting an artifact
shape, or implementing anything.

**D6 is proposed only. It is NOT activated.** Q6–Q8, concept-inventory decisions, heuristic
evaluation, artifact-shape work, all later frontiers, and implementation remain inactive until a
new signed activation comment on issue #2 authorizes the next frontier explicitly.

*(End of historical D6 proposal. D6 was subsequently activated; see §§24–25.)*

---

## 24. D6 — Unusual-format stress-test matrix (Q6)

> D6 record. Authorized by [comment 5013201489](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5013201489);
> Q6 only. The matrix tests, across unusual formats and using only the accepted D1–D5 machinery,
> which ordinary startup assumptions survive (with the same or redeclared inputs, or only
> conditionally), which predicates do not apply, which reads resolve to which exact runtime
> states, and which guarded conflations are rejected — on three separate axes (§24.1). Per the activation's synthetic-case boundary, structural format numbers (league
> size, lineup shape, roster capacity) appear below; they are format declarations, not
> thresholds, valuations, or advice. All cases are synthetic and player-free. This section tests
> **definitions and structural assumptions** — it does not evaluate the Q7 heuristic inventory,
> make concept-inventory decisions, or emit recommendations.

### 24.1 Outcome semantics — three separate axes

D6 outcomes are recorded on **three mechanically separate axes**. No token of one axis may
substitute for a token of another; every mechanical field carries exactly one declared token.

**Axis A — definition survival**, recorded as a **tuple of three separate mechanical fields**
(contract relationship and per-read evidence conditions are independent — a claim may carry
both):

| Field | Declared values | Meaning |
|---|---|---|
| `applicability` | `applies` \| `does_not_apply` | whether the accepted D1–D5 predicate has a referent in this format; `does_not_apply` means every read resolves to runtime `undefined` |
| `input_contract` | `same_as_control` \| `redeclared` | whether the claim uses the F1 control-case input declarations or requires re-declaring inputs the control case leaves implicit (eligibility unions, pool boundaries, acquisition-opportunity structure) |
| `evidence_conditions` | a set (possibly `none`) drawn from the registry: `current_observation`, `trade_event_provenance`, `survival_evidence_contract`, `rookie_draft_structure_declaration`, `auction_opportunity_inputs` | per-read evidence or freshness conditions beyond the input contract; these belong to the runtime/evidence layer and are **not** an alternative to `redeclared` |

A definition "becomes conditional" (the activation-required distinction) exactly when its
`evidence_conditions` set is non-empty; the condition is represented explicitly here, never
mixed into the runtime state or the contract delta. Axis-A cells in §24.3 are written as the
tuple `⟨applicability, input_contract, evidence_conditions⟩`.

**Axis B — runtime resolution, in two separate namespaces** (never interchanged):

- **D5 path runtime state** (exact accepted D5 tokens, reserved for path reads):

  ```text
  defined | defined-empty | undefined | unresolved
  ```

  `defined-empty` is **reserved for a resolved path witness set containing no admissible
  witness**, with every required input declared, current, and resolved. A witness set containing
  at least one admissible witness is `defined`.

- **D3 pool status** (for pool reads; separate namespace, no D5 token reuse):

  ```text
  pool_resolved_nonempty | pool_resolved_empty | pool_unresolved | pool_undefined
  ```

  The accepted D3 record's descriptive degeneracy wording applies as *description* of a
  `pool_resolved_nonempty` pool with sparse membership. The accepted D3 text's combined
  "defined-empty / degenerate (empty or nearly empty)" phrasing is **not reinterpreted here**;
  its empty-versus-nearly-empty terminology ambiguity is recorded as unresolved synthesis item
  **S1** (§25.2). Resolving S1 may require amending accepted D3 text, which this authority does
  not permit.

- Cadence reads resolve under the accepted D4 staleness semantics: current under their
  trade-event stamp, otherwise stale = `unresolved` (D4 §18.2.6).

Axis-B rules: runtime states resolve **per read against stipulated current observations, never
per format** — a format-static declaration alone establishes no current pool membership, no path
witness set, no fresh trade-event state, and no auction reachability.

**Complete path-observation discipline.** For any family F, `O-Path(F)` denotes the complete
accepted D5 input set — declared format rules, current roster obligations, board state,
remaining structural supply, eligibility and roster constraints, current acquisition
opportunities, and applicable provenance — all declared, current, and resolved, **plus a
resolved witness result**. Complete inputs make resolution *possible*; they never select the
outcome: the resolved witness result does. `O-Path(F)` with at least one admissible witness →
`defined`; `O-Path(F)` with no admissible witness → `defined-empty`; any missing, stale, or
undeclared component → `unresolved`. Every path-read row in §24.2/§24.3 uses this discipline.

**Axis C — guard registry** (not an outcome axis): each guard (T23–T31) carries one declared
result per record:

```text
not_applicable | armed_not_triggered | rejects_attempted_read
```

`rejects_attempted_read` occurs **only when a malformed read is explicitly supplied for the
test** (as in the worked T9-style examples); a well-formed synthetic record reports
`armed_not_triggered` for every armed guard. Guard applicability is orthogonal to definition
applicability (Axis A) and runtime resolution (Axis B).

### 24.2 Format families (F1–F8)

Each record carries the eleven fields required by the activation comment.

#### F1 — ordinary 10–12 team, one-QB snake dynasty (control case)

- **Format-static inputs:** 10–12 franchises; one starting QB slot; ordinary RB/WR/TE starters
  plus one flex; ordinary bench (~15 roster spots); **explicitly declared absences: no taxi
  squad, no IR slots, no positional caps, no in-draft pick trading**.
- **Mechanism / acquisition-opportunity structure:** M1 snake; ordered selection cadence;
  skeleton = realized schedule (no trades declared).
- **Player-pool composition:** combined rookie/veteran single startup pool (declared).
- **Lineup/roster/taxi/IR/cap rules:** as declared above (all three mechanics explicitly
  absent); R6 is the identity overlay in this family.
- **D2 dimensions under stress:** none — this case *generates* the ordinary assumptions; E1–E10
  sit in their ordinary ranges.
- **D3 baseline/overlays (axis A):** R2, R3 (while picks remain), and R1 (post-draft) are all
  `⟨applies, same_as_control, none⟩`; R5 applies to the single flex slot; R6 identity (no
  mechanics and no pool separation declared).
- **D4 cadence:** fully applicable; no staleness source exists (no trades declared).
- **D5 path state / R1 pool status (axis B, per read):** *path:* `O-Path(F1)` complete with at
  least one admissible witness per stated constraint pattern → `defined`; any missing component
  → `unresolved`. *Pool:* *stipulated observation O-F1r* — a fresh post-startup pool observation
  resolves at least one eligible unrostered member in every declared position class → R1 pool
  status `pool_resolved_nonempty`. Without O-F1r → `pool_unresolved`. Format declarations alone
  resolve nothing.
- **Assumption exposed:** none — F1 is the *source* of the assumptions the other rows test. Its
  matrix role is calibration, and its danger is exportation (T23/T25 guard the export).
- **Missing evidence/contract:** the global gaps — consumer ordering/evidence contract, tier
  contract, runtime producer — apply here as everywhere.
- **Required guard:** F1 conclusions must never be imported into any other family without
  re-declaration (T23/T25/T27); F1 is a format, not a default.

#### F2 — ordinary 10–12 team superflex snake dynasty

- **Format-static inputs:** as F1 plus one superflex slot (QB-eligible flex); F1's declared
  absences carry over.
- **Mechanism / acquisition:** M1 snake, as F1.
- **Player-pool composition:** combined pool, as F1.
- **Lineup/roster rules:** superflex changes E3 eligibility structure; otherwise as F1.
- **D2 dimensions under stress:** E3 (lineup modifiers). What the format declaration establishes
  is structural only: **the superflex slot expands QB eligibility and raises the maximum
  QB-eligible lineup capacity per franchise.** Whether realized QB demand, supply pressure, or
  acquisition behavior changes — and by how much — requires consumer-owned roster, board,
  supply, or behavioral evidence; without it those consequences are `unresolved`.
- **D3 baseline/overlays (axis A):** primaries unchanged. Two distinct reads coexist and must
  not be collapsed: a **positional read for the fixed QB slot** is
  `⟨applies, same_as_control, none⟩`; a **slot-union read for the superflex slot** is
  `⟨applies, redeclared, none⟩` (the QB-inclusive union must be declared). A read must match its
  referenced slot (T5); R5 is required only where the referenced predicate is the superflex
  slot's union.
- **D4 cadence:** fully applicable, as F1.
- **D5 path state (axis B, per read):** *stipulated observation O-F2p* — `O-Path(F2)` complete
  (including the superflex eligibility constraints) with at least one admissible witness per
  stated pattern → `defined`; `O-Path(F2)` complete with no admissible witness for a stated
  pattern → `defined-empty`; any missing component → `unresolved`. No claim is made that witness
  sets narrow faster than F1 — any narrowing-rate claim requires consumer-owned evidence and is
  `unresolved` without it.
- **Assumption exposed:** the one-QB demand assumption — one-QB and superflex formats must not
  silently share eligibility/capacity structure (T24).
- **Missing evidence/contract:** as F1; realized-demand evidence is consumer-owned and absent;
  any survival claim about QB pool strata needs the nonexistent tier/survival contract (T15).
- **Required guard:** T24 (eligibility/capacity re-declaration); NE5 stands — no numeric QB
  premium may be derived from the structural eligibility change. Q7's "QBs early in superflex"
  heuristic remains **unevaluated**.

#### F3 — 16-team deep dynasty

- **Format-static inputs:** 16 franchises; F1-like lineup; ordinary-to-large bench.
- **Mechanism / acquisition:** M1 snake.
- **Player-pool composition:** combined pool.
- **Lineup/roster rules:** as F1; larger total rostered population.
- **D2 dimensions under stress:** E1 (franchise count), E9 (waiver consequences), E8 (each round
  contains more selections, so more board events occur between a franchise's picks).
- **D3 baseline/overlays (axis A):** R2/R3 `⟨applies, same_as_control, none⟩`; **R1
  `⟨applies, same_as_control, {current_observation}⟩`** — the current-pool observation is
  load-bearing here: every R1 read must carry it rather than any imported F1 presumption about
  membership.
- **D4 cadence:** applicable. Gap **classes** are defined relative to mechanism and league size
  (D4 §18.2.3), so F3's classes resolve against F3's own declared format — no gap is
  automatically `long`, and no class is imported from F1.
- **D5 path state / R1 pool status (axis B, per read):** *pool:* *stipulated observation
  O-F3r* — a fresh post-startup pool observation resolves a reduced but non-empty eligible
  membership → R1 pool status `pool_resolved_nonempty` (sparse membership may be described with
  D3's degeneracy wording; description, not a state). Without O-F3r → `pool_unresolved`.
  *Path:* *stipulated observation O-F3p* — `O-Path(F3)` complete with at least one admissible
  witness per stated pattern → `defined`; complete with no admissible witness → `defined-empty`;
  any missing component → `unresolved`.
- **Assumption exposed:** waiver-liquidity portability — ordinary and deep formats must not
  silently share R1 survival outcome or runtime state (T25).
- **Missing evidence/contract:** current pool observation becomes load-bearing (runtime producer
  unassigned).
- **Required guard:** T25 — R1's axis-A outcome and axis-B state must be re-resolved per format
  and per moment.

#### F4 — 32-team extreme-depth dynasty

- **Format-static inputs:** 32 franchises; F1-like lineup; ordinary bench (~15–25 spots). The
  aggregate roster capacity is large relative to any typically declared player-pool size; any
  claim about the rostered share of a specific population requires a declared pool size plus a
  current observation, and is `unresolved` without them.
- **Mechanism / acquisition:** M1 snake.
- **Player-pool composition:** combined pool.
- **Lineup/roster rules:** as F1 at 32-franchise scale; E1 compression extreme.
- **D2 dimensions under stress:** E1 (extreme), E7 (board depletion can reach per-position
  exhaustion — an observation-resolved possibility, not a format consequence), E9 (waiver
  consequences extreme), E10 (stressed only through the O-F4p observations below; format scale
  alone establishes no path consequence).
- **D3 baseline/overlays (axis A):** R2/R3 `⟨applies, same_as_control, none⟩` in-draft; **R1
  `⟨applies, same_as_control, {current_observation}⟩`** — its pool status is an observation
  question, resolved per read below.
- **D4 cadence:** applicable; the per-round selection count is the largest **within the declared
  F1–F8 comparison set** (the stated universe). Tier-survival claims across such gaps are doubly
  gated (board evidence + missing tier contract → T15).
- **D5 path state / R1 pool status (axis B, per read):** *pool:* *stipulated observation
  O-F4r* — a fresh post-startup pool observation resolves **exactly zero** eligible unrostered
  members in the referenced position classes → R1 pool status `pool_resolved_empty`. Variant
  *O-F4r′* — a small but non-zero membership → `pool_resolved_nonempty` (D3 degeneracy wording
  as description). Without a fresh observation → `pool_unresolved`; format scale alone proves
  nothing. *Path:* *stipulated observation O-F4p* — `O-Path(F4)` complete, and the resolved
  witness set contains **no admissible witness** for a stated constraint pattern → that path is
  `defined-empty` (theoretically defined, structurally unreachable). Variant *O-F4p′* —
  `O-Path(F4)` complete with at least one admissible witness → `defined`, however narrow the
  set. Any missing component → `unresolved`.
- **Assumption exposed:** two guarded conflations — (a) modeling 32 teams as a scaled 12-team
  structure: every E1/E2/E9-derived input must be re-declared against the 32-team format, not
  multiplied up from a shallow one (T23 fires on any read that attempts the scaling);
  (b) importing post-startup waiver-liquidity presumptions (T25 fires on the import).
- **Missing evidence/contract:** as F3, more acutely; every `defined-empty` claim requires the
  complete fresh observations stipulated above (D5 four-state discipline).
- **Required guard:** T23 + T25; NE7 stands (an observed-empty state is evidence about now, in
  both directions).

#### F5 — flex-heavy / TE-premium dynasty (two explicit subcases)

Flex-heavy lineups and TE-premium scoring are structurally different modifiers and are recorded
separately; a combined league declares both and takes both subcases' consequences.

**F5a — flex-heavy subcase**

- **Format-static inputs:** 10–14 franchises; lineup with multiple flex slots (e.g. 2–3 W/R/T
  flexes); ordinary scoring; F1's declared absences carry over.
- **Mechanism / acquisition:** M1 snake (declared). **Player-pool composition:** combined pool.
- **D2 dimensions under stress:** E3 (eligibility structure — slot unions govern more of the
  lineup than fixed positional slots do).
- **D3 baseline/overlays (axis A):** primaries unchanged; for **flex-class slots**, replacement
  reads are `⟨applies, redeclared, none⟩` (the union must be declared); for **fixed positional
  slots**, positional reads remain `⟨applies, same_as_control, none⟩`. A positional read offered
  where the referenced slot is a flex union is a T28 omission failure.
- **D4 cadence:** applicable. Whether positional runs couple across union positions is a
  board-dynamic question requiring current board evidence — `unresolved` without it; the
  eligibility structure alone establishes no run consequence.
- **D5 path state (axis B, per read):** *stipulated observation O-F5ap* — `O-Path(F5a)`
  complete (including the declared union constraints) with at least one admissible witness per
  stated pattern → `defined`; complete with no admissible witness → `defined-empty`; any
  missing component → `unresolved`. No claim about widened or narrowed witness sets is made
  without consumer-owned evidence.
- **Assumption exposed:** the stable-positional-partition assumption — positional reads are not
  portable to slots whose eligibility is a union (T28).
- **Missing evidence/contract:** as F1.
- **Required guard:** T28; NE4 stands.

**F5b — TE-premium-only subcase**

- **Format-static inputs:** F1-like lineup (no extra flex slots); TE-premium scoring declared as
  an E3 format-static scoring rule.
- **Mechanism / acquisition:** M1 snake (declared). **Player-pool composition:** combined pool.
- **D2 dimensions under stress:** E3 (scoring rule only). **TE-premium does not alter slot
  eligibility**: no union changes, R5 consequences do not arise from it.
- **D3 baseline/overlays (axis A):** all reads `⟨applies, same_as_control, none⟩` — the scoring
  rule changes no pool boundary, union, or baseline structure.
- **D4 cadence:** applicable, unchanged.
- **D5 path state (axis B):** structural path reachability is unaffected by a scoring rule; reads
  resolve as in F1. **Any effect of TE-premium on player value, scarcity, ordering, path
  preference, or which roster pattern binds is consumer-owned and `unresolved` absent a declared
  scoring/evidence contract** (none exists).
- **Assumption exposed:** the scoring-implies-structure conflation — a scoring skew must not be
  converted into an eligibility, scarcity, or path-reachability consequence without evidence.
- **Missing evidence/contract:** a scoring/evidence contract (absent); consumer value mapping
  (D2 E3 record).
- **Required guard:** T28's input clause (E3 must be declared where present) plus T31 — no
  scoring rule becomes structural or advisory by assertion.

#### F6 — startup with in-draft pick trading

- **Format-static inputs:** F1-like league; **E6 permission on** (picks tradable mid-draft).
- **Mechanism / acquisition:** M1 snake skeleton; realized cadence mutable per trade events.
- **Player-pool composition:** combined pool.
- **Lineup/roster rules:** as F1.
- **D2 dimensions under stress:** E6 (transaction structure), E8 (skeleton/realization split is
  now load-bearing).
- **D3 baseline/overlays (axis A):** R2 `⟨applies, same_as_control, none⟩`; **R3
  `⟨applies, same_as_control, {trade_event_provenance, survival_evidence_contract}⟩`** — every
  R3 composition requires trade-event provenance and a current realized schedule, and its
  survival-expectation component additionally requires the (currently nonexistent)
  survival/evidence contract. Cadence and path reads carry `{trade_event_provenance}`.
- **D4 cadence:** applicable but **staleness-governed**: any cadence read is valid only under
  its trade-event stamp (T10/T13).
- **Runtime resolution (axis B, split by read type — the three reads are never bundled):**
  - *Cadence read, O-F6c:* the complete fresh trade-event log plus the current realized
    schedule, stamp current at resolution time → the cadence read resolves current (D4
    staleness semantics). A stamp predating the latest observed trade event, or skeleton-only
    provenance, → `unresolved` until re-resolved (T10/T13/T26).
  - *R3 read, O-F6r:* requires O-F6c **plus** current board state, a held future pick, **and
    the required survival/evidence contract**. That contract has no producer in the chain
    (D1 P6, D3 R3 record), so **a current R3 instance must not be resolved `defined`; it
    remains `unresolved` until the contract exists**, even with every other input fresh.
  - *Path read, O-F6p:* `O-Path(F6)` complete — including trade-event provenance as the
    applicable-provenance component — with at least one admissible witness → `defined`;
    complete with no admissible witness → `defined-empty`; any missing or stale component
    (including a stale event stamp, T21) → `unresolved`.
  The format-static trading *permission* alone establishes no fresh trade-event state.
- **Assumption exposed:** the static-order assumption — order is board state here, not rule
  state; T26 fires on any skeleton-as-realized read.
- **Missing evidence/contract:** trade-event feed provenance (runtime producer unassigned — the
  gap is sharpest in this family).
- **Required guard:** T26 (composed staleness gate over T10/T13/T21).

#### F7 — combined rookie/veteran pool versus separate rookie draft (three explicit subcases)

A separate rookie draft does not by itself imply taxi mechanics; taxi is an independent E2 rule
and is declared explicitly per subcase.

- **Format-static inputs (subcases):** **F7a** — rookies inside the startup pool; no taxi (F1
  absences carry over). **F7b** — rookies excluded from the startup, acquired in a separately
  declared later rookie draft, **with an explicitly declared taxi rule**. **F7c** — as F7b but
  **with taxi explicitly absent**.
- **Mechanism / acquisition:** M1 snake for the startup in all subcases; F7b/F7c add a later,
  separately declared rookie-acquisition structure.
- **Player-pool composition:** the stressed dimension itself (E5): combined versus separated
  pools have **different startup supply boundaries by construction**.
- **Lineup/roster/taxi/IR/cap rules:** per subcase declaration above; no mechanic is assumed
  common or typical.
- **D2 dimensions under stress:** E5 (dominant), E2 (taxi in F7b only), E9 (what post-startup
  acquisition means differs across subcases).
- **D3 baseline/overlays (axis A):** R2 is `⟨applies, redeclared, none⟩` in F7b/F7c — the same
  phrase "board replacement" ranges over a different pool than in F7a — and
  `⟨applies, same_as_control, none⟩` in F7a. **R6 (per the accepted D3 record) filters both E2
  roster mechanics and E5 combined-versus-separated rookie-pool boundaries. It is therefore
  required in F7b for rookie-pool separation *plus* the declared taxi rule, and still required
  in F7c for rookie-pool separation — only the taxi component is absent there.** R6 is identity
  only in F7a (combined pool, no mechanics declared). R1's post-startup membership boundary
  differs per subcase (rookie strata inside or outside it).
- **D4 cadence:** applicable in all subcases; unchanged by composition rule.
- **D5 path state (axis B, one state per read per subcase):** F7a — *O-F7ap:* `O-Path(F7a)`
  complete with at least one admissible witness → `defined`; complete with none →
  `defined-empty`; missing components → `unresolved`. F7b/F7c — path predicates are
  `⟨applies, redeclared, {rookie_draft_structure_declaration}⟩` (both a redeclared contract
  *and* a per-read condition — the fields are independent): a rookie-dependent path read is
  `unresolved` until the rookie-draft acquisition structure is declared; *O-F7bp/O-F7cp:* with
  that declaration and `O-Path(F7b/F7c)` complete (R6 pool-separation filtering applied; taxi
  filtering additionally in F7b), at least one admissible witness → `defined`, none →
  `defined-empty`, missing components → `unresolved`.
- **Assumption exposed:** the shared-supply-boundary assumption — combined and separated pools
  never share supply or replacement reads by default; T27 fires on any read that omits its
  composition declaration.
- **Missing evidence/contract:** F7b/F7c's rookie-draft structure declaration; the taxi rule
  declaration that separates F7b from F7c.
- **Required guard:** T27 — every supply/replacement/path read names the composition rule (and,
  where taxi filtering is claimed, the declared taxi rule) it assumed.

#### F8 — auction/salary startup

- **Format-static inputs:** F1-like league; auction acquisition with a declared budget per
  franchise; nomination order rules.
- **Mechanism / acquisition:** **M4** — no ordered selection cadence; acquisition is
  budget-constrained (D4 §18.1).
- **Player-pool composition:** combined pool (declared).
- **Lineup/roster rules:** as F1.
- **D2 dimensions under stress:** E4 (dominant — the mechanism itself), E8 (inapplicable by
  mechanism).
- **D3 baseline/overlays (axis A):** **R2 `⟨applies, redeclared, none⟩`** — the meaning of the
  current-board pool is fully preserved (the remaining nomination pool is a well-defined R2
  pool); the contract is `redeclared` because the acquisition-opportunity structure input
  differs from the M1 control declaration; **R3 `⟨does_not_apply, —, —⟩`** (no ordered future
  selection — the corrected T12 semantics: every R3 read resolves `undefined`, not
  `unresolved`); R5/R6 compose normally over R2.
- **D4 cadence:** the entire cadence family (turns, round trips, gaps, slot asymmetry, cadence
  mutation) is `⟨does_not_apply, —, —⟩` under the accepted §18.3 scoping decision — every read
  of it resolves `undefined`, never adapted, never converted to `unresolved`.
- **Runtime resolution (axis B, split by read type — R2 and path reads have separate input
  contracts):**
  - *R2 pool read, O-F8r2:* resolves against **its own D3 contract only** — a fresh
    current-board/pool-composition observation plus every actually applicable overlay (R5/R6).
    It does **not** require budget state, roster constraints, or any path witness. With O-F8r2
    → pool status `pool_resolved_nonempty` or `pool_resolved_empty` per the observation;
    without it → `pool_unresolved`.
  - *Path read (predicate `⟨applies, redeclared, {auction_opportunity_inputs}⟩`):* applicability
    is not resolution. *O-F8p (defined variant):* `O-Path(F8)` complete — with the auction
    acquisition-opportunity and budget-state inputs as its opportunity/provenance components —
    and **at least one resolved admissible auction witness** → `defined`. *O-F8p′
    (defined-empty variant):* `O-Path(F8)` complete and the resolved witness set contains **no
    admissible witness** → `defined-empty`. Any missing input → `unresolved`. Complete inputs
    make resolution possible; only the resolved witness result selects `defined` versus
    `defined-empty`. Budget *values* remain consumer-owned and budget-pressure structure
    remains deferred.
- **Assumption exposed:** cadence universality — pool and path *meanings* survive the mechanism
  change while cadence meanings do not (`undefined`); and applicability-implies-resolution is
  itself a guarded conflation (T29).
- **Missing evidence/contract:** the deferred budget-pressure structure (explicitly out of v0
  scope); the O-F8 input set (runtime producer unassigned); ordering/evidence contract as
  everywhere.
- **Required guard:** T29 — preserve R2/path *applicability* under M4, reject cadence-family and
  R3 references as `undefined`, and resolve path/pool reads only under the O-F8 input
  conditions; otherwise `unresolved`.

*(M5 — undeclared mechanism — is not a ninth format family: it is the guard state any of F1–F8
falls into if its mechanism declaration is missing. All mechanism-dependent rows become
`unresolved` and fail closed; nothing defaults to F1/M1 behavior. Encoded as T30.)*

### 24.3 Cross-case matrices (one per axis; every field single-valued, exact declared tokens)

**Axis A — definition-survival tuples** `⟨applicability, input_contract, evidence_conditions⟩`
(fields per §24.1; `—` marks fields with no value under `does_not_apply`):

| Family | R2 read | R3 read | R1 read | D4 cadence family | Fixed-slot positional read | Flex-slot union read (R5) | D5 path predicate |
|---|---|---|---|---|---|---|---|
| F1 | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ |
| F2 | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, redeclared, none⟩ | ⟨applies, same_as_control, none⟩ |
| F3 | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, {current_observation}⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ |
| F4 | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, {current_observation}⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ |
| F5a | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, redeclared, none⟩ | ⟨applies, same_as_control, none⟩ |
| F5b | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ |
| F6 | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, {trade_event_provenance, survival_evidence_contract}⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, {trade_event_provenance}⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, {trade_event_provenance}⟩ |
| F7a | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ |
| F7b | ⟨applies, redeclared, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, redeclared, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, redeclared, {rookie_draft_structure_declaration}⟩ |
| F7c | ⟨applies, redeclared, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, redeclared, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, redeclared, {rookie_draft_structure_declaration}⟩ |
| F8 | ⟨applies, redeclared, none⟩ | ⟨does_not_apply, —, —⟩ | ⟨applies, same_as_control, none⟩ | ⟨does_not_apply, —, —⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, same_as_control, none⟩ | ⟨applies, redeclared, {auction_opportunity_inputs}⟩ |

**Axis B — runtime resolution** (path reads use exact D5 tokens; pool reads use the D3
pool-status namespace; cadence reads use D4 staleness semantics; one variant per row):

| Stipulated read | Stipulated synthetic observation | Result with observation | Without |
|---|---|---|---|
| F1 R1 pool read | O-F1r: fresh pool observation, ≥1 eligible member in every declared class | pool_resolved_nonempty | pool_unresolved |
| F1 path read | O-Path(F1) complete; ≥1 admissible witness per stated pattern | defined | unresolved |
| F2 path read (witness variant) | O-F2p: O-Path(F2) complete; ≥1 admissible witness | defined | unresolved |
| F3 R1 pool read | O-F3r: fresh pool observation, reduced but non-empty membership | pool_resolved_nonempty | pool_unresolved |
| F3 path read (witness variant) | O-F3p: O-Path(F3) complete; ≥1 admissible witness | defined | unresolved |
| F4 R1 pool read (empty variant) | O-F4r: fresh pool observation, exactly zero eligible members in referenced classes | pool_resolved_empty | pool_unresolved |
| F4 R1 pool read (non-empty variant) | O-F4r′: fresh pool observation, small non-zero membership | pool_resolved_nonempty | pool_unresolved |
| F4 path read (no-witness variant) | O-F4p: O-Path(F4) complete; resolved witness set contains no admissible witness | defined-empty | unresolved |
| F4 path read (witness variant) | O-F4p′: O-Path(F4) complete; ≥1 admissible witness | defined | unresolved |
| F5a path read (witness variant) | O-F5ap: O-Path(F5a) complete; ≥1 admissible witness | defined | unresolved |
| F6 cadence read | O-F6c: complete fresh trade-event log + current realized schedule, stamp current | current (D4 staleness semantics) | unresolved |
| F6 R3 read | O-F6r: O-F6c + current board + held future pick + survival/evidence contract — **contract unavailable in the chain** | unresolved (until the contract exists) | unresolved |
| F6 path read (witness variant) | O-F6p: O-Path(F6) complete incl. trade-event provenance; ≥1 admissible witness | defined | unresolved |
| F7a path read (witness variant) | O-F7ap: O-Path(F7a) complete; ≥1 admissible witness | defined | unresolved |
| F7b path read (witness variant) | O-F7bp: rookie-draft structure declared + O-Path(F7b) complete (R6 separation + taxi filtering); ≥1 admissible witness | defined | unresolved |
| F7c path read (witness variant) | O-F7cp: rookie-draft structure declared + O-Path(F7c) complete (R6 separation filtering; no taxi component); ≥1 admissible witness | defined | unresolved |
| F8 R2 pool read (non-empty variant) | O-F8r2: fresh current-board/pool-composition observation + applicable overlays; ≥1 member | pool_resolved_nonempty | pool_unresolved |
| F8 R2 pool read (empty variant) | O-F8r2′: same inputs; zero members | pool_resolved_empty | pool_unresolved |
| F8 path read (witness variant) | O-F8p: O-Path(F8) complete incl. auction acquisition-opportunity + budget-state inputs; ≥1 resolved admissible auction witness | defined | unresolved |
| F8 path read (no-witness variant) | O-F8p′: O-Path(F8) complete; no admissible witness | defined-empty | unresolved |
| F8 R3 or cadence-family read | none possible — predicate does not apply | undefined | undefined |

**Axis C — guard registry** (declared results: `not_applicable` / `armed_not_triggered` /
`rejects_attempted_read`; a guard rejects only an explicitly supplied malformed read):

| Guard | Applicability | Fires on | Result in this record |
|---|---|---|---|
| T23 | F3, F4 | a read deriving extreme-depth inputs by scaling a shallow-format declaration | armed_not_triggered |
| T24 | F1, F2 | a QB claim silently shared across one-QB and superflex eligibility structures | armed_not_triggered |
| T25 | all families | importing an R1 survival tuple or pool status across formats or moments | armed_not_triggered |
| T26 | F6 | a skeleton-provenance or stale-stamped cadence/R3/path read | armed_not_triggered |
| T27 | F7a, F7b, F7c | a supply/replacement/path read omitting its composition (or claimed taxi) declaration | armed_not_triggered |
| T28 | F5a, F5b, F7b, and any family declaring taxi/IR/cap/flex/TE-premium rules | an applicable-overlay or input omission | armed_not_triggered |
| T29 | F8 | a cadence/R3 resolution attempt, or treating path applicability as resolution without the split O-F8 input contracts | armed_not_triggered |
| T30 | all families | a missing mechanism declaration (M5) resolved by default instead of failing closed | armed_not_triggered |
| T31 | all families | any matrix outcome presented as advice, preference, or strategy | armed_not_triggered |

Every guard reports `armed_not_triggered` here because no malformed read is supplied in this
record; `rejects_attempted_read` appears only in explicitly supplied counter-example reads (the
worked T9-style tests). Guards outside their applicability column are `not_applicable`.

Reading discipline: axis fields and namespaces never mix; `defined-empty`, `undefined`, and
`unresolved` (and their pool-status counterparts) are never interchangeable (T17); a guard
result describes a read, not a format; and no cell anywhere is a recommendation (T31).

---

## 25. D6 — Anti-conflation tests and boundary confirmation

### 25.1 Mechanically encodable tests (extending T1–T22)

- **T23 — No scaled-list modeling.** Any 32-team (or other extreme-depth) read derived by
  scaling a 10–12-team structure — multiplying supply, importing its strata coverage, or reusing
  its E1/E2/E9 declarations — is rejected. Extreme-depth formats require fresh input declarations
  for every E1/E2/E9-dependent claim.
- **T24 — QB eligibility-structure gate.** A one-QB read and a superflex read must each declare
  their eligibility structure (fixed positional slots versus QB-eligible flex unions) and their
  maximum QB-eligible lineup capacity; a claim that silently shares these structures across the
  two formats is rejected. A positional read for a fixed QB slot and a union read for a
  superflex slot are distinct and must each match the referenced slot (T5). No numeric premium
  may be attached in either direction (NE5), and no realized-demand magnitude may be asserted
  without consumer-owned evidence.
- **T25 — Waiver-liquidity gate.** R1's axis-A tuple (`⟨applicability, input_contract,
  evidence_conditions⟩`) and its axis-B pool status (`pool_resolved_nonempty` /
  `pool_resolved_empty` / `pool_undefined` / `pool_unresolved`) must each be re-resolved per
  format and per moment; importing F1's R1 tuple or pool status into a deeper format — or any
  format's prior pool status into the present — is rejected (extends NE7 and the D3 three-way
  distinction).
- **T26 — Trading staleness (composed).** In a pick-trading format, every cadence, R3, or path
  read must carry trade-event provenance; a read whose stamp predates the latest observed trade
  event is `unresolved` and must be re-resolved, never reused (composes T10, T13, T21 across
  D3/D4/D5 reads).
- **T27 — Rookie-pool boundary gate.** Every supply, replacement, or path read must name the
  player-pool composition rule (combined vs. separated, with any taxi coupling) it assumed;
  combined and separated pools never share a supply boundary by default, and an unnamed
  composition rule makes the read `unresolved`.
- **T28 — Mechanics-omission gate.** Where the declared format includes taxi, IR, positional
  caps, flex unions, or TE-premium rules, the corresponding overlay/input (R5, R6, E2, E3) cannot
  be omitted from any applicable read: omission is a composition failure (extends T1/T3), not a
  simplification.
- **T29 — Auction preservation gate.** Under M4, pool meanings (R2 and its overlays) and the
  path-reachability predicate remain **applicable** (axis A), while every cadence-family or R3
  reference is rejected as `undefined` — never resolved, never converted to `unresolved` (per
  the corrected T12 semantics). Applicability never implies resolution, and **R2 and path reads
  have separate input contracts**: a bare R2 pool read resolves against its own D3 contract only
  — fresh current-board/pool-composition observation plus every actually applicable overlay
  (O-F8r2) — and does **not** require budget state, roster constraints, or any path witness; a
  path read resolves `defined` or `defined-empty` only under the complete `O-Path(F8)` contract
  (including auction acquisition-opportunity and budget-state inputs) with a resolved witness
  result; absent any required input, the respective read is `pool_unresolved` / `unresolved`.
- **T30 — Undeclared-mechanism gate.** If the mechanism declaration is missing (M5), every
  mechanism-dependent matrix row for that format is `unresolved` and fails closed; no row
  defaults to F1/M1 (snake) behavior.
- **T31 — No advice from stress results.** No matrix outcome — degeneracy, narrowing, rejection,
  undefinedness — may be presented as advice, a directive, a slot or format preference, or a
  claimed optimal strategy. Stress-test cells describe definitional survival, not what any
  manager should do.

### 25.2 D6 boundary confirmation

D6 answers Q6 only. **The central result is that the D1–D5 semantic framework remains total
across F1–F8: every structural claim resolves to an explicit axis-A survival tuple, an exact
runtime result in its declared namespace (D5 path state, D3 pool status, or D4 staleness) under
stipulated observations, or an explicit guard-registry result — without silently defaulting
anywhere.** Some predicates correctly resolve `undefined` (R3 and the cadence family under M4),
some reads correctly stay `unresolved` absent observations or contracts (including every current
R3 instance, pending the survival/evidence contract); totality of explicit outcomes, not
universal survival, is the claim. The matrix exercises accepted D1–D5 definitions
across eight synthetic, player-free format families; the structural format numbers used
(franchise counts, lineup shapes, approximate roster capacities) are format declarations
permitted by the activation comment, not thresholds, valuations, or empirical claims. **No player names or IDs, rankings,
tiers, projections, ADP, trade values, market data, numeric replacement values, VOR, scarcity
premiums, slot valuations, pick recommendations, manager-specific conclusions, or live
draft/roster data appear anywhere in §§24–25.** The Q7 heuristic inventory was not evaluated —
`assumption exposed` rows test *definitional survival*, not the merit of any drafting heuristic.
No concept-inventory decision was made (candidate vocabulary remains unaccepted pointers); no
artifact shape was selected; no implementation proposal was created; the runtime
decision-envelope producer remains unassigned (§13.2) and the R3 survival-evidence and
tier-contract gaps remain open. **Unresolved synthesis item S1:** the accepted D3 R1 record's
combined "defined-empty / degenerate (empty or nearly empty)" wording is terminologically
ambiguous against D6's separated `pool_resolved_empty` / `pool_resolved_nonempty` statuses; D6
records the ambiguity without reinterpreting or altering the accepted D3 text. Resolving S1 may
require amending accepted D3 wording, which requires separate operator authorization at a later
synthesis frontier. The source truth → artifact → adapter → surface invariant and
the human final-decision boundary are preserved. Only this canonical document changed; no PR or
merge; no later frontier activated.

---

## 26. D7 frontier proposal (historical — subsequently activated)

> This section is preserved as the D6-era proposal record. D7 was activated by
> [comment 5021737357](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5021737357)
> (verified in §1) and its output is recorded in §§27–28 below.

```text
D7 — heuristic failure matrix (issue #2, Q7 only)
```

Rationale: Q7 is the last analytical frontier before synthesis. The D6 matrix now supplies
exactly what Q7's heuristic evaluation needs and was missing: per-format outcome classes showing
*where* ordinary assumptions survive, become conditional, or fail — so each Q7 heuristic (always
take best player available; QBs early in superflex; depth from waivers; fade positional runs;
and the rest of the v0.2 Q7 list) can be given its valid context, failure context,
missing-evidence warning, misuse risk, and descriptively phrased structural consequence against
the F1–F8 families, without imperatives (v0.2 §9's phrasing guard).

**D7 is proposed only. It is NOT activated.** Q7–Q8 work, concept-inventory decisions,
artifact-shape selection, all later frontiers, and implementation remain inactive until a new
signed activation comment on issue #2 satisfying the v0.2 §14 requirements authorizes the next
frontier explicitly.

*(End of historical D7 proposal. D7 was subsequently activated; see §§27–28.)*

---

## 27. D7 — Heuristic failure matrix (Q7)

> D7 record. Authorized by [comment 5021737357](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/2#issuecomment-5021737357);
> Q7 only. Exactly the eight authorized heuristic families are evaluated, none is adopted as a
> universal rule, and **no outcome below is advice**: every entry is a descriptive claim about
> when a heuristic's structure holds, fails, or cannot be evaluated, phrased without imperatives.
> All accepted D1–D6 machinery is used as-is; S1 remains unresolved and untouched. Candidate
> concept vocabulary remains unaccepted pointers.

### 27.1 Claim-component model and record shape (atomic mechanical contract)

Each mechanical row is a **component instance keyed by ⟨heuristic, component, context case⟩**.
The context key names the format family, mechanism class, or stipulated observation case the row
evaluates; whenever a format, mechanism, or observation changes any field value, the component
splits into separate keyed rows. **Every scalar field contains exactly one declared token** —
no compound cells, no undeclared dashes (T32/T41).

**Fields and declared token sets:**

| Field | Declared tokens | Semantics |
|---|---|---|
| `component_kind` | `premise` \| `descriptive_observation` \| `policy_conclusion` \| `universal_form` | exact enum token only — never combined with prose |
| `component_id` | a registered identifier from the component registry below | unique per claim component; human-readable labels live in the registry, never in scalar cells |
| `context_id` | a registered identifier from the context registry below; `ctx_any` when no field varies by context | unique per context case; T41 rejects unregistered IDs |
| `applicability` | `applies` \| `does_not_apply` | D6 axis-A semantic applicability in the row's context |
| `input_contract` | `same_as_control` \| `redeclared` \| `not_applicable` | D6 axis-A contract relationship; `not_applicable` only under `does_not_apply` |
| `evidence_conditions` | a set of registry tokens; `none` (no conditions beyond the universal freshness floor); `not_applicable` (field has no meaning for this row kind) | registry: `current_observation`, `trade_event_provenance`, `transition_provenance` (comparable pre/post `O-Path` states + event + provenance per T18), `survival_evidence_contract`, `rookie_draft_structure_declaration`, `auction_opportunity_inputs`, `ordering_evidence_contract`, `depth_adequacy_contract`, `consumer_weighting_contract`, `risk_evidence_contract`, `acquisition_event_observation_contract`, `age_experience_role_security_contracts`, `shape_instance_inputs` (resolved E10/roster/FORGE/consumer inputs), `timing_boundary_declaration` (a declared "early/later" boundary), `run_predicate_declaration` (a declared predicate for what qualifies as a positional-run cluster — no accepted declaration exists) |
| `runtime_namespace` | accepted D6 namespaces: `d5_path`, `d3_pool`, `d4_cadence`; **D7-only namespace:** `d7_consumer_evidence`; declared null: `no_runtime_read` | `d7_consumer_evidence` is declared here for consumer-owned evidence reads (adequacy, weighting, shape instances, risk orderings, board-event clustering) that have **no accepted D6 namespace — it is D7-only and is not presented as an accepted D6 namespace**. `no_runtime_read` marks rows with no runtime instance (definitional premises, format-static facts, policy conclusions, universal forms) |
| `runtime_state` | in `d5_path`: `defined` \| `defined-empty` \| `undefined` \| `unresolved`; in `d3_pool`: `pool_resolved_nonempty` \| `pool_resolved_empty` \| `pool_unresolved` \| `pool_undefined`; in `d4_cadence`: `current` \| `undefined` \| `unresolved` (the accepted `undefined` restored — an attempted cadence/timing read under M4 resolves `undefined` even where the predicate `does_not_apply` on axis A); in `d7_consumer_evidence`: `resolved` \| `unresolved`; under `no_runtime_read`: `not_applicable` | exactly one state, valid in the row's namespace. **D5 witness-result selection is exact:** complete inputs + ≥1 admissible witness → `defined`; complete inputs + zero admissible witnesses → `defined-empty`; missing, stale, or incomplete inputs → `unresolved`. "Witnesses resolved" alone never selects `defined` |
| `policy_boundary` | `descriptive_only` \| `prohibited_output` \| `not_applicable` | the policy axis, fully separate from evidence resolution: a row can be `descriptive_only` **and** runtime-`unresolved` at once. `prohibited_output` is a permanent boundary that no contract can cure and is never carried in any missing-contract registry |
| `guards` | a keyed map over the row's **complete applicable-guard set**: `T-id → result`, exactly one D6 Axis-C result per guard ID: `armed_not_triggered` \| `rejects_attempted_read`. Coverage is total by construction — the listed key set **is** the applicable set, every unlisted guard is `not_applicable` for that row, and T41 verifies both coverage and uniqueness | there is **no separate form-guard axis**: universal-form rows and prohibited policy-conclusion rows are **explicitly supplied malformed/prohibited reads**, so each governing guard records `rejects_attempted_read` in that row — including `T40` on **every** `prohibited_output` row alongside the heuristic-specific guard; the same guards remain `armed_not_triggered` in well-formed rows |

Rules: a rejected universal form endorses nothing — not its negation and not any bounded
component. Missing-evidence outcomes are preserved as the exact `unresolved` state of the row's
namespace. `unresolved_pending_contract` is **removed from the policy axis**: pending-contract
status is expressed by `runtime_state` = `unresolved` plus the named contract token in
`evidence_conditions`. Each heuristic record also retains the twelve narrative fields required
by the activation comment; the component table is the mechanical surface, and the narrative
never overrides it.

**Component registry** (every `component_id` used in §27.2/§27.3; kind and label are registry
data, not cell content):

| component_id | component_kind | Label |
|---|---|---|
| h1_obs_ordering_paths | descriptive_observation | local ordering vs. successor paths |
| h1_pol_select_top | policy_conclusion | select the ordering-top |
| h1_uni | universal_form | "always take best player available" |
| h2_pre_superflex_capacity | premise | superflex expands QB eligibility and maximum QB-eligible lineup capacity |
| h2_pol_early_qb | policy_conclusion | acquire QBs early |
| h2_uni | universal_form | "always secure QBs early in superflex" |
| h3_obs_state_bindingness | descriptive_observation | need bindingness at an observed state |
| h3_obs_transition | descriptive_observation | need-related preservation/closure across a transition |
| h3_pol_never_need | policy_conclusion | never draft for need |
| h3_uni | universal_form | "always avoid drafting for need" |
| h4_obs_state_bindingness | descriptive_observation | constraint/path bindingness at an observed state |
| h4_obs_transition | descriptive_observation | bindingness preservation/closure across a transition |
| h4_obs_timing | descriptive_observation | "early/later rounds" timing read |
| h4_pol_ignore_early | policy_conclusion | ignore roster construction until later rounds |
| h4_uni | universal_form | "always ignorable early" |
| h5_obs_membership | descriptive_observation | eligible acquisition membership at t |
| h5_obs_adequacy | descriptive_observation | "usable depth" adequacy claim |
| h5_uni | universal_form | "depth can always be found on waivers" |
| h6_pre_run_pattern | premise | clustered same-position selection pattern (M1–M3 predicate) |
| h6_obs_acq_clustering | descriptive_observation | auction acquisition-clustering analogue |
| h6_pol_follow_fade | policy_conclusion | follow or fade runs |
| h6_uni | universal_form | "positional runs should always be faded" |
| h7_pre_distinct_axes | premise | timeline and production are distinct evidence axes per V1 |
| h7_obs_weighting | descriptive_observation | bounded weighting of the axes |
| h7_uni | universal_form | "age and insulation always dominate current production" |
| h8_pre_shape_semantics | premise | balance/concentration as shape semantics |
| h8_obs_shape_instance | descriptive_observation | current shape instance for an actual roster |
| h8_obs_risk_ordering | descriptive_observation | risk ordering over shapes |
| h8_pol_prefer_shape | policy_conclusion | prefer a roster shape |
| h8_uni | universal_form | "balanced rosters are always safer" |

**Context registry** (every `context_id` used in §27.2/§27.3):

| context_id | Context case |
|---|---|
| ctx_any | no field varies by context |
| ctx_f1 | F1 family (no superflex slot where relevant) |
| ctx_f2 | F2 family (superflex declared) |
| ctx_m13 | ordered-pick mechanisms M1–M3 |
| ctx_m4 | auction/salary mechanism M4 |
| ctx_m5 | undeclared mechanism M5 |
| ctx_m13_obs_w | M1–M3; stipulated current-state observation, complete inputs, ≥1 admissible witness |
| ctx_m13_obs_0 | M1–M3; stipulated current-state observation, complete inputs, zero admissible witnesses |
| ctx_m13_obs_x | M1–M3; current-state observation missing or incomplete |
| ctx_m13_tr_w | M1–M3; stipulated T18 transition, complete inputs, post-state witness set ≥1 (preservation observed) |
| ctx_m13_tr_0 | M1–M3; stipulated T18 transition, complete inputs, post-state witness set zero (closure observed) |
| ctx_m13_tr_x | M1–M3; transition observation missing or incomplete |
| ctx_m4_op_w | M4; O-F8p: complete auction path inputs, ≥1 admissible witness |
| ctx_m4_op_0 | M4; O-F8p′: complete auction path inputs, zero admissible witnesses |
| ctx_m4_op_x | M4; auction path inputs missing or incomplete |
| ctx_m13_notrade | M1–M3 without in-draft trading; fresh board observation |
| ctx_m13_trading | M1–M3 with in-draft trading (trade-event provenance required) |
| ctx_pool_ctrl_nonempty | control-like combined pool (F1-class); fresh observation, ≥1 eligible member |
| ctx_pool_f8_nonempty | F8 combined pool (accepted D6 §24.3: F8 R1 same_as_control); fresh observation, ≥1 eligible member |
| ctx_pool_f4_empty | F4-class; fresh observation, zero eligible members |
| ctx_pool_f7bc_nonempty | F7b/F7c partitioned pool boundary; fresh observation, ≥1 eligible member |
| ctx_pool_ctrl_missing | control-like combined pool (incl. F8); no fresh observation |
| ctx_pool_f7bc_missing | F7b/F7c partitioned boundary; no fresh observation |
| ctx_adq_noncomp | adequacy claim, non-comparative use |
| ctx_adq_comp | adequacy claim, comparative/ranking use |

### 27.2 Heuristic records (H1–H8)

#### H1 — "Always take best player available"

- **Descriptive meaning:** at every selection, take the top element of some ordering over
  currently eligible assets, independent of roster structure.
- **Valid structural context:** where a consumer-declared ordering exists *and* a **stipulated
  transition** is resolved — comparable pre/post `O-Path` states, the selection event, its
  provenance, and the resolved witness result (T16/T18) — the bounded claim "this
  local-ordering selection did not close the observed paths *across this resolved transition*"
  can be coherent as a resolved observation, never as a rule. A current state with wide witness
  sets establishes nothing about any selection's consequence by itself.
- **Failure context:** wherever path constraints bind: a locally maximal selection can map to a
  successor state whose resolved witness set for a stated pattern is empty (F4-class states,
  cap-constrained R6 states, late-obligation states).
- **Families:** F1 (bounded coherence with evidence); F4 (failure exposure); all families for
  the missing-ordering dimension.
- **D2 dimensions:** E10, E7, E1/E2 (obligation structure).
- **D3:** composed baseline reads enter only as guarded evidence components (T19).
- **D4:** between-pick depletion (gap structure) determines how much board change separates
  local reads from their successor states.
- **D5:** T16 is the core boundary — local eligibility never substitutes for successor-state
  path resolution; preserve/close claims need T18 provenance.
- **D6 relationships:** the presupposed ordering is an **unavailable input** (no
  ordering/evidence contract exists); path claims resolve only under `O-Path(F)`; T16/T18/T22
  armed.
- **Missing evidence/contract:** the consumer ordering/evidence contract; successor-state path
  resolution.
- **Misuse risk:** treating local-ordering maximality as proof of path preservation or roster
  quality; silently substituting an undeclared ordering.
- **Structural consequence (descriptive):** local-ordering maximality and path preservation are
  independent properties; each requires its own resolved evidence, and neither implies the
  other.
- **Component table:**

| component_kind | component_id | context_id | Applicability | Input contract | Evidence conditions | Namespace | State | Policy boundary | Guards (complete applicable set) |
|---|---|---|---|---|---|---|---|---|---|
| descriptive_observation | h1_obs_ordering_paths | ctx_m13 | applies | same_as_control | {ordering_evidence_contract, current_observation, transition_provenance} | d5_path | unresolved | descriptive_only | T16: armed_not_triggered; T18: armed_not_triggered; T34: armed_not_triggered |
| policy_conclusion | h1_pol_select_top | ctx_any | applies | same_as_control | {ordering_evidence_contract} | no_runtime_read | not_applicable | prohibited_output | T22: rejects_attempted_read; T40: rejects_attempted_read |
| universal_form | h1_uni | ctx_any | applies | same_as_control | not_applicable | no_runtime_read | not_applicable | prohibited_output | T16: rejects_attempted_read; T40: rejects_attempted_read |

#### H2 — "Always secure quarterbacks early in superflex"

- **Descriptive meaning:** a temporal-priority claim: expanded QB-eligible lineup capacity in
  superflex warrants early QB acquisition.
- **Valid structural context:** the *premise* is structurally real in F2: a superflex slot
  expands QB eligibility and maximum QB-eligible lineup capacity (accepted D6 F2 record).
- **Failure context:** the *timing conclusion* is an optimal-timing claim. Optimal timing is
  prohibited output, and its evaluation would anyway require realized demand/supply/behavioral
  evidence (consumer-owned, absent) plus an ordering contract (absent).
- **Families:** F2 (premise applies); F1 (premise `does_not_apply` — no superflex slot); F8
  ("early" `does_not_apply` under M4 — no rounds).
- **D2 dimensions:** E3, E1.
- **D3:** fixed-QB-slot positional reads and superflex union reads remain distinct (T5/T24).
- **D4:** "early" presupposes an ordered round structure (M1–M3 only).
- **D5:** any claim that QB-deferring paths close faster requires `O-Path(F2)` resolution —
  refused without it (accepted D6 F2 correction).
- **D6 relationships:** F2 union read `⟨applies, redeclared, none⟩`; realized-demand magnitude
  `unresolved`; T24 armed.
- **Missing evidence/contract:** realized-demand evidence; ordering contract; survival/evidence
  contract (R3 instances `unresolved`).
- **Misuse risk:** converting eligibility expansion into a numeric premium (NE5) or a timing
  command (T31); silently sharing demand structure across F1/F2 (T24).
- **Structural consequence (descriptive):** a superflex slot expands QB eligibility and raises
  the maximum QB-eligible lineup capacity per franchise (the accepted D6 F2 statement, exactly);
  nothing about realized demand, competition, narrowing, or selection timing follows from the
  format declaration alone.
- **Component table:**

| component_kind | component_id | context_id | Applicability | Input contract | Evidence conditions | Namespace | State | Policy boundary | Guards (complete applicable set) |
|---|---|---|---|---|---|---|---|---|---|
| premise | h2_pre_superflex_capacity | ctx_f2 | applies | redeclared | none | no_runtime_read | not_applicable | descriptive_only | T24: armed_not_triggered |
| premise | h2_pre_superflex_capacity | ctx_f1 | does_not_apply | not_applicable | not_applicable | no_runtime_read | not_applicable | descriptive_only | T24: armed_not_triggered |
| policy_conclusion | h2_pol_early_qb | ctx_m13 | applies | same_as_control | {ordering_evidence_contract, survival_evidence_contract} | no_runtime_read | not_applicable | prohibited_output | T35: rejects_attempted_read; T40: rejects_attempted_read |
| policy_conclusion | h2_pol_early_qb | ctx_m4 | does_not_apply | not_applicable | not_applicable | no_runtime_read | not_applicable | prohibited_output | T35: rejects_attempted_read; T40: rejects_attempted_read |
| universal_form | h2_uni | ctx_any | applies | same_as_control | not_applicable | no_runtime_read | not_applicable | prohibited_output | T24: rejects_attempted_read; T35: rejects_attempted_read; T40: rejects_attempted_read |

#### H3 — "Avoid drafting for need"

- **Descriptive meaning:** the negative form of H1: roster-obligation state ("need") ought not
  influence selection.
- **Valid structural context:** a state observation can show that need was non-binding *at that
  observed state* (wide resolved witness sets). But "ignoring need had no consequence" is a
  **transition claim**, valid only under a stipulated transition — comparable pre/post `O-Path`
  states, the selection event, event provenance, and the resolved witness result (T16/T18/T34).
  State observations and policy conclusions are distinct: the former never establishes the
  latter.
- **Failure context:** when unfilled obligations approach the count of remaining acquisition
  opportunities, need is a binding constraint: paths that ignore it resolve `defined-empty`
  under `O-Path(F)` observation. The R4 overlay switches what "need" denotes (starter demand
  versus bench/depth demand) at the obligation-fill regime boundary (NE3).
- **Families (exposure contexts only — outcomes arise solely from stipulated observations and
  transitions, never from family membership):** F1 (ordinary obligation structure); F3/F4
  (compressed supply-demand contexts); F7b/c (partitioned-pool obligation structure).
- **D2 dimensions:** E1, E2, E8, E10.
- **D3:** R4 regime overlay is load-bearing; T4 roster-relativity.
- **D4:** remaining-opportunity counts are cadence-dependent (consumer-owned numerics).
- **D5:** binding-need failures are exactly defined-empty witness results — never assumptions.
- **D6 relationships:** per-read `O-Path` discipline; T4/T18 armed.
- **Missing evidence/contract:** ordering contract; per-state path resolution.
- **Misuse risk:** reading the heuristic's failure as advice to draft for need (both directions
  are non-advice, T31); applying one roster's regime to another (T4).
- **Structural consequence (descriptive):** need is a roster-relative, regime-switched
  constraint whose bindingness is an observation, not a stance; a universal "never consider
  need" claim ignores the regime switch and the binding case.
- **Component table:**

| component_kind | component_id | context_id | Applicability | Input contract | Evidence conditions | Namespace | State | Policy boundary | Guards (complete applicable set) |
|---|---|---|---|---|---|---|---|---|---|
| descriptive_observation | h3_obs_state_bindingness | ctx_m13_obs_w | applies | same_as_control | {current_observation} | d5_path | defined | descriptive_only | T4: armed_not_triggered; T34: armed_not_triggered |
| descriptive_observation | h3_obs_state_bindingness | ctx_m13_obs_0 | applies | same_as_control | {current_observation} | d5_path | defined-empty | descriptive_only | T4: armed_not_triggered; T34: armed_not_triggered |
| descriptive_observation | h3_obs_state_bindingness | ctx_m13_obs_x | applies | same_as_control | {current_observation} | d5_path | unresolved | descriptive_only | T34: armed_not_triggered |
| descriptive_observation | h3_obs_transition | ctx_m13_tr_w | applies | same_as_control | {current_observation, transition_provenance} | d5_path | defined | descriptive_only | T18: armed_not_triggered; T34: armed_not_triggered |
| descriptive_observation | h3_obs_transition | ctx_m13_tr_0 | applies | same_as_control | {current_observation, transition_provenance} | d5_path | defined-empty | descriptive_only | T18: armed_not_triggered; T34: armed_not_triggered |
| descriptive_observation | h3_obs_transition | ctx_m13_tr_x | applies | same_as_control | {current_observation, transition_provenance} | d5_path | unresolved | descriptive_only | T34: armed_not_triggered |
| policy_conclusion | h3_pol_never_need | ctx_any | applies | same_as_control | {ordering_evidence_contract} | no_runtime_read | not_applicable | prohibited_output | T40: rejects_attempted_read |
| universal_form | h3_uni | ctx_any | applies | same_as_control | not_applicable | no_runtime_read | not_applicable | prohibited_output | T4: rejects_attempted_read; T40: rejects_attempted_read |

#### H4 — "Ignore roster construction until later rounds"

- **Descriptive meaning:** a temporal claim that path constraints are non-binding in early
  rounds.
- **Valid structural context:** in F1-class formats, resolved early-state observations can show
  wide witness sets — the bounded observation "constraints were non-binding at this observed
  state" is coherent when resolved. Any claim that *ignoring construction* preserved or closed
  paths is a transition claim requiring the stipulated T16/T18/T34 discipline (comparable
  pre/post `O-Path` states, event, provenance, resolved witness result); format membership
  alone establishes neither heuristic success nor failure.
- **Failure context:** F4-class depth can bind constraints early (with `O-Path(F4)` evidence);
  F2 changes capacity structure; F7b/c change obligation structure; F6 makes the binding moment
  mutable via trades; "later rounds" has no referent under F8/M4.
- **Families (exposure contexts only — outcomes arise solely from stipulated observations and
  transitions, never from family membership):** F1 (ordinary structure); F2 (altered eligibility
  capacity); F4 (compressed supply-demand); F6 (mutable opportunity structure); F7b/c
  (partitioned-pool obligations); F8 (auction opportunity structure — bindingness applies with
  redeclared inputs; only the round-timing predicate has no referent).
- **D2 dimensions:** E8, E10, E5.
- **D3:** R4 regime overlay; composed baselines as evidence only.
- **D4:** round structure exists only under M1–M3; trade events move the binding moment (T21).
- **D5:** bindingness is a per-state witness question; "early slack" is an observation, never a
  format property.
- **D6 relationships:** `O-Path` discipline; the undeclared threshold "later" has no mechanical
  token — any use must declare its boundary; T23/T25-style import guards apply to slack
  presumptions.
- **Missing evidence/contract:** per-state path resolution; a declared threshold for
  "early/later" (undeclared in the heuristic).
- **Misuse risk:** importing F1 early-slack presumptions into deeper or restructured formats;
  treating "later" as if it named a defined round.
- **Structural consequence (descriptive):** when path constraints begin to bind is a resolved
  property of a specific format and board state, not of round labels.
- **Component table:**

| component_kind | component_id | context_id | Applicability | Input contract | Evidence conditions | Namespace | State | Policy boundary | Guards (complete applicable set) |
|---|---|---|---|---|---|---|---|---|---|
| descriptive_observation | h4_obs_state_bindingness | ctx_m13_obs_w | applies | same_as_control | {current_observation} | d5_path | defined | descriptive_only | T34: armed_not_triggered |
| descriptive_observation | h4_obs_state_bindingness | ctx_m13_obs_0 | applies | same_as_control | {current_observation} | d5_path | defined-empty | descriptive_only | T34: armed_not_triggered |
| descriptive_observation | h4_obs_state_bindingness | ctx_m13_obs_x | applies | same_as_control | {current_observation} | d5_path | unresolved | descriptive_only | T34: armed_not_triggered |
| descriptive_observation | h4_obs_state_bindingness | ctx_m4_op_w | applies | redeclared | {auction_opportunity_inputs, current_observation} | d5_path | defined | descriptive_only | T29: armed_not_triggered; T34: armed_not_triggered |
| descriptive_observation | h4_obs_state_bindingness | ctx_m4_op_0 | applies | redeclared | {auction_opportunity_inputs, current_observation} | d5_path | defined-empty | descriptive_only | T29: armed_not_triggered; T34: armed_not_triggered |
| descriptive_observation | h4_obs_state_bindingness | ctx_m4_op_x | applies | redeclared | {auction_opportunity_inputs, current_observation} | d5_path | unresolved | descriptive_only | T29: armed_not_triggered |
| descriptive_observation | h4_obs_transition | ctx_m13_tr_w | applies | same_as_control | {current_observation, transition_provenance} | d5_path | defined | descriptive_only | T18: armed_not_triggered; T34: armed_not_triggered |
| descriptive_observation | h4_obs_transition | ctx_m13_tr_0 | applies | same_as_control | {current_observation, transition_provenance} | d5_path | defined-empty | descriptive_only | T18: armed_not_triggered; T34: armed_not_triggered |
| descriptive_observation | h4_obs_transition | ctx_m13_tr_x | applies | same_as_control | {current_observation, transition_provenance} | d5_path | unresolved | descriptive_only | T34: armed_not_triggered |
| descriptive_observation | h4_obs_timing | ctx_m13 | applies | same_as_control | {timing_boundary_declaration} | d4_cadence | unresolved | descriptive_only | T35: armed_not_triggered |
| descriptive_observation | h4_obs_timing | ctx_m4 | does_not_apply | not_applicable | not_applicable | d4_cadence | undefined | descriptive_only | T35: armed_not_triggered |
| descriptive_observation | h4_obs_timing | ctx_m5 | applies | same_as_control | {timing_boundary_declaration} | d4_cadence | unresolved | descriptive_only | T35: armed_not_triggered |
| policy_conclusion | h4_pol_ignore_early | ctx_m13 | applies | same_as_control | {ordering_evidence_contract} | no_runtime_read | not_applicable | prohibited_output | T35: rejects_attempted_read; T40: rejects_attempted_read |
| policy_conclusion | h4_pol_ignore_early | ctx_m4 | does_not_apply | not_applicable | not_applicable | no_runtime_read | not_applicable | prohibited_output | T35: rejects_attempted_read; T40: rejects_attempted_read |
| universal_form | h4_uni | ctx_any | applies | same_as_control | not_applicable | no_runtime_read | not_applicable | prohibited_output | T25: rejects_attempted_read; T35: rejects_attempted_read; T40: rejects_attempted_read |

#### H5 — "Depth can always be found on waivers"

- **Descriptive meaning:** a standing R1 liquidity presumption: the post-startup unrostered
  pool reliably contains usable depth.
- **Valid structural context:** a `pool_resolved_nonempty` observation establishes **only that
  at least one eligible unrostered acquisition member exists** at that moment — per the
  accepted D3 record, it establishes no adequacy, usefulness, value, or ordering. The
  narrowed descriptive claim "eligible acquisition membership existed at t" is coherent per
  observation; the heuristic's own phrase "usable depth" invokes an adequacy judgment that
  remains `unresolved` pending a declared depth/adequacy evidence contract (plus an ordering
  contract wherever comparison or ranking is involved).
- **Failure context:** F3 (observation-dependent), F4 (a stipulated fresh observation can
  resolve `pool_resolved_empty`); the issue's own §9 negative case; NE7 cuts both directions
  (present dryness proves no permanent law; future liquidity may not be assumed either).
- **Families (exposure contexts only — pool status arises solely from stipulated observations,
  never from family membership):** F1 (ordinary combined-pool context); F3/F4 (compressed-depth
  observation contexts); F7b/c (partitioned membership boundary — redeclared R1 contract); F8
  (combined pool with `same_as_control` R1 contract per accepted D6 §24.3 — the waiver boundary
  is independent of the draft mechanism).
- **D2 dimensions:** E1, E2, E5, E9.
- **D3:** R1 with R5/R6 overlays; the D3 pool-status namespace governs.
- **D4:** none directly (waivers are post-startup).
- **D5:** paths that depend on post-startup acquisition inherit R1's pool status as an evidence
  component (T19).
- **D6 relationships:** R1 tuple carries `{current_observation}` in deep formats; statuses
  resolve only per O-F1r/O-F3r/O-F4r-class observations; T25 armed.
- **Missing evidence/contract:** the current pool observation (runtime producer unassigned);
  the depth/adequacy evidence contract; the ordering/evidence contract for any comparative use.
- **Misuse risk:** importing pool status across formats or moments (T25); reading
  `pool_resolved_empty` as permanent (NE7).
- **Structural consequence (descriptive):** R1 pool status is a time-indexed, format-relative
  observation of eligible membership. A `pool_resolved_empty` observation refutes the literal
  universal availability claim; a `pool_resolved_nonempty` observation **does not validate
  usable depth** — the two directions are asymmetric (T36).
- **Component table:**

| component_kind | component_id | context_id | Applicability | Input contract | Evidence conditions | Namespace | State | Policy boundary | Guards (complete applicable set) |
|---|---|---|---|---|---|---|---|---|---|
| descriptive_observation | h5_obs_membership | ctx_pool_ctrl_nonempty | applies | same_as_control | {current_observation} | d3_pool | pool_resolved_nonempty | descriptive_only | T25: armed_not_triggered; T36: armed_not_triggered |
| descriptive_observation | h5_obs_membership | ctx_pool_f8_nonempty | applies | same_as_control | {current_observation} | d3_pool | pool_resolved_nonempty | descriptive_only | T25: armed_not_triggered; T36: armed_not_triggered |
| descriptive_observation | h5_obs_membership | ctx_pool_f4_empty | applies | same_as_control | {current_observation} | d3_pool | pool_resolved_empty | descriptive_only | T25: armed_not_triggered; T36: armed_not_triggered |
| descriptive_observation | h5_obs_membership | ctx_pool_f7bc_nonempty | applies | redeclared | {current_observation} | d3_pool | pool_resolved_nonempty | descriptive_only | T25: armed_not_triggered; T36: armed_not_triggered |
| descriptive_observation | h5_obs_membership | ctx_pool_ctrl_missing | applies | same_as_control | {current_observation} | d3_pool | pool_unresolved | descriptive_only | T36: armed_not_triggered |
| descriptive_observation | h5_obs_membership | ctx_pool_f7bc_missing | applies | redeclared | {current_observation} | d3_pool | pool_unresolved | descriptive_only | T36: armed_not_triggered |
| descriptive_observation | h5_obs_adequacy | ctx_adq_noncomp | applies | same_as_control | {current_observation, depth_adequacy_contract} | d7_consumer_evidence | unresolved | descriptive_only | T36: armed_not_triggered |
| descriptive_observation | h5_obs_adequacy | ctx_adq_comp | applies | same_as_control | {current_observation, depth_adequacy_contract, ordering_evidence_contract} | d7_consumer_evidence | unresolved | descriptive_only | T36: armed_not_triggered |
| universal_form | h5_uni | ctx_any | applies | same_as_control | not_applicable | no_runtime_read | not_applicable | descriptive_only | T36: rejects_attempted_read |

*(F8's R1 read carries `same_as_control` per accepted D6 §24.3 — F8 is a combined pool; the
auction mechanism redeclares R2 and path opportunity structure, not the F1-like R1 waiver
boundary. Only F7b/F7c carry `redeclared` R1 contracts.)*

#### H6 — "Positional runs should always be faded"

- **Descriptive meaning:** a response-policy claim: when a positional run (a clustered
  same-position selection pattern, a board-dynamic event) is observed, the structurally correct
  response is to select elsewhere.
- **Valid structural context:** only the *premise* is structural: runs are observable board
  events (E7), and run exposure is real candidate vocabulary (pointer only).
- **Failure context:** the *response* claim ("fade") is a behavioral-policy conclusion whose
  production would require modeling other managers' behavior — **a prohibited output, not a
  missing input**: it is never registered as a future evidence dependency, and the mirror claim
  ("follow runs") is prohibited symmetrically.
- **Families and mechanism scoping:** the current "positional run" predicate is **declared for
  ordered-pick mechanisms M1–M3 only** (clustered same-position *selections* in a selection
  sequence). M4 removes selection cadence and R3 but **preserves nomination/acquisition events,
  R2, and E7 board depletion** — so clustered same-position *acquisition* patterns are
  observable under auctions; that auction analogue is a distinct predicate that is currently
  **undeclared**: any read of it is `unresolved` pending a redeclared
  acquisition-event observation contract (explicitly *not* the deferred budget-pressure
  structure, which this record does not introduce). Cadence-specific framing and auction
  acquisition clustering are never merged.
- **D2 dimensions:** E7, E8; R5 union coupling is board-evidence-dependent (accepted D6 F5a
  correction).
- **D3:** run effects on pools are R2-composed evidence reads (with applicable overlays).
- **D4:** run detection requires board observation within cadence context; stale reads fail
  (T13/T21).
- **D5:** whether a run closes paths is an `O-Path` question, not a presumption.
- **D6 relationships:** guards T14/T22/T31 cap any response conversion.
- **Missing evidence/contract:** the undeclared run-predicate declaration
  (`run_predicate_declaration` — no accepted predicate defines "clustered"); current board
  observations (with cadence provenance under M1–M3); the undeclared M4 acquisition-event
  observation contract. (Behavioral response modeling is a **prohibited output** and
  deliberately absent from this registry.)
- **Misuse risk:** converting run detection into follow/fade directives in either direction;
  asserting cross-union coupling without board evidence; treating the M4 acquisition analogue
  as if the M1–M3 predicate covered it.
- **Structural consequence (descriptive):** a run is an observable depletion pattern whose
  path and pool consequences are resolvable per read; no response policy follows from the
  structure alone.
- **Component table:**

| component_kind | component_id | context_id | Applicability | Input contract | Evidence conditions | Namespace | State | Policy boundary | Guards (complete applicable set) |
|---|---|---|---|---|---|---|---|---|---|
| premise | h6_pre_run_pattern | ctx_m13_notrade | applies | same_as_control | {current_observation, run_predicate_declaration} | d7_consumer_evidence | unresolved | descriptive_only | T13: armed_not_triggered; T37: armed_not_triggered |
| premise | h6_pre_run_pattern | ctx_m13_trading | applies | same_as_control | {current_observation, trade_event_provenance, run_predicate_declaration} | d7_consumer_evidence | unresolved | descriptive_only | T13: armed_not_triggered; T21: armed_not_triggered; T37: armed_not_triggered |
| premise | h6_pre_run_pattern | ctx_m4 | does_not_apply | not_applicable | not_applicable | no_runtime_read | not_applicable | descriptive_only | T37: armed_not_triggered |
| descriptive_observation | h6_obs_acq_clustering | ctx_m4 | applies | redeclared | {acquisition_event_observation_contract} | d7_consumer_evidence | unresolved | descriptive_only | T37: armed_not_triggered |
| policy_conclusion | h6_pol_follow_fade | ctx_any | applies | same_as_control | none | no_runtime_read | not_applicable | prohibited_output | T37: rejects_attempted_read; T40: rejects_attempted_read |
| universal_form | h6_uni | ctx_any | applies | same_as_control | not_applicable | no_runtime_read | not_applicable | prohibited_output | T37: rejects_attempted_read; T40: rejects_attempted_read |

*(No accepted declaration defines what qualifies as a "clustered" same-position pattern, so
M1–M3 run-premise reads remain `unresolved` pending `run_predicate_declaration` — freshness and
trade-event provenance are additional conditions, and evidence freshness alone never resolves an
undeclared predicate. No numeric threshold is invented here.)*

#### H7 — "Age and insulation always dominate current production"

- **Descriptive meaning:** a weighting claim: timeline attributes (age band, role
  security/insulation) outweigh current production evidence in asset assessment.
- **Valid structural context:** the underlying *axis distinction* is real and already owned by
  the accepted V1 ontology: timeline value and production evidence are distinct axes
  (`production_window`, `role_security`, `age_curve_risk` versus FORGE production evidence).
- **Failure context:** what V1 actually establishes is narrower than a global theorem: (a) the
  consumer safety rule `cannot_override_forge_evidence` — Strategy/timeline concepts cannot
  replace, change, or outrank FORGE production evidence; and (b) a **both-input requirement for
  specific concepts** (e.g. `durable_anchor` requires both production evidence and timeline
  durability). V1 does *not* establish that the axes are always jointly required or universally
  "mutually non-overriding." The universal timeline-dominance claim conflicts with (a); bounded
  weighting claims are simply unresolvable today.
- **Families:** all — but nowhere resolvable today.
- **D2 dimensions:** none directly (asset-level, not environment-level).
- **D3:** interacts with baselines only through consumer evidence components.
- **D4/D5:** no direct consequence.
- **D6 relationships:** the inputs the heuristic weighs — `age_band`, `experience_band`,
  `role_security_signal` — are **`future_contract` inputs with no producer** (V1 manifest; D1
  §7): every read applying this heuristic is `unresolved` today.
- **Missing evidence/contract:** the age/experience/role-security contracts (open
  `future_contract_decisions` in the promoted artifact) **and** the declared consumer weighting
  contract (`consumer_weighting_contract`) — both are required before any bounded weighting
  read can resolve.
- **Misuse risk:** using the heuristic to discount observed production without any resolvable
  timeline input; presenting either axis as dominant.
- **Structural consequence (descriptive):** the universal timeline-dominance claim conflicts
  with the V1 safety rule (`cannot_override_forge_evidence`); bounded weighting between the
  axes remains `unresolved` without the `future_contract` timeline inputs **and** a declared
  consumer weighting contract; and rejecting timeline dominance **endorses no inverse
  production-dominance rule** — the rejection is of the universal form only.
- **Component table:**

| component_kind | component_id | context_id | Applicability | Input contract | Evidence conditions | Namespace | State | Policy boundary | Guards (complete applicable set) |
|---|---|---|---|---|---|---|---|---|---|
| premise | h7_pre_distinct_axes | ctx_any | applies | same_as_control | none | no_runtime_read | not_applicable | descriptive_only | T38: armed_not_triggered |
| descriptive_observation | h7_obs_weighting | ctx_any | applies | redeclared | {consumer_weighting_contract, age_experience_role_security_contracts} | d7_consumer_evidence | unresolved | descriptive_only | T38: armed_not_triggered |
| universal_form | h7_uni | ctx_any | applies | same_as_control | not_applicable | no_runtime_read | not_applicable | descriptive_only | T38: rejects_attempted_read |

#### H8 — "Balanced rosters are always safer than concentrated builds"

- **Descriptive meaning:** a risk-ordering claim over roster shapes: distributed value
  configurations carry less risk than concentrated ones.
- **Valid structural context:** balance and concentration are legitimate *shape descriptions*
  (V1 `alpha_concentration` distribution signal; D5 path-width descriptions) — the semantics
  are applicable across format families. **Semantic applicability is not runtime
  availability:** a *current* shape instance (an `alpha_concentration` band or path-shape read
  for an actual roster) still requires the appropriate resolved E10, roster, FORGE, or
  consumer-owned inputs, and is `unresolved` without them.
- **Failure context:** "safer" presupposes a declared risk measure. No risk/evidence contract
  exists in the chain; and the accepted negative cases explicitly reject balance-superiority
  and concentration-recklessness as defaults (issue v0.2 §9; D5 mandatory negative boundary;
  V1 `tr_concentration_share_is_not_quality`).
- **Families:** shape *semantics* apply across all families; current shape instances remain
  `unresolved` without the required resolved inputs, and risk ordering is `unresolved`
  everywhere absent a risk contract.
- **D2 dimensions:** E10 (shape relates to path structure descriptively).
- **D3:** `alpha_concentration` boundary applies (distribution ≠ quality).
- **D4:** none directly.
- **D5:** T22 — path width, balance, or concentration never becomes a superiority claim.
- **D6 relationships:** any risk claim is `unresolved` absent a declared risk contract; T22/T31
  armed.
- **Missing evidence/contract:** the resolved current-instance inputs
  (`shape_instance_inputs` — E10/roster/FORGE/consumer inputs) required for any current shape
  resolution, **and** the separate declared risk/evidence contract (`risk_evidence_contract`)
  required for any risk ordering (none exists; none is proposed here).
- **Misuse risk:** presenting either shape as inherently safer or superior; converting a shape
  description into a build preference.
- **Structural consequence (descriptive):** shape is describable; risk ordering over shapes is
  not resolvable without a risk contract, and the accepted records reject both default
  superiority directions.
- **Component table:**

| component_kind | component_id | context_id | Applicability | Input contract | Evidence conditions | Namespace | State | Policy boundary | Guards (complete applicable set) |
|---|---|---|---|---|---|---|---|---|---|
| premise | h8_pre_shape_semantics | ctx_any | applies | same_as_control | none | no_runtime_read | not_applicable | descriptive_only | T39: armed_not_triggered |
| descriptive_observation | h8_obs_shape_instance | ctx_any | applies | same_as_control | {shape_instance_inputs} | d7_consumer_evidence | unresolved | descriptive_only | T39: armed_not_triggered |
| descriptive_observation | h8_obs_risk_ordering | ctx_any | applies | redeclared | {risk_evidence_contract} | d7_consumer_evidence | unresolved | descriptive_only | T39: armed_not_triggered |
| policy_conclusion | h8_pol_prefer_shape | ctx_any | applies | same_as_control | none | no_runtime_read | not_applicable | prohibited_output | T22: rejects_attempted_read; T40: rejects_attempted_read |
| universal_form | h8_uni | ctx_any | applies | same_as_control | not_applicable | no_runtime_read | not_applicable | descriptive_only | T22: rejects_attempted_read; T39: rejects_attempted_read |

### 27.3 Summary projection (partial; the §27.2 component tables are authoritative)

This summary is **explicitly non-exhaustive**: it projects **one representative row per
registered component** (identified by `component_id` + the shown `context_id`, mechanically
matchable against §27.2) and only four fields — runtime namespace:state, policy boundary, and
any `rejects_attempted_read` guard results. Consistency is claimed **only for the projected
rows and fields**; all other context-keyed rows, applicability, input-contract,
evidence-conditions, and full guard maps live solely in the authoritative §27.2 tables.

| component_id | context_id (shown row) | Runtime (namespace: state) | Policy boundary | Guards with rejects_attempted_read |
|---|---|---|---|---|
| h1_obs_ordering_paths | ctx_m13 | d5_path: unresolved | descriptive_only | none |
| h1_pol_select_top | ctx_any | no_runtime_read: not_applicable | prohibited_output | T22, T40 |
| h1_uni | ctx_any | no_runtime_read: not_applicable | prohibited_output | T16, T40 |
| h2_pre_superflex_capacity | ctx_f2 | no_runtime_read: not_applicable | descriptive_only | none |
| h2_pol_early_qb | ctx_m13 | no_runtime_read: not_applicable | prohibited_output | T35, T40 |
| h2_uni | ctx_any | no_runtime_read: not_applicable | prohibited_output | T24, T35, T40 |
| h3_obs_state_bindingness | ctx_m13_obs_x | d5_path: unresolved | descriptive_only | none |
| h3_obs_transition | ctx_m13_tr_x | d5_path: unresolved | descriptive_only | none |
| h3_pol_never_need | ctx_any | no_runtime_read: not_applicable | prohibited_output | T40 |
| h3_uni | ctx_any | no_runtime_read: not_applicable | prohibited_output | T4, T40 |
| h4_obs_state_bindingness | ctx_m13_obs_x | d5_path: unresolved | descriptive_only | none |
| h4_obs_transition | ctx_m13_tr_x | d5_path: unresolved | descriptive_only | none |
| h4_obs_timing | ctx_m13 | d4_cadence: unresolved | descriptive_only | none |
| h4_pol_ignore_early | ctx_m13 | no_runtime_read: not_applicable | prohibited_output | T35, T40 |
| h4_uni | ctx_any | no_runtime_read: not_applicable | prohibited_output | T25, T35, T40 |
| h5_obs_membership | ctx_pool_ctrl_missing | d3_pool: pool_unresolved | descriptive_only | none |
| h5_obs_adequacy | ctx_adq_noncomp | d7_consumer_evidence: unresolved | descriptive_only | none |
| h5_uni | ctx_any | no_runtime_read: not_applicable | descriptive_only | T36 |
| h6_pre_run_pattern | ctx_m13_notrade | d7_consumer_evidence: unresolved | descriptive_only | none |
| h6_obs_acq_clustering | ctx_m4 | d7_consumer_evidence: unresolved | descriptive_only | none |
| h6_pol_follow_fade | ctx_any | no_runtime_read: not_applicable | prohibited_output | T37, T40 |
| h6_uni | ctx_any | no_runtime_read: not_applicable | prohibited_output | T37, T40 |
| h7_pre_distinct_axes | ctx_any | no_runtime_read: not_applicable | descriptive_only | none |
| h7_obs_weighting | ctx_any | d7_consumer_evidence: unresolved | descriptive_only | none |
| h7_uni | ctx_any | no_runtime_read: not_applicable | descriptive_only | T38 |
| h8_pre_shape_semantics | ctx_any | no_runtime_read: not_applicable | descriptive_only | none |
| h8_obs_shape_instance | ctx_any | d7_consumer_evidence: unresolved | descriptive_only | none |
| h8_obs_risk_ordering | ctx_any | d7_consumer_evidence: unresolved | descriptive_only | none |
| h8_pol_prefer_shape | ctx_any | no_runtime_read: not_applicable | prohibited_output | T22, T40 |
| h8_uni | ctx_any | no_runtime_read: not_applicable | descriptive_only | T22, T39 |

Reading discipline: a `rejects_attempted_read` result marks an explicitly supplied
malformed/prohibited read, competes with no runtime state, and endorses nothing;
`prohibited_output` is a permanent policy boundary, never a missing input; every
missing-evidence outcome is preserved as the exact `unresolved`-class state of its declared
namespace; and no cell is advice (T40).

---

## 28. D7 — Anti-conflation tests and boundary confirmation

### 28.1 Mechanically encodable tests (extending T1–T31)

- **T32 — Claim-component gate.** Every heuristic evaluation is a component instance keyed by
  registered `component_id` and `context_id`; unregistered IDs are rejected; rows must split
  whenever format, mechanism, or observation changes any field value; results never transfer
  between components or contexts. A universal-form rejection is recorded solely as a
  `rejects_attempted_read` guard result in that row — it competes with no runtime state,
  evidence gap, or applicability value, and it neither rejects nor endorses any bounded
  component or any negation.
- **T33 — Ordering-contract gate.** Any component that presupposes an ordering over assets is
  `unresolved` in its runtime namespace absent a declared consumer ordering/evidence contract
  (none exists) — distinct from `prohibited_output`, which no contract can ever cure.
- **T34 — Transition-claim gate.** Any claim that a selection (or a policy of ignoring a
  constraint) preserved, closed, or had no effect on roster paths requires a stipulated
  transition: comparable pre/post `O-Path` states, the relevant event, event provenance, and
  the resolved witness result (extends T16/T18). Current-state observations, wide witness sets,
  local eligibility, and format membership are each individually rejected as evidence for a
  transition claim — in the success and failure directions alike.
- **T35 — Timing-claim gate.** A descriptive "early/late" timing read requires a declared
  ordered round structure (M1–M3) **and** the registered `timing_boundary_declaration` evidence
  token; with the boundary undeclared the read resolves `d4_cadence: unresolved` — never
  `none`-conditioned. An attempted timing read under M4 resolves `d4_cadence: undefined` (the
  accepted D4 state) even though the predicate `does_not_apply` on axis A — both layers are
  recorded. Under M5 the read is `d4_cadence: unresolved` (mechanism undeclared). Timing
  *directives* and optimal-timing claims are `prohibited_output` in every mechanism — a
  permanent boundary, not an evidence gap.
- **T36 — Membership/adequacy gate.** A `pool_resolved_nonempty` observation proves only that
  at least one eligible unrostered acquisition member exists; it establishes no adequacy,
  usefulness, value, or ordering (accepted D3). "Usable depth" claims are `unresolved` pending
  a declared depth/adequacy evidence contract (plus an ordering contract where comparison is
  used). A `pool_resolved_empty` observation may refute the literal universal-availability
  claim; a `pool_resolved_nonempty` observation never validates usable depth — the directions
  are asymmetric. Pool-status imports across formats or moments are rejected (extends T25).
- **T37 — Run-scope and response gate.** No accepted declaration defines what qualifies as a
  "clustered" same-position pattern, so **the M1–M3 run predicate itself is undeclared**: run
  reads are `unresolved` pending the registered `run_predicate_declaration` token, with
  freshness and trade-event provenance as *additional* conditions — **evidence freshness alone
  never resolves an undeclared predicate**, and no numeric threshold may be invented. The
  selection-sequence predicate scope covers M1–M3 only; under M4, clustered same-position
  *acquisition* patterns remain observable (nomination/acquisition events, R2, E7 survive) but
  constitute a distinct, separately undeclared predicate — `unresolved` pending the
  acquisition-event observation contract, never covered by cadence framing. Any follow-or-fade
  response claim is `prohibited_output` (behavioral response modeling), symmetric in both
  directions, and is never registered as a missing-evidence dependency.
- **T38 — Weighting gate.** A component weighing `future_contract` inputs (age/experience/role
  security) is `unresolved` while those inputs lack producers *and* absent a declared consumer
  weighting contract. The universal timeline-dominance form conflicts with the V1 safety rule
  `cannot_override_forge_evidence` (which forbids timeline concepts replacing, changing, or
  outranking production evidence) and is rejected; the rejection endorses no inverse
  production-dominance rule, and V1's both-input requirements are cited as concept-specific,
  never as a global theorem.
- **T39 — Shape gate.** Shape semantics (balance/concentration) may be applicable across
  families, but a current shape instance requires resolved E10/roster/FORGE/consumer inputs and
  is `unresolved` without them — semantic applicability never substitutes for runtime
  resolution. A safety or superiority ordering over shapes requires a declared risk/evidence
  contract and is otherwise `unresolved`; shape *preference* is `prohibited_output` in both
  directions (extends T22).
- **T40 — No heuristic becomes advice.** No D7 component result — premise, observation,
  disposition, or rejection — may be rendered as an imperative, preference, recommendation, or
  claimed optimal strategy on any surface; and `prohibited_output` may never be downgraded to a
  pending-evidence status (caps the family; extends T14/T22/T31).
- **T41 — Mechanical-contract gate.** Every component instance must satisfy all of: (a) atomic
  keying by **registered** `component_id` and `context_id` — unregistered IDs are rejected, and
  `component_kind` is an exact enum token with no prose; (b) exactly one declared token per
  scalar field; (c) declared null tokens only (`none` / `not_applicable` / `no_runtime_read`)
  — an undeclared dash or blank is rejected; (d) separate policy and evidence axes; (e) an
  exact declared runtime namespace with a state valid in that namespace, including
  `d4_cadence: undefined` for attempted M4 timing reads and **exact D5 witness-result
  selection** (complete inputs + ≥1 witness → `defined`; complete inputs + zero witnesses →
  `defined-empty`; missing/stale/incomplete → `unresolved` — never selected by "witnesses
  resolved" alone); (f) evidence-condition cells containing registry tokens only, including
  the declared timing-boundary and run-predicate tokens where those predicates are read —
  no resolution from freshness alone when the predicate itself is undeclared; (g) R1
  input-contract separation per accepted D6 §24.3 (F7b/F7c `redeclared`; control-like combined
  pools including F8 `same_as_control`); and (h) **total guard coverage**: the guards column
  lists the row's complete applicable-guard set with exactly one D6 Axis-C result per guard ID
  — every unlisted guard is `not_applicable`, omitted governing guards are a coverage
  violation, and `T40: rejects_attempted_read` must appear on every `prohibited_output` row.
  Any violation renders the component mechanically uninterpretable and the row is rejected.

### 28.2 D7 boundary confirmation

D7 answers Q7 only. All eight authorized heuristic families were decomposed into atomic
context-keyed component instances, each carrying exactly one declared token per scalar field
across applicability, input-contract, evidence-conditions, runtime namespace and state,
policy-boundary, and per-guard-ID Axis-C results; every universal form was rejected as a
`rejects_attempted_read` guard result competing with nothing; every evidence gap was preserved
as the exact `unresolved`-class state of its declared namespace rather than resolved by
assumption; every prohibited policy direction (follow/fade, shape preference, timing
directives, ordering-top selection) was marked `prohibited_output` symmetrically and kept out
of the missing-contract registry — nothing here endorses any negation. **No player names or IDs, rankings,
tiers, projections, ADP, market data, live draft state, replacement values, VOR, scarcity
premiums, optimal timing, slot values, preferred players/positions/paths/shapes/slots, or
imperative language appear in §§27–28.** Accepted D1–D6 text and semantics are unchanged; the
accepted V1 ontology is cited, not modified; S1 remains unresolved and untouched; no
concept-inventory decision, artifact-shape selection, implementation proposal,
runtime-producer assignment, or Q8 synthesis occurred. Unresolved items carried forward: the
runtime decision-envelope producer (§13.2); the ordering/evidence, tier/survival,
risk/evidence, depth/adequacy, consumer-weighting, acquisition-event observation, and
age/experience/role-security contracts; the deferred budget-pressure structure; synthesis item
S1; D1 parked items P3/P4/P5/P7/P8. (Prohibited outputs — behavioral response modeling, timing
directives, shape preferences, ordering-top selection — are permanent boundaries and are
deliberately **not** in this registry.) Only this canonical document
changed; no PR, no merge; D8 and all later frontiers remain inactive.

---

## 29. Proposed next frontier (NOT activated)

```text
D8 — minimum structural input contract (issue #2, Q8 only)
```

Rationale: Q8 is the last unanswered discovery question, and D7 sharpened exactly what it must
synthesize: the discovery now carries a complete registry of load-bearing missing contracts
(ordering/evidence, tier/survival, risk/evidence, age/experience/role-security, trade-event
provenance, rookie-draft structure declarations) alongside the consumer-owned runtime values
fixed by D2–D6. Q8's deliverable — the minimum structural input contract, classified across
format-static / board-dynamic / hybrid / consumer-owned / unavailable / future-contract, without
designing a TIBER-Fantasy adapter — can now be assembled from verified material only.

**D8 is proposed only. It is NOT activated.** Q8 synthesis, concept-inventory decisions,
artifact-shape selection, the implementation proposal, the terminal decision, all later
frontiers, and implementation remain inactive until a new signed activation comment on issue #2
satisfying the v0.2 §14 requirements authorizes the next frontier explicitly.

---

*End of D7 record.*
