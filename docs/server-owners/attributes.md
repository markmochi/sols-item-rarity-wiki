# Stat attributes

Use `rarity_attributes.json` to define an item's base rarity-bonus package.

## Format

```json
{
  "examplemod:boss_blade": {
    "attackDamageBonus": 1.5,
    "attackSpeedBonus": 0.1,
    "maxHealthBonus": 2.0,
    "customLore": [
      "Recovered from the Sunken Keep"
    ]
  }
}
```

The final value for non-Common equipment is:

```text
configured value × rarity multiplier
```

## Supported fields

| Field | Tooltip meaning | Application |
|---|---|---|
| `attackDamageBonus` | Attack Damage | Additive; recognized weapon in main/offhand |
| `attackSpeedBonus` | Attack Speed | Additive; recognized weapon in main/offhand |
| `armorBonus` | Armor | Additive; worn armor only |
| `armorToughnessBonus` | Toughness | Additive; worn armor only |
| `maxHealthBonus` | Max Health | Additive health points; 2 = 1 heart |
| `movementSpeedBonus` | Speed | Fraction of base speed; `0.02` = 2% before rarity scaling |
| `knockbackResistanceBonus` | KB Resist | Fraction; applied to worn armor |
| `luckBonus` | Luck | Additive Minecraft Luck attribute |
| `miningSpeedBonus` | Mining Speed | Fractional tool break-speed multiplier |
| `customLore` | Plain lore lines | Appended to the tooltip |

Use positive values for functional bonuses. Negative values are not displayed or applied by the normal v1.71 paths.

## Package priority and replacement

1. SetID attributes
2. Item attributes
3. Automatic equipment package

The first package with a numeric bonus wins. Values do not merge with a lower-priority package.

Example: if a diamond sword entry contains only `attackDamageBonus`, its built-in attack-speed entry is replaced rather than carried forward. Include every value you want that item to keep.

## Utility tools

Recognized utility tools discard combat and armor fields from their chosen attribute package. They retain:

- `miningSpeedBonus`;
- custom lore.

Their main progression comes from Utility Perks.

## Automatic modded-equipment packages

If no SetID or item package applies, recognized equipment can receive a baseline package. See [Default stat packages](../reference/default-stats.md#automatic-modded-equipment-packages).

Some name-detected weapons can roll rarity without matching an automatic stat template. Configure them explicitly.

## Lore limitation in v1.71

A `customLore`-only object does not count as a selected package. Include an applicable nonzero numeric field if this file must supply lore for that stack.

For a utility tool, a small meaningful `miningSpeedBonus` can make the package selectable:

```json
{
  "examplemod:mining_drill": {
    "miningSpeedBonus": 0.05,
    "customLore": ["Calibrated for deep mining"]
  }
}
```

## Known v1.71 type limits

- Shield armor and knockback values may display but are not applied as worn armor.
- Knockback resistance on a weapon may display, but weapons do not apply this bonus.
- Bow and crossbow attack damage changes the player's general attack-damage attribute, not projectile damage.

Design custom packages around the fields that the item's equipment type can actually apply.

## Reloading

Run `/sr reload`, then have players remove and re-equip affected gear. Relogging also rebuilds transient modifiers.

Restart after changing global multipliers in the common TOML.
