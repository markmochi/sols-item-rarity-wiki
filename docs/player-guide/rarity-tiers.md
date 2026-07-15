# Rarity tiers

Seven tiers describe equipment quality and fixed-item prestige.

<div class="tier-spectrum" aria-label="Rarity progression from Common to Supreme">
  <div class="tier-chip" style="--tier-color:#777"><strong>Common</strong><span>1.00×</span></div>
  <div class="tier-chip" style="--tier-color:#1d8d32"><strong>Uncommon</strong><span>1.15×</span></div>
  <div class="tier-chip" style="--tier-color:#168e9e"><strong>Rare</strong><span>1.25×</span></div>
  <div class="tier-chip" style="--tier-color:#3636b9"><strong>Epic</strong><span>1.50×</span></div>
  <div class="tier-chip" style="--tier-color:#a77b06"><strong>Legendary</strong><span>2.00×</span></div>
  <div class="tier-chip" style="--tier-color:#555"><strong>Mythical</strong><span>3.00×</span></div>
  <div class="tier-chip" style="--tier-color:#a40d0d"><strong>Supreme</strong><span>5.00×</span></div>
</div>

| Tier | Base color | Name effect | Default multiplier | Default tool perks |
|---|---|---|---:|---:|
| <span class="rarity-common">Common</span> | White `#FFFFFF` | Static | 1.00× | 0 |
| <span class="rarity-uncommon">Uncommon</span> | Green `#55FF55` | Green ↔ white | 1.15× | 1 |
| <span class="rarity-rare">Rare</span> | Cyan `#55FFFF` | Cyan ↔ white | 1.25× | 1, with 35% chance for 2 |
| <span class="rarity-epic">Epic</span> | Blue `#5555FF` | Blue ↔ white | 1.50× | 2 |
| <span class="rarity-legendary">Legendary</span> | Gold `#FFD700` | Rainbow | 2.00× | 2, with 50% chance for 3 |
| <span class="rarity-mythical">Mythical</span> | White `#FFFFFF` | Dark ↔ white | 3.00× | 3 |
| <span class="rarity-supreme">Supreme</span> | Red `#FF0000` | Red ↔ black | 5.00× | 3 |

## Common is intentionally plain

Although Common has a configurable `1.00×` value, Common equipment is skipped by the bonus handlers. It receives:

- no rarity stat bonus;
- no utility perks;
- no custom rarity slot or tooltip border.

The value exists so servers can maintain a complete multiplier table, not because Common gear receives its configured package.

## Multipliers scale only the bonus package

A `2×` Legendary item does not double all vanilla stats. It doubles the values supplied by Item Rarity for that item.

For example, a diamond sword has a default Item Rarity package of `+0.8 Attack Damage` and `+0.08 Attack Speed`:

| Roll | Damage bonus | Speed bonus |
|---|---:|---:|
| Rare 1.25× | +1.0 | +0.1 |
| Legendary 2× | +1.6 | +0.16, displayed as +0.2 |
| Supreme 5× | +4.0 | +0.4 |

The sword's original vanilla damage remains separate.

## Animated and static presentation

With chroma text enabled, every non-Common tier animates between its listed colors. With chroma disabled, each uses its base static color.

Legendary, Mythical, and Supreme also have animated high-tier borders in the full visual mode. Servers and players can reduce or disable these effects without changing rarity or stats. See [Tooltips and borders](visuals.md).
