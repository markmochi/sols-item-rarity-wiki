# Fixed rarities

Use `custom_rarities.json` when an item type should always display one tier.

## Format

```json
{
  "minecraft:diamond": "LEGENDARY",
  "minecraft:nether_star": "SUPREME",
  "examplemod:ancient_relic": "MYTHICAL"
}
```

Valid tiers:

`COMMON`, `UNCOMMON`, `RARE`, `EPIC`, `LEGENDARY`, `MYTHICAL`, `SUPREME`

Unknown tier names become Common, so check spelling carefully.

## Override a built-in entry

Built-in fixed rarities live inside the mod and do not appear in the empty `custom_rarities.json`. Adding the same item ID overrides the built-in tier.

Use Common to return an item to a plain fallback display:

```json
{
  "minecraft:diamond": "COMMON"
}
```

The [item lookup](../reference/item-lookup.md) searches the full built-in catalog for each Minecraft version.

## What fixed rarity does

- Displays the configured tier immediately.
- Does not require a stored random roll.
- Overrides an item's stored roll for display and stat multiplier.
- Can apply to old items after config reload.

## What fixed rarity does not do

- It does not change loot tables.
- It does not change chest or mob drop rates.
- It does not guarantee stats by itself.

Most fixed catalog items are collectibles and therefore visual-only. A fixed weapon or armor piece can receive stats when it has an applicable attribute package and is equipped.

## Do not use fixed rarity for deterministic utility gear

Utility perks read the stored random tier. A fixed tool can therefore show one rarity while its hidden pool roll controls perk quality—or receive no perks if no stored roll exists.

Use a one-tier pool instead:

```json
{
  "examplemod:quest_pickaxe": {
    "SUPREME": 1
  }
}
```

This produces a stored Supreme roll and matching Supreme perk quality.

## Built-in Relic System entries

| Item ID | Fixed rarity |
|---|---|
| `solsrelicsystem:aster_core_tier1` | Mythical |
| `solsrelicsystem:aster_core_tier2` | Legendary |
| `solsrelicsystem:aster_core_tier3` | Epic |
| `solsrelicsystem:dust_of_enlightenment` | Supreme |
| `solsrelicsystem:aster_table` | Legendary |

These integration entries are registered even when the Relic System is not installed; absent item IDs simply have no gameplay effect.

## Apply changes

Run `/sr reload`. The fixed rule takes priority as soon as the current configuration reaches the client. Re-equip gear if its effective multiplier changed and active stats need to refresh.
