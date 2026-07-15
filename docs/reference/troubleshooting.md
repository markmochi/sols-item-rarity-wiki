# FAQ and troubleshooting

## Why does the item say `Rarity: ???`?

It has a random pool but has not revealed its result. Put it in your main hand. Relogging or respawning also reveals missed items carried in the inventory.

## Can I reroll or remove a rarity?

Not through a player mechanic. There is no reforge item, menu, anvil action, or reroll command. Obtain another fresh copy for another roll.

## Does Luck improve my rarity chance?

No. Luck, Looting, Fortune, difficulty, mob type, chest type, enchantments, and dimension do not affect the roll. Only configured relative weights do.

## Why did my pool edit not change old gear?

Rolled rarity is stored on the item. Pool edits affect future unrolled items. A fixed override is different: it outranks stored rarity and can change the effective displayed tier after reload.

## Why does Common gear have no bonus?

That is expected. Common is explicitly skipped for rarity stats, utility perks, and custom borders.

## Why does an item have rarity but no stats?

Possible reasons:

- it is Common;
- it is a fixed collectible rather than equipment;
- the item has no configured or automatic stat package;
- the weapon was name-detected but did not match an automatic equipment template;
- Item Rarity stat bonuses are disabled by Sol's Relic System compatibility;
- `applyAttributeModifiers` is false.

For modded gear, add a complete item entry to `rarity_attributes.json`.

## Why did changed stats not refresh?

After `/sr reload`, remove and re-equip the affected item. If that does not refresh it, relog or respawn so transient modifiers are rebuilt.

Restart the game/server after editing `solsitemrarity-common.toml`.

## Why does my tool have no perks?

Check that:

- it is Uncommon or better;
- it was held in the main hand at least once;
- it is recognized as a pickaxe, axe, shovel, or hoe;
- `utility_buffs.json` has `"enabled": true`;
- `showAttributeBonuses` is enabled if the effect works but the section is hidden.

Common tools receive no perks.

## Why does Vein Miner, Timber, or Excavation say disabled?

The server enabled connected-tool compatibility mode. Check `disableConnectedToolPerks` in the common TOML. Other utility perks remain active.

## Why did Vein Miner break non-ore blocks?

The perk checks same-type connected blocks and tool effectiveness, not an ore tag. This is normal v1.7 behavior.

## Why did a fixed tool's perk quality not match its visible rarity?

A fixed display rule and a stored random roll can overlap. Utility perks use the stored roll. For deterministic utility gear, server owners should use a one-tier random pool such as `{ "SUPREME": 1 }` instead of a fixed rarity.

## Why do shield or weapon knockback values show but not work?

In v1.7, shield armor/knockback fields and knockback resistance placed on a weapon can be displayed, but those bonuses work only on worn armor. This is a known limitation.

## Why does a bow's Attack Damage not increase arrow damage?

The configured value modifies the player's general attack-damage attribute while held. There is no projectile-damage hook in v1.7.

## Why do I see fewer frames or no animation?

Check:

- `showCustomBorders`;
- `enableAnimatedBorders`;
- `borderRenderMode`;
- `enableChromaTextEffects`.

`SIMPLE`, `STATIC`, and `OFF` intentionally reduce effects. Common and unidentified items do not receive custom borders.

## What if JSON is malformed?

Look for missing commas, mismatched braces, unquoted keys, or invalid tier names. Fix the file, then run `/sr reload`.

During a live reload, a malformed main rarity JSON normally leaves the previous active map in memory. A malformed utility file falls back to default utility settings in memory. Do not assume a failed reload applied only part of the intended edit; fix the file and reload again.

## The server will not sync a very large config

The custom JSON sync has a 262,144-character limit. Reduce oversized fixed catalogs, item pools, lore, or SetID mappings.

## Still stuck?

Read [How to report a bug](reporting-issues.md), then use the guided issue form with versions, steps, logs, and relevant configs.
