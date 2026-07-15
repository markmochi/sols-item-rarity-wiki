# Commands

All Item Rarity commands are administrative. Normal players do not need a command to reveal or use items.

| Command | Permission | Purpose |
|---|---:|---|
| `/solsrarity reload` | Operator / gamemaster | Reload JSON rarity, SetID, attribute, and utility-perk files; sync connected clients |
| `/solsrarity info` | Operator / gamemaster | Show mod version, loaded assignment count, tiers, and feature summary |
| `/solsrarity help` | Operator / gamemaster | Show the in-game command and config summary |
| `/sr ...` | Operator / gamemaster | Short alias for `/solsrarity ...` |

Forge builds and 1.21.1 use permission level 2. The 1.21.11 build uses the equivalent gamemaster permission.

## What reload changes

`/sr reload` reloads:

- `rarity_chances.json`;
- `custom_rarities.json`;
- `rarity_attributes.json`;
- `utility_buffs.json`;
- all three SetID JSON files.

It clears display caches and sends the current JSON mappings to connected clients.

## What reload does not do

- It does not reroll existing item rarity.
- It does not reroll stored utility-perk names or tiers.
- It does not reliably refresh active modifiers on equipment that remains worn; re-equip or relog after stat changes.
- It does not explicitly reload every value in `solsitemrarity-common.toml`; restart after TOML changes.

## Commands that do not exist

There is no supported command to:

- set the held item's rarity;
- clear a roll;
- reroll rarity;
- reroll utility perks;
- level or ascend an item.
