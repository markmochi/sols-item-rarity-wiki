# Report a bug

A useful report lets someone reproduce the same problem without guessing. Use the [guided bug report form](https://github.com/markmochi/sols-item-rarity-wiki/issues/new?template=bug_report.yml) after checking [existing issues](https://github.com/markmochi/sols-item-rarity-wiki/issues).

## Before reporting

1. Confirm that the Item Rarity JAR matches your exact Minecraft version.
2. Check [FAQ and troubleshooting](troubleshooting.md).
3. Search the issue tracker for the same symptom.
4. Restart the game or server and reproduce the issue once more.
5. If practical, test with only Item Rarity and its required loader.

## Information to include

| Required detail | Example |
|---|---|
| Minecraft version | `1.20.1` |
| Loader and version | `Forge 47.2.0` |
| Item Rarity version | `1.7` |
| Environment | Single-player or dedicated server |
| Other mods | Names and exact versions; state whether Sol's Relic System is installed |
| Steps | Numbered actions starting before the problem |
| Expected result | What should have happened |
| Actual result | What happened instead |
| Evidence | Logs, crash report, config, screenshot, or short video |

## Write reproducible steps

Good steps name the item and action:

```text
1. Start a new 1.20.1 Forge world.
2. Give the player a fresh minecraft:diamond_pickaxe.
3. Select it in the main hand to reveal rarity.
4. Hold Sneak and mine a connected group of diamond ore.
5. Observe that ...
```

Avoid summaries such as “rarity is broken.” They do not show which state, item, or trigger failed.

## Logs and crash reports

Attach files to the GitHub form instead of pasting thousands of lines.

Common locations inside the game or server folder:

```text
logs/latest.log
logs/debug.log
crash-reports/<most recent file>.txt
```

For a dedicated server, use the server's files. For a client crash or visual problem, use the affected player's files.

## Configuration to attach

If the problem involves odds, stats, perks, SetID, or visuals, attach the relevant file:

- `config/solsitemrarity-common.toml`
- `config/solsitemrarity/rarity_chances.json`
- `config/solsitemrarity/rarity_attributes.json`
- `config/solsitemrarity/utility_buffs.json`
- the relevant fixed-rarity or SetID JSON

If you changed only one entry, you can paste that small entry in a code block instead.

## Screenshots that help

For a tooltip or border problem, include:

- the entire tooltip;
- the inventory or hotbar around the item;
- Minecraft's GUI scale;
- whether chroma and animated borders are enabled.

For wrong stats, show the item tooltip and the relevant player attribute screen or observable result.

## Protect private information

Before uploading, remove:

- passwords and access tokens;
- private server addresses if you do not want them public;
- player IP addresses;
- unrelated chat or personal paths;
- launcher account details.

GitHub issues and their attachments are public.

## Report one problem per issue

Separate unrelated problems. A report about a rarity reveal and a different report about a border glitch can then be tracked, reproduced, and closed independently.
