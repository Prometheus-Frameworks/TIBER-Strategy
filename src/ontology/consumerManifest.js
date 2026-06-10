/**
 * Consumer manifest for DYNASTY_STRATEGY_ONTOLOGY_V1. Mirrors the
 * consumer-contract pattern established by FORGE_PLAYER_STATIC_V1 so a
 * future TIBER-Fantasy adapter can consume this artifact with the same
 * fail-closed posture.
 */
export const consumerManifest = {
  contract_name: 'DYNASTY_STRATEGY_ONTOLOGY_V1_DOWNSTREAM_CONSUMPTION',
  intended_consumers: ['TIBER-Fantasy'],

  /**
   * Hard "cannot" rules. The ontology is strategy vocabulary only; these
   * rules state what no consumer may use it for.
   */
  consumer_safety_rules: [
    {
      rule_id: 'cannot_override_identity',
      statement:
        'This artifact cannot override TIBER identity mappings. Player identity is owned by TIBER-Data (TIBER_IDENTITY_CROSSWALK_V1).',
    },
    {
      rule_id: 'cannot_override_team_assignment',
      statement:
        'This artifact cannot override or infer current team assignment. Team context is owned by the identity/data chain, never by strategy vocabulary.',
    },
    {
      rule_id: 'cannot_override_forge_evidence',
      statement:
        'This artifact cannot override FORGE production evidence. Strategy concepts interpret evidence; they never change, replace, or outrank it.',
    },
    {
      rule_id: 'cannot_count_generated_baselines_as_evidence',
      statement:
        'This artifact cannot cause generated_baseline or fallback_default rows to count as player-specific evidence. Archetype criteria over production_evidence_tier accept player-specific FORGE evidence only.',
    },
    {
      rule_id: 'cannot_create_projections',
      statement:
        'This artifact cannot create fantasy projections. Windows, bands, and curves are qualitative structural classifications, never point forecasts.',
    },
    {
      rule_id: 'cannot_assign_player_labels_itself',
      statement:
        'This artifact cannot assign player-specific strategy labels by itself. It ships rules; archetype assignment happens in the consumer, applied to the consumer\'s own evidence, subject to fail-closed input coverage.',
    },
    {
      rule_id: 'cannot_consume_operator_notes_as_evidence',
      statement:
        'This artifact cannot cause operator notes, chat content, or free-text commentary to be consumed as model evidence. Only declared evidence inputs feed the rules.',
    },
    {
      rule_id: 'cannot_replace_human_decision',
      statement:
        'This artifact cannot replace human final decision-making. All liquidation, consolidation, and lineup framing is tradeoff explanation; user approval remains the action boundary.',
    },
  ],

  /**
   * The abstract evidence-input vocabulary referenced by archetype criteria
   * and timeline rules. `status` records whether the input exists in the
   * TIBER evidence chain today or awaits a future cross-repo contract.
   */
  required_inputs: [
    {
      input_id: 'production_evidence_tier',
      description: 'Qualitative tier (elite/strong/moderate/low/none) the consumer derives from player-specific FORGE evidence only.',
      status: 'available',
      expected_source: 'TIBER-FORGE via FORGE_PLAYER_STATIC_V1 (score_source === player_specific)',
    },
    {
      input_id: 'production_trend',
      description: 'Directional trend (improving/stable/declining/unknown) from FORGE momentum/recursion signals.',
      status: 'available',
      expected_source: 'TIBER-FORGE momentum components',
    },
    {
      input_id: 'position',
      description: 'Skill position (QB/RB/WR/TE) from the identity-resolved evidence row.',
      status: 'available',
      expected_source: 'TIBER-Data identity chain / FORGE row',
    },
    {
      input_id: 'alpha_concentration_band',
      description: 'Qualitative band (low/moderate/high) of top-N alpha share, computed by the consumer. A distribution signal, never a quality signal.',
      status: 'available',
      expected_source: 'Consumer roster computation over FORGE evidence',
    },
    {
      input_id: 'best_production_evidence_tier',
      description: 'The highest player-specific evidence tier present on the roster; the absolute top-end signal that gates talent-absence language.',
      status: 'available',
      expected_source: 'Consumer roster computation over FORGE evidence',
    },
    {
      input_id: 'future_pick_inventory',
      description: 'Roster future draft capital relative to league baseline.',
      status: 'available',
      expected_source: 'Consumer league/roster data',
    },
    {
      input_id: 'roster_state',
      description: 'The roster state classification produced by applying this ontology\'s roster_state_definitions.',
      status: 'derived',
      expected_source: 'Consumer classification using this artifact',
    },
    {
      input_id: 'durable_anchor_count_band',
      description: 'Qualitative band (low/moderate/high) of how many roster assets satisfy durable-anchor criteria.',
      status: 'derived',
      expected_source: 'Consumer roster computation using this artifact (blocked until age inputs exist)',
    },
    {
      input_id: 'short_window_premium_asset_count_band',
      description: 'Qualitative band (low/moderate/high) of how many elite-or-strong assets carry short derived windows.',
      status: 'derived',
      expected_source: 'Consumer roster computation using this artifact (blocked until age inputs exist)',
    },
    {
      input_id: 'required_input_coverage',
      description: 'Adapter bookkeeping flag (complete/incomplete) recording whether every input a rule needs was present from an evidence-grade source.',
      status: 'derived',
      expected_source: 'Consumer adapter input-coverage accounting',
    },
    {
      input_id: 'production_window',
      description: 'Derived window (long/medium/short/unknown) from timeline rules over age_band and position.',
      status: 'derived',
      expected_source: 'Consumer derivation using timeline_rules (blocked until age inputs exist)',
    },
    {
      input_id: 'age_band',
      description: 'Position-relative age band (young/ascending/prime/late_prime/aged). Player age is not in the current evidence chain.',
      status: 'future_contract',
      expected_source: 'Undecided: TIBER-Data crosswalk or FORGE static artifact — see future_contract_decisions',
    },
    {
      input_id: 'experience_band',
      description: 'Career stage band (rookie/early/mid/late) from draft year / accrued seasons. Not in the current evidence chain.',
      status: 'future_contract',
      expected_source: 'Undecided: TIBER-Data crosswalk or FORGE static artifact — see future_contract_decisions',
    },
    {
      input_id: 'role_security_signal',
      description: 'Role stability band (secure/contested/unstable/unknown) from depth chart, usage, and contract/security context.',
      status: 'future_contract',
      expected_source: 'Undecided: depth chart / contract context contract — see future_contract_decisions',
    },
    {
      input_id: 'market_liquidity_signal',
      description: 'Tradeability band (liquid/neutral/illiquid/unknown) from league market context.',
      status: 'future_contract',
      expected_source: 'Undecided: no market/ADP artifact exists for this chain yet — see future_contract_decisions',
    },
  ],

  /**
   * What this artifact has no authority over, stated as boundaries a
   * consumer adapter can assert in tests.
   */
  non_authority_boundaries: [
    'player_identity',
    'current_team_assignment',
    'realized_production_evidence',
    'fantasy_projections',
    'player_rankings',
    'per_player_strategy_labels',
    'market_pricing_and_adp',
    'final_roster_decisions',
  ],

  missing_input_behavior: 'do_not_assign_fail_closed',

  fail_closed_behavior: {
    missing_artifact: 'unavailable_strategy_vocabulary',
    malformed_artifact: 'unavailable_strategy_vocabulary',
    unknown_concept_reference: 'ignore_reference_report_gap',
    missing_required_input: 'do_not_assign_fail_closed',
    unknown_input_status: 'treat_as_future_contract',
  },

  /**
   * Design note: several archetype rules require inputs that are not fully
   * present in the current TIBER evidence chain. These are documented
   * dependencies, deliberately NOT implemented in this artifact's phase.
   */
  future_contract_decisions: [
    {
      decision_id: 'age_input_ownership',
      summary:
        'player age / age_band is required by franchise_anchor, premium_young_wr, rebuild_core and all window derivation, but neither FORGE_PLAYER_STATIC_V1 required_row_fields nor TIBER_IDENTITY_CROSSWALK_V1 currently carries age or birthdate. Decide which repo owns the field before applying archetype predicates.',
      status: 'open',
    },
    {
      decision_id: 'experience_input_ownership',
      summary:
        'draft year / accrued experience is required for experience_band; same ownership question as age.',
      status: 'open',
    },
    {
      decision_id: 'role_and_contract_context',
      summary:
        'role_security_signal needs depth-chart and contract/security context; no current artifact supplies it.',
      status: 'open',
    },
    {
      decision_id: 'team_context_consumption',
      summary:
        'current team context is available in the evidence chain but this ontology never reads or asserts it; any future use stays consumer-side.',
      status: 'open',
    },
    {
      decision_id: 'market_liquidity_artifact',
      summary:
        'market/liquidity context (trade markets, ADP) would require an explicit new artifact; the boundary doc forbids importing it implicitly.',
      status: 'open',
    },
  ],
};
