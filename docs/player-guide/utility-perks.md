# Utility tool perks

Pickaxes, axes, shovels, and hoes can roll persistent perks after their rarity is revealed. A tool's rarity controls both perk count and the quality range of each perk tier.

<div class="tool-rack">
  <div class="tool-rack__item"><img src="../../assets/images/items/diamond_pickaxe.png" alt="Pickaxe"><strong>Pickaxe</strong><span>Break Efficiency · Vein Miner · Durability Guard</span></div>
  <div class="tool-rack__item"><img src="../../assets/images/items/diamond_axe.png" alt="Axe"><strong>Axe</strong><span>Break Efficiency · Timber · Durability Guard</span></div>
  <div class="tool-rack__item"><img src="../../assets/images/items/diamond_shovel.png" alt="Shovel"><strong>Shovel</strong><span>Break Efficiency · Excavation · Durability Guard</span></div>
  <div class="tool-rack__item"><img src="../../assets/images/items/diamond_hoe.png" alt="Hoe"><strong>Hoe</strong><span>Harvest Replant · Bountiful Harvest · Durability Guard</span></div>
</div>

## How many perks roll

| Rarity | Default result |
|---|---|
| Common | None |
| Uncommon | Exactly 1 |
| Rare | 1, with a 35% chance for a second |
| Epic | Exactly 2 |
| Legendary | 2, with a 50% chance for a third |
| Mythical | Exactly 3 |
| Supreme | Exactly 3 |

Perk names do not duplicate on one tool. Every default tool pool contains three possible perks, so a Mythical or Supreme tool receives all three names available to its tool type.

## Perk-tier odds

Each perk rolls its own tier independently.

| Tool rarity | Tier I | Tier II | Tier III | Tier IV | Tier V |
|---|---:|---:|---:|---:|---:|
| Uncommon | 95% | 5% | — | — | — |
| Rare | 70% | 27% | 3% | — | — |
| Epic | 10% | 60% | 27% | 3% | — |
| Legendary | — | 10% | 60% | 27% | 3% |
| Mythical | — | — | 10% | 65% | 25% |
| Supreme | — | — | — | — | 100% |

## Values by perk tier

| Effect | I | II | III | IV | V |
|---|---:|---:|---:|---:|---:|
| Break Efficiency | +8% | +14% | +20% | +28% | +38% |
| Durability Guard | 6% | 10% | 15% | 21% | 28% |
| Connected extra blocks | 2 | 4 | 6 | 9 | 12 |
| Nearby crop or transform extras | 1 | 2 | 4 | 6 | 8 |
| Bountiful Harvest chance | 12% | 20% | 30% | 42% | 58% |
| Bountiful extra produce | +1 | +1 | +1 | +2 | +2 |

## Default perk weights

Perk names are chosen by relative weight, without replacement.

| Tool | Durability Guard | Break Efficiency | Special perk |
|---|---:|---:|---:|
| Pickaxe | 25 | 35 | Vein Miner 40 |
| Axe | 25 | 35 | Timber 40 |
| Shovel | 25 | 40 | Excavation 35 |
| Hoe | 25 | — | Harvest Replant 40; Bountiful Harvest 35 |

## Perk guide

<div class="perk-grid">
  <div class="perk-card" style="--perk-color:#e0ad52"><strong>Break Efficiency</strong><small>Pickaxe · Axe · Shovel</small><p>Passively increases current block-breaking speed. It stacks with the Efficiency enchantment.</p></div>
  <div class="perk-card" style="--perk-color:#e7e7e7"><strong>Durability Guard</strong><small>All utility tools</small><p>Rolls for every durability point lost. A successful roll prevents that point and can save a tool at one durability.</p></div>
  <div class="perk-card" style="--perk-color:#55ffff"><strong>Vein Miner</strong><small>Pickaxe · Hold Sneak while mining</small><p>Breaks connected blocks of the exact same type while the pickaxe is effective against them.</p></div>
  <div class="perk-card" style="--perk-color:#55ff55"><strong>Timber</strong><small>Axe · Hold Sneak while chopping</small><p>Breaks connected blocks of the exact same type while the axe is effective against them.</p></div>
  <div class="perk-card" style="--perk-color:#6b6bff"><strong>Excavation</strong><small>Shovel · Hold Sneak while digging</small><p>Breaks connected blocks of the exact same type while the shovel is effective against them.</p></div>
  <div class="perk-card" style="--perk-color:#8bd56e"><strong>Harvest Replant</strong><small>Hoe · Mature crops</small><p>Replants a broken mature crop. Sneaking also harvests nearby mature crops of the same type, up to the tier cap.</p></div>
  <div class="perk-card" style="--perk-color:#ffd700"><strong>Bountiful Harvest</strong><small>Hoe · Mature crops</small><p>Has a tier-based chance to add produce from wheat, carrots, potatoes, or beetroot.</p></div>
</div>

## Connected-breaking rules

Vein Miner, Timber, and Excavation:

- have no cooldown;
- trigger at 100% by default when their conditions are met;
- require Sneak;
- search face-, edge-, and corner-connected neighbors;
- accept only the exact same block type as the first block;
- stop after the tier's extra-block cap;
- require the held tool to be effective against each block.

Despite its name, Vein Miner is not limited to ore tags. It can work on any same-type connected block that the pickaxe is effective against.

## Farming details

Harvest Replant works on mature crop blocks. When sneaking, it looks up to two blocks horizontally and one block vertically for more mature crops of the same type, then stops at its tier cap.

Bountiful Harvest has direct extra-produce support for:

- wheat;
- carrots;
- potatoes;
- beetroot.

Other compatible crop blocks may replant, but they do not receive a mapped bonus item by default.

## Optional server-enabled perks

The mod also supports three perks that are not in the fresh default pools:

- **Clean Strip** — axe; sneak-use to strip nearby valid logs or wood;
- **Pathmaker** — shovel; sneak-use to create nearby paths;
- **Cultivator** — hoe; sneak-use to till nearby soil.

If your server enables them, each extra transformed block consumes durability. Server owners can add their IDs in [Utility perk tuning](../server-owners/utility-perks.md).

!!! tip "Compatibility mode"
    Servers can disable only Vein Miner, Timber, and Excavation when another connected-mining mod is installed. Break Efficiency, Durability Guard, farming perks, and the optional right-click perks remain available.
