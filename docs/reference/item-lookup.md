# Search items and rolls

Choose a Minecraft version and enter an item ID. The lookup shows its built-in fixed rarity, explicit random pool, and configured base stat package when present.

<div class="lookup-panel" data-item-lookup>
  <div class="lookup-panel__controls">
    <label>Minecraft version
      <select data-lookup-version>
        <option value="1.16.5">1.16.5 — Forge</option>
        <option value="1.20.1">1.20.1 — Forge</option>
        <option value="1.21.1">1.21.1 — NeoForge</option>
        <option value="1.21.11" selected>1.21.11 — NeoForge</option>
      </select>
    </label>
    <label>Item ID or name
      <input type="search" value="minecraft:diamond_sword" list="rarity-item-ids" data-lookup-query placeholder="minecraft:diamond_sword" autocomplete="off">
      <datalist id="rarity-item-ids"></datalist>
    </label>
    <button type="button">Inspect item</button>
  </div>
  <div class="lookup-result" data-lookup-result aria-live="polite"></div>
</div>

## How to read a result

### Fixed catalog rarity

The item always displays that tier. This is a presentation rule; it does not change how often vanilla or another mod drops the item.

Most fixed collectibles do not gain stats because they are not wearable or held equipment. A configured fixed weapon or armor piece can still use an applicable stat package.

### Explicit random pool

Each bar is the item's normal chance before server customization. Built-in vanilla pools total 100, so their weights are direct percentages.

The pool is rolled once when the item is revealed. An existing stored result does not change when a pool is edited later.

### Configured base stat package

These are Item Rarity's base bonus values before the rarity multiplier. They are separate from the item's vanilla stats.

Common is skipped. For every other tier:

```text
base value × rarity multiplier = final rarity bonus
```

### No built-in entry

This does not always mean “no rarity.” Recognized modded weapons, armor, shields, and utility tools can use the automatic pool even when their IDs do not appear in the built-in table.

## Catalog size by version

| Minecraft | Built-in fixed entries | Explicit random pools |
|---|---:|---:|
| 1.16.5 | 86 | 59 |
| 1.20.1 | 597 | 59 |
| 1.21.1 | 665 | 60 |
| 1.21.11 | 798 | 76 |

Five Sol's Relic System items receive integration rarities separately and therefore are not included in the fixed-entry counts above.

!!! tip "Finding an item ID in game"
    Press ++f3+h++ to enable advanced tooltips, then hover the item. Modded IDs use `modid:item_name`.
