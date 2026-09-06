(function () {
  "use strict";

  /* ---------------------------------------------------------- helpers */
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
  const rupee = (n) => "₹" + n;
  const TONES = ["tone-a", "tone-b", "tone-c", "tone-d"];

  /* ---------------------------------------------------------- intro */
  function initIntro() {
    const intro = $("#intro");
    if (!intro) return;
    // Session-based (not permanent) so the welcome animation plays again on
    // each fresh visit / new tab, but not repeatedly while browsing.
    const seen = sessionStorage.getItem("wvgw_intro_seen");
    if (seen) {
      intro.remove();
      return;
    }
    const dismiss = () => {
      intro.classList.add("hide");
      sessionStorage.setItem("wvgw_intro_seen", "1");
      setTimeout(() => intro.remove(), 650);
    };
    intro.addEventListener("click", dismiss);
    setTimeout(dismiss, 3800);
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

    return `
      <div class="food-card" data-name="${item.n.toLowerCase()}" data-tags="${(item.__tags || []).join(",").toLowerCase()}">
        <svg class="card-icon" aria-hidden="true"><use href="#icon-${item.__svg || "flame"}"></use></svg>
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
    const catNav = $("#cat-nav");
    if (!root || typeof MENU === "undefined") return;

    let html = "";
    let navHtml = "";

    MENU.forEach((cat, i) => {
      const tone = TONES[i % TONES.length];
      cat.items.forEach((it) => { it.__tags = cat.tags; it.__svg = cat.svg; });

      navHtml += `<a href="#${cat.id}" class="cat-chip" data-cat="${cat.id}"><svg class="chip-icon" aria-hidden="true"><use href="#icon-${cat.svg || "flame"}"></use></svg> ${cat.title}</a>`;

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
    catNav.innerHTML = navHtml;

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

  /* ---------------------------------------------------------- scroll spy for cat nav */
  function initScrollSpy() {
    const sections = $$("[data-cat-section]");
    const chips = $$(".cat-chip");
    const catNav = $("#cat-nav");
    if (!sections.length) return;

    let ticking = false;
    let lastActiveId = null;

    function setActive(id) {
      if (id === lastActiveId) return;
      lastActiveId = id;
      chips.forEach((c) => c.classList.toggle("active", c.dataset.cat === id));
      const activeChip = chips.find((c) => c.dataset.cat === id);
      if (activeChip && catNav) {
        // Scroll only the horizontal chip strip itself (never the page).
        // We deliberately avoid Element.scrollIntoView here: with a sticky
        // ancestor it can miscalculate and trigger an unwanted *vertical*
        // page scroll, which is what was fighting normal anchor navigation.
        const target =
          activeChip.offsetLeft - catNav.clientWidth / 2 + activeChip.offsetWidth / 2;
        const max = catNav.scrollWidth - catNav.clientWidth;
        catNav.scrollTo({ left: Math.max(0, Math.min(target, max)), behavior: "smooth" });
      }
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const triggerLine = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 68)
          + (parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--promo-h")) || 34)
          + 113;
        let current = sections[0].id;
        for (const sec of sections) {
          if (sec.getBoundingClientRect().top - triggerLine <= 0) current = sec.id;
        }
        setActive(current);
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
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

  /* ---------------------------------------------------------- QR code */
  function initQR() {
    const el = $("#qrcode");
    if (!el || typeof QRCode === "undefined" || typeof CONFIG === "undefined") return;
    el.innerHTML = "";
    new QRCode(el, {
      text: CONFIG.MENU_URL,
      width: 200,
      height: 200,
      colorDark: "#0B3D32",
      colorLight: "#FFFFFF",
      correctLevel: QRCode.CorrectLevel.H,
    });

    $("#qr-download")?.addEventListener("click", () => {
      const img = el.querySelector("img") || el.querySelector("canvas");
      const dataUrl = img.tagName === "CANVAS" ? img.toDataURL("image/png") : img.src;
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "wah-veer-g-wah-menu-qr.png";
      a.click();
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
    initIntro();
    initHeader();
    initFilters();
    initScrollSpy();
    initQR();
    initInstagram();
    initYear();
  });
})();
