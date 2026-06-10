# Player Asset Archetypes

Archetypes classify *assets*, not people: they describe what role a player's value plays in roster construction. This repo ships the **criteria**; it never assigns an archetype to a named player. Canonical definitions: `player_asset_archetypes` in the promoted artifact.

## The archetypes

| Archetype | Core idea |
|---|---|
| `franchise_anchor` | Elite production + long window + secure role: the build-around class |
| `premium_young_wr` | Early-career WR with elite/strong evidence: the most durable, liquid dynasty class |
| `elite_short_window_veteran` | Elite production, short window: contender centerpiece, not a rebuild anchor |
| `productive_veteran` | Strong/moderate output, short-to-medium window: useful, not build-around |
| `ascending_young_asset` | Improving evidence on a long window: trending toward core status |
| `fragile_depth_piece` | Low/moderate evidence + insecure role: value evaporates with one roster move |
| `rebuild_core` | The long-window assets a rebuild is actually building around |
| `contender_patch` | Short-window output that fills a contender's specific hole cheaply |
| `liquidation_candidate` | Short-window value on a roster that can't use the window |
| `consolidation_target` | Premium long-window asset worth packaging up for |

## Criteria, not prose

Every archetype carries machine-readable `criteria`: predicates (`input`, `comparator`, `value`) over the evidence-input vocabulary declared in the consumer manifest. Example — the defining tension of the ontology:

```json
{
  "id": "elite_short_window_veteran",
  "criteria": [
    { "input": "production_evidence_tier", "comparator": "in", "value": ["elite"] },
    { "input": "production_window", "comparator": "equals", "value": "short" }
  ]
}
```

This is how the system says *"elite production; high contender value; lower rebuild-anchor durability"* about an aging elite producer **without ever denying the production**. The exclusion from `franchise_anchor`/`rebuild_core` is about durability, never quality — rule `tr_elite_short_window_not_anchor` requires explanations to credit both halves.

## Roster-relative archetypes

`liquidation_candidate`, `contender_patch`, and `consolidation_target` are **roster-state-relative**: the same asset is a patch on a contender and surplus on a rebuild. Their criteria include `roster_state`, so they can never be assigned as absolute labels.

## Fail-closed assignment

Every archetype declares `required_inputs` and `missing_input_behavior: "do_not_assign_fail_closed"`. Several criteria depend on inputs that don't exist in the evidence chain yet (`age_band`, `experience_band`, `role_security_signal` — see [boundary.md](../boundary.md)). Until those contracts ship, the affected archetypes are **defined but unassignable**, and that is the intended behavior: no input, no label, no guessing. Consumers should report which missing input blocked the read as a coverage gap, not as a judgment about the player.

## Evidence-grade inputs only

`production_evidence_tier` is derived from player-specific FORGE evidence only (`score_source === "player_specific"`). Fallback and generated-baseline rows never satisfy an archetype criterion — this mirrors the `FORGE_PLAYER_STATIC_V1` evidence gate.
