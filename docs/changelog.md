---
title: Changelog Timeline
description: Release history for Sol's Item Rarity, including downloads, utility perk updates, fixes, and compatibility improvements.
---

# Changelog timeline

Follow the major gameplay additions, balance changes, compatibility improvements, and fixes in Sol's Item Rarity. Releases are listed newest first.

<div class="release-timeline" markdown>

<article class="release-entry release-entry--latest" markdown>

<div class="release-entry__meta"><span class="release-entry__version">v1.71</span><time datetime="2026-07">July 2026</time><span class="release-entry__badge">Latest</span></div>

## Modded tool compatibility

Version 1.71 prevents Item Rarity's connected-block and durability perks from interfering with tools that already provide their own mining or durability logic. It is available for **Forge 1.16.5**, **Forge 1.20.1**, **NeoForge 1.21.1**, and **NeoForge 1.21.11**.

### Download

<div class="release-downloads release-downloads--all">
  <a href="https://www.curseforge.com/minecraft/mc-mods/sols-item-rarity/files"><strong>Download v1.71 on CurseForge</strong><span>Choose the file matching your Minecraft version and loader</span></a>
</div>

### Compatibility fixes

- Fixed connected-block perks stacking with another mod's tool logic and breaking far more blocks than intended.
- **Tinkers' Construct is protected by default.**
- Protected tools keep their rarity, Break Efficiency, and other safe bonuses.
- Vein Miner, Timber, Excavation, and Durability Guard are disabled for protected tools.
- Existing protected tools keep their saved perks, but conflicting effects are shown as disabled and no longer activate.
- Newly rolled protected tools do not receive the conflicting perks.

### Add support for more mods

`utility_buffs.json` now includes a targeted compatibility list:

```json
"toolCompatibilityBlacklist": [
  "tconstruct",
  "anothermod",
  "anothermod:specific_tool"
]
```

- Use `modid` or `modid:*` to protect every tool from a mod.
- Use `modid:item_id` to protect only one item.
- Existing configs upgrade automatically with `tconstruct` as the default entry while preserving other settings.
- If another mod adds connected mining to every tool, the global `disableConnectedToolPerks = true` option remains available in `solsitemrarity-common.toml`.

See [utility perk tuning](server-owners/utility-perks.md#tool-compatibility-blacklist) for setup examples and the difference between targeted and global protection.

### Sol's Relic System integration

- Sol's Relic System follows the same compatibility list.
- Protected tools do not roll the Relic Durability% main stat and do not have their custom durability rewritten.
- Other eligible Relic stats continue to work normally.

</article>

<article class="release-entry" markdown>

<div class="release-entry__meta"><span class="release-entry__version">v1.7</span><time datetime="2026-06-24">June 24, 2026</time></div>

## Utility and compatibility improvements

Version 1.7 improves the utility perk system introduced in v1.6, makes connected breaking more dependable, and separates combat-focused weapons from working tools more accurately.

### Downloads

<div class="release-downloads">
  <a href="https://www.curseforge.com/minecraft/mc-mods/sols-item-rarity/files/8311366"><strong>Forge</strong><span>Minecraft 1.16.5</span></a>
  <a href="https://www.curseforge.com/minecraft/mc-mods/sols-item-rarity/files/8311372"><strong>Forge</strong><span>Minecraft 1.20.1</span></a>
  <a href="https://www.curseforge.com/minecraft/mc-mods/sols-item-rarity/files/8311375"><strong>NeoForge</strong><span>Minecraft 1.21.1</span></a>
</div>

### Connected breaking

- **Vein Miner** now works on stone and other connected matching blocks that the pickaxe can properly mine, including supported modded blocks.
- **Timber** finds connected matching vanilla and modded logs more reliably.
- Connected blocks use normal Minecraft drops, consume durability, respect the perk's block limit, and work with Fortune and Silk Touch.
- **Harvest Replant** uses the crop's normal drops before replanting, preventing duplicated crops.

### Enchantments and perk balance

- **Break Efficiency** continues to stack with Minecraft's Efficiency enchantment.
- **Durability Guard** works with or without Unbreaking. Its tooltip now states more clearly that it prevents durability loss.
- Higher perk tiers are less likely to appear below Supreme rarity.

### Better equipment detection

- Battle axes, war axes, great axes, and similar combat-focused items are treated as weapons instead of utility tools.
- Pickarangs, paxels, drills, excavators, super tools, lumber axes, spades, sickles, and similar working tools are detected more accurately.
- Utility tools no longer receive inappropriate weapon bonuses or Sol's Relic System stats.

</article>

<article class="release-entry" markdown>

<div class="release-entry__meta"><span class="release-entry__version">v1.6</span><time datetime="2026-06-09">June 9, 2026</time></div>

## Utility perks and equipment balance

Version 1.6 replaces weapon-style damage bonuses on utility tools with permanent, tiered perks. Higher-rarity tools can roll more perks and have better chances of receiving stronger perk tiers.

### Downloads

<div class="release-downloads">
  <a href="https://www.curseforge.com/minecraft/mc-mods/sols-item-rarity/files/8222311"><strong>Forge</strong><span>Minecraft 1.16.5</span></a>
  <a href="https://www.curseforge.com/minecraft/mc-mods/sols-item-rarity/files/8222317"><strong>Forge</strong><span>Minecraft 1.20.1</span></a>
  <a href="https://www.curseforge.com/minecraft/mc-mods/sols-item-rarity/files/8222319"><strong>NeoForge</strong><span>Minecraft 1.21.1</span></a>
</div>

### New utility perks

- **Durability Guard:** Has a chance to prevent durability loss.
- **Break Efficiency:** Increases block-breaking speed and stacks with Efficiency and Haste.
- **Vein Miner:** Lets pickaxes break connected matching blocks.
- **Timber:** Lets axes break connected matching logs.
- **Excavation:** Lets shovels break connected matching blocks.
- **Harvest Replant:** Lets hoes harvest and replant nearby mature crops.
- **Bountiful Harvest:** Gives a chance to receive extra crop produce.

See the [utility tool perk guide](player-guide/utility-perks.md) for perk counts, tier odds, values, activation rules, and tool-specific details.

### Sneak to control connected breaking

Vein Miner, Timber, and Excavation activate only while **sneaking**. When you are not sneaking, the tool breaks only the block you selected, so precise mining remains unchanged.

Connected-block perks respect their tier limits and use normal Minecraft breaking rules. Extra blocks consume durability and use the expected drops, Fortune, Silk Touch, and supported modded-block behavior.

### Enchantments and balance

- Durability Guard works independently and combines with Unbreaking.
- Break Efficiency combines with Efficiency and Haste.
- Mending, Fortune, and Silk Touch continue to behave normally.
- Stronger perk tiers are intentionally difficult to roll below Supreme rarity.

### Connected-perk compatibility switch

Servers and modpacks that already provide vein mining, excavation, tree felling, or area digging can disable Item Rarity's three connected-block perks:

```toml
[general]
disableConnectedToolPerks = true
```

This disables **Vein Miner, Timber, and Excavation** while keeping Durability Guard, Break Efficiency, Harvest Replant, and Bountiful Harvest active. Existing configuration files receive the option automatically. See [utility perk tuning](server-owners/utility-perks.md) for the full server configuration guide.

</article>

</div>
