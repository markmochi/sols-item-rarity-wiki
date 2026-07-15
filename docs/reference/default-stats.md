# Default stat packages

These values belong to Item Rarity and are applied **before** the rarity multiplier. They do not replace or multiply the item's full vanilla stats.

## Weapons

| Item | Attack Damage | Attack Speed | Other configured value |
|---|---:|---:|---|
| Wooden Sword | 0.20 | 0.02 | — |
| Stone Sword | 0.30 | 0.03 | — |
| Copper Sword — 1.21.11 | 0.40 | 0.04 | — |
| Iron Sword | 0.50 | 0.05 | — |
| Golden Sword | 0.40 | 0.08 | — |
| Diamond Sword | 0.80 | 0.08 | — |
| Netherite Sword | 1.20 | 0.10 | 0.05 KB resistance configured |
| Bow | 0.50 | — | General attack damage, not projectile damage |
| Crossbow | 0.70 | — | General attack damage, not projectile damage |
| Trident | 1.00 | 0.08 | — |
| Mace — 1.21.1 and 1.21.11 | 1.20 | 0.02 | — |

The seven 1.21.11 spears mirror the corresponding sword material values.

## Armor

Abbreviations: **A** Armor, **T** Toughness, **H** Health, **S** Movement Speed, **L** Luck, **K** Knockback Resistance.

| Material | Helmet | Chestplate | Leggings | Boots |
|---|---|---|---|---|
| Leather | A .2, H .5 | A .3, H 1 | A .25, H .75 | A .15, S 1% |
| Chainmail | A .3, H .75 | A .5, H 1.5 | A .4, H 1 | A .25, S 1% |
| Copper — 1.21.11 | A .35, T .05, H .85 | A .55, T .1, H 1.75 | A .45, T .08, H 1.25 | A .28, S 1% |
| Iron | A .4, T .1, H 1 | A .6, T .2, H 2 | A .5, T .15, H 1.5 | A .3, S 1% |
| Gold | A .3, L .5, H .75 | A .5, L 1, H 1.5 | A .4, L .75, H 1 | A .25, L .5, S 2% |
| Diamond | A .6, T .3, H 1.5 | A 1, T .5, H 3 | A .8, T .4, H 2 | A .5, T .2, S 2% |
| Netherite | A .8, T .5, H 2, K 5% | A 1.5, T .8, H 4, K 10% | A 1.2, T .6, H 3, K 8% | A .7, T .4, S 3%, K 5% |

Other defaults:

- Turtle Helmet: `+0.5 Armor`, `+2 Health`
- Shield: `+0.5 Armor`, `+10% Knockback Resistance` configured

!!! warning "Current v1.7 shield limitation"
    Shield armor and knockback values can display in the tooltip, but these bonuses apply only to worn armor. A knockback-resistance field on a sword or spear has the same limitation.

## Automatic modded-equipment packages

When recognized equipment has no item or SetID package, it can receive:

| Type | Automatic base package |
|---|---|
| Sword | +0.50 damage, +0.05 attack speed |
| Bow or Crossbow | +0.40 general attack damage |
| Trident | +0.50 damage, +0.04 attack speed |
| Mace — modern builds | +0.70 damage, +0.02 attack speed |
| Helmet | +0.15 armor, +0.50 health |
| Chest armor | +0.25 armor, +1 health, +0.10 toughness |
| Leg armor | +0.20 armor, +0.75 health |
| Boots | +0.10 armor, +1% movement speed |
| Shield | Nominal +0.20 armor and +5% KB resistance; subject to the shield limitation |
| Utility tool | No automatic combat package; uses utility perks |

Name-detected weapons such as guns, staves, or scythes can receive a rarity without matching one of these automatic packages. A server owner can add their stats explicitly.

## Version-aware lookup

Use [Search items and rolls](item-lookup.md) for the exact built-in package attached to an item in a chosen Minecraft version.
