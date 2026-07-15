# Tooltips and borders

Rarity is visible in item names, tooltips, inventory slots, and hotbar slots. Common and unidentified items deliberately stay understated.

## Tooltip anatomy

<div class="game-tooltip" data-rarity="epic" style="margin:1rem 0;max-width:21rem">
  <div class="game-tooltip__head">
    <img class="game-tooltip__item" src="../../assets/images/items/diamond_pickaxe.png" alt="Diamond pickaxe">
    <div>
      <span class="game-tooltip__name rarity-epic">Diamond Pickaxe</span>
      <span class="game-tooltip__rarity">Rarity: <span class="rarity-epic">Epic</span></span>
    </div>
  </div>
  <div class="game-tooltip__divider"></div>
  <div class="game-tooltip__header">[ <span class="rarity-epic">Utility Perks</span> ]</div>
  <div class="game-tooltip__stat"><b>II</b> <span class="rarity-epic">Break Efficiency:</span> +14% block-breaking speed</div>
  <div class="game-tooltip__stat"><b>III</b> <span class="rarity-epic">Vein Miner:</span> breaks up to 6 extra matching blocks</div>
</div>

An item can show:

1. rarity-colored or animated item name;
2. `Rarity: <Tier>` directly below the name;
3. a rarity-bonus header and multiplier;
4. individual stat lines;
5. a Utility Perks section on eligible tools;
6. custom server lore at the end.

Unidentified items instead use a purple italic name and `Rarity: ???`.

## Rarity frame styles

The 1.21.11 build includes its own tooltip frame textures. The other builds create matching rarity treatments through their version's rendering system.

<div class="frame-gallery">
  <div class="frame-sample frame-sample--uncommon"><span class="rarity-uncommon">UNCOMMON</span></div>
  <div class="frame-sample frame-sample--rare"><span class="rarity-rare">RARE</span></div>
  <div class="frame-sample frame-sample--epic"><span class="rarity-epic">EPIC</span></div>
  <div class="frame-sample frame-sample--legendary"><span class="rarity-legendary">LEGENDARY</span></div>
  <div class="frame-sample frame-sample--mythical"><span class="rarity-mythical">MYTHICAL</span></div>
  <div class="frame-sample frame-sample--supreme"><span class="rarity-supreme">SUPREME</span></div>
</div>

Full-mode themes become more elaborate as rarity rises:

| Tier | Visual language |
|---|---|
| Uncommon | Thin green frame, corner marks, soft nature glow |
| Rare | Double crystal/frost frame and sparkles |
| Epic | Pulsing arcane frame, rune marks, magic particles |
| Legendary | Royal frame with rainbow traveling light |
| Mythical | Pulsing void frame and ghostly particles |
| Supreme | Infernal red frame, embers, and traveling light |

## Border modes

| Mode | Result |
|---|---|
| `FULL` | Full themed decorations and animation |
| `SIMPLE` | Lighter static framed treatment |
| `STATIC` | Plain rarity-colored frames |
| `OFF` | No custom tooltip, inventory, or hotbar border |

Turning off animated borders while keeping `FULL` makes the full mode use a simpler static path.

## Text animation

`enableChromaTextEffects` controls animated item names, rarity text, bonus headers, and perk colors. If disabled, each tier uses its static base color.

`rainbowSpeed` controls the cycle duration for every chroma type—not only Legendary. Lower values animate faster.

## If the effects are distracting

Try these in order:

1. keep borders on but set `enableAnimatedBorders = false`;
2. set `borderRenderMode = "SIMPLE"`;
3. disable `enableChromaTextEffects`;
4. use `STATIC` for plain frames;
5. use `OFF` or `showCustomBorders = false` to remove borders completely.

These choices change presentation only. The item's stored rarity, stats, and perks remain the same.
