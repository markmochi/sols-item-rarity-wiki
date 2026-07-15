# Default roll tables

Every built-in vanilla equipment pool totals 100, so the default weights below are also percentages. A dash means the tier cannot roll from that pool.

## Equipment families

| Equipment group | Common | Uncommon | Rare | Epic | Legendary | Mythical | Supreme |
|---|---:|---:|---:|---:|---:|---:|
| Wooden sword and tools | 50 | 35 | 15 | — | — | — | — |
| Stone sword and tools; leather armor | 40 | 35 | 20 | 5 | — | — | — |
| Copper equipment — 1.21.11 only | 35 | 35 | 22 | 7 | 1 | — | — |
| Iron equipment; chainmail; shield | 30 | 30 | 25 | 12 | 3 | — | — |
| Golden equipment; bow | 25 | 30 | 25 | 15 | 5 | — | — |
| Diamond equipment | 20 | 25 | 25 | 20 | 8 | 2 | — |
| Netherite equipment | — | 23 | 30 | 26 | 15 | 5 | 1 |

“Tools” means pickaxe, axe, shovel, and hoe. Spears in 1.21.11 follow their matching material row.

## Special equipment

| Item | Common | Uncommon | Rare | Epic | Legendary | Mythical | Supreme |
|---|---:|---:|---:|---:|---:|---:|
| Crossbow | 20 | 25 | 30 | 18 | 7 | — | — |
| Trident | — | — | 20 | 30 | 30 | 15 | 5 |
| Mace — 1.21.1 and 1.21.11 | — | 30 | 28 | 22 | 12 | 6 | 2 |
| Turtle Helmet | — | — | 25 | 35 | 25 | 12 | 3 |

## Automatic pool for unlisted equipment

Recognized equipment without an explicit `rarity_chances.json` entry uses the TOML `defaultPool`:

| Common | Uncommon | Rare | Epic | Legendary | Mythical | Supreme |
|---:|---:|---:|---:|---:|---:|---:|
| 30 | 28 | 22 | 12 | 5 | 2 | 1 |

Because this total is 100, the defaults are direct percentages.

!!! warning "The automatic pool is not the vanilla pool"
    Changing `defaultPool` does not change diamond, netherite, or other listed vanilla gear. Those items have explicit entries in `rarity_chances.json`.

## Test custom weights

Weights do not need to total 100. Use this calculator to see the actual percentage produced by any non-negative set.

<div class="calculator" data-odds-calculator>
  <div class="calculator__grid">
    <label>Common <input type="number" min="0" value="30" data-weight="COMMON"></label>
    <label>Uncommon <input type="number" min="0" value="28" data-weight="UNCOMMON"></label>
    <label>Rare <input type="number" min="0" value="22" data-weight="RARE"></label>
    <label>Epic <input type="number" min="0" value="12" data-weight="EPIC"></label>
    <label>Legendary <input type="number" min="0" value="5" data-weight="LEGENDARY"></label>
    <label>Mythical <input type="number" min="0" value="2" data-weight="MYTHICAL"></label>
    <label>Supreme <input type="number" min="0" value="1" data-weight="SUPREME"></label>
    <button type="button">Calculate odds</button>
  </div>
  <div class="calculator__result" data-odds-result aria-live="polite"></div>
</div>

## Individual item entries

Use [Search items and rolls](item-lookup.md) to inspect any built-in item for the selected Minecraft version. It also shows version-specific additions such as copper equipment and spears.
