# 2026 Redraft Premium-TE Leverage — Research Note v0

> **Status: OPERATOR-REQUESTED RESEARCH NOTE — HYPOTHESIS AND VERIFICATION PROTOCOL ONLY**
>
> This document does not establish a preferred draft strategy. It records field observations,
> separates two candidate hypotheses, and defines the evidence required to support, narrow, or
> reject them.
>
> **Authority:** [TIBER-Strategy issue #5](https://github.com/Prometheus-Frameworks/TIBER-Strategy/issues/5)
>
> **Pinned Strategy base:** `ffa7fba7b78c51931735a9d09a251aa00b499049`
>
> **Field source packet:** [TIBER-Ops issue #48](https://github.com/Prometheus-Frameworks/TIBER-Ops/issues/48)
>
> **Repository scope:** `Prometheus-Frameworks/TIBER-Strategy` only

## 1. Non-authority boundary

This note is not:

- a player ranking, projection, or Strategy label;
- a claim that Brock Bowers, Trey McBride, or Colston Loveland forms a verified tier;
- a governed ADP or player-availability artifact;
- a completed historical study, weekly lineup simulation, or 2026 Forecast result;
- authority to change `DYNASTY_STRATEGY_ONTOLOGY_V1`;
- Draft Assist, TIBER-Fantasy integration, or public product advice.

Named players and acquisition-window statements are operator field evidence. They remain separate
from observed draft facts, model evidence, and universal Strategy concepts. A merge of this note
would govern the research record, not prove its candidate claim.

## 2. Research question

Within a declared league contract and realistic acquisition window:

> Does paying for a premium pass-catching tight end while front-loading running-back value create a
> better upper-tail starting-lineup construction than WR-heavy, balanced, early-QB, or late-TE
> alternatives?

The comparison is roster against roster. An isolated TE result cannot answer the question.

## 3. Two hypotheses that must remain separate

### H1 — Bowers unicorn exception

Bowers may create enough positional separation to justify breaking an otherwise preferred
double-RB opening. Candidate shapes include:

```text
RB / Bowers / WR / WR / RB
WR / Bowers / RB / WR / RB
```

H1 can be supported without supporting any broader premium-TE tier.
For a late first-round slot, H1 ordinarily tests whether usable WR value survives to the
manager's Round 3 and Round 4 selections.

### H2 — premium-TE tier construction

McBride or Loveland may be available in a later acquisition window that preserves a construction
closer to:

```text
RB / RB / premium TE / WR / WR
```

H2 requires evidence across the proposed tier. A successful Bowers construction does not validate
McBride or Loveland, and a successful McBride or Loveland construction does not prove that the
same price is justified for Bowers.
H2 ordinarily places its receiver-recovery burden at the manager's Round 4 and Round 5 selections,
which is a different and generally later condition than H1.

## 4. Field origin and operator theses

The source packet contains one live 18-team dynasty startup and six 12-team full-PPR redraft mocks.
Only the six redraft mocks belong to the primary field scope. The dynasty trace is contextual
evidence that Bowers was treated as a positional-separation asset, not a redraft comparison trial.

The following statements are current operator theses, not governed market or Forecast facts:

- Jahmyr Gibbs is Joseph's current best-player selection at `1.01`.
- Bowers is Joseph's highest-leverage target around the Round 1/2 turn and may sit inside his
  personal top six overall.
- Sleeper mocks may leave Bowers near overall pick 28, while Joseph expects serious live rooms may
  select him by approximately pick 16. This discrepancy is a field concern about mock realism, not
  a verified ADP finding.
- Zay Flowers and Jaylen Waddle are current candidate receiver-leverage points around the Round 3/4
  turn.
- McBride was a difficult close comparison against premium WR value.
- Loveland remains a focal-point TE thesis with a different expected acquisition window.

No bye-week or schedule reasoning was used to make the six mock selections. It must not be added
retrospectively.

Gibbs' `1.01` best-player status and Bowers' highest-leverage/value-target status are distinct
operator axes. This note preserves both and does not manufacture a single universal No. 1 ranking
from them.

## 5. Precise candidate claim

> In 12-team, one-QB, full-PPR redraft with two RB/WR/TE flex spots, a premium pass-catching TE plus
> front-loaded RB investment may improve the upper tail of the optimized starting lineup when:
>
> 1. the TE's advantage over the realistic streaming/waiver baseline plus any RB replacement loss
>    actually avoided by the candidate branch exceeds the full value of the RB, WR, or other asset
>    displaced by the premium-TE selection; and
> 2. a usable WR tier survives to the manager's next Round 3/4 or Round 4/5 selections.

The opportunity-cost accounting must be hypothesis-specific:

| Hypothesis | Required accounting |
|---|---|
| H1 — Bowers exception | If Bowers displaces the second early RB, count that RB and its downstream roster consequences. If Bowers displaces an early WR, count that WR. Credit avoided RB replacement loss only when the matched comparator actually invests less early capital at RB. |
| H2 — premium-TE tier | In an `RB / RB / premium TE` versus `RB / RB / late TE` pair, hold the two early RBs constant. Count the WR or other asset displaced by the premium TE plus the later TE; do not add an avoided-RB credit to this matched pair. |

This is conditional, falsifiable, and currently unresolved. It is not a universal `elite-or-wait`
rule and does not claim that any position must be selected in a named round.

## 6. Primary league contract

```yaml
teams: 12
format: redraft
scoring: full_ppr
quarterbacks: one_qb
starters:
  QB: 1
  RB: 2
  WR: 2
  TE: 1
  FLEX_RB_WR_TE: 2
```

The two flex spots permit as many as four RBs to start, while one flex spot still permits three.
Flex-capacity sensitivities must therefore test the exact third- and fourth-RB boundary rather than
assuming a third RB is bench-locked in a one-flex league. Results must not be generalized to
one-flex, zero-flex, half-PPR, superflex, TE-premium, or materially different waiver environments
without separate declaration and testing.

## 7. Required comparison constructions

| ID | Construction | Key counterfactual |
|---|---|---|
| C1 | Bowers exception | The RB or WR selected instead of early Bowers, plus the later TE |
| C2 | RB-RB-premium-TE | The RB, WR, QB, or other asset selected instead of premium TE, plus the later TE; compare downstream WR recovery separately |
| C3 | RB-RB-late-TE | The RB-heavy opening without paying for premium TE |
| C4 | WR-heavy-late-TE | Early receiver concentration plus a streaming/upside TE |
| C5 | Balanced best-tier | No forced positional template |
| C6 | Early-QB | A QB displaces one early RB, WR, or TE pick |

Every trial must record the exact pick sequence. The construction name cannot stand in for the
actual board.

## 8. Acquisition-window discipline

The study must keep three different quantities separate:

```text
observed_mock_selection
operator_expected_live_acquisition_window
governed_market_or_ADP_evidence
```

The first two exist as field evidence. The third does not currently exist in TIBER-Strategy.
Platform mock availability must not be relabeled as live market truth, and an operator expectation
must not be converted into ADP.

For each candidate, a trial must record:

- exact draft slot and turn distance;
- the pick at which the player was actually available or selected;
- whether the selection followed a strict board, a price click, or an exploration branch;
- the realistic alternative set at that pick;
- whether the next desired tier survived to the following selection.

## 9. Matched counterfactual mock protocol

Run matched branches from the same draft slot and league contract across:

```text
early:  1.01–1.04
middle: 1.05–1.08
turn:   1.09–1.12
```

Each matched trial must preserve:

```text
trial_id
league_contract
draft_slot
room_or_board_reference
primary_branch_pick
counterfactual_branch_pick
subsequent_decision_policy
complete_roster
blocked_measures
operator_notes
```

Each branch must also contain a per-pick `decision_log[]`. Every entry must preserve:

```text
decision_cursor
round_and_overall_pick
observed_available_board
realistic_alternatives
selection_intent
selected_player
policy_or_branch_divergence
```

When a field was not captured, record `not_recorded` or `unavailable`; do not substitute a
later-memory reconstruction. A single branch-point snapshot does not satisfy this requirement.

Protocol rules:

1. Change the key TE/RB/WR decision while holding the later decision policy as stable as practical.
2. Compare complete rosters, not only the two players at the branch point.
3. Record when a later pick cannot be held constant because the room changed.
4. Separate strict ranking, roster construction, value click, and deliberate exploration.
5. Mark missing state as `not_recorded` or `unavailable`; never reconstruct it from memory.
6. Treat Sleeper mock rooms as repeated field observations, not deterministic experiments.
7. Do not create a fixed-board simulator until a governed availability/market model is authorized.

## 10. Roster-level evaluation

The eventual comparison should evaluate:

| Measure | Required interpretation | Current state |
|---|---|---|
| Expected optimized starter production | Weekly legal lineup, not raw roster sum | Requires governed Forecast distributions |
| Upper-tail starter outcome | High-end weekly lineup distribution with declared assumptions | Not currently computable |
| TE separation | Premium TE versus realistic league-specific streaming/waiver TE | Waiver baseline contract missing |
| Avoided RB replacement loss | Early RB versus the RB actually reachable later | Market/availability evidence missing |
| WR recovery | Quality and usability of WRs obtained at later turns | Field observations exist; no governed comparison |
| Starter capacity | Whether all premium RB/WR/TE assets can start | Declared by the league contract |
| Weekly floor and spike paths | Distinct production mechanisms, not optimistic season totals | Forecast capability missing |
| Bench optionality | Contingent upside and replacement flexibility | Requires full roster and league state |
| Concentration/shared failure | Correlation, team environment, role, and injury dependence | Partially observable; not yet modeled |
| One-player-unavailable downside | Lineup loss and replacement path | Availability scenarios missing |

A sum of season projections is insufficient. No numeric proxy result is calculated in this note.

## 11. Sensitivity matrix

| Axis | Cases | Question |
|---|---|---|
| TE identity | Bowers / McBride / Loveland | Bowers-specific or tier-wide? |
| Draft slot | early / middle / turn | Does turn distance change the viable path? |
| Flex capacity | zero / one / two | When does the third or fourth RB become bench-locked, and how does the startable asset mix change? |
| Scoring | full PPR / separately declared alternative | Does reception scoring change the WR opportunity cost? |
| Room shape | RB-heavy / WR-heavy | Which tier disappears first? |
| Availability shock | preferred player taken immediately before pick | Is there a coherent fallback? |
| WR-tier failure | Round 3/4 or 4/5 recovery survives / fails | Is WR persistence load-bearing? |
| TE baseline | stronger / weaker streaming pool | Is premium-TE separation large enough? |
| Player availability | one early player misses time | Is the construction unusually fragile? |

Permitted result classes:

```text
Bowers-specific
premium-TE-tier-wide
slot-dependent
room-dependent
league-contract-dependent
not supported
```

More than one qualifier may apply. A narrow result must not be written as a universal strategy.

## 12. Historical and prospective verification

### 12.1 Historical study

A defensible historical study requires:

- provenance-bound historical draft-position evidence;
- weekly fantasy scoring and player availability;
- an ex-ante premium-TE identification rule that does not select only famous hits;
- complete comparison groups, including failed early-TE constructions;
- fixed scoring, lineup, and waiver assumptions;
- explicit treatment of injuries, role changes, and games played.

TIBER-Strategy currently owns no market/ADP artifact. Historical player outcomes alone cannot
reconstruct what managers could realistically acquire at each pick.

### 12.2 Live best-ball or managed-draft evidence

Live best-ball data may better represent acquisition pressure than casual Sleeper mocks, but it may
enter the study only through a licensed, provenance-bound, format-specific source with a declared
snapshot date. Public availability or operator observation alone is not sufficient for promotion.

### 12.3 Prospective 2026 test

Before the season, freeze:

- H1 and H2 separately;
- candidate constructions and acquisition windows;
- league contract;
- evaluation measures;
- player/role uncertainty;
- failure criteria;
- the operator-board snapshot used to interpret selections.

Score actual weekly outcomes without rewriting the preseason thesis after results are known.

## 13. Definition of ceiling

Preferred eventual definition:

> The upper-tail distribution of weekly optimized starter points across the fantasy regular season
> and playoffs, under declared player-availability and correlation assumptions.

Until Forecast can supply defensible distributions, allowed interim proxies include:

- credible top-five positional outcome count;
- historical weekly top-finish rate;
- starting-lineup value over a declared replacement baseline;
- number of independent spike-week mechanisms;
- downside under one-player-unavailable scenarios.

Every proxy must be named and bounded. This note calculates none of them and does not conclude that
the premium-TE/RB-heavy family has the highest ceiling.

## 14. Falsification criteria

The candidate claim is weakened or rejected when:

1. WR recovery at the required turns is not repeatable across realistic rooms.
2. Premium-TE separation is smaller than the RB/WR opportunity cost.
3. Success requires a player to fall beyond a realistic acquisition window.
4. Bowers succeeds while McBride/Loveland variants fail, rejecting a tier-wide interpretation.
5. RB-heavy builds create greater injury or replacement fragility than their upside compensates.
6. The apparent advantage comes from summing optimistic player outcomes rather than optimizing
   legal weekly lineups.
7. The effect exists only at one slot or under one lineup contract but was described broadly.
8. The late-TE baseline is strong enough that the premium selection adds little separation.

A negative or narrower result is a successful research outcome.

## 15. Current field-evidence ledger

All rows below are observations or operator reasoning from the source packet. They are not matched
counterfactual results.

| Trace | Slot and opening | TE path | Relevant observation | Limitation |
|---|---|---|---|---|
| Redraft 1 | `1.12 Walker / 2.01 Jeanty / 3.12 Garrett Wilson / 4.01 Zay Flowers` | Tucker Kraft at `6.01` | Double-RB plus 3/4-turn WR recovery occurred | No premium-TE branch; one room |
| Redraft 2 | `1.09 Amon-Ra / 2.04 Walker / 3.09 Garrett / 4.04 Burden` | Loveland was an alternative; Brenton Strange at `11.09` | Loveland competed with a premium WR decision | Selection was exploratory; no Loveland roster |
| Redraft 3 | `1.11 Achane / 2.02 Jeanty / 3.11 McConkey / 4.02 Waddle` | Terrance Ferguson at `13.11` | Double-RB plus WR recovery occurred | No premium-TE branch |
| Redraft 4 | `1.06 McCaffrey / 2.07 Bowers / 3.06 A.J. Brown / 4.07 Egbuka` | Bowers early | Recorded Bowers-unicorn construction | No matched non-Bowers roster |
| Redraft 5 | `1.02 Gibbs / 2.11 Barkley / 3.02 Allen / 4.11 Zay` | Kyle Pitts at `6.11` | Three premium RBs were startable; only one of the two flex spots was needed | Early-QB and TE costs not counterfactually isolated |
| Redraft 6 | `1.06 Smith-Njigba / 2.07 Bowers / 3.06 Jacobs / 4.07 Garrett / 5.06 Judkins` | Bowers early | Bowers plus elite WR foundation and stable/ceiling RB pair occurred | Different opening from Redraft 4; no matched branch |
| Dynasty context | `1.12 Bowers` in an 18-team startup | Bowers early | Positional-separation thesis appeared in live play | Different format; excluded from redraft result set |

Current operator summary:

- repeated double-RB turn openings produced attractive WR recovery in this small sample;
- two redraft builds treated Bowers as a distinct exception;
- late-TE paths preserved earlier RB/WR capital but, in Joseph's current assessment, did not
  provide the same projected positional separation;
- McBride and Loveland do not yet have completed matched paths;
- deliberate exploration influenced some selections.

Joseph currently believes the premium-TE/RB-heavy family produced the strongest-ceiling rosters in
this small mock sample. That is an operator field observation—not a measured result—and the sample
is small, exploratory, non-random, and partly shaped by deliberate roster uniqueness.

## 16. Current evidence assessment

```yaml
H1_Bowers_unicorn:
  evidence_state: exploratory_field_observation
  supported: false
  rejected: false
  blocking_reason: no matched counterfactual rosters or governed weekly outcome distributions

H2_premium_TE_tier:
  evidence_state: hypothesis
  supported: false
  rejected: false
  blocking_reason: no completed McBride/Loveland comparison set and no governed acquisition windows

highest_ceiling_language:
  operator_belief_recorded: premium-TE/RB-heavy produced the strongest-ceiling rosters in this small mock sample
  permitted_as_operator_belief: true
  permitted_as_TIBER_finding: false
```

The field evidence is sufficient to justify the research program. It is insufficient to prefer a
construction.

## 17. Ownership and missing-contract map

| Need | Current/proposed owner | Status and boundary |
|---|---|---|
| Qualitative construction hypothesis, comparison rules, falsification | TIBER-Strategy | Owned by this research note; no player labels |
| Player weekly outcome distributions and uncertainty | TIBER-Forecast | Future governed input; not available here |
| Historical weekly outcomes, identity, availability observations | TIBER-Data and governed evidence producers | Requires exact source and cutoff contracts |
| League, lineup, live draft, available-player, roster, and waiver state | TIBER-Fantasy | Consumer/runtime-owned; not read by this note |
| Market/ADP and acquisition-window evidence | No governed owner in the current chain | Missing contract; operator and platform observations remain field evidence |
| TE streaming/waiver baseline | TIBER-Fantasy using governed player evidence | Missing league-specific comparison |
| Role, injury, and recovery scenarios | Governed evidence producers plus Forecast interpretation | Incomplete; no inference authorized here |
| Operator top-player board and player theses | Human operator / future operator-overlay contract | Must remain separate from model evidence |
| Final selection | Human manager | Never delegated by this note |

This map records current boundaries. It does not activate a new cross-repository contract.

## 18. Next evidence before any ontology proposal

1. Freeze a timestamped operator-board snapshot, including Gibbs at `1.01` and Bowers' personal
   acquisition/value range, as operator overlay rather than universal ranking.
2. Run matched trials across early, middle, and turn slots with exact decision cursors and complete
   roster capture.
3. Produce separate Bowers, McBride, and Loveland branches; do not use Bowers as the tier proxy.
4. Measure whether Flowers/Waddle or the broader usable WR tier actually survives to the required
   turns across realistic rooms.
5. Define a league-specific late-TE/streaming baseline.
6. Admit live best-ball or managed-draft evidence only after source, licensing, format, snapshot,
   and provenance review.
7. Freeze a prospective 2026 scoring plan before NFL results are known.
8. Reassess whether the supported result, if any, is a stable Strategy concept, a seasonal research
   finding, or only an operator preference.

No ontology proposal should open until the evidence can distinguish those outcomes.

## 19. Limitations register

- Six redraft mocks are a small, non-random sample.
- Sleeper mock rooms are not controlled and may not represent live acquisition pressure.
- Some choices intentionally tested unique constructions rather than following a strict ranking.
- The sample contains only two Bowers redraft builds and no completed McBride/Loveland builds.
- No matched counterfactual rosters were captured.
- No governed ADP, live best-ball, waiver-baseline, weekly-distribution, or correlation input was
  available.
- Player health, role, and team-environment uncertainty is unresolved.
- The current operator board is evolving and is not TIBER model evidence.
- The preferred ceiling definition cannot yet be computed.

## 20. Research-state conclusion

The premium-TE/RB-heavy family is a coherent and testable candidate strategy. The present evidence
supports preserving and executing the protocol, not publishing a recommendation.

H1 and H2 remain unresolved. Any future finding must report whether it is Bowers-specific,
tier-wide, slot-dependent, room-dependent, league-contract-dependent, or unsupported.
