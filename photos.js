/* =========================================================================
   WAH VEER G WAH — DISH PHOTOS
   Every category photo is bundled in assets/photos/, so nothing loads from
   another website. px(...) below is kept only as a helper in case you ever
   want to use a Pexels photo again. Every photo is vegetarian.

   They are illustrative only — the footer says so. Once the restaurant has
   its own food photos, drop them into assets/photos/ and replace a line,
   e.g.   "momos": { src: "assets/photos/momos.jpg", alt: "Our steamed momos" },

   To use a different Pexels photo, copy the number at the end of its page
   URL (pexels.com/photo/some-title-1234567/) into px(1234567).
   If a photo ever fails to load, the site falls back to the coloured
   header automatically — nothing breaks.
   ========================================================================= */

const px = (id, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const PHOTOS = {
  // One banner photo per menu category (keyed by the category id in menu-data.js)
  categories: {
    "wvgw-platters":      { src: "assets/photos/mix-tandoori-platter.jpg", alt: "Mixed tandoori platter with mushroom tikka, malai and tandoori chaap" },
    "special-thali":      { src: "assets/photos/veg-thali.jpg", alt: "Veg thali with dal, sabzi, naan, rice and papad" },
    "combo-meal":         { src: "assets/photos/dal-makhani-combo.jpg", alt: "Dal makhani with lachha paratha, rice and salad" },
    "tandoori-snacks":    { src: "assets/photos/chaap-tikka-trio.jpg", alt: "Malai, Afghani and Haryali chaap tikka" },
    "paneer-and-more":    { src: "assets/photos/seekh-paneer-tikka.jpg", alt: "Veg seekh kebab and paneer tikka" },
    "spl-chaap-staters":  { src: "assets/photos/tandoori-tikka-skillet.jpg", alt: "Tandoori tikka skewers in a skillet" },
    "rumali-rolls":       { src: "assets/photos/rumali-rolls.jpg", alt: "Grilled rumali rolls" },
    "tawa-gravy":         { src: "assets/photos/chaap-masala.jpg", alt: "Chaap masala in a brass pan" },
    "handi":              { src: "assets/photos/kadai-paneer.jpg", alt: "Kadai paneer in a white handi" },
    "biryani-rice":       { src: "assets/photos/biryani.jpg", alt: "Biryani with salad" },
    "dal-raita":          { src: "assets/photos/dal-makhani.jpg", alt: "Creamy dal makhani" },
    "breads":             { src: "assets/photos/bread-basket.jpg", alt: "Basket of naan, roti and lachha paratha" },
    "desserts":           { src: "assets/photos/kesar-phirni.jpg", alt: "Kesar phirni with almonds" },
    "kuch-thanda":        { src: "assets/photos/mojito.jpg", alt: "Fresh mint mojito" },
    "soups":              { src: "assets/photos/sweet-corn-soup.jpg", alt: "Veg sweet corn soup" },
    "pastas":             { src: "assets/photos/red-sauce-pasta.jpg", alt: "Red sauce penne pasta" },
    "veg-starters":       { src: "assets/photos/french-fries.jpg", alt: "French fries with ketchup" },
    "newly-introduced":   { src: "assets/photos/paneer-skewers-closeup.jpg", alt: "Grilled skewers with peppers and onion" },
    "chinese-noodles":    { src: "assets/photos/hakka-noodles.jpg", alt: "Veg hakka noodles" },
    "chinese-rolls":      { src: "assets/photos/spring-rolls.jpg", alt: "Crispy veg spring rolls" },
    "rice":               { src: "assets/photos/veg-fried-rice.jpg", alt: "Veg fried rice" },
    "momos":              { src: "assets/photos/momos.jpg", alt: "Steamed momos with chutney" },
    "chinese-combo":      { src: "assets/photos/noodles-manchurian-combo.jpg", alt: "Veg noodles and Manchurian combo" },
    "main-course":        { src: "assets/photos/veg-manchurian.jpg", alt: "Veg Manchurian" },
  },

  // The four photo tiles under the hero buttons. "target" = category id to jump to.
  hero: [
    { src: "assets/photos/chaap-tikka-trio.jpg", alt: "Chaap tikka",   label: "Tikka & Chaap", target: "tandoori-snacks" },
    { src: "assets/photos/garlic-naan.jpg", alt: "Garlic naan",    label: "Fresh Breads",  target: "breads" },
    { src: "assets/photos/biryani.jpg", alt: "Biryani",    label: "Biryani",       target: "biryani-rice" },
    { src: "assets/photos/momos.jpg", alt: "Steamed momos",  label: "Momos",         target: "momos" },
  ],
};
