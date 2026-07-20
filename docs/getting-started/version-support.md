# Supported versions

The current Item Rarity release is **v1.71** on four Minecraft lines.

| Minecraft | Loader | Main version notes |
|---|---|---|
| 1.16.5 | Forge | Core rarity, stat, border, and utility-perk systems; uses the 1.16.5 item catalog |
| 1.20.1 | Forge | Expanded modern fixed catalog with the same player loop |
| 1.21.1 | NeoForge | Adds modern equipment such as the mace to its explicit pools |
| 1.21.11 | NeoForge | Adds copper equipment and spears, a larger fixed catalog, and native rarity tooltip textures |

## Features shared by every build

- Seven tiers from Common to Supreme
- One-time rarity reveal stored on the item
- Equipment stat multipliers
- Utility tool perks with tiers I–V
- Colored names, tooltips, inventory slots, and hotbar slots
- Random item pools, fixed rarities, custom attributes, and SetID variants
- `/solsrarity` and `/sr` server commands
- Sol's Relic System compatibility

## Gameplay differences to notice

### 1.16.5

The older game has a much smaller fixed-item catalog because later vanilla blocks and items do not exist. Its normal explicit gear pools still include wood, stone, iron, gold, diamond, netherite, bows, crossbows, tridents, shields, turtle helmets, and armor.

### 1.20.1

The fixed catalog expands substantially to cover the content available in 1.20.1. The roll and perk rules remain the same as the other versions.

### 1.21.1

The mace has its own default pool:

`0 Common / 30 Uncommon / 28 Rare / 22 Epic / 12 Legendary / 6 Mythical / 2 Supreme`

### 1.21.11

Copper swords, spears, tools, and armor receive an explicit copper pool:

`35 Common / 35 Uncommon / 22 Rare / 7 Epic / 1 Legendary`

Spears follow the pool for their material. The build also ships rarity-specific tooltip background and frame textures, so its tooltip presentation differs slightly from the programmatic rendering used in 1.21.1.

## Moving configs between versions

Custom item IDs that exist in both versions can usually be carried over, but do not blindly replace an entire generated config folder:

1. Back up the old folder.
2. Let the new build generate its current defaults.
3. Copy your custom entries into the new files.
4. Remove IDs that do not exist on the target Minecraft version.
5. Validate the JSON and restart the server.

This keeps newer vanilla defaults and config schema changes intact.
