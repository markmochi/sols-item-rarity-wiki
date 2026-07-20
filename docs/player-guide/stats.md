# Stats and multipliers

Item stats are packages, not random substats. The item decides which base bonuses are available; rarity decides how strongly those values scale.

<div class="formula-panel">
  <div><b>Configured base bonus</b><span>Example: +0.8 damage</span></div>
  <b class="formula-panel__operator">×</b>
  <div><b>Rarity multiplier</b><span>Legendary: 2.0</span></div>
  <b class="formula-panel__operator">=</b>
  <div><b>Final rarity bonus</b><span>+1.6 damage</span></div>
</div>

## Try the formula

<div class="calculator" data-bonus-calculator>
  <div class="calculator__grid">
    <label>Configured base bonus
      <input type="number" min="0" step="0.01" value="0.8" data-base-bonus>
    </label>
    <label>Rarity
      <select data-bonus-tier>
        <option value="COMMON">Common — 1.00×</option>
        <option value="UNCOMMON">Uncommon — 1.15×</option>
        <option value="RARE">Rare — 1.25×</option>
        <option value="EPIC">Epic — 1.50×</option>
        <option value="LEGENDARY" selected>Legendary — 2.00×</option>
        <option value="MYTHICAL">Mythical — 3.00×</option>
        <option value="SUPREME">Supreme — 5.00×</option>
      </select>
    </label>
    <button type="button">Calculate</button>
  </div>
  <div class="calculator__result" data-bonus-result aria-live="polite"></div>
</div>

## Available equipment stats

| Tooltip stat | Meaning | When it applies |
|---|---|---|
| Attack Damage | Adds to the player's attack-damage attribute | Recognized weapon in main hand or offhand |
| Attack Speed | Adds to attack speed | Recognized weapon in main hand or offhand |
| Armor | Adds armor points | Armor worn in an armor slot |
| Toughness | Adds armor toughness | Armor worn in an armor slot |
| Max Health | Adds health points; 2 points = 1 heart | While the configured item is equipped |
| Speed | Adds a percentage of base movement speed | While the configured item is equipped |
| KB Resist | Adds knockback resistance | Armor worn in an armor slot |
| Luck | Adds Minecraft's Luck attribute | While the configured item is equipped |
| Mining Speed | Multiplies current breaking speed | Recognized utility tool in main hand |

Attack damage, attack speed, armor, toughness, health, knockback resistance, and luck are additive. Movement speed is relative to base movement speed. Mining speed multiplies the current break speed and can stack with Efficiency.

## Where the base package comes from

The first available package is used:

1. SetID-specific attributes
2. Item-specific attributes
3. Automatic equipment template

Packages replace each other; they do not merge. A partial custom item package replaces the automatic template for that item.

Vanilla gear already has detailed defaults. Recognized modded equipment can receive automatic baseline packages, while unusual weapon types may need a server entry before they gain stats.

## Examples

### Legendary diamond sword

Default package:

- `+0.8 Attack Damage`
- `+0.08 Attack Speed`

At Legendary `2×`:

- `+1.6 Attack Damage`
- `+0.16 Attack Speed`, shown rounded to one decimal in the tooltip

### Mythical golden boots

Default package:

- `+0.25 Armor`
- `+0.5 Luck`
- `+2% Movement Speed`

At Mythical `3×`:

- `+0.75 Armor`
- `+1.5 Luck`
- `+6% Movement Speed`

## Important behavior

- Common equipment receives no rarity bonus.
- A higher rarity cannot invent a stat the item does not have in its package.
- Utility tools use utility perks instead of automatic combat attributes.
- A fixed-rarity weapon or armor piece can still receive stats when it has an applicable package and is equipped.
- Changing an equipped item's package on the server may require players to remove and re-equip it, or relog, before the active modifier refreshes.

!!! note "Bow and crossbow bonuses in v1.71"
    Their configured `Attack Damage` changes the player's general attack-damage attribute while held. It does not directly increase arrow or bolt damage.

!!! warning "Displayed shield and weapon resistance values"
    In v1.71, shield armor/knockback entries and knockback resistance placed on a weapon may appear in the tooltip but are not applied by the equipment-slot rules. Treat those lines as a known limitation when comparing gear.

## With Sol's Relic System

Sol's Relic System can disable Item Rarity's combat and armor bonuses to prevent two stat systems from stacking. Rarity visuals remain, and utility tool perks remain available. See [Compatibility](../reference/compatibility.md).
