/* =========================================================================
   WAH VEER G WAH — SITE CONFIGURATION
   Edit the values below to update the site without touching any design code.
   ========================================================================= */

const CONFIG = {
  RESTAURANT_NAME: "Wah Veer G Wah",
  SUB_BRAND: "Jail Road Wale",
  TAGLINE: "Proud to be a Vegetarian",
  CUISINE: "Indian | Chinese | BBQ",
  LOGO: "assets/logo.png",

  // Real details printed on the restaurant's own menu:
  PHONE_1: "8860144567",
  PHONE_2: "8860344567",
  ADDRESS: "25/1 Double Storey, Ashok Nagar, Jail Road, Near Tilak Nagar Metro Station, New Delhi-18",
  OPENING_HOURS: "12:00 PM – 4:00 AM (Delivery)",
  DELIVERY_MIN_ORDER: "₹400 within 3km",

  GOOGLE_REVIEW_URL: "https://maps.app.goo.gl/shGi351FQxqvjPkf6",
  GOOGLE_PLACE_ID: "PASTE_REAL_PLACE_ID_HERE",

  // A direct "write a review" deep link, built from the ID embedded in your
  // Google Maps link (the "!1s0x...:0x..." part of the full maps URL) — this
  // skips the extra tap of finding the review button on the place page.
  // This uses a widely-used but UNOFFICIAL Google URL pattern, so please
  // test it yourself before relying on it: open the link below in a normal
  // browser tab and confirm it lands directly on the "Rate and review" box.
  // If it ever stops working, just clear it (set to "") and the site will
  // automatically fall back to GOOGLE_REVIEW_URL above instead.
  GOOGLE_WRITE_REVIEW_URL: "https://search.google.com/local/writereview?placeid=0x390d04a10b4a61e7:0xad810c33a759986e",

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
