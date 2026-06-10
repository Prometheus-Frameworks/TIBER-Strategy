# Explanation Templates

Explanation templates exist because the motivating failure was a *language* failure: classifier gates with hardcoded inline strings asserted things the inputs couldn't support. Templates externalize Management explanation language into ID-addressed, slotted blocks that are selected deterministically and tested by ID. Canonical definitions: `explanation_templates` in the promoted artifact.

## Shape

```json
{
  "id": "rebuild_low_alpha_concentration",
  "applies_to": ["rebuild"],
  "slots": ["alpha_concentration_signal", "anchor_count", "timeline_note"],
  "text": "Roster-wide alpha concentration ({alpha_concentration_signal}) does not support a clean contender read, and durable anchor count is {anchor_count}. {timeline_note} Priority: consolidate around durable long-term anchors."
}
```

- **`id`** — stable selection key. Consumer tests assert *which template fired*, not what prose came out.
- **`applies_to`** — roster states (or overlay flags) the template is valid for.
- **`slots`** — named fill-ins the consumer populates from its own evidence. Every declared slot appears as `{slot_name}` in `text` (test-enforced), so filling is mechanical, not generative.
- **`boundary`** — when the template must *not* be used.

## The templates

| Template | Fires when |
|---|---|
| `rebuild_premium_assets_timeline_mismatch` | Rebuild read on a roster holding premium assets; `timeline_mismatch` flag raised |
| `rebuild_low_alpha_concentration` | Rebuild read driven by distributed value — blocked whenever an elite tier is present |
| `contender_with_future_pick_drag` | Open window coexisting with above-baseline unused future capital |
| `fragile_contender_short_window_core` | Contender read resting on short-window core producers |
| `productive_rebuild_with_anchor_base` | Rebuild whose long-window core is already producing |
| `false_contender_evidence_gap` | Reputation-contender whose evidence profile fails a named check |
| `asset_rich_rebuild_consolidation_window` | Rebuild with surplus value and an open consolidation window |

## Guard interaction

Template selection is constrained by timeline rules. The key one: `tr_concentration_share_is_not_quality` forbids "no difference-makers" framing whenever an elite or strong evidence tier is present — in that case `rebuild_low_alpha_concentration` is blocked and `rebuild_premium_assets_timeline_mismatch` is the correct route. This is how the system replaces:

> "No clear top-end difference-makers. Priority: identify a franchise anchor."

with:

> "Roster holds premium assets (…), but the evidence profile points away from a clean contender build: … short-window assets and durable anchor count is …. The issue is timeline durability and anchor density, not talent recognition."

## Tone rules

Templates explain tradeoffs and confidence; they never command. Action-shaped language ("consider whether…", "the call remains yours") keeps user approval as the boundary, per TIBER product doctrine.
