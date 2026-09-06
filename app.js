(function () {
  "use strict";

  /* ---------------------------------------------------------- helpers */
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
  const rupee = (n) => "₹" + n;
  const TONES = ["tone-a", "tone-b", "tone-c", "tone-d"];

  /* ---------------------------------------------------------- per-dish cartoon icon matching */
  // Ordered from most to least specific — first match wins. This lets a
  // single "Chinese" or "Tandoori" category show a nice variety of icons
  // instead of repeating one icon on every card.
  const DISH_ICON_RULES = [
    [/platter/i, "platter"],
    [/thali/i, "thali"],
    [/combo/i, "thali"],
    [/momo/i, "momo"],
    [/noodle/i, "noodles"],
    [/(fried rice|biryani|jeera rice|\brice\b)/i, "rice"],
    [/soup/i, "soup"],
    [/pasta/i, "pasta"],
    [/(soda|coffee|mojito|lassi|shikanji|malt beer|khatta|fruit bear|lime|lychee|mango|pineapple)/i, "drink"],
    [/roll/i, "roll"],
    [/(naan|roti|kulcha|prantha|paratha)/i, "bread"],
    [/(phirni|dessert|sweet)/i, "dessert"],
    [/mushroom/i, "mushroom"],
    [/fries/i, "fries"],
    [/soya/i, "soya"],
    [/(manchurian|schezwan|chowmein|hakka|singapuri|shanghai|spring roll|chinese)/i, "wok"],
    [/(paneer|cheese|dahi ke sholey)/i, "paneer"],
    [/(chaap|tikka|kebab|seekh|tandoori|kakori|bhatti)/i, "skewer"],
    [/(handi|gravy|masala|curry|kofta|lababdar|changezi|rogan|rara|kaleji|bhuna|keema|2 pyaza)/i, "pot"],
  ];

  function pickDishIcon(name, categorySvg) {
    for (const [re, icon] of DISH_ICON_RULES) {
      if (re.test(name)) return icon;
    }
    // sensible fallback based on the category's own icon family
    const fallback = { drink: "drink", soup: "soup", pasta: "pasta", leaf: "soya", flame: "flame",
      cheese: "paneer", platter: "platter", roll: "roll", thali: "thali", pot: "pot", rice: "rice",
      bread: "bread", dessert: "dessert", noodle: "noodles", dumpling: "momo", wok: "wok" };
    return fallback[categorySvg] || "flame";
  }

  /* ---------------------------------------------------------- header interactions */
  function initHeader() {
    const hamburger = $("#hamburger-btn");
    const mobileNav = $("#mobile-nav");
    const searchBtn = $("#search-btn");
    const searchPanel = $("#search-panel");
    const searchInput = $("#search-input");

    hamburger?.addEventListener("click", () => mobileNav.classList.toggle("open"));
    $$("#mobile-nav a").forEach((a) => a.addEventListener("click", () => mobileNav.classList.remove("open")));

    searchBtn?.addEventListener("click", () => {
      searchPanel.classList.toggle("open");
      if (searchPanel.classList.contains("open")) searchInput.focus();
    });

    searchInput?.addEventListener("input", () => applyFilters());
  }

  /* ---------------------------------------------------------- render menu */
  function slug(id) { return id; }

  function renderCard(item) {
    const tag = item.needsConfirm ? `<span class="needs-confirm">Please confirm exact name/price</span>` : "";
    const desc = item.d ? `<div class="desc">${item.d}</div>` : "";
    const spice = item.spicy ? `<span class="spice">🌶</span>` : "";

    let priceHTML;
    if (item.jumbo) {
      priceHTML = `<div class="hf">${item.half2 || "Half"} <b>${rupee(item.half)}</b></div>
                   <div class="hf">${item.full2 || "Full"} <b>${rupee(item.full)}</b></div>
                   <div class="hf">${item.jumbo2 || "Jumbo"} <b>${rupee(item.jumbo)}</b></div>`;
    } else if (item.half != null && item.full != null) {
      priceHTML = `<div class="hf">Half <b>${rupee(item.half)}</b></div>
                   <div class="hf">Full ${item.fullUnit ? `(${item.fullUnit}) ` : ""}<b>${rupee(item.full)}</b></div>`;
    } else if (item.full != null) {
      priceHTML = `<div class="single">${rupee(item.full)}</div>`;
    } else if (item.half != null) {
      priceHTML = `<div class="single">${rupee(item.half)}</div>`;
    } else {
      priceHTML = `<div class="single">${rupee(item.p)}</div>`;
    }

    const dishIcon = pickDishIcon(item.n, item.__svg);
    return `
      <div class="food-card" data-name="${item.n.toLowerCase()}" data-tags="${(item.__tags || []).join(",").toLowerCase()}">
        <span class="card-icon-wrap"><svg class="card-icon" aria-hidden="true"><use href="#dish-${dishIcon}"></use></svg></span>
        <div class="info">
          <div class="name-row"><span class="name">${item.n}</span>${spice}</div>
          ${desc}
          ${tag}
        </div>
        <div class="price">${priceHTML}</div>
      </div>`;
  }

  function renderMenu() {
    const root = $("#menu-root");
    if (!root || typeof MENU === "undefined") return;

    let html = "";

    MENU.forEach((cat, i) => {
      const tone = TONES[i % TONES.length];
      cat.items.forEach((it) => { it.__tags = cat.tags; it.__svg = cat.svg; });

      html += `
        <section class="menu-category" id="${cat.id}" data-cat-section>
          <div class="cat-header ${tone}">
            <svg class="icon" aria-hidden="true"><use href="#icon-${cat.svg || "flame"}"></use></svg>
            <div>
              <h2>${cat.title} ${cat.popular ? '<span class="popular-tag">Popular</span>' : ""}</h2>
              ${cat.subtitle ? `<div class="cat-subtitle">${cat.subtitle}</div>` : ""}
            </div>
          </div>
          ${cat.note ? `<div class="cat-note">${cat.note}</div>` : ""}
          <div class="item-grid">
            ${cat.items.map(renderCard).join("")}
          </div>
        </section>`;
    });

    root.innerHTML = html;

    $("#no-results")?.classList.remove("show");
  }

  function renderFeatured() {
    const root = $("#featured-root");
    if (!root || typeof MENU === "undefined") return;
    const featCats = MENU.filter((c) => c.featured);
    let html = "";
    featCats.forEach((cat, i) => {
      const tone = TONES[i % TONES.length];
      cat.items.forEach((it) => { it.__tags = cat.tags; it.__svg = cat.svg; });
      html += `
        <div style="margin-bottom:26px;">
          <div class="cat-header ${tone}">
            <svg class="icon" aria-hidden="true"><use href="#icon-${cat.svg || "flame"}"></use></svg>
            <div><h2>${cat.title}</h2></div>
          </div>
          <div class="item-grid">${cat.items.map(renderCard).join("")}</div>
        </div>`;
    });
    root.innerHTML = html;
  }

  /* ---------------------------------------------------------- filters + search */
  let activeFilter = "All";

  function applyFilters() {
    const q = ($("#search-input")?.value || "").trim().toLowerCase();
    const cards = $$(".food-card");
    let anyVisible = false;

    cards.forEach((card) => {
      const name = card.dataset.name || "";
      const tags = card.dataset.tags || "";
      const matchesQuery = !q || name.includes(q);
      const matchesFilter = activeFilter === "All" || tags.includes(activeFilter.toLowerCase());
      const show = matchesQuery && matchesFilter;
      card.style.display = show ? "" : "none";
      if (show) anyVisible = true;
    });

    // hide whole category sections that have zero visible cards
    $$("[data-cat-section]").forEach((sec) => {
      const visibleCount = $$(".food-card", sec).filter((c) => c.style.display !== "none").length;
      sec.style.display = visibleCount === 0 ? "none" : "";
    });

    $("#no-results")?.classList.toggle("show", !anyVisible);
  }

  function initFilters() {
    $$(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        $$(".filter-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        activeFilter = chip.dataset.filter;
        applyFilters();
      });
    });
  }

  /* ---------------------------------------------------------- config-driven content */
  function applyConfig() {
    if (typeof CONFIG === "undefined") return;
    $$("[data-cfg]").forEach((el) => {
      const key = el.dataset.cfg;
      if (CONFIG[key]) el.textContent = CONFIG[key];
    });
    $$("[data-cfg-href]").forEach((el) => {
      const key = el.dataset.cfgHref;
      if (CONFIG[key]) el.href = CONFIG[key];
    });
    $$("[data-cfg-src]").forEach((el) => {
      const key = el.dataset.cfgSrc;
      if (CONFIG[key]) el.src = CONFIG[key];
    });
  }

  /* ---------------------------------------------------------- instagram embeds */
  function initInstagram() {
    const root = $("#ig-root");
    const urls = (typeof CONFIG !== "undefined" && CONFIG.INSTAGRAM_POST_URLS) || [];
    if (!root || !urls.length) return; // keep the default gallery placeholder

    root.innerHTML = `
      <div class="ig-embeds">
        ${urls.map((u) => `
          <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${u}" data-instgrm-version="14"></blockquote>
        `).join("")}
      </div>`;

    // Instagram's own official embed script — no scraping, this is the
    // sanctioned way to show real Instagram posts client-side.
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(s);
  }

  /* ---------------------------------------------------------- year */
  function initYear() {
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------- boot */
  document.addEventListener("DOMContentLoaded", () => {
    applyConfig();
    renderFeatured();
    renderMenu();
    initHeader();
    initFilters();
    initInstagram();
    initYear();
  });
})();
