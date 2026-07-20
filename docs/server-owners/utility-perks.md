# Utility perk tuning

`utility_buffs.json` controls perk availability, how many perks roll, perk-tier quality, and numerical effect values.

## File shape

```json
{
  "configVersion": 6,
  "enabled": true,
  "toolCompatibilityBlacklist": ["tconstruct"],
  "perkCount": {},
  "tierWeights": {},
  "toolPerkWeights": {},
  "breakEfficiencyBonus": [0.08, 0.14, 0.20, 0.28, 0.38],
  "durabilityGuardChance": [0.06, 0.10, 0.15, 0.21, 0.28],
  "areaTriggerChance": [1.00, 1.00, 1.00, 1.00, 1.00],
  "areaExtraBlocks": [2, 4, 6, 9, 12],
  "utilityExtraBlocks": [1, 2, 4, 6, 8],
  "harvestYieldChance": [0.12, 0.20, 0.30, 0.42, 0.58],
  "harvestYieldAmount": [1, 1, 1, 2, 2]
}
```

Keep `configVersion` at the generated value.

## Tool compatibility blacklist

Use `toolCompatibilityBlacklist` when another mod's tools already include connected mining, tree felling, excavation, or custom durability behavior:

```json
"toolCompatibilityBlacklist": [
  "tconstruct",
  "anothermod:*",
  "anothermod:specific_tool"
]
```

The list accepts:

| Entry | Protection scope |
|---|---|
| `modid` | Every tool from that mod |
| `modid:*` | Every tool from that mod; works the same as `modid` |
| `modid:item_id` | Only that exact item |

Tinkers' Construct (`tconstruct`) is included by default. When an existing config is upgraded to v1.71, the entry is added automatically without replacing the rest of the file.

For matching tools:

- rarity and safe bonuses such as Break Efficiency continue to work;
- Vein Miner, Timber, Excavation, and Durability Guard do not activate;
- conflicting perks already stored on an item remain visible but say they are disabled;
- future perk rolls exclude those conflicting perks.

This is targeted protection. Use the common TOML option below only when connected breaking should be disabled for **every** tool.

## Perk count

Each rarity has guaranteed perks plus a chance for one extra:

```json
"perkCount": {
  "UNCOMMON": { "guaranteed": 1, "extraChance": 0.00 },
  "RARE": { "guaranteed": 1, "extraChance": 0.35 },
  "EPIC": { "guaranteed": 2, "extraChance": 0.00 },
  "LEGENDARY": { "guaranteed": 2, "extraChance": 0.50 },
  "MYTHICAL": { "guaranteed": 3, "extraChance": 0.00 },
  "SUPREME": { "guaranteed": 3, "extraChance": 0.00 }
}
```

Common has no entry and rolls zero perks. Selection stops when the unique perk pool is empty even if the requested count is higher.

## Perk-tier weights

```json
"tierWeights": {
  "UNCOMMON": { "1": 95, "2": 5 },
  "RARE": { "1": 70, "2": 27, "3": 3 },
  "EPIC": { "1": 10, "2": 60, "3": 27, "4": 3 },
  "LEGENDARY": { "2": 10, "3": 60, "4": 27, "5": 3 },
  "MYTHICAL": { "3": 10, "4": 65, "5": 25 },
  "SUPREME": { "5": 100 }
}
```

Each chosen perk rolls its tier independently.

## Tool perk pools

```json
"toolPerkWeights": {
  "ALL": { "durability_guard": 25 },
  "PICKAXE": { "break_efficiency": 35, "ore_vein": 40 },
  "AXE": { "break_efficiency": 35, "timber": 40 },
  "SHOVEL": { "break_efficiency": 40, "excavation": 35 },
  "HOE": { "harvest_replant": 40, "bountiful_harvest": 35 }
}
```

The `ALL` pool is combined with the matching tool pool. Perks are chosen by positive relative weight without duplicates.

Supported IDs:

| ID | Intended tool | Default? |
|---|---|---|
| `durability_guard` | All | Yes |
| `break_efficiency` | Pickaxe, axe, shovel | Yes |
| `ore_vein` | Pickaxe | Yes |
| `timber` | Axe | Yes |
| `excavation` | Shovel | Yes |
| `harvest_replant` | Hoe | Yes |
| `bountiful_harvest` | Hoe | Yes |
| `clean_strip` | Axe | No |
| `pathmaker` | Shovel | No |
| `cultivator` | Hoe | No |

Do not place a type-specific perk into the wrong tool pool. The perk may appear on the tooltip but will not work on that tool.

## Enable optional perks

Example:

```json
"AXE": {
  "break_efficiency": 30,
  "timber": 35,
  "clean_strip": 35
}
```

Clean Strip, Pathmaker, and Cultivator require sneak-use and consume one durability for each additional transformed block.

## Effect arrays

Every array has five positions for perk tiers I through V.

| Array | Meaning |
|---|---|
| `breakEfficiencyBonus` | Fraction added to current break speed |
| `durabilityGuardChance` | Chance to prevent each durability point |
| `areaTriggerChance` | Trigger chance for connected breaking |
| `areaExtraBlocks` | Cap for Vein Miner, Timber, Excavation |
| `utilityExtraBlocks` | Cap for nearby transforms and extra crops |
| `harvestYieldChance` | Bountiful Harvest chance |
| `harvestYieldAmount` | Extra wheat/carrot/potato/beetroot amount |

`0.20` means 20%. Connected breaking defaults to `1.00`, or 100%, at every tier.

## Existing tools after a change

- Changing perk names, perk count, or tier weights affects future rolls only.
- Changing numerical arrays affects existing perks because their stored tier reads the current value.
- `"enabled": false` prevents future perk rolls but does not remove perks already stored on tools.
- `applyAttributeModifiers = false` disables Break Efficiency and custom mining speed, but other perk handlers follow their own switches.

Use caution when disabling a live system. Existing stored perks may need item replacement or data cleanup outside the supported player commands.

## Connected-tool compatibility

The common TOML setting `disableConnectedToolPerks = true` disables `ore_vein`, `timber`, and `excavation` globally. It does not disable Durability Guard, change the JSON, or erase stored perks.

Use `toolCompatibilityBlacklist` for individual mods or items. Use `disableConnectedToolPerks` when another installed mod adds connected mining behavior to tools across the entire pack.
