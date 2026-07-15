# Configuration map

Item Rarity separates global switches from item data. Back up the config folder before a large change and edit files while the server is stopped when possible.

## File locations

<div class="config-map">
  <div class="config-file"><code>config/solsitemrarity-common.toml</code><span>Master enable, tooltip and border options, stat multipliers, automatic equipment pool, connected-tool compatibility.</span></div>
  <div class="config-file"><code>config/solsitemrarity/rarity_chances.json</code><span>Explicit per-item random rarity pools.</span></div>
  <div class="config-file"><code>config/solsitemrarity/custom_rarities.json</code><span>Fixed-rarity additions and overrides.</span></div>
  <div class="config-file"><code>config/solsitemrarity/rarity_attributes.json</code><span>Per-item base stat packages and custom lore.</span></div>
  <div class="config-file"><code>config/solsitemrarity/utility_buffs.json</code><span>Tool perk counts, selection weights, perk-tier odds, and effect values.</span></div>
  <div class="config-file"><code>config/solsitemrarity/setid_raritychances.json</code><span>Random pools for tagged item variants.</span></div>
  <div class="config-file"><code>config/solsitemrarity/setid_fixed-rarities.json</code><span>Fixed tiers for tagged item variants.</span></div>
  <div class="config-file"><code>config/solsitemrarity/setid_attributes.json</code><span>Stat packages for tagged item variants.</span></div>
  <div class="config-file"><code>config/solsitemrarity/config_version.json</code><span>Automatically managed schema marker. Do not edit it.</span></div>
</div>

## Main TOML settings

### `[general]`

| Key | Default | Values / range | Effect |
|---|---:|---|---|
| `enabled` | `true` | Boolean | Master rarity and UI switch |
| `showRarityInTooltip` | `true` | Boolean | Shows the rarity line |
| `showAttributeBonuses` | `true` | Boolean | Shows stat and Utility Perk sections |
| `showCustomBorders` | `true` | Boolean | Enables rarity borders |
| `enableChromaTextEffects` | `true` | Boolean | Animates item names and rarity-colored text |
| `enableAnimatedBorders` | `true` | Boolean | Enables full decorative border animation |
| `borderRenderMode` | `"FULL"` | FULL, SIMPLE, STATIC, OFF | Sets border complexity |
| `colorItemNames` | `true` | Boolean | Colors tooltip and held-item names |
| `applyAttributeModifiers` | `true` | Boolean | Applies equipment stats and gates Break Efficiency/custom mining speed |
| `disableConnectedToolPerks` | `false` | Boolean | Disables only Vein Miner, Timber, Excavation |
| `rainbowSpeed` | `1500.0` | 100–10000; lower is faster | Chroma cycle duration |
| `defaultRarity` | `"COMMON"` | Any tier name | Fallback for otherwise unmatched items |

An invalid border mode falls back to `FULL`. An invalid rarity name becomes Common.

### `[multipliers]`

| Key | Default | Range |
|---|---:|---:|
| `common` | 1.00 | 0.1–10 |
| `uncommon` | 1.15 | 0.1–10 |
| `rare` | 1.25 | 0.1–10 |
| `epic` | 1.50 | 0.1–10 |
| `legendary` | 2.00 | 0.1–10 |
| `mythical` | 3.00 | 0.1–10 |
| `supreme` | 5.00 | 0.1–20 |

Common remains skipped even if its multiplier is changed.

### `[defaultPool]`

| Key | Default | Range |
|---|---:|---:|
| `common` | 30 | 0–10000 |
| `uncommon` | 28 | 0–10000 |
| `rare` | 22 | 0–10000 |
| `epic` | 12 | 0–10000 |
| `legendary` | 5 | 0–10000 |
| `mythical` | 2 | 0–10000 |
| `supreme` | 1 | 0–10000 |

This pool affects only auto-detected equipment absent from `rarity_chances.json`. Edit the JSON to change listed vanilla gear.

## Rule priority

1. SetID fixed rarity
2. Item fixed rarity
3. SetID random pool
4. Item random pool
5. Automatic equipment pool
6. Default rarity

Attribute packages have their own priority:

1. SetID attributes
2. Item attributes
3. Automatic package

Attribute packages replace lower-priority packages instead of merging with them.

## Safe editing workflow

1. Stop the server or make a backup.
2. Edit one file at a time with a plain-text editor.
3. Keep JSON keys and strings in double quotes.
4. Validate commas and braces.
5. Use `/sr reload` for JSON edits.
6. Re-equip changed gear or relog when active modifiers need to refresh.
7. Restart after changing the common TOML.

## Reload and existing items

| Change | Existing item rarity | Existing perk identity/tier | Existing effect values |
|---|---|---|---|
| Random pool weights | Unchanged | Unchanged | Unchanged |
| Perk count or selection weights | Unchanged | Unchanged | Unchanged |
| Perk-tier weights | Unchanged | Unchanged | Unchanged |
| Numerical perk effect arrays | Unchanged | Same tier | Updated value for that tier |
| Fixed rarity override | Effective displayed tier changes | Stored perks remain | Stat multiplier can change after refresh |
| Attribute package | Same rarity | Same perks | New package after re-equip/relog |

## Client synchronization

The server sends JSON mappings, utility settings, and the connected-tool compatibility flag to clients on join and reload. Most other TOML values are not included in that custom packet. Keep client and server TOML aligned for consistent presentation and tooltip calculations.

The serialized configuration limit is 262,144 characters.
