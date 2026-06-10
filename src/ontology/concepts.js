/**
 * General dynasty strategy concepts: the vocabulary TIBER consumers use to
 * interpret evidence. Every concept is a definition with an explicit
 * boundary (what the concept is NOT and what it cannot be used for).
 *
 * Concepts never reference real players, teams, rankings, or projections.
 */
export const concepts = [
  {
    id: 'long_window_asset',
    label: 'Long-window asset',
    group: 'timeline_value',
    description:
      'An asset whose expected useful production window extends across multiple future seasons, making it valuable to rosters building toward a future window as well as rosters competing now.',
    boundary:
      'A timeline classification, not a quality grade. A long window does not imply elite production, and the window length must be derived from age/experience inputs supplied by the consumer, never asserted by this ontology for a specific player.',
    use_case:
      'Distinguishing assets a rebuilding roster should acquire and hold from assets whose value is concentrated in the immediate season.',
    positive_signals: [
      'Young or ascending age band for the position',
      'Early career stage with established or growing role',
      'Position with a long typical durability curve (e.g. QB, WR relative to RB)',
    ],
    negative_signals: [
      'Late-prime or aged band for the position',
      'Role dependent on a closing situation rather than the player',
    ],
    consumer_guidance:
      'Use to weight acquisition and hold decisions by roster lifecycle stage. Do not present window length as a projection of future points.',
    related_concepts: ['short_window_asset', 'production_window', 'roster_lifecycle_fit'],
  },
  {
    id: 'short_window_asset',
    label: 'Short-window asset',
    group: 'timeline_value',
    description:
      'An asset whose expected useful production window is concentrated in the immediate one-to-two seasons. Often still highly productive right now; the constraint is duration, not current output.',
    boundary:
      'Not a synonym for "bad asset" or "low production". Elite current producers can be short-window assets. This concept must never be used to dismiss current production evidence from FORGE.',
    use_case:
      'Explaining why a productive veteran can be a strong contender piece and simultaneously a weak rebuild hold.',
    positive_signals: [
      'Late-prime or aged band for the position',
      'Position with a steep typical decline curve',
      'Production sustained by short-lived situational factors',
    ],
    negative_signals: [
      'Young age band with rising role',
      'Multiple seasons of expected role security ahead',
    ],
    consumer_guidance:
      'Pair with roster state: short-window assets are upgrades for contenders and liquidation or hold-to-sell considerations for rebuilds.',
    related_concepts: ['long_window_asset', 'age_curve_risk', 'roster_lifecycle_fit'],
  },
  {
    id: 'durable_anchor',
    label: 'Durable anchor',
    group: 'timeline_value',
    description:
      'An asset combining strong production evidence with a long remaining window, around which a roster core can be built across multiple seasons.',
    boundary:
      'Requires BOTH production evidence and timeline durability. Elite current production alone never makes a durable anchor; a long window alone never makes one either. Cannot be assigned without age/experience inputs.',
    use_case:
      'Counting how much of a roster is build-around material versus rental or depth material.',
    positive_signals: [
      'Elite or strong production evidence tier from player-specific FORGE evidence',
      'Young, ascending, or prime age band',
      'Secure role',
    ],
    negative_signals: [
      'Production evidence from fallback or generated-baseline rows',
      'Aged band regardless of current output',
    ],
    consumer_guidance:
      'Anchor judgments feed durable_anchor_density. Fail closed when age inputs are missing: report the anchor read as unavailable rather than guessing.',
    related_concepts: ['durable_anchor_density', 'long_window_asset'],
  },
  {
    id: 'durable_anchor_density',
    label: 'Durable anchor density',
    group: 'timeline_value',
    description:
      'A roster-level measure of how many durable anchors a roster holds relative to a viable multi-season core. Low density on a roster full of recognizable names usually indicates timeline problems, not talent-recognition problems.',
    boundary:
      'A roster-structure read, not a player ranking. Density bands are qualitative (low/moderate/high); this ontology does not define numeric thresholds over specific alpha values and never outputs a per-player anchor list itself.',
    use_case:
      'Explaining why a roster with premium names can still classify away from contender: the issue is anchor density and timeline durability, not absence of talent.',
    positive_signals: [
      'Multiple assets that satisfy durable_anchor criteria',
      'Anchors distributed across positions rather than stacked in one slot',
    ],
    negative_signals: [
      'Top production concentrated in short-window veterans',
      'Anchor count of zero or one on a full-size dynasty roster',
    ],
    consumer_guidance:
      'Use in explanation templates instead of claims like "no clear difference-makers". Density language acknowledges talent while explaining structure.',
    related_concepts: ['durable_anchor', 'alpha_concentration'],
  },
  {
    id: 'production_window',
    label: 'Production window',
    group: 'timeline_value',
    description:
      'The span of seasons over which an asset is expected to remain a meaningful producer, derived from position-typical durability curves and the asset\'s age/experience stage.',
    boundary:
      'A qualitative span classification (long/medium/short), not a projection. This ontology supplies the derivation rules; it never computes a window for a named player and never emits season-by-season forecasts.',
    use_case:
      'Shared input vocabulary for archetype criteria and timeline rules.',
    positive_signals: [
      'Consumer-supplied age band and position',
      'Role security context where available',
    ],
    negative_signals: [
      'Attempts to infer windows from name recognition or reputation',
    ],
    consumer_guidance:
      'Derive windows in the consumer from explicit inputs using the timeline rules in this artifact. Missing inputs mean an unknown window, not a default long window.',
    related_concepts: ['age_curve_risk', 'long_window_asset', 'short_window_asset'],
  },
  {
    id: 'age_curve_risk',
    label: 'Age curve risk',
    group: 'timeline_value',
    description:
      'The structural risk that production declines as an asset moves through the typical aging pattern for its position. Positions differ: the typical RB curve declines earlier and more steeply than the typical WR, TE, or QB curve.',
    boundary:
      'Describes position-typical patterns only. It is not a prediction about any individual player, must not be treated as injury information, and cannot override observed FORGE production evidence about what a player has actually done.',
    use_case:
      'Separating "productive right now" from "durably valuable" when production evidence and timeline pull in different directions.',
    positive_signals: [
      'Aged or late-prime band at a steep-curve position',
      'Heavy historical usage at a wear-sensitive position',
    ],
    negative_signals: [
      'Early-career stage at a long-curve position',
    ],
    consumer_guidance:
      'Express as risk framing in explanations, never as a projection. Requires the age/experience inputs flagged as future contracts in the consumer manifest.',
    related_concepts: ['production_window', 'short_window_asset'],
  },
  {
    id: 'role_security',
    label: 'Role security',
    group: 'timeline_value',
    description:
      'How firmly an asset holds its on-field role: secure featured usage versus contested committees or replaceable depth roles. Role security modulates how much current production evidence says about future seasons.',
    boundary:
      'This ontology defines the concept and its bands (secure/contested/unstable/unknown). It does not own depth charts, team assignments, or contract data, and cannot assert role security for a specific player.',
    use_case:
      'Distinguishing fragile production (volume that could vanish with one roster move) from insulated production.',
    positive_signals: [
      'Featured usage sustained across multiple evidence periods',
      'Contract or team-context inputs indicating commitment, where available',
    ],
    negative_signals: [
      'Committee or rotation usage patterns',
      'Production spike tied to a temporary vacancy',
    ],
    consumer_guidance:
      'Role security inputs are a future contract decision; until supplied, treat security as unknown and fail closed on archetypes that require it.',
    related_concepts: ['production_window', 'roster_lifecycle_fit'],
  },
  {
    id: 'roster_lifecycle_fit',
    label: 'Roster lifecycle fit',
    group: 'timeline_value',
    description:
      'How well an individual asset\'s production window aligns with the roster\'s competitive timeline. The same asset can be a great fit for a contender and a poor fit for a rebuild without its quality changing at all.',
    boundary:
      'A relational concept between asset timeline and roster state. It never changes the asset\'s production evidence or quality tier, and it is not advice to make any specific transaction.',
    use_case:
      'The core lens for explaining timeline_mismatch rosters and for framing liquidation/consolidation discussions as tradeoffs.',
    positive_signals: [
      'Long-window assets on rebuilding rosters',
      'Short-window producers on contending rosters',
    ],
    negative_signals: [
      'Short-window elite production concentrated on a rebuilding roster',
      'Future-pick hoarding on a roster whose core window is open now',
    ],
    consumer_guidance:
      'Always present lifecycle fit as a tradeoff with explicit reasoning, preserving the human manager\'s final decision authority.',
    related_concepts: ['long_window_asset', 'short_window_asset', 'consolidation_window'],
  },
  {
    id: 'alpha_concentration',
    label: 'Alpha concentration',
    group: 'roster_structure',
    description:
      'The share of a roster\'s total alpha held by its top few assets. A concentration signal: it measures how value is distributed across the roster, not how good the best players are.',
    boundary:
      'Explicitly NOT a player-quality signal. Low concentration on a deep roster is arithmetically expected even when elite assets are present, so low concentration must never be read or phrased as "no top-end difference-makers". Absolute top-end quality requires a separate signal.',
    use_case:
      'Describing roster shape (stars-and-scrubs versus balanced-depth) without making false claims about top-end talent.',
    positive_signals: [
      'High share of total alpha in the top assets indicates a concentrated build',
      'Low share on a deep roster indicates distributed value',
    ],
    negative_signals: [
      'Using a low concentration share alone to assert absence of elite talent',
      'Comparing concentration across rosters of very different sizes without normalization',
    ],
    consumer_guidance:
      'Pair concentration with an absolute top-end signal (e.g. best player-specific evidence tier present) before generating any "lacks difference-makers" style language.',
    related_concepts: ['durable_anchor_density'],
  },
  {
    id: 'consolidation_window',
    label: 'Consolidation window',
    group: 'roster_structure',
    description:
      'A period in which a roster holds more mid-tier value than its lineup can use, making two-for-one or three-for-one consolidations into premium assets structurally favorable.',
    boundary:
      'Identifies a structural condition, not a specific trade. This ontology never names trade targets, never values specific players, and never instructs a manager to execute a transaction.',
    use_case:
      'Explaining when depth should be converted into top-end quality, especially for asset-rich rebuilds approaching their window.',
    positive_signals: [
      'Surplus of startable but non-anchor assets',
      'Bench value that cannot reach the starting lineup',
    ],
    negative_signals: [
      'Thin rosters where consolidation would create unfillable holes',
    ],
    consumer_guidance:
      'Frame as a window with tradeoffs (depth loss, injury exposure) and keep user approval as the boundary for any prepared action.',
    related_concepts: ['roster_lifecycle_fit', 'market_liquidity'],
  },
  {
    id: 'market_liquidity',
    label: 'Market liquidity',
    group: 'roster_structure',
    description:
      'How readily an asset can be moved at fair value in a given league market. Liquid assets (premium young producers, early picks) trade easily; illiquid assets (aging depth) often cannot be converted even when moving them is correct.',
    boundary:
      'A future-contract concept: this ontology defines the vocabulary but has no market, ADP, or trade data, and no market input exists in the current evidence chain. Nothing here is a price, valuation, or trade recommendation.',
    use_case:
      'Tempering liquidation advice: an asset can be a liquidation candidate in principle yet practically unmovable.',
    positive_signals: [
      'Asset classes that historically clear quickly in dynasty markets',
      'Multiple plausible acquiring roster states in the league',
    ],
    negative_signals: [
      'Short-window depth pieces with replacement-level alternatives freely available',
    ],
    consumer_guidance:
      'Until a market/liquidity input contract exists, treat liquidity as unknown and avoid implying an asset can definitely be sold.',
    related_concepts: ['consolidation_window'],
  },
];
