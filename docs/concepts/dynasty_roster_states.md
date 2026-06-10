# Dynasty Roster States

Roster states describe a roster's competitive posture given evidence. They are direction reads, not value judgments — and never claims about whether the roster "has talent". The canonical machine-readable definitions live in the promoted artifact (`roster_state_definitions`); this doc explains the reasoning.

## The states

| State | One-line read |
|---|---|
| `contender` | Lineup strength and anchor base support a credible championship pursuit this season |
| `retool` | Viable core with structural gaps; reshape on the move rather than rebuild or push all-in |
| `rebuild` | Future windows prioritized over the current season |
| `productive_rebuild` | A rebuild whose long-window core is already producing |
| `fragile_contender` | Competitive now, but the window rests on short-window or thin pieces |
| `false_contender` | Looks like a contender by reputation; the evidence profile doesn't support it |
| `asset_rich_rebuild` | A rebuild with surplus tradeable value and consolidation leverage |
| `timeline_mismatch` | Structural flag: asset windows point in conflicting directions |

`timeline_mismatch` is an overlay flag rather than a base posture — it can attach to any rebuild-family read (and is the preferred explanation when a roster has premium names but no clean contender read).

## Why "rebuild" must never mean "no talent"

The motivating failure (issue #207): a roster containing multiple premium assets classified `Rebuild / High` and the explanation said *"No clear top-end difference-makers."* That language was wrong because the input was wrong for the claim:

- **Alpha concentration (top-3 share of total alpha) is a distribution signal.** On a deep roster, even elite assets arithmetically hold a small share of total alpha. Low concentration means *distributed value*, not *missing top-end talent*.
- **Absence of top-end talent is an absolute claim** and requires an absolute signal: no asset at elite player-specific evidence tier. The timeline rule `tr_concentration_share_is_not_quality` makes this a hard guard — when an elite or strong tier is present, "no difference-makers" language is forbidden.
- The correct explanation for that roster shape is usually **timeline mismatch and low durable anchor density**: the talent is real, but its windows don't line up with a contender build.

## Evidence requirements

Every state read requires player-specific FORGE evidence coverage. Rows whose `score_source` is `fallback_default` or `generated_baseline` never support a state read (see consumer safety rules). Missing inputs fail closed: an unknown posture is reported as unknown, not defaulted.

## Misread risks

Each state definition carries `misread_risks` — the known ways the read goes wrong (e.g. calling a fragile contender false, flipping a productive rebuild to contender after one hot stretch, reading concentration as quality). Consumers should surface these as caveats when the supporting signals are near a boundary.
