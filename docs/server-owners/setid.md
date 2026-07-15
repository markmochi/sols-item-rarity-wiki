# SetID item variants

SetID rules let two stacks with the same item ID use different rarity or stat rules. They are useful for boss rewards, quest items, named sets, and custom drops.

## Step 1: give the stack a SetID string

=== "Minecraft 1.16.5 / 1.20.1"

    ```mcfunction
    /give @p minecraft:diamond_sword{SetID:"boss_drop"} 1
    ```

=== "Minecraft 1.21.1 / 1.21.11"

    ```mcfunction
    /give @p minecraft:diamond_sword[minecraft:custom_data={SetID:"boss_drop"}] 1
    ```

The runtime value must be a root string named exactly `SetID` inside the item's custom data. Name and value matching are case-sensitive.

## Step 2: use the config-key form

The JSON key uses the same form on every supported version:

```text
modid:item{SetID:value}
```

Example:

```text
minecraft:diamond_sword{SetID:boss_drop}
```

This config-key form is not the same as the modern `/give` component syntax.

## Fixed SetID rarity

`setid_fixed-rarities.json`:

```json
{
  "minecraft:diamond_sword{SetID:boss_drop}": "LEGENDARY"
}
```

## Random SetID pool

`setid_raritychances.json`:

```json
{
  "minecraft:diamond_sword{SetID:boss_drop}": {
    "EPIC": 40,
    "LEGENDARY": 35,
    "MYTHICAL": 20,
    "SUPREME": 5
  }
}
```

## SetID attributes

`setid_attributes.json`:

```json
{
  "minecraft:diamond_sword{SetID:boss_drop}": {
    "attackDamageBonus": 1.5,
    "attackSpeedBonus": 0.1,
    "maxHealthBonus": 2.0,
    "customLore": ["Trophy of the Sunken Keep"]
  }
}
```

SetID attributes replace the normal item package; they do not merge with it. Include every value the variant should keep.

## Priority

SetID rules are the highest-priority rules:

1. SetID fixed rarity
2. Item fixed rarity
3. SetID random pool
4. Item random pool
5. Automatic pool

SetID attributes also outrank item attributes and automatic packages.

## Common mistakes

- Using `setid` instead of exact `SetID`
- Storing a number or compound instead of a string
- Giving the item modern component syntax but copying that entire syntax into the JSON key
- Using different letter case in the item and config
- Defining both a fixed rule and a pool for the same tagged utility tool
- Creating a partial attribute package and expecting normal item fields to merge into it

For deterministic tagged utility gear, use a one-tier SetID chance pool rather than a SetID fixed rule.

## Apply changes

Run `/sr reload`. Newly revealed matching variants use the new pool. Fixed SetID rules affect matching stacks immediately; active equipment stats may need re-equipping.
