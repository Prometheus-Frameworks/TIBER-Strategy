/**
 * Timeline rules: deterministic derivation and guard rules connecting
 * evidence inputs, timeline concepts, and archetypes. Same predicate shape
 * as archetype criteria (`when` clauses over declared inputs).
 *
 * Band derivation note: age_band is position-relative by design. The same
 * calendar age can be "prime" at QB and "aged" at RB; the consumer derives
 * bands from position-typical curves once age inputs exist. This artifact
 * defines the rule structure, never a named player's band.
 */
export const timelineRules = [
  {
    id: 'tr_window_short_from_aged_band',
    label: 'Aged band implies short window',
    description:
      'An asset in a late_prime or aged position-relative band derives a short production window, regardless of current production tier.',
    boundary:
      'Window derivation only — this rule never reduces the asset\'s production evidence tier and is not a decline projection for any individual.',
    when: [
      { input: 'age_band', comparator: 'in', value: ['late_prime', 'aged'] },
    ],
    then: {
      derive: { input: 'production_window', value: 'short' },
      excludes_archetypes: ['franchise_anchor', 'rebuild_core'],
      note: 'Elite producers caught by this rule classify as elite_short_window_veteran, not anchors.',
    },
    required_inputs: ['age_band'],
    consumer_guidance:
      'Fail closed: with no age_band input, the window is unknown — do not default to long or short.',
  },
  {
    id: 'tr_window_long_from_young_band',
    label: 'Young band implies long window',
    description:
      'An asset in a young or ascending position-relative band derives a long production window unless a role-security input actively contradicts it.',
    boundary:
      'A long window is a duration classification, not a quality or breakout claim. Long-window depth is still depth.',
    when: [
      { input: 'age_band', comparator: 'in', value: ['young', 'ascending'] },
    ],
    then: {
      derive: { input: 'production_window', value: 'long' },
      excludes_archetypes: [],
      note: 'Eligibility gate for rebuild_core and franchise_anchor; production criteria still apply.',
    },
    required_inputs: ['age_band'],
    consumer_guidance:
      'Combine with production tier before any anchor language; long window plus low tier is developmental depth, not core.',
  },
  {
    id: 'tr_prime_band_window_by_position_curve',
    label: 'Prime band window depends on position curve',
    description:
      'An asset in a prime band derives a medium window at steep-curve positions (RB) and a long window at durable-curve positions (QB, WR, TE).',
    boundary:
      'Encodes position-typical curve differences only. It is not an individual durability prediction and must not be applied without a position input.',
    when: [
      { input: 'age_band', comparator: 'in', value: ['prime'] },
    ],
    then: {
      derive: { input: 'production_window', value: 'position_curve_dependent' },
      excludes_archetypes: [],
      note: 'RB prime derives medium; QB/WR/TE prime derives long.',
    },
    required_inputs: ['age_band', 'position'],
    consumer_guidance:
      'This is where RB-specific window compression enters the system; do not hardcode it elsewhere.',
  },
  {
    id: 'tr_elite_short_window_not_anchor',
    label: 'Elite production with short window is not an anchor',
    description:
      'Elite production evidence combined with a short derived window classifies toward elite_short_window_veteran and is excluded from franchise_anchor and rebuild_core.',
    boundary:
      'The exclusion is about durability, not quality. Explanations applying this rule must explicitly credit the elite production.',
    when: [
      { input: 'production_evidence_tier', comparator: 'in', value: ['elite'] },
      { input: 'production_window', comparator: 'in', value: ['short'] },
    ],
    then: {
      derive: { input: 'archetype_eligibility', value: 'elite_short_window_veteran' },
      excludes_archetypes: ['franchise_anchor', 'rebuild_core', 'consolidation_target'],
      note: 'The canonical "useful but not a rebuild anchor" case for elite aged producers.',
    },
    required_inputs: ['production_evidence_tier', 'production_window'],
    consumer_guidance:
      'High contender value, lower rebuild-anchor durability — say both halves.',
  },
  {
    id: 'tr_concentration_share_is_not_quality',
    label: 'Concentration share is not a quality signal',
    description:
      'A low top-N alpha concentration share must never, by itself, produce a claim that the roster lacks top-end difference-makers. Absence of top-end talent requires an absolute signal: no asset at elite player-specific evidence tier.',
    boundary:
      'Guards explanation generation. It does not change how concentration is computed; it constrains what concentration is allowed to mean.',
    when: [
      { input: 'alpha_concentration_band', comparator: 'in', value: ['low'] },
      { input: 'best_production_evidence_tier', comparator: 'in', value: ['elite', 'strong'] },
    ],
    then: {
      derive: { input: 'explanation_constraint', value: 'forbid_no_difference_makers_language' },
      excludes_archetypes: [],
      note: 'Deep rosters dilute concentration arithmetically even when elite assets are present.',
    },
    required_inputs: ['alpha_concentration_band', 'best_production_evidence_tier'],
    consumer_guidance:
      'When this rule fires, prefer durable_anchor_density or timeline_mismatch framing over talent-absence claims.',
  },
  {
    id: 'tr_timeline_mismatch_flag',
    label: 'Timeline mismatch flag',
    description:
      'A roster in a rebuild-family state holding multiple elite-or-strong short-window assets raises the timeline_mismatch structural flag.',
    boundary:
      'A flag, not a resolution. Whether to liquidate the short-window cluster or push the window forward is a manager decision the system must present as a tradeoff.',
    when: [
      { input: 'roster_state', comparator: 'in', value: ['rebuild', 'productive_rebuild', 'asset_rich_rebuild'] },
      { input: 'short_window_premium_asset_count_band', comparator: 'in', value: ['moderate', 'high'] },
    ],
    then: {
      derive: { input: 'roster_flag', value: 'timeline_mismatch' },
      excludes_archetypes: [],
      note: 'Counts use qualitative bands; the consumer maps its own counts to bands.',
    },
    required_inputs: ['roster_state', 'short_window_premium_asset_count_band'],
    consumer_guidance:
      'Select rebuild_premium_assets_timeline_mismatch template language when this flag is raised.',
  },
  {
    id: 'tr_anchor_density_bands',
    label: 'Durable anchor density bands',
    description:
      'Roster anchor density classifies into qualitative bands — low, moderate, high — from the count of assets satisfying durable-anchor criteria relative to roster core size.',
    boundary:
      'Bands are qualitative and roster-relative; this artifact fixes the band vocabulary, not numeric cutoffs, which belong to the consumer\'s calibration against its own roster-size context.',
    when: [
      { input: 'durable_anchor_count_band', comparator: 'in', value: ['low', 'moderate', 'high'] },
    ],
    then: {
      derive: { input: 'durable_anchor_density', value: 'same_band_as_input' },
      excludes_archetypes: [],
      note: 'Identity mapping; exists so density language is grounded in a declared input.',
    },
    required_inputs: ['durable_anchor_count_band'],
    consumer_guidance:
      'Low density with premium names present should route to timeline framing, not talent-absence framing.',
  },
  {
    id: 'tr_lifecycle_fit_valuation_direction',
    label: 'Lifecycle fit shifts valuation direction',
    description:
      'Contending roster states weight short-window production up and pure futures down; rebuild-family states weight long-window assets and picks up and short-window production down. Retool weights both near parity.',
    boundary:
      'Directional weighting vocabulary only — no numeric multipliers, prices, or projections. It changes framing and priority order, never the underlying evidence.',
    when: [
      { input: 'roster_state', comparator: 'in', value: ['contender', 'fragile_contender', 'retool', 'rebuild', 'productive_rebuild', 'asset_rich_rebuild'] },
    ],
    then: {
      derive: { input: 'valuation_direction', value: 'state_dependent' },
      excludes_archetypes: [],
      note: 'The structural reason the same asset reads differently across rosters.',
    },
    required_inputs: ['roster_state'],
    consumer_guidance:
      'Surface the direction as explicit tradeoff language; the manager decides whether to act on it.',
  },
  {
    id: 'tr_missing_inputs_fail_closed',
    label: 'Missing inputs fail closed',
    description:
      'When any required input for an archetype or rule is missing or comes from a non-evidence source (fallback_default, generated_baseline), the classification is not made and the consumer reports the read as unavailable.',
    boundary:
      'Applies to every rule and archetype in this artifact without exception. Silence is always preferred over a guessed strategy label.',
    when: [
      { input: 'required_input_coverage', comparator: 'in', value: ['incomplete'] },
    ],
    then: {
      derive: { input: 'classification_result', value: 'unavailable_do_not_assign' },
      excludes_archetypes: [],
      note: 'Mirrors the fail-closed posture of FORGE_PLAYER_STATIC_V1 consumption.',
    },
    required_inputs: ['required_input_coverage'],
    consumer_guidance:
      'Track which future-contract inputs (age, experience, role security, market) blocked a read and surface that as a coverage gap, not as a player judgment.',
  },
];
