/* =========================================================================
   WAH VEER G WAH — SITE CONFIGURATION
   Edit the values below to update the site without touching any design code.
   ========================================================================= */

const CONFIG = {
  RESTAURANT_NAME: "Wah Veer G Wah",
  SUB_BRAND: "Jail Road Wale",
  TAGLINE: "Proud to be a Vegetarian",
  CUISINE: "Indian | Chinese | BBQ",
  // Logo is embedded directly in index.html as a data URI (see the <img>
  // tags), so it can never break from a missing file or wrong path. This
  // LOGO value is kept only for reference / if you build additional pages.
  LOGO: "assets/logo.png",

  // Real details printed on the restaurant's own menu:
  PHONE_1: "8860144567",
  PHONE_2: "8860344567",
  ADDRESS: "25/1 Double Storey, Ashok Nagar, Jail Road, Near Tilak Nagar Metro Station, New Delhi-18",
  OPENING_HOURS: "12:00 PM – 4:00 AM (Delivery)",
  DELIVERY_MIN_ORDER: "₹400 within 3km",

  GOOGLE_REVIEW_URL: "https://maps.app.goo.gl/shGi351FQxqvjPkf6",
  GOOGLE_PLACE_ID: "PASTE_REAL_PLACE_ID_HERE",

  // A direct "write a review" deep link built from the ID embedded in your
  // Google Maps link. NOTE: this returned a 404 when tested — Google's
  // officially documented format needs a "ChIJ..."-style Place ID (from
  // Google's Place ID Finder: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder),
  // not the "0x...:0x..." ID pulled from a maps.app.goo.gl link. Left empty
  // for now, so the review button safely falls back to GOOGLE_REVIEW_URL
  // above (confirmed working). If you get the real ChIJ Place ID later,
  // paste a link in this exact format here:
  // https://search.google.com/local/writereview?placeid=ChIJ...
  GOOGLE_WRITE_REVIEW_URL: "",

  INSTAGRAM_URL: "https://www.instagram.com/wahveergwahofficial",

  // Kept for reference / future use (e.g. printed table cards) — not
  // currently linked from the site itself.
  MENU_URL: "https://your-final-menu-url.com",

  // Running offer bar text. Keep this truthful and current — it is shown
  // exactly as written, site-wide, until you change it.
  PROMO_TEXT: "🎉 Ask our staff about today's specials!",

  // OPTIONAL: paste real Instagram POST URLs here (right-click a post on
  // instagram.com → Copy Link) to show live embeds of those exact posts in
  // the Instagram section, using Instagram's own official embed — this is
  // the only way to show real Instagram content without a backend Graph
  // API integration (which needs a Meta developer app + business account
  // access token, not just a profile link). Leave empty to show the
  // generic "Follow us" gallery instead.
  INSTAGRAM_POST_URLS: [
    "https://www.instagram.com/reel/DUdXS0OgcDP/",
    "https://www.instagram.com/reel/DUdAjG0kauk/",
    "https://www.instagram.com/p/DQXBcYeAWyn/",
    "https://www.instagram.com/p/DQUJKf2gSvl/",
    "https://www.instagram.com/p/DQJYYtMkZAF/",
  ],

  SOCIAL_LINKS: {
    instagram: "https://www.instagram.com/wahveergwahofficial",
    google: "https://maps.app.goo.gl/shGi351FQxqvjPkf6",
  },
};
