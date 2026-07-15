(function () {
  "use strict";

  const TIERS = ["COMMON", "UNCOMMON", "RARE", "EPIC", "LEGENDARY", "MYTHICAL", "SUPREME"];
  const TIER_META = {
    COMMON: { name: "Common", multiplier: 1, color: "#f2f2f2" },
    UNCOMMON: { name: "Uncommon", multiplier: 1.15, color: "#55ff55" },
    RARE: { name: "Rare", multiplier: 1.25, color: "#55ffff" },
    EPIC: { name: "Epic", multiplier: 1.5, color: "#6b6bff" },
    LEGENDARY: { name: "Legendary", multiplier: 2, color: "#ffd700" },
    MYTHICAL: { name: "Mythical", multiplier: 3, color: "#f6f6f6" },
    SUPREME: { name: "Supreme", multiplier: 5, color: "#ff3b30" }
  };

  const ATTRIBUTE_NAMES = {
    attackDamageBonus: "Attack Damage",
    attackSpeedBonus: "Attack Speed",
    armorBonus: "Armor",
    armorToughnessBonus: "Armor Toughness",
    maxHealthBonus: "Max Health",
    movementSpeedBonus: "Movement Speed",
    knockbackResistanceBonus: "Knockback Resistance",
    luckBonus: "Luck",
    miningSpeedBonus: "Mining Speed"
  };

  const PERCENT_ATTRIBUTES = new Set(["movementSpeedBonus", "knockbackResistanceBonus", "miningSpeedBonus"]);

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function titleFromId(itemId) {
    const path = String(itemId).split(":").pop() || itemId;
    return path.split("_").filter(Boolean).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }

  function tierClass(tier) {
    return String(tier || "COMMON").toLowerCase();
  }

  function rarityBadge(tier) {
    const safeTier = TIERS.includes(tier) ? tier : "COMMON";
    return `<span class="rarity-badge rarity-badge--${tierClass(safeTier)}">${TIER_META[safeTier].name}</span>`;
  }

  function formatNumber(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) return "0";
    return Number.isInteger(number) ? String(number) : number.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
  }

  function initRarityExplorer(root) {
    root.querySelectorAll("[data-rarity-explorer]").forEach(explorer => {
      if (explorer.dataset.ready === "true") return;
      explorer.dataset.ready = "true";

      const tooltip = explorer.querySelector("[data-demo-tooltip]");
      const name = explorer.querySelector("[data-demo-name]");
      const rarity = explorer.querySelector("[data-demo-rarity]");
      const bonusHeader = explorer.querySelector("[data-demo-bonus-header]");
      const bonusLines = explorer.querySelector("[data-demo-bonus-lines]");
      const hint = explorer.querySelector("[data-demo-hint]");
      const buttons = explorer.querySelectorAll("[data-demo-tier]");
      if (!tooltip || !name || !rarity || !bonusHeader || !bonusLines) return;

      const render = selected => {
        buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.demoTier === selected)));

        if (selected === "UNIDENTIFIED") {
          tooltip.dataset.rarity = "unidentified";
          name.className = "game-tooltip__name rarity-unidentified";
          name.textContent = "Diamond Sword";
          rarity.innerHTML = "Rarity: <span class=\"rarity-unidentified\">???</span>";
          bonusHeader.hidden = true;
          bonusLines.hidden = true;
          if (hint) hint.textContent = "Hold the item in your main hand to reveal its roll.";
          return;
        }

        const meta = TIER_META[selected] || TIER_META.COMMON;
        const cssTier = tierClass(selected);
        tooltip.dataset.rarity = cssTier;
        name.className = `game-tooltip__name rarity-${cssTier}`;
        name.textContent = "Diamond Sword";
        rarity.innerHTML = `Rarity: <span class=\"rarity-${cssTier}\">${meta.name}</span>`;

        const hasBonus = selected !== "COMMON";
        bonusHeader.hidden = !hasBonus;
        bonusLines.hidden = !hasBonus;
        if (hasBonus) {
          bonusHeader.innerHTML = `« <span class=\"rarity-${cssTier}\">${meta.name} Bonus</span> » (×${formatNumber(meta.multiplier)})`;
          bonusLines.innerHTML = [
            `<div class=\"game-tooltip__stat\">⚔ <b>+${(0.8 * meta.multiplier).toFixed(1)}</b> Attack Damage</div>`,
            `<div class=\"game-tooltip__stat\">⚡ <b>+${(0.08 * meta.multiplier).toFixed(1)}</b> Attack Speed</div>`
          ].join("");
        }
        if (hint) hint.textContent = selected === "COMMON" ? "Common items have no rarity bonus." : "The multiplier scales the configured bonus, not the sword's full vanilla stats.";
      };

      buttons.forEach(button => button.addEventListener("click", () => render(button.dataset.demoTier)));
      render(explorer.dataset.startTier || "LEGENDARY");
    });
  }

  function initBonusCalculators(root) {
    root.querySelectorAll("[data-bonus-calculator]").forEach(calculator => {
      if (calculator.dataset.ready === "true") return;
      calculator.dataset.ready = "true";
      const baseInput = calculator.querySelector("[data-base-bonus]");
      const tierSelect = calculator.querySelector("[data-bonus-tier]");
      const button = calculator.querySelector("button");
      const result = calculator.querySelector("[data-bonus-result]");
      if (!baseInput || !tierSelect || !button || !result) return;

      const calculate = () => {
        const base = Number(baseInput.value);
        const tier = tierSelect.value;
        if (!Number.isFinite(base) || base < 0 || !TIER_META[tier]) {
          result.dataset.state = "error";
          result.textContent = "Enter a valid non-negative base bonus and choose a rarity.";
          return;
        }
        if (tier === "COMMON") {
          result.dataset.state = "success";
          result.innerHTML = `<strong>+0 rarity bonus</strong><br><span>Common equipment is explicitly skipped.</span>`;
          return;
        }
        const meta = TIER_META[tier];
        const finalValue = base * meta.multiplier;
        result.dataset.state = "success";
        result.innerHTML = `<strong>${formatNumber(base)} × ${formatNumber(meta.multiplier)} = ${formatNumber(finalValue)}</strong><br><span>${meta.name} contributes +${formatNumber(finalValue)} from this configured stat.</span>`;
      };
      button.addEventListener("click", calculate);
      calculator.addEventListener("keydown", event => {
        if (event.key === "Enter") { event.preventDefault(); calculate(); }
      });
      calculate();
    });
  }

  function oddsBars(pool) {
    const weights = TIERS.map(tier => Math.max(0, Number(pool && pool[tier]) || 0));
    const total = weights.reduce((sum, value) => sum + value, 0);
    if (total <= 0) return `<p class="compact-note">No positive weights. This pool falls back to Common.</p>`;
    return `<div class="odds-bars">${TIERS.map((tier, index) => {
      const percent = weights[index] / total * 100;
      return `<div class="odds-bar"><span class="rarity-${tierClass(tier)}">${TIER_META[tier].name}</span><span class="odds-bar__track"><i class="odds-bar__fill" style="--roll-width:${percent.toFixed(3)}%;--roll-color:${TIER_META[tier].color}"></i></span><span class="odds-bar__value">${percent.toFixed(percent < 1 && percent > 0 ? 2 : 1)}%</span></div>`;
    }).join("")}</div>`;
  }

  function initOddsCalculators(root) {
    root.querySelectorAll("[data-odds-calculator]").forEach(calculator => {
      if (calculator.dataset.ready === "true") return;
      calculator.dataset.ready = "true";
      const result = calculator.querySelector("[data-odds-result]");
      const button = calculator.querySelector("button");
      if (!result || !button) return;

      const calculate = () => {
        const pool = {};
        calculator.querySelectorAll("[data-weight]").forEach(input => { pool[input.dataset.weight] = Number(input.value); });
        const invalid = Object.values(pool).some(value => !Number.isFinite(value) || value < 0);
        if (invalid) {
          result.dataset.state = "error";
          result.textContent = "Weights must be zero or positive numbers.";
          return;
        }
        result.dataset.state = "success";
        result.innerHTML = oddsBars(pool);
      };
      button.addEventListener("click", calculate);
      calculator.addEventListener("input", calculate);
      calculate();
    });
  }

  function allItemIds(versionData) {
    return Array.from(new Set([
      ...Object.keys(versionData.fixed || {}),
      ...Object.keys(versionData.pools || {}),
      ...Object.keys(versionData.attributes || {})
    ])).sort();
  }

  function findItemId(query, versionData) {
    const ids = allItemIds(versionData);
    const raw = String(query || "").trim().toLowerCase();
    if (!raw) return null;
    const normalized = raw.includes(":") ? raw.replace(/\s+/g, "_") : `minecraft:${raw.replace(/\s+/g, "_")}`;
    if (ids.includes(normalized)) return normalized;
    return ids.find(id => id.toLowerCase() === raw)
      || ids.find(id => titleFromId(id).toLowerCase() === raw)
      || ids.find(id => id.endsWith(`:${raw.replace(/\s+/g, "_")}`))
      || ids.find(id => id.includes(raw.replace(/\s+/g, "_")))
      || null;
  }

  function attributeBoxes(attributes) {
    if (!attributes) return "";
    const fields = Object.keys(ATTRIBUTE_NAMES).filter(key => Number(attributes[key]) !== 0);
    if (!fields.length) return "";
    return `<div class="lookup-result__grid">${fields.map(key => {
      const value = Number(attributes[key]);
      const display = PERCENT_ATTRIBUTES.has(key) ? `${formatNumber(value * 100)}%` : formatNumber(value);
      return `<div class="lookup-result__box"><strong>${ATTRIBUTE_NAMES[key]}</strong><span>Base bonus: ${escapeHtml(display)}</span></div>`;
    }).join("")}</div>`;
  }

  function initItemLookup(root) {
    root.querySelectorAll("[data-item-lookup]").forEach(lookup => {
      if (lookup.dataset.ready === "true") return;
      lookup.dataset.ready = "true";
      const data = window.SOLS_ITEM_RARITY_DATA && window.SOLS_ITEM_RARITY_DATA.versions;
      const version = lookup.querySelector("[data-lookup-version]");
      const query = lookup.querySelector("[data-lookup-query]");
      const button = lookup.querySelector("button");
      const result = lookup.querySelector("[data-lookup-result]");
      const list = lookup.querySelector("datalist");
      if (!data || !version || !query || !button || !result) return;

      const updateSuggestions = () => {
        if (!list || !data[version.value]) return;
        list.textContent = "";
        allItemIds(data[version.value]).forEach(id => {
          const option = document.createElement("option");
          option.value = id;
          option.label = titleFromId(id);
          list.appendChild(option);
        });
      };

      const search = () => {
        const versionData = data[version.value];
        const id = versionData && findItemId(query.value, versionData);
        if (!id) {
          result.dataset.state = "error";
          result.innerHTML = `<strong>No built-in entry found.</strong><br><span>Try the full ID, such as <code>minecraft:diamond_sword</code>. Modded equipment can still be auto-detected even when it is not listed here.</span>`;
          return;
        }

        const fixedTier = versionData.fixed && versionData.fixed[id];
        const pool = versionData.pools && versionData.pools[id];
        const attributes = versionData.attributes && versionData.attributes[id];
        const sections = [];
        if (fixedTier) {
          sections.push(`<p><strong>Fixed catalog rarity:</strong> ${rarityBadge(fixedTier)}<br><span class="compact-note">This item displays the same tier every time. A fixed rarity does not change its loot drop rate.</span></p>`);
        }
        if (pool) {
          sections.push(`<p><strong>Explicit random pool</strong></p>${oddsBars(pool)}`);
        }
        if (!fixedTier && !pool) {
          sections.push(`<p><strong>No explicit fixed rule or vanilla pool.</strong><br><span class="compact-note">If this is recognized equipment, it uses the automatic pool. Otherwise it uses the server's default rarity.</span></p>`);
        }
        if (attributes) {
          sections.push(`<p><strong>Configured base stat package</strong><br><span class="compact-note">These values are multiplied by the revealed rarity. Common is skipped.</span></p>${attributeBoxes(attributes)}`);
        }

        result.dataset.state = "success";
        result.innerHTML = `<div class="lookup-result__meta"><h3 class="no-margin">${escapeHtml(titleFromId(id))}</h3><span class="lookup-result__id">${escapeHtml(id)}</span></div>${sections.join("")}`;
      };

      version.addEventListener("change", () => { updateSuggestions(); search(); });
      button.addEventListener("click", search);
      query.addEventListener("keydown", event => {
        if (event.key === "Enter") { event.preventDefault(); search(); }
      });
      updateSuggestions();
      search();
    });
  }

  function initialize(root) {
    const scope = root || document;
    initRarityExplorer(scope);
    initBonusCalculators(scope);
    initOddsCalculators(scope);
    initItemLookup(scope);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(() => initialize(document));
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initialize(document));
  } else {
    initialize(document);
  }
})();
