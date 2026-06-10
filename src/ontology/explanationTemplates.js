/**
 * Explanation templates: slotted, ID-addressed language blocks for roster
 * state explanations. Consumers select templates deterministically (by
 * roster state and raised flags) and fill the named slots from their own
 * evidence. Every declared slot appears as a {slot_name} placeholder in the
 * template text so filling is mechanical, not generative.
 */
export const explanationTemplates = [
  {
    id: 'rebuild_premium_assets_timeline_mismatch',
    label: 'Rebuild with premium assets and timeline mismatch',
    description:
      'Explains a rebuild read on a roster that holds recognizable premium assets, attributing the read to window alignment and anchor density instead of denying the talent.',
    boundary:
      'Only valid when premium assets are actually present and the timeline_mismatch flag is raised. Never use on rosters where the issue genuinely is a missing top-end tier.',
    applies_to: ['rebuild', 'timeline_mismatch'],
    slots: ['premium_asset_count', 'short_window_asset_count', 'anchor_count', 'timeline_note'],
    text:
      'Roster holds premium assets ({premium_asset_count} at elite or strong evidence tiers), but the evidence profile points away from a clean contender build: {short_window_asset_count} of the top producers are short-window assets and durable anchor count is {anchor_count}. The issue is timeline durability and anchor density, not talent recognition. {timeline_note} Priority: consolidate around durable long-term anchors and avoid overvaluing short-window veteran production.',
    consumer_guidance:
      'Preferred template for the "premium names but rebuild read" case. Fill timeline_note with the specific window conflict.',
  },
  {
    id: 'rebuild_low_alpha_concentration',
    label: 'Rebuild with low alpha concentration',
    description:
      'Explains a rebuild read driven by distributed roster value, using concentration as a structure signal while explicitly avoiding talent-absence claims.',
    boundary:
      'Blocked by rule tr_concentration_share_is_not_quality whenever an elite-tier asset is present — route to the timeline-mismatch template instead in that case.',
    applies_to: ['rebuild'],
    slots: ['alpha_concentration_signal', 'anchor_count', 'timeline_note'],
    text:
      'Roster-wide alpha concentration ({alpha_concentration_signal}) does not support a clean contender read, and durable anchor count is {anchor_count}. {timeline_note} Priority: consolidate around durable long-term anchors.',
    consumer_guidance:
      'Concentration is a distribution signal; this template must only fire when the absolute top-end check has also been applied.',
  },
  {
    id: 'contender_with_future_pick_drag',
    label: 'Contender carrying unused future capital',
    description:
      'Explains a contender whose roster carries future pick inventory or developmental depth that is not contributing to the open window.',
    boundary:
      'A tradeoff surface, not an instruction to spend picks. The manager may rationally keep the capital; the template only makes the drag visible.',
    applies_to: ['contender'],
    slots: ['future_pick_count', 'window_note'],
    text:
      'Current-season lineup strength supports a contender read, but {future_pick_count} future picks and developmental slots are not contributing to the open window. {window_note} Consider whether converting part of that capital into current production better matches the roster\'s window — the tradeoff is future optionality against present points.',
    consumer_guidance:
      'Use when an open window coexists with above-baseline future capital; keep the decision explicitly with the manager.',
  },
  {
    id: 'fragile_contender_short_window_core',
    label: 'Fragile contender on a short-window core',
    description:
      'Explains a competitive roster whose contender status depends on short-window producers, naming the fragility precisely.',
    boundary:
      'Must cite the actual fragile elements; never use as generic pessimism about an aging roster that still has durable anchors.',
    applies_to: ['fragile_contender'],
    slots: ['short_window_asset_count', 'role_security_note', 'window_note'],
    text:
      'The roster is genuinely competitive now, but the contender read rests on {short_window_asset_count} short-window core producers. {role_security_note} {window_note} The structural risk is window collapse, not current weakness: compete now while planning the exit ramp for short-window pieces.',
    consumer_guidance:
      'Pair with lifecycle-fit language; this state argues for urgency within the window, not for selling it off.',
  },
  {
    id: 'productive_rebuild_with_anchor_base',
    label: 'Productive rebuild with a producing anchor base',
    description:
      'Explains a rebuild whose long-window core is already producing, crediting the anchor base while keeping the read future-weighted.',
    boundary:
      'Requires actual producing long-window assets; do not use to flatter a rebuild whose young assets have no production evidence yet.',
    applies_to: ['productive_rebuild'],
    slots: ['anchor_count', 'ascending_asset_count', 'timeline_note'],
    text:
      'This rebuild is ahead of schedule structurally: {anchor_count} durable anchors and {ascending_asset_count} ascending young assets are already producing. {timeline_note} The supporting cast is not contender-grade yet, so the read stays future-weighted — protect the producing core and keep accumulating toward its window.',
    consumer_guidance:
      'The healthiest rebuild form; language should be constructive and name the core explicitly via consumer-side data.',
  },
  {
    id: 'false_contender_evidence_gap',
    label: 'False contender from an evidence gap',
    description:
      'Explains why a roster that looks competitive by reputation does not support a contender read, naming the specific missing signal.',
    boundary:
      'Requires identifying which contender signal failed (missing elite tier, window misalignment, or non-evidence rows). Forbidden when the only weak signal is a low concentration share.',
    applies_to: ['false_contender'],
    slots: ['missing_signal_note', 'evidence_coverage_note'],
    text:
      'The roster profiles as a contender by name recognition, but the evidence does not support the read: {missing_signal_note}. {evidence_coverage_note} Treat the contender appearance as unconfirmed until the missing signal resolves, and plan direction from the evidence rather than the reputation.',
    consumer_guidance:
      'Exists to prevent polite-but-wrong contender reads; always populate missing_signal_note with the concrete failed check.',
  },
  {
    id: 'asset_rich_rebuild_consolidation_window',
    label: 'Asset-rich rebuild in a consolidation window',
    description:
      'Explains that a rebuild holds surplus tradeable value and that a consolidation window is structurally open.',
    boundary:
      'Identifies leverage and a window, never a specific trade. Market liquidity limits apply once that input exists.',
    applies_to: ['asset_rich_rebuild'],
    slots: ['pick_inventory_note', 'surplus_asset_note', 'consolidation_note'],
    text:
      'This rebuild is asset-rich: {pick_inventory_note} {surplus_asset_note} More value is on the roster than the future lineup can use, which opens a consolidation window — converting surplus into premium long-window targets is structurally favorable. {consolidation_note} The tradeoff is depth and optionality for top-end quality; the call remains yours.',
    consumer_guidance:
      'Pair with consolidation_target archetype vocabulary; keep all action framing as prepared options requiring manager approval.',
  },
];
