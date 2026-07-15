# Visuals and performance

Rarity visuals can be tuned independently from gameplay. Lowering visual complexity does not change stored rolls, stats, or perks.

## Recommended presets

### Full presentation

```toml
showCustomBorders = true
enableChromaTextEffects = true
enableAnimatedBorders = true
borderRenderMode = "FULL"
```

Uses rarity-themed tooltip decoration, particles, glow, animated high-tier slot borders, and chroma text.

### Balanced

```toml
showCustomBorders = true
enableChromaTextEffects = true
enableAnimatedBorders = false
borderRenderMode = "SIMPLE"
```

Keeps clear rarity frames and animated text while reducing decorative rendering.

### Static

```toml
showCustomBorders = true
enableChromaTextEffects = false
enableAnimatedBorders = false
borderRenderMode = "STATIC"
```

Uses plain static tier colors and frames.

### Minimal

```toml
showCustomBorders = false
enableChromaTextEffects = false
colorItemNames = true
showRarityInTooltip = true
```

Keeps colored names and the rarity line without custom border rendering.

## Border mode details

| Mode | Tooltip | Inventory and hotbar |
|---|---|---|
| `FULL` | Full rarity theme; animated when enabled | Detailed tier frames; high tiers animate |
| `SIMPLE` | Simple static decoration | Framed slots with lighter detail |
| `STATIC` | Plain rarity treatment | Plain static frames |
| `OFF` | Vanilla border | No custom frames |

`showCustomBorders = false` and `borderRenderMode = "OFF"` both disable custom border presentation.

## Chroma speed

```toml
rainbowSpeed = 1500.0
```

Valid range: `100.0` to `10000.0` milliseconds. Lower values cycle faster. The setting controls every chroma type, including green/white, cyan/white, blue/white, black/white, and red/black—not only Legendary rainbow.

## Separate visibility from effects

- `showRarityInTooltip` hides or shows only the rarity line.
- `colorItemNames` controls the item name presentation.
- `showAttributeBonuses` hides both stat lines and the Utility Perks tooltip section. It does not by itself disable all effects.
- `applyAttributeModifiers` disables equipment bonuses and also gates Break Efficiency/custom mining-speed bonuses.
- Other utility perks have separate action paths and can remain active.

## Client and server consistency

Most visual settings live in the common TOML and are not included in Item Rarity's JSON sync packet. Distribute matching TOML settings when a modpack should present the same style and multiplier text to every player.

Restart clients and the server after changing TOML values.
