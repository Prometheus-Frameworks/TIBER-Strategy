/**
 * Player asset archetypes: rules a consumer applies to its own evidence to
 * classify assets. This artifact ships the criteria only — it never assigns
 * an archetype to a named player.
 *
 * Criteria are deterministic predicates over the abstract evidence-input
 * vocabulary declared in the consumer manifest (`required_inputs`). Inputs
 * marked `future_contract` there (age_band, experience_band,
 * role_security_signal, market_liquidity_signal) are not yet present in the
 * TIBER evidence chain; archetypes that require them must fail closed.
 *
 * Comparators: "in" (value is an allowed-set array), "not_in",
 * "equals" (value is a single literal).
 */
export const MISSING_INPUT_BEHAVIOR = 'do_not_assign_fail_closed';

export const archetypes = [
  {
    id: 'franchise_anchor',
    label: 'Franchise anchor',
    description:
      'An asset with elite production evidence and a long remaining window: the build-around class. The scarcest and most strategically important archetype.',
    boundary:
      'Production alone is insufficient — an elite producer in an aged band is an elite_short_window_veteran, not a franchise anchor. Cannot be assigned without age/experience inputs; fail closed when they are missing.',
    criteria: [
      { criterion_id: 'fa_production', input: 'production_evidence_tier', comparator: 'in', value: ['elite'], note: 'Player-specific FORGE evidence only; fallback/generated rows never qualify.' },
      { criterion_id: 'fa_window', input: 'production_window', comparator: 'equals', value: 'long', note: 'Derived via timeline rules from age_band and position.' },
      { criterion_id: 'fa_role', input: 'role_security_signal', comparator: 'in', value: ['secure'], note: 'Anchors must own their role, not share it.' },
    ],
    required_inputs: ['production_evidence_tier', 'production_window', 'role_security_signal'],
    missing_input_behavior: MISSING_INPUT_BEHAVIOR,
    positive_signals: ['Elite tier sustained across evidence periods', 'Young-to-prime band at a long-curve position'],
    negative_signals: ['Elite output in an aged band', 'Tier supported by a temporary role vacancy'],
    consumer_guidance:
      'Franchise anchor counts drive durable_anchor_density. Report "unknown" rather than assigning when window inputs are unavailable.',
  },
  {
    id: 'premium_young_wr',
    label: 'Premium young WR',
    description:
      'A wide receiver early in its career with elite or strong production evidence: historically the most durable and liquid dynasty asset class, central to rebuild cores.',
    boundary:
      'Position-specific by design (WR durability curve). Strong early production does not retroactively guarantee a long career; the archetype expresses structural durability odds, not a projection.',
    criteria: [
      { criterion_id: 'pyw_position', input: 'position', comparator: 'equals', value: 'WR', note: 'Archetype is WR-specific.' },
      { criterion_id: 'pyw_production', input: 'production_evidence_tier', comparator: 'in', value: ['elite', 'strong'], note: 'Player-specific evidence only.' },
      { criterion_id: 'pyw_age', input: 'age_band', comparator: 'in', value: ['young', 'ascending'], note: 'Future-contract input: fail closed until supplied.' },
      { criterion_id: 'pyw_experience', input: 'experience_band', comparator: 'in', value: ['rookie', 'early', 'mid'], note: 'Future-contract input.' },
    ],
    required_inputs: ['position', 'production_evidence_tier', 'age_band', 'experience_band'],
    missing_input_behavior: MISSING_INPUT_BEHAVIOR,
    positive_signals: ['Early-career target share at elite tier', 'Production not dependent on a single scheme quirk'],
    negative_signals: ['One-spike evidence with low surrounding volume'],
    consumer_guidance:
      'High strategic importance for rebuild/retool planning; usually a hold-or-acquire class across all roster states.',
  },
  {
    id: 'elite_short_window_veteran',
    label: 'Elite short-window veteran',
    description:
      'An asset producing at an elite tier whose remaining window is short. Maximum current value, declining strategic durability: a centerpiece for contenders and a sell-consideration for rebuilds.',
    boundary:
      'The defining tension: this archetype confirms elite production while denying anchor durability. It must never be described as lacking quality, and never counted as a rebuild anchor.',
    criteria: [
      { criterion_id: 'esv_production', input: 'production_evidence_tier', comparator: 'in', value: ['elite'], note: 'Player-specific evidence only.' },
      { criterion_id: 'esv_window', input: 'production_window', comparator: 'equals', value: 'short', note: 'Derived from age_band and position curve.' },
    ],
    required_inputs: ['production_evidence_tier', 'production_window'],
    missing_input_behavior: MISSING_INPUT_BEHAVIOR,
    positive_signals: ['Elite tier in a late-prime or aged band', 'Steep-curve position with heavy accumulated usage'],
    negative_signals: ['Elite tier in a young band (that is franchise_anchor territory)'],
    consumer_guidance:
      'On contenders: core piece. On rebuilds: roster_lifecycle_fit conflict — candidate for liquidation framing, subject to market liquidity.',
  },
  {
    id: 'productive_veteran',
    label: 'Productive veteran',
    description:
      'A veteran with strong or moderate production evidence and a short-to-medium window. Useful weekly output without build-around weight: productive is not the same as strategically durable.',
    boundary:
      'Not a durable core asset regardless of how steady the output is. Distinguish from elite_short_window_veteran by tier and from fragile_depth_piece by role stability.',
    criteria: [
      { criterion_id: 'pv_production', input: 'production_evidence_tier', comparator: 'in', value: ['strong', 'moderate'], note: 'Below elite tier.' },
      { criterion_id: 'pv_window', input: 'production_window', comparator: 'in', value: ['short', 'medium'], note: 'Window-limited by band/position.' },
    ],
    required_inputs: ['production_evidence_tier', 'production_window'],
    missing_input_behavior: MISSING_INPUT_BEHAVIOR,
    positive_signals: ['Multi-season steady output at a non-elite tier'],
    negative_signals: ['Output dependent on injury vacancies ahead of them'],
    consumer_guidance:
      'Contender glue, rebuild trade bait. Explanations should credit the production while being honest about durability.',
  },
  {
    id: 'ascending_young_asset',
    label: 'Ascending young asset',
    description:
      'A long-window asset whose production evidence is moderate-to-strong and improving: not yet anchor-tier, but trending toward it.',
    boundary:
      'A trajectory read, not a guarantee of arrival. Trend evidence must come from player-specific FORGE momentum, never from hype or reputation.',
    criteria: [
      { criterion_id: 'aya_production', input: 'production_evidence_tier', comparator: 'in', value: ['moderate', 'strong'], note: 'Below current anchor tier.' },
      { criterion_id: 'aya_trend', input: 'production_trend', comparator: 'equals', value: 'improving', note: 'From FORGE momentum/recursion signals.' },
      { criterion_id: 'aya_window', input: 'production_window', comparator: 'equals', value: 'long', note: 'Derived window must be long.' },
    ],
    required_inputs: ['production_evidence_tier', 'production_trend', 'production_window'],
    missing_input_behavior: MISSING_INPUT_BEHAVIOR,
    positive_signals: ['Rising usage share with rising efficiency', 'Role expanding within the offense'],
    negative_signals: ['Improvement driven by one anomalous spike week'],
    consumer_guidance:
      'Primary rebuild accumulation class below the premium tier. Watch for promotion to rebuild_core or franchise_anchor as evidence accrues.',
  },
  {
    id: 'fragile_depth_piece',
    label: 'Fragile depth piece',
    description:
      'An asset with low-to-moderate production evidence and weak role security: replaceable depth whose value evaporates with one roster move.',
    boundary:
      'Describes structural fragility of the role, not the player\'s ability. Cannot be assigned without a role security input; production tier alone never makes an asset fragile.',
    criteria: [
      { criterion_id: 'fdp_production', input: 'production_evidence_tier', comparator: 'in', value: ['moderate', 'low'], note: 'Depth-tier evidence.' },
      { criterion_id: 'fdp_role', input: 'role_security_signal', comparator: 'in', value: ['contested', 'unstable'], note: 'Future-contract input: fail closed until supplied.' },
    ],
    required_inputs: ['production_evidence_tier', 'role_security_signal'],
    missing_input_behavior: MISSING_INPUT_BEHAVIOR,
    positive_signals: ['Committee usage', 'Production tied to an injury vacancy'],
    negative_signals: ['Featured usage with stable share'],
    consumer_guidance:
      'Counts toward roster size, not toward contender depth or anchor density. Low priority in consolidation packages.',
  },
  {
    id: 'rebuild_core',
    label: 'Rebuild core',
    description:
      'The long-window assets a rebuilding roster is actually building around: strong-or-better young producers plus elite ascenders. The rebuild\'s future starting lineup, distinct from its tradeable surplus.',
    boundary:
      'Membership is about window plus evidence, not name value. Short-window veterans never belong to a rebuild core regardless of tier.',
    criteria: [
      { criterion_id: 'rc_window', input: 'production_window', comparator: 'equals', value: 'long', note: 'Core must outlast the rebuild.' },
      { criterion_id: 'rc_production', input: 'production_evidence_tier', comparator: 'in', value: ['elite', 'strong'], note: 'Real current evidence, not projection.' },
      { criterion_id: 'rc_age', input: 'age_band', comparator: 'in', value: ['young', 'ascending', 'prime'], note: 'Future-contract input: fail closed until supplied.' },
    ],
    required_inputs: ['production_window', 'production_evidence_tier', 'age_band'],
    missing_input_behavior: MISSING_INPUT_BEHAVIOR,
    positive_signals: ['Premium young WR profiles', 'Young anchors at long-curve positions'],
    negative_signals: ['Elite aged producers (window conflict)', 'Moderate-tier depth without trend'],
    consumer_guidance:
      'Rebuild core size and quality is the honest measure of rebuild health — use it in productive_rebuild explanations.',
  },
  {
    id: 'contender_patch',
    label: 'Contender patch',
    description:
      'A short-window asset with usable production that fills a contender\'s specific lineup hole cheaply: valuable to a roster competing now, near-worthless to a rebuild.',
    boundary:
      'Value is entirely roster-state-relative. The same asset is a patch on a contender and surplus on a rebuild; this archetype never implies hold value outside a competitive window.',
    criteria: [
      { criterion_id: 'cp_production', input: 'production_evidence_tier', comparator: 'in', value: ['strong', 'moderate'], note: 'Startable output.' },
      { criterion_id: 'cp_window', input: 'production_window', comparator: 'in', value: ['short', 'medium'], note: 'Short-horizon value.' },
      { criterion_id: 'cp_context', input: 'roster_state', comparator: 'in', value: ['contender', 'fragile_contender'], note: 'Archetype applies in contending contexts.' },
    ],
    required_inputs: ['production_evidence_tier', 'production_window', 'roster_state'],
    missing_input_behavior: MISSING_INPUT_BEHAVIOR,
    positive_signals: ['Fills a specific weekly lineup hole', 'Cheap acquisition cost relative to output'],
    negative_signals: ['Cost paid in long-window assets'],
    consumer_guidance:
      'Frame patch acquisitions as window spending: current points purchased with future value.',
  },
  {
    id: 'liquidation_candidate',
    label: 'Liquidation candidate',
    description:
      'A short-window asset on a roster whose state cannot use its remaining window: value that decays if held and should be considered for conversion into long-window assets or picks.',
    boundary:
      'A roster-relative flag, never an absolute one — and never an instruction. Whether liquidation is feasible depends on market liquidity, and whether it happens is the manager\'s decision.',
    criteria: [
      { criterion_id: 'lc_window', input: 'production_window', comparator: 'equals', value: 'short', note: 'Decaying horizon.' },
      { criterion_id: 'lc_context', input: 'roster_state', comparator: 'in', value: ['rebuild', 'productive_rebuild', 'asset_rich_rebuild', 'timeline_mismatch'], note: 'Roster cannot use the window.' },
      { criterion_id: 'lc_production', input: 'production_evidence_tier', comparator: 'not_in', value: ['none'], note: 'Asset must have realizable value to liquidate.' },
    ],
    required_inputs: ['production_window', 'roster_state', 'production_evidence_tier'],
    missing_input_behavior: MISSING_INPUT_BEHAVIOR,
    positive_signals: ['Elite or strong short-window production on a rebuild (peak sell value)'],
    negative_signals: ['Illiquid depth nobody will acquire (flag, but temper with market_liquidity)'],
    consumer_guidance:
      'Always present as a tradeoff with the timeline reasoning attached, and defer to market liquidity limits once that input exists.',
  },
  {
    id: 'consolidation_target',
    label: 'Consolidation target',
    description:
      'A premium long-window asset worth packaging multiple lesser assets to acquire: the buy side of a consolidation window.',
    boundary:
      'Identifies the asset class, not a named player or a price. This ontology never values a specific trade package and never instructs the consumer to propose one.',
    criteria: [
      { criterion_id: 'ct_production', input: 'production_evidence_tier', comparator: 'in', value: ['elite'], note: 'Only premium evidence justifies consolidation cost.' },
      { criterion_id: 'ct_window', input: 'production_window', comparator: 'equals', value: 'long', note: 'Consolidating into short windows compounds risk.' },
    ],
    required_inputs: ['production_evidence_tier', 'production_window'],
    missing_input_behavior: MISSING_INPUT_BEHAVIOR,
    positive_signals: ['Franchise-anchor-class assets on rosters in different lifecycle stages'],
    negative_signals: ['Premium current names with short windows (consolidation into decay)'],
    consumer_guidance:
      'Pair with consolidation_window roster reads; the target class is what asset-rich rebuilds should convert surplus into.',
  },
];
