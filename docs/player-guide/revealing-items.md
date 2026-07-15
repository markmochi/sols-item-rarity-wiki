# Reveal an item

Random-pool gear starts unidentified so simply viewing it in a chest or menu does not consume its roll.

## The reveal sequence

<div class="guide-flow">
  <div class="guide-step">
    <b class="guide-step__number">01</b>
    <div class="guide-step__symbol">???</div>
    <strong>Unidentified</strong>
    <span>The tooltip is purple and shows an unknown rarity.</span>
  </div>
  <div class="guide-step">
    <b class="guide-step__number">02</b>
    <img src="../../assets/images/items/diamond_sword.png" alt="Diamond sword">
    <strong>Select it</strong>
    <span>Put the item in your main hand.</span>
  </div>
  <div class="guide-step">
    <b class="guide-step__number">03</b>
    <div class="guide-step__symbol">ROLL</div>
    <strong>Result locks</strong>
    <span>The matching pool chooses and stores one tier.</span>
  </div>
  <div class="guide-step">
    <b class="guide-step__number">04</b>
    <div class="guide-step__symbol">KEEP</div>
    <strong>It stays</strong>
    <span>Moving or dropping the item does not reroll it.</span>
  </div>
</div>

## When a reveal happens

The normal trigger is selecting the item in the **main hand**. Two catch-up moments also scan carried equipment:

- player login;
- player respawn.

The catch-up scan covers the main inventory, hotbar, armor slots, and offhand. This is why installing Item Rarity into an existing world can reveal all eligible equipment already carried by a player as soon as they join.

## Every item source follows the same rule

The mod does not assign better odds to a particular source. These all reveal in the same way:

- crafted equipment;
- chest loot;
- mob drops;
- villager trades;
- `/give` items;
- Creative inventory;
- rewards or equipment created by other mods.

Items still sitting in a container can remain `???`. Once a player carries and selects one, it receives its result.

## What displays before reveal

An unidentified pooled item uses:

- a purple, italic item name;
- `Rarity: ???` under the name;
- no rarity bonus section;
- no custom rarity border.

Hovering it repeatedly does not roll it.

## After reveal

The item keeps its stored rarity when it is:

- moved between inventory and containers;
- thrown on the ground and picked up;
- given or traded to another player;
- carried through death when the stack itself is retained;
- saved and loaded with the world.

Changing server pool weights only affects future unrolled items. A server owner can change a fixed override, which takes priority over an old stored result after reload.

!!! question "Can another player reveal a different result?"
    No. Once one player reveals an item, the result belongs to the stack. Passing it to someone else does not give it another roll.

!!! question "Why did my inventory reveal on login?"
    Login is the safety scan. It identifies equipment that could not be caught through the normal main-hand trigger, including items already present when the mod was installed.
