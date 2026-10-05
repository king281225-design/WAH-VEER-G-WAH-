(function () {
  "use strict";

  /* ---------------------------------------------------------- helpers */
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
  const rupee = (n) => "₹" + n;
  const TONES = ["tone-a", "tone-b", "tone-c", "tone-d"];
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const catPhoto = (id) => (typeof PHOTOS !== "undefined" && PHOTOS.categories && PHOTOS.categories[id]) || null;
  // Items whose names couldn't be read off the printed menu stay hidden until confirmed.
  const visibleItems = (cat) => cat.items.filter((it) =>
    !it.nameUnreadable || (typeof CONFIG !== "undefined" && CONFIG.SHOW_UNREADABLE_ITEMS));
  const minPrice = (cat) => Math.min(...visibleItems(cat).map((it) => it.p ?? it.half ?? it.full).filter((n) => n != null));
  // If a photo fails to load, drop it so the coloured header shows instead.
  window.__wvgwImgFail = (img) => {
    const host = img.closest(".has-photo");
    if (host) host.classList.remove("has-photo");
    img.remove();
  };

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
    const tag = ""; // needsConfirm is an internal note only — never shown to customers
    const desc = item.d ? `<div class="desc">${item.d}</div>` : "";
    const spice = item.spicy ? `<span class="spice">Spicy</span>` : "";

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

    return `
      <div class="food-card" data-name="${item.n.toLowerCase()}" data-tags="${(item.__tags || []).join(",").toLowerCase()}">
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
      const items = visibleItems(cat);
      if (!items.length) return;
      const tone = TONES[i % TONES.length];
      items.forEach((it) => { it.__tags = cat.tags; it.__svg = cat.svg; });
      const photo = catPhoto(cat.id);
      const photoHTML = photo
        ? `<img class="cat-photo" src="${esc(photo.src)}" alt="${esc(photo.alt || cat.title)}" loading="lazy" decoding="async" onerror="__wvgwImgFail(this)" />`
        : "";

      html += `
        <section class="menu-category" id="${cat.id}" data-cat-section>
          <div class="cat-header ${tone} ${photo ? "has-photo" : ""}">
            ${photoHTML}
            <div class="cat-header-text">
              ${cat.popular ? '<span class="popular-tag">Popular</span>' : ""}
              <h2>${cat.title}</h2>
              <div class="cat-meta">${items.length} ${items.length === 1 ? "dish" : "dishes"} · from ${rupee(minPrice(cat))}${cat.subtitle ? ` · ${cat.subtitle}` : ""}</div>
            </div>
          </div>
          ${cat.note ? `<div class="cat-note">${cat.note}</div>` : ""}
          <div class="item-grid">
            ${items.map(renderCard).join("")}
          </div>
        </section>`;
    });

    root.innerHTML = html;
    renderCatStrip();

    $("#no-results")?.classList.remove("show");
  }

  function renderFeatured() {
    const root = $("#featured-root");
    if (!root || typeof MENU === "undefined") return;
    // Signature categories shown as photo cards that jump to the full list
    // below — so the same dishes aren't listed twice on the page.
    const featCats = MENU.filter((c) => c.popular || c.featured);
    root.innerHTML = `<div class="sig-grid">${featCats.map((cat) => {
      const photo = catPhoto(cat.id);
      const count = visibleItems(cat).length;
      const highlights = visibleItems(cat).slice(0, 3).map((it) => it.n).join(" · ");
      return `
        <a class="sig-card ${photo ? "has-photo" : ""}" href="#${cat.id}">
          <div class="sig-media">
            ${photo ? `<img src="${esc(photo.src)}" alt="${esc(photo.alt || cat.title)}" loading="lazy" decoding="async" onerror="__wvgwImgFail(this)" />` : ""}
            <span class="sig-price">from ${rupee(minPrice(cat))}</span>
          </div>
          <div class="sig-body">
            <h3>${cat.title}</h3>
            <p>${esc(highlights)}${count > 3 ? ` + ${count - 3} more` : ""}</p>
            <span class="sig-link">See all ${count} →</span>
          </div>
        </a>`;
    }).join("")}</div>`;
  }

  // Scrollable row of round category photos that jump to each section.
  function renderCatStrip() {
    const strip = $("#cat-strip");
    if (!strip) return;
    strip.innerHTML = MENU.filter((c) => visibleItems(c).length).map((cat) => {
      const photo = catPhoto(cat.id);
      const short = cat.title.replace(/^Wah Veer G Wah /, "").replace(/^WVGW /, "").replace(/ —.*$/, "").replace(/ \(.*\)$/, "");
      return `<a href="#${cat.id}" class="${photo ? "has-photo" : ""}">
        <span class="thumb">${photo ? `<img src="${esc(photo.src)}" alt="" loading="lazy" decoding="async" onerror="__wvgwImgFail(this)" />` : ""}<b>${esc(short.charAt(0))}</b></span>
        <span class="lbl">${esc(short)}</span></a>`;
    }).join("");
  }

  function renderHeroTiles() {
    const root = $("#hero-tiles");
    if (!root || typeof PHOTOS === "undefined" || !PHOTOS.hero) return;
    root.innerHTML = PHOTOS.hero.map((t) => `
      <a class="has-photo" href="#${t.target}">
        <img src="${esc(t.src)}" alt="${esc(t.alt)}" loading="eager" decoding="async" onerror="__wvgwImgFail(this)" />
        <span>${esc(t.label)}</span>
      </a>`).join("");
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
    renderHeroTiles();
    renderFeatured();
    renderMenu();
    initHeader();
    initFilters();
    initInstagram();
    initYear();
  });
})();
