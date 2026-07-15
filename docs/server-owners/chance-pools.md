# Rarity chance pools

Use `rarity_chances.json` to give an item a custom weighted roll.

## Basic format

```json
{
  "minecraft:diamond_sword": {
    "COMMON": 20,
    "UNCOMMON": 25,
    "RARE": 25,
    "EPIC": 20,
    "LEGENDARY": 8,
    "MYTHICAL": 2
  },
  "examplemod:boss_blade": {
    "EPIC": 50,
    "LEGENDARY": 35,
    "MYTHICAL": 14,
    "SUPREME": 1
  }
}
```

Use the full registry ID: `modid:item_name`.

## Weight rules

- Weights are relative integers.
- Only positive weights enter the pool.
- A missing tier cannot roll.
- The numbers do not need to total 100.
- A zero-only or empty pool falls back to Common.

Chance formula:

```text
tier weight ÷ sum of all positive weights
```

Use the [odds calculator](../reference/default-rolls.md#test-custom-weights) to check a custom pool.

## Change vanilla odds

Vanilla equipment already appears in `rarity_chances.json`. Edit those entries directly.

Do not change TOML `defaultPool` and expect diamond or netherite gear to follow it. The automatic pool is only for recognized equipment without an explicit JSON entry, usually modded gear.

## Make a deterministic tier

A one-tier pool still stores a normal roll but always chooses the same tier:

```json
{
  "examplemod:quest_pickaxe": {
    "SUPREME": 1
  }
}
```

This is the recommended way to make deterministic utility gear because its stored rarity will also control perk count and perk-tier quality.

## Fixed rule versus one-tier pool

| Goal | Use |
|---|---|
| Cosmetic tier for a collectible | `custom_rarities.json` |
| Random equipment roll | `rarity_chances.json` |
| Guaranteed equipment tier with normal stored rarity | One-tier chance pool |
| Guaranteed utility-tool tier and matching perk quality | One-tier chance pool |

Avoid defining a fixed rarity and a random pool for the same utility tool. The visible fixed tier can outrank the hidden stored roll while utility perks still use the stored roll, producing mismatched quality.

## When an item rolls

An explicit pool item rolls when it is first revealed—normally when placed in a player's main hand. Login and respawn are catch-up triggers.

Pool changes affect only unrolled items. The stored result on existing stacks remains.

## Modded equipment with no explicit entry

The mod attempts to recognize combat weapons, armor, shields, and utility tools. Recognized items use `defaultPool` automatically.

If detection misses an item, add it explicitly to this JSON. If it rolls rarity but has no useful stats, add a complete package to `rarity_attributes.json` as well.

## SetID-specific pools

Use `setid_raritychances.json` when only a tagged variant of an item should use the pool. See [SetID item variants](setid.md).

## Apply changes

Run:

```mcfunction
/sr reload
```

The new pool is used by future unrolled items. It does not reroll existing stacks.
