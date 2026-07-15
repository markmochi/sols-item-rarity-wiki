# How rarity works

Item Rarity adds a readable RPG layer to normal equipment and collectibles. It does not replace Minecraft's loot system: it decides how an eligible item is presented and, for equipment, which rarity multiplier and tool perks it receives.

## Two kinds of rarity

<div class="loot-grid">
  <div class="loot-card loot-card--cyan">
    <span class="loot-card__kicker">Random equipment</span>
    <h3>One roll per item</h3>
    <p>Weapons, armor, shields, and utility tools roll from a weighted pool. The result is stored on that stack.</p>
  </div>
  <div class="loot-card loot-card--gold">
    <span class="loot-card__kicker">Fixed catalog</span>
    <h3>One tier by item type</h3>
    <p>Collectibles such as diamonds, Nether Stars, and Dragon Eggs display a set tier every time.</p>
  </div>
</div>

Random rarity answers **“How did this particular sword roll?”** Fixed rarity answers **“How prestigious is this type of item?”**

Fixed rarity does not make an item drop more often or less often. Item Rarity does not rewrite chest or mob loot tables.

## Rule priority

When more than one rule could match an item, the highest rule wins:

1. SetID fixed rarity
2. Item fixed rarity
3. SetID random pool
4. Item random pool
5. Automatic equipment pool
6. Default rarity, normally Common

This matters mainly on configured servers. A fixed rule always controls the visible and effective rarity, even if the item contains an older stored roll.

## What decides a random roll

Only the positive weights in the matching pool are used. If a pool contains:

```json
{
  "COMMON": 50,
  "UNCOMMON": 30,
  "RARE": 20
}
```

the total is 100, so the chances are 50%, 30%, and 20%. If the same numbers were doubled, the percentages would stay the same because weights are relative.

These do **not** affect rarity chance:

- player Luck;
- Looting or Fortune;
- item enchantments;
- world difficulty;
- mob type or chest type;
- biome, dimension, or time;
- how the item entered the inventory.

## What is stored on the item

A random result belongs to the item stack. It survives normal storage, dropping, pickup, trade, save, and transfer. Editing a pool later does not change an item that already rolled.

Fixed catalog items do not need a stored result; their tier is looked up whenever they are displayed.

!!! note "Stackable items in random pools"
    If a server places a stackable item in a random pool, the entire stack shares one result because rarity belongs to the stack, not to each unit inside it.

## What a higher rarity changes

For weapons and armor, rarity scales an item-specific base stat package. Stats themselves are not random substats; a diamond sword always uses its configured diamond-sword package, then rarity changes the multiplier.

For utility tools, rarity also influences:

- how many perks roll;
- which perk tiers I–V are possible;
- the chance of stronger perk tiers.

For ordinary fixed collectibles, rarity is usually presentation only because the item is not equipment and has no applicable stat package.

## What the system does not contain

There is no:

- rarity XP or leveling;
- ascension;
- reforge station or currency;
- anvil reroll;
- player reroll command;
- rarity-based mob system;
- rarity-based loot-table injection.

To try again, obtain another fresh copy of the item.
