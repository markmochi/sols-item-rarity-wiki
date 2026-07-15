# Compatibility

Item Rarity recognizes vanilla and modded equipment without requiring a hard dependency on another content mod. Detection is broad, but unusual items can still need an explicit server entry.

## Sol's Relic System

Five Relic System items receive fixed presentation rarities:

| Item | Rarity |
|---|---|
| Aster Core Tier I | Mythical |
| Aster Core Tier II | Legendary |
| Aster Core Tier III | Epic |
| Dust of Enlightenment | Supreme |
| Aster Table | Legendary |

Sol's Relic System can set `crossMod.disableRarityStatBonuses` to prevent its stats and Item Rarity's combat/armor stats from stacking.

When rarity stat bonuses are disabled through that integration:

- rarity names and borders remain;
- Item Rarity's combat and armor modifiers are skipped;
- their combat bonus lines are hidden;
- utility tool perks remain available.

Older Relic System builds without that setting default to suppressing Item Rarity's combat stats.

## Modded weapon detection

The mod recognizes native sword, bow, crossbow, trident, and modern mace behavior where available. It also checks class and item-ID hints such as:

`sword`, `katana`, `blade`, `dagger`, `rapier`, `spear`, `mace`, `trident`, `crossbow`, `gun`, `rifle`, `pistol`, `staff`, `scythe`, `weapon`

Battle, war, great, double, and similar weapon-axe names are handled separately so normal axes can remain utility tools.

A positive main-hand attack-damage definition is another fallback after utility-tool checks.

## Modded utility-tool detection

Native pickaxes, axes, shovels, and hoes are recognized. Item names can also identify:

- pickarang, paxel, drill, mining hammer, rock hammer, excavator;
- shovel or spade;
- hoe or sickle;
- hatchet, lumber axe, or super axe.

The final fallback probes how quickly a stack mines representative stone, wood, dirt, and hoe-effective blocks.

!!! note "Detection and stats are separate"
    A modded item can be recognized for a rarity roll without matching an automatic stat package. If a weapon rolls rarity but shows no bonus, the server should add a full entry to `rarity_attributes.json`.

## Vein-mining and tree-felling mods

Set:

```toml
disableConnectedToolPerks = true
```

to disable only:

- Vein Miner;
- Timber;
- Excavation.

This leaves Break Efficiency, Durability Guard, hoe perks, Clean Strip, Pathmaker, and Cultivator available.

Already rolled connected perks remain visible and report that compatibility mode disabled them.

## Multiplayer configuration sync

On join and `/sr reload`, the server sends clients its item pools, merged fixed entries, attribute packages, SetID rules, utility-perk configuration, and connected-tool compatibility flag.

Other TOML presentation settings and multipliers are not included in that custom sync. Keep the server and client TOML aligned when everyone should see the same visual choices and tooltip calculations.

The serialized configuration has a 262,144-character limit. Extremely large custom catalogs can exceed it.
