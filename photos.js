/* =========================================================================
   WAH VEER G WAH — DISH PHOTOS
   Every category photo is bundled in assests/photos/, so nothing loads from
   another website. px(...) below is kept only as a helper in case you ever
   want to use a Pexels photo again. Every photo is vegetarian.

   They are illustrative only — the footer says so. Once the restaurant has
   its own food photos, drop them into assests/photos/ and replace a line,
   e.g.   "momos": { src: "assests/photos/momos.jpg", alt: "Our steamed momos" },

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
    "wvgw-platters":      { src: "assests/photos/mix-tandoori-platter.jpg", alt: "Mixed tandoori platter with mushroom tikka, malai and tandoori chaap" },
    "special-thali":      { src: "assests/photos/veg-thali.jpg", alt: "Veg thali with dal, sabzi, naan, rice and papad" },
    "combo-meal":         { src: "assests/photos/dal-makhani-combo.jpg", alt: "Dal makhani with lachha paratha, rice and salad" },
    "tandoori-snacks":    { src: "assests/photos/chaap-tikka-trio.jpg", alt: "Malai, Afghani and Haryali chaap tikka" },
    "paneer-and-more":    { src: "assests/photos/seekh-paneer-tikka.jpg", alt: "Veg seekh kebab and paneer tikka" },
    "spl-chaap-staters":  { src: "assests/photos/tandoori-tikka-skillet.jpg", alt: "Tandoori tikka skewers in a skillet" },
    "rumali-rolls":       { src: "assests/photos/rumali-rolls.jpg", alt: "Grilled rumali rolls" },
    "tawa-gravy":         { src: "assests/photos/chaap-masala.jpg", alt: "Chaap masala in a brass pan" },
    "handi":              { src: "assests/photos/kadai-paneer.jpg", alt: "Kadai paneer in a white handi" },
    "biryani-rice":       { src: "assests/photos/biryani.jpg", alt: "Biryani with salad" },
    "dal-raita":          { src: "assests/photos/dal-makhani.jpg", alt: "Creamy dal makhani" },
    "breads":             { src: "assests/photos/bread-basket.jpg", alt: "Basket of naan, roti and lachha paratha" },
    "desserts":           { src: "assests/photos/kesar-phirni.jpg", alt: "Kesar phirni with almonds" },
    "kuch-thanda":        { src: "assests/photos/mojito.jpg", alt: "Fresh mint mojito" },
    "soups":              { src: "assests/photos/sweet-corn-soup.jpg", alt: "Veg sweet corn soup" },
    "pastas":             { src: "assests/photos/red-sauce-pasta.jpg", alt: "Red sauce penne pasta" },
    "veg-starters":       { src: "assests/photos/french-fries.jpg", alt: "French fries with ketchup" },
    "newly-introduced":   { src: "assests/photos/paneer-skewers-closeup.jpg", alt: "Grilled skewers with peppers and onion" },
    "chinese-noodles":    { src: "assests/photos/hakka-noodles.jpg", alt: "Veg hakka noodles" },
    "chinese-rolls":      { src: "assests/photos/spring-rolls.jpg", alt: "Crispy veg spring rolls" },
    "rice":               { src: "assests/photos/veg-fried-rice.jpg", alt: "Veg fried rice" },
    "momos":              { src: "assests/photos/momos.jpg", alt: "Steamed momos with chutney" },
    "chinese-combo":      { src: "assests/photos/noodles-manchurian-combo.jpg", alt: "Veg noodles and Manchurian combo" },
    "main-course":        { src: "assests/photos/veg-manchurian.jpg", alt: "Veg Manchurian" },
  },

  // The four photo tiles under the hero buttons. "target" = category id to jump to.
  hero: [
    { src: "assests/photos/chaap-tikka-trio.jpg", alt: "Chaap tikka",   label: "Tikka & Chaap", target: "tandoori-snacks" },
    { src: "assests/photos/garlic-naan.jpg", alt: "Garlic naan",    label: "Fresh Breads",  target: "breads" },
    { src: "assests/photos/biryani.jpg", alt: "Biryani",    label: "Biryani",       target: "biryani-rice" },
    { src: "assests/photos/momos.jpg", alt: "Steamed momos",  label: "Momos",         target: "momos" },
  ],
};
