# Proven-Production Discount — Research Note v0

> **Status: PARKED OPERATOR FIELD NOTE. HYPOTHESIS ONLY.**
>
> This document records a research question observed during a live 32-franchise startup draft. It is
> not a promoted Strategy concept, not a player-label artifact, not a ranking, and not authority to
> draft any player. No schema, ontology source, promoted artifact, adapter, Forecast behavior, or
> product behavior is changed by this note.

## 1. Research question

When does the market discount on an established player following one disappointing fantasy season
exceed the evidence of durable decline?

The phrase **"draft last year's busts"** is intentionally rejected as too broad. The narrower
candidate population is:

- players with more than one season of meaningful NFL production;
- players still within a position-relative plausible prime or productive window;
- players whose disappointing season may have a temporary or environment-driven explanation;
- players whose following-season acquisition price falls materially below their longer evidence
  base;
- players whose current role, health, and competitive environment remain source-supported.

Candidate descriptive label for research use only: **proven-production discount**.

## 2. Operator-supplied examples pending normalization

The following examples were supplied during field discussion and are **not verified facts inside this
repository**. Exact ADP and PPG ranks must be recomputed from one frozen scoring and eligibility
method before they may support a conclusion.

| player | rebound season | operator-supplied following ADP | operator-supplied PPG result |
|---|---:|---:|---:|
| Travis Etienne | 2025 | RB30 | RB11 |
| Chris Olave | 2025 | WR35 | WR7 |
| Tee Higgins | 2024 | WR28 | WR2 |
| Alvin Kamara | 2023 | RB21 | RB3 |
| Mark Andrews | 2021 | TE5 | TE1 |
| Leonard Fournette | 2021 | RB31 | RB3 |

These examples are useful as hypothesis generators only. A study that includes only known rebound
hits would contain survivorship and hindsight bias.

## 3. Candidate hypothesis and guard

Candidate hypothesis:

> Established players whose disappointing season is better explained by temporary availability,
> role, quarterback, offensive-environment, or scoring-variance conditions than by durable skill or
> opportunity erosion may outperform a following-season market price that overweights the most
> recent result.

Required guard:

> A prior ceiling does not establish a rebound, and a recent bust does not establish decline. Both
> claims require current, source-backed role, health, age, environment, and price evidence.

The research must compare successful rebounds with qualifying players who remained disappointing,
lost roles, suffered recurring injuries, or aged out. It must not begin with a hand-selected hit
list and reason backward.

## 4. Minimum study contract

A future study must freeze all of the following before evaluating results:

1. scoring system, including PPR/half-PPR/standard and all touchdown settings;
2. regular-season week window;
3. games-played and minimum-sample eligibility for PPG ranks;
4. ADP provider, format, snapshot date, and whether rank means positional or overall ADP;
5. the definition of an established prior-production baseline;
6. the definition of a disappointing season and following-season discount;
7. position-relative age and career-stage bands;
8. comparison groups at the same acquisition cost, including younger breakout bets, rookies, and
   stable veterans;
9. missing-data and identity-join behavior;
10. a pre-registered treatment of injuries, suspensions, team changes, quarterback changes, and
    role competition.

Candidate outcome measures include next-season PPG, total points, games played, weekly top-finish
rate, value over same-ADP alternatives, and hit/failure rates by failure-mechanism class. No one
metric should silently replace the frozen study question.

## 5. Source-truth inventory as of 2026-07-17

### TIBER-Data player production and history

Verified current source:

- repository: `Prometheus-Frameworks/TIBER-Data`;
- promoted artifact: `exports/promoted/nfl/player_season_coverage_v0.json`;
- promotion manifest: `exports/promoted/nfl/PLAYER_SEASON_COVERAGE_V0_PROMOTION_MANIFEST.json`;
- current promoted season window: **2021–2025 REG** for QB/RB/WR/TE;
- current promoted record count: 3,016;
- current promoted artifact sha256:
  `d45f612b207085df00b4b080e4f55ce1abbd060dcbf30b0bee777ff833ddd8ac`;
- source family: `nflreadpy.load_player_stats(...)` and `nflreadpy.load_players()`.

The current player-season builder shape already carries the principal production inputs required by
this study, including `season_ppr`, `games_for_ppg`, `season_ppg`, passing/rushing/receiving
summaries, usage summaries, `birth_date`, `season_age`, `rookie_year`, and `career_year` when
source-backed.

### 2015–2020 status

**Not currently proven or promoted by TIBER-Data.** The upstream nflverse player-stat loader accepts
historical seasons back to at least 1999, which makes 2015–2020 a plausible source-availability
candidate. That upstream availability is not equivalent to a TIBER-Data support claim.

The current TIBER-Data 2021 candidate builder explicitly hard-codes:

```text
EXPECTED_REG_WEEKS = {1..18}
```

and describes that as the 2021+ 17-game / 18-week methodology. Seasons 2015–2020 used the earlier
regular-season schedule shape and therefore require a separately audited week-span and
coverage-status method. The existing builder must not be pointed at 2015–2020 by changing only the
season list.

Required next evidence is a bounded TIBER-Data source-availability audit for each season 2015–2020,
covering row counts, week spans, required columns, PPR/game denominators, identity joins,
age/career availability, null rates, duplicates, and schema compatibility. No `2015–2025
available` statement is valid before that audit, candidate build, independent review, and explicit
promotion sequence complete.

### Market price / ADP

TIBER-Strategy's current boundary states that market context, ADP, and trade values are owned by
**nobody in the current chain** and require an explicit new artifact. TIBER-Data production history
alone cannot test the full proven-production-discount hypothesis.

A separate licensed, provenance-bound market-price source is required with, at minimum:

- provider and license/redistribution status;
- league format and scoring context;
- snapshot date and draft season;
- overall and positional ADP definitions;
- sample size and aggregation method;
- player identity mapping into the TIBER identity chain;
- missing-player and provider-change behavior.

Until that artifact exists, ADP observations remain operator-supplied or external research notes,
not governed TIBER source truth.

## 6. Source truth → artifact → adapter → surface

```text
TIBER-Data historical production/age source truth
+
licensed historical ADP source truth
+
frozen scoring, eligibility, and cohort rules
→ bounded proven-production-discount study artifact
→ fail-closed research adapter
→ explanatory research surface
```

The research artifact may report cohort outcomes, uncertainty, failure-mechanism classes, and price
bands. It must not emit an imperative such as `draft_player`, an autonomous transaction, or a
player-specific Strategy label.

The study artifact is distinct from the stable Strategy ontology. Empirical results may later inform
whether a qualitative Strategy concept is worth proposing, but the study does not self-promote a
concept into the ontology.

## 7. Forecast handoff trigger

TIBER-Forecast currently locks its production-only player-history capability to the promoted
TIBER-Data 2021–2025 artifact and consumes a governed 2021–2023 input mirror for the validated
2024 target path. A later TIBER-Data promotion extending the artifact to 2015–2025 would change its
source identity and sha.

Therefore:

1. TIBER-Data must first prove, build, review, and promote the expanded window.
2. Forecast may then receive a **separate handoff note or issue** stating that 2015–2025 is available
   upstream.
3. Forecast must independently re-pin the exact artifact sha, refresh only authorized mirrors,
   preserve target-season leakage splits, and decide whether deeper history warrants a new
   validation run.
4. Availability upstream must not silently alter Forecast's current production feature window,
   coefficients, activation status, or product behavior.

## 8. Parked next actions

1. Run a bounded TIBER-Data source-availability audit for 2015–2020.
2. Do not build or promote historical rows under the audit itself.
3. Identify and license-audit a historical ADP source before designing the full study artifact.
4. After Data promotion only, open a separate Forecast handoff/mirror-consideration issue.
5. Design the empirical study with successful and failed rebound cases before proposing any stable
   Strategy vocabulary.

---

*This note preserves the research opportunity and its source dependencies. It authorizes no active
frontier, implementation, promotion, Forecast change, ranking, or fantasy recommendation.*
