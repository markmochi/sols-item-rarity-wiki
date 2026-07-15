# Install the mod

Sol's Item Rarity must match your **exact Minecraft version and mod loader**. It is not a server-only plugin: multiplayer servers and connecting players both need the mod.

## Choose the correct build

| Minecraft | Loader | Minimum loader | Java |
|---|---|---:|---:|
| 1.16.5 | Forge | 36.2.0 | 8 |
| 1.20.1 | Forge | 47.0.0 | 17 |
| 1.21.1 | NeoForge | 21.1.1 | 21 |
| 1.21.11 | NeoForge | 21.11.42 | 21 |

All four current builds report **Sol's Item Rarity v1.7**.

!!! warning "Do not mix close-looking versions"
    The 1.21.1 and 1.21.11 builds use different game APIs and resources. Use the dedicated 1.21.11 JAR on 1.21.11 even if another build appears to accept a broad version range.

## Single-player

1. Install the matching Forge or NeoForge loader.
2. Start the game once, then close it.
3. Place the matching Sol's Item Rarity JAR in the instance's `mods` folder.
4. Start Minecraft and open **Mods** from the title screen.
5. Confirm that **solsItemRarity** appears and reports version `1.7`.
6. Enter a world and hold a weapon or tool. Its tooltip should gain a rarity line.

## Multiplayer server

1. Install the matching loader on the server.
2. Place the Item Rarity JAR in the server's `mods` folder.
3. Install the same Minecraft-version build on every connecting client.
4. Start the server once so its configuration files are created.
5. Stop the server before making the first config edits.
6. Start it again, connect, and hold a fresh piece of equipment to test a reveal.

The network protocol expects Item Rarity on both sides. A missing or incompatible client build can prevent connection.

## Existing worlds

You can add the mod to an existing world. On login, it scans carried inventory, armor, and offhand slots and assigns rarity to equipment that needs a roll. Items still sitting in chests remain unidentified until a player takes and reveals them.

No new world generation is added, so a new world is not required.

## Files created on first run

The main settings file is:

```text
config/solsitemrarity-common.toml
```

Detailed item rules are created in:

```text
config/solsitemrarity/
```

Players can leave the defaults untouched. Server owners should continue to the [configuration map](../server-owners/configuration.md) before editing them.

## Confirm it is working

- An eligible unrolled item may show `Rarity: ???`.
- Selecting it in the main hand reveals a tier.
- Uncommon-or-better items receive colored presentation.
- Eligible combat gear may show a rarity-bonus section.
- Eligible tools may show a **Utility Perks** section.

If none of those appear, see [FAQ and troubleshooting](../reference/troubleshooting.md).
