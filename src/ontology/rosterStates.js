/**
 * Dynasty roster state definitions. These describe roster-level competitive
 * postures. Evidence signals are structural descriptions of what supports a
 * state read; they are not numeric thresholds and never reference players.
 */
export const rosterStates = [
  {
    id: 'contender',
    label: 'Contender',
    description:
      'A roster whose current-season lineup strength and anchor base support a credible championship pursuit this season without depending on unlikely breakouts.',
    boundary:
      'A read on roster structure given evidence, not a prediction of finish. Requires player-specific production evidence coverage; cannot be asserted from name recognition or from fallback/generated-baseline rows.',
    evidence_signals: [
      {
        signal: 'broad_starting_lineup_strength',
        interpretation: 'Player-specific evidence tiers at most starting slots are strong or better.',
      },
      {
        signal: 'present_window_alignment',
        interpretation: 'Core producers have windows that include the current season; the roster is not waiting on development.',
      },
      {
        signal: 'top_end_quality_present',
        interpretation: 'At least some assets show elite-tier player-specific evidence (absolute signal, not concentration share).',
      },
    ],
    misread_risks: [
      'Calling a contender from depth alone with no elite tier present (see fragile_contender).',
      'Calling a contender from reputation when evidence coverage is thin (see false_contender).',
    ],
    consumer_guidance:
      'Contender reads should state which signals support them and which window the read applies to.',
    related_templates: ['contender_with_future_pick_drag'],
  },
  {
    id: 'retool',
    label: 'Retool',
    description:
      'A roster with a viable core but enough structural gaps or timeline friction that it should reshape on the move — selectively trading and acquiring while staying loosely competitive — rather than committing to a full rebuild or an all-in push.',
    boundary:
      'A transitional posture, not a euphemism for rebuild. It implies the anchor base is worth keeping. This ontology does not pick which assets to move; it defines when the posture applies.',
    evidence_signals: [
      {
        signal: 'partial_anchor_base',
        interpretation: 'One or more durable anchors present, but density is below a clean contender core.',
      },
      {
        signal: 'mixed_window_alignment',
        interpretation: 'Core windows partially overlap the current season but point at friction within one or two seasons.',
      },
    ],
    misread_risks: [
      'Drifting in retool indefinitely without converging toward contender or rebuild.',
    ],
    consumer_guidance:
      'Retool explanations should name the friction (timeline, positional gap, depth) so the manager can choose a direction.',
    related_templates: [],
  },
  {
    id: 'rebuild',
    label: 'Rebuild',
    description:
      'A roster prioritizing future windows over the current season: accumulating long-window assets and draft capital while deprioritizing short-window production.',
    boundary:
      'A direction read, not a value judgment, and never evidence that the roster lacks talent. A rebuild read must not be phrased as "no difference-makers" when premium assets are present; the distinguishing question is window alignment and anchor density.',
    evidence_signals: [
      {
        signal: 'low_durable_anchor_density',
        interpretation: 'Few assets satisfy both production and timeline criteria for anchors.',
      },
      {
        signal: 'future_capital_weighting',
        interpretation: 'Meaningful share of roster value held in picks and long-window developmental assets.',
      },
      {
        signal: 'present_window_shortfall',
        interpretation: 'Starting lineup strength insufficient for a credible current-season pursuit.',
      },
    ],
    misread_risks: [
      'Reading low alpha concentration as absence of top-end talent (concentration is a distribution signal).',
      'Treating short-window elite veterans as rebuild anchors.',
    ],
    consumer_guidance:
      'Rebuild explanations should separate talent acknowledgment from structure: premium assets can exist on a roster that still reads rebuild.',
    related_templates: ['rebuild_premium_assets_timeline_mismatch', 'rebuild_low_alpha_concentration'],
  },
  {
    id: 'productive_rebuild',
    label: 'Productive rebuild',
    description:
      'A rebuild whose long-window core is already producing: the roster is not competitive top-to-bottom, but its young anchors generate real current production while the future window assembles.',
    boundary:
      'Still a rebuild posture. Current production from young anchors does not by itself reopen the present window; the read stays future-weighted until lineup-wide strength supports more.',
    evidence_signals: [
      {
        signal: 'producing_young_core',
        interpretation: 'Long-window assets with strong or elite player-specific evidence now.',
      },
      {
        signal: 'incomplete_supporting_cast',
        interpretation: 'Starting lineup strength outside the young core remains thin.',
      },
    ],
    misread_risks: [
      'Prematurely flipping to contender because the young core had a strong stretch.',
      'Liquidating the producing core as if it were short-window value.',
    ],
    consumer_guidance:
      'Highlight the anchor base explicitly; productive rebuilds are the healthiest rebuild form and the language should reflect that.',
    related_templates: ['productive_rebuild_with_anchor_base'],
  },
  {
    id: 'fragile_contender',
    label: 'Fragile contender',
    description:
      'A roster whose contender read depends on a short-window or thin core: competitive now, but one injury, one decline season, or one role change collapses the window.',
    boundary:
      'A risk-shape read layered on a contender posture, not an instruction to sell. It must cite the specific fragility (short windows, thin depth, role insecurity), not vague pessimism.',
    evidence_signals: [
      {
        signal: 'short_window_core_dependency',
        interpretation: 'Multiple core producers classify as short-window assets.',
      },
      {
        signal: 'thin_insulation',
        interpretation: 'Little startable depth behind fragile or wear-sensitive roles.',
      },
    ],
    misread_risks: [
      'Conflating fragile with false: a fragile contender is genuinely competitive now.',
    ],
    consumer_guidance:
      'Frame as window management: compete now while planning the exit ramp for short-window pieces.',
    related_templates: ['fragile_contender_short_window_core'],
  },
  {
    id: 'false_contender',
    label: 'False contender',
    description:
      'A roster that looks like a contender by name recognition or surface depth but whose evidence profile does not support the read: missing top-end tiers, misaligned windows, or production resting on non-evidence rows.',
    boundary:
      'A read about evidence support, never an insult to the roster. It specifically requires showing which contender signal is missing; it cannot be assigned merely because concentration share is low.',
    evidence_signals: [
      {
        signal: 'reputation_evidence_gap',
        interpretation: 'Recognizable names whose current player-specific evidence tiers no longer support core roles.',
      },
      {
        signal: 'missing_top_end_tier',
        interpretation: 'No assets at elite player-specific evidence tier despite broad moderate depth.',
      },
    ],
    misread_risks: [
      'Assigning false_contender from low alpha concentration alone while elite assets are present.',
    ],
    consumer_guidance:
      'Always name the missing signal. This state exists to prevent polite-but-wrong contender reads, not to dunk on rosters.',
    related_templates: ['false_contender_evidence_gap'],
  },
  {
    id: 'asset_rich_rebuild',
    label: 'Asset-rich rebuild',
    description:
      'A rebuild holding surplus tradeable value — premium picks, multiple long-window assets, movable veterans — giving it consolidation leverage most rebuilds lack.',
    boundary:
      'Describes capital position, not a timeline promise. Surplus assets do not guarantee a successful window; the read identifies leverage, and any consolidation remains the manager\'s decision.',
    evidence_signals: [
      {
        signal: 'surplus_draft_capital',
        interpretation: 'Future pick inventory above league-typical baseline.',
      },
      {
        signal: 'movable_value_present',
        interpretation: 'Short-window producers whose value is realizable via trade (subject to market liquidity).',
      },
    ],
    misread_risks: [
      'Hoarding capital past the point where consolidation would start a window.',
    ],
    consumer_guidance:
      'Pair with consolidation_window language when surplus depth exceeds lineup capacity.',
    related_templates: ['asset_rich_rebuild_consolidation_window'],
  },
  {
    id: 'timeline_mismatch',
    label: 'Timeline mismatch',
    description:
      'A roster whose asset windows point in conflicting directions: for example, elite short-window veterans stacked on a roster whose anchor base and depth are rebuild-shaped. The roster is talented but structurally incoherent.',
    boundary:
      'A structural flag that can overlay any base state; it is not itself a quality grade. It must be supported by window classifications on both sides of the mismatch, which require the age/experience inputs flagged as future contracts.',
    evidence_signals: [
      {
        signal: 'conflicting_window_clusters',
        interpretation: 'Meaningful value in both short-window producers and long-window developmental assets, with neither cluster sufficient alone.',
      },
      {
        signal: 'anchor_window_disagreement',
        interpretation: 'Best production evidence sits in assets whose windows do not overlap the roster\'s likely competitive window.',
      },
    ],
    misread_risks: [
      'Explaining a timeline mismatch as a talent shortage.',
      'Resolving the flag automatically; direction choice belongs to the manager.',
    ],
    consumer_guidance:
      'Timeline mismatch is the preferred explanation when a roster has premium names but no clean contender read. Use it instead of denying the talent exists.',
    related_templates: ['rebuild_premium_assets_timeline_mismatch'],
  },
];
