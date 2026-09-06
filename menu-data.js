/* =========================================================================
   WAH VEER G WAH — MENU DATA
   Transcribed directly from the restaurant's printed menu photos.
   Prices are preserved exactly as printed. Do not invent items or prices —
   edit this file only from the real, current printed/POS menu.

   Categories are ordered with the most popular / signature items first
   (Platters, Thali, Combos, Tandoori & Paneer), followed by the rest of
   the printed menu.

   A few notes on data quality (please read):
   - Two spots in the photographed menu had glare that made some dish NAMES
     unreadable, even though the prices were legible. Those items are marked
     needsConfirm:true with a clear label. Please replace with the real
     names and re-upload a clearer photo of those two spots if possible:
       1) "Veg Starters" (Chinese section) — 9 items, prices readable
       2) "Spl Chaap Staters" — last item, price 220
   - Three soup names were partly obscured by glare; the most likely
     standard names are used (very common wording on Indian-Chinese
     menus) but are flagged needsConfirm:true so you can double check
     the exact wording against the physical menu.
   ========================================================================= */

const MENU = [
  {
    "id": "wvgw-platters",
    "title": "Wah Veer G Wah Platters",
    "tags": [
      "Chaap",
      "Paneer",
      "Tandoori"
    ],
    "icon": "🍽️",
    "featured": true,
    "items": [
      {
        "n": "WVGW Chaap Platter",
        "d": "14 pcs",
        "p": 320
      },
      {
        "n": "WVGW Veg Platter",
        "d": "14 pcs",
        "p": 320
      },
      {
        "n": "WVGW Mix Platter",
        "d": "Mushroom, Afghani, Achari, Malai Soyabean Tikka Chaap, Seekh Kebab",
        "p": 380
      }
    ],
    "svg": "platter",
    "popular": true
  },
  {
    "id": "special-thali",
    "title": "WVGW Special Thali",
    "tags": [],
    "icon": "🍛",
    "featured": true,
    "items": [
      {
        "n": "Spl Thali",
        "d": "Dal Makhani, Shahi Paneer, Tawa Tikka Masala, Veg Biryani, Sweet, Lachha Paratha (1 pc)",
        "p": 260
      },
      {
        "n": "Delux Thali",
        "d": "Dal Makhani, Shahi Paneer, Tawa Tikka Masala, Tandoori Soya Tikka (8 pcs), Veg Biryani, Sweet, Lachha Paratha (1 pc)",
        "p": 360
      }
    ],
    "svg": "thali",
    "popular": true
  },
  {
    "id": "combo-meal",
    "title": "Combo Meal",
    "tags": [],
    "icon": "🍛",
    "note": "Each combo comes with Dal Makhani, Salad & Naan (1 pc), Raita. Combo packing charges ₹20 extra.",
    "items": [
      {
        "n": "Shahi Paneer Combo",
        "p": 190
      },
      {
        "n": "Paneer Changezi Combo",
        "p": 190
      },
      {
        "n": "Kadhai Paneer Combo",
        "p": 190
      },
      {
        "n": "Paneer Lababdar Combo",
        "p": 190
      },
      {
        "n": "Changezi Chaap Combo",
        "p": 190
      },
      {
        "n": "Tawa Tikka Masala Combo",
        "p": 190
      },
      {
        "n": "Soya Keema Combo",
        "p": 190
      },
      {
        "n": "Rogan Josh Combo",
        "p": 190
      },
      {
        "n": "Soya Butter Masala Combo",
        "p": 190
      },
      {
        "n": "Malai Chaap Combo",
        "p": 190
      },
      {
        "n": "Kathi Kebab Combo",
        "d": "Salad, Rumali (2 pcs) + Kathi Kebab",
        "p": 190
      }
    ],
    "svg": "thali",
    "popular": true
  },
  {
    "id": "tandoori-snacks",
    "title": "Tandoori Snacks",
    "tags": [
      "Tandoori",
      "Chaap"
    ],
    "icon": "🔥",
    "half": "Half",
    "full": "Full",
    "items": [
      {
        "n": "Afghani Chaap",
        "d": "Without Cream",
        "half": 180,
        "full": 260
      },
      {
        "n": "Afghani Tikka Chaap",
        "d": "Without Cream",
        "half": 180,
        "full": 260
      },
      {
        "n": "Malai Tikka Chaap",
        "d": "With Cream",
        "half": 190,
        "full": 270
      },
      {
        "n": "Malai Chaap",
        "d": "With Cream",
        "half": 190,
        "full": 270
      },
      {
        "n": "Soyabean Tikka Chaap",
        "half": 180,
        "full": 260,
        "spicy": true
      },
      {
        "n": "Chatpata Chaap Tikka",
        "half": 180,
        "full": 260
      },
      {
        "n": "Haryali Chaap",
        "half": 180,
        "full": 260
      },
      {
        "n": "Haryali Tikka Chaap",
        "half": 180,
        "full": 260
      },
      {
        "n": "Haryali Chilli Chaapa",
        "half": 180,
        "full": 260,
        "spicy": true
      },
      {
        "n": "Peshawari Tikka",
        "half": 180,
        "full": 260
      },
      {
        "n": "Achari Chaap",
        "half": 180,
        "full": 260
      },
      {
        "n": "Achari Tikka Chaap",
        "half": 180,
        "full": 260,
        "spicy": true
      },
      {
        "n": "Chilli Chaap Tandoori Tikka",
        "half": 180,
        "full": 260,
        "spicy": true
      },
      {
        "n": "Kali Mirch Tikka",
        "half": 190,
        "full": 260
      },
      {
        "n": "Chilli Lemon Chaap Tikka",
        "half": 180,
        "full": 270,
        "spicy": true
      },
      {
        "n": "Garlic Chaap Tikka",
        "full": 270
      },
      {
        "n": "Reshmi Chaap Tikka",
        "half": 190,
        "full": 260
      },
      {
        "n": "Bharwa Chaap",
        "half": 190,
        "full": 260
      },
      {
        "n": "Veg Boti Kebab",
        "full": 260
      },
      {
        "n": "Crunchy Spl Soya Strips",
        "half": 190,
        "full": 260
      },
      {
        "n": "Peri Peri Chaap Tikka",
        "half": 180,
        "full": 260,
        "spicy": true
      },
      {
        "n": "Mexican Chaap",
        "full": 270
      },
      {
        "n": "WFC Chaap",
        "d": "Fry",
        "half": 180,
        "full": 260
      },
      {
        "n": "Chaap Orly",
        "d": "Fry",
        "full": 260
      },
      {
        "n": "Soya Cheese Tikka",
        "half": 190,
        "full": 270
      },
      {
        "n": "Chaap Cocktail",
        "full": 260,
        "spicy": true
      }
    ],
    "svg": "flame"
  },
  {
    "id": "paneer-and-more",
    "title": "Paneer & More",
    "tags": [
      "Paneer",
      "Tandoori"
    ],
    "icon": "🧀",
    "items": [
      {
        "n": "Dahi Ke Sholey",
        "d": "6 pcs",
        "p": 220
      },
      {
        "n": "Veg Seekh Kebab",
        "d": "8 pcs",
        "p": 250
      },
      {
        "n": "Kakori Kebab",
        "p": 240
      },
      {
        "n": "Paneer Tikka",
        "d": "8 pcs",
        "p": 260
      },
      {
        "n": "Paneer Achari Tikka",
        "d": "8 pcs",
        "p": 260,
        "spicy": true
      },
      {
        "n": "Paneer Malai Tikka",
        "d": "8 pcs",
        "p": 260
      },
      {
        "n": "Paneer Peri Peri Tikka",
        "d": "8 pcs",
        "p": 260,
        "spicy": true
      },
      {
        "n": "Haryali Paneer Tikka",
        "d": "8 pcs",
        "p": 260
      },
      {
        "n": "Mushroom Kurkure",
        "d": "8 pcs",
        "p": 260
      },
      {
        "n": "Mushroom Tikka",
        "d": "16 pcs",
        "p": 260
      },
      {
        "n": "Mushroom Malai Tikka",
        "d": "16 pcs",
        "p": 260
      },
      {
        "n": "Paneer Kurkure",
        "d": "6 pcs",
        "p": 260
      }
    ],
    "svg": "cheese"
  },
  {
    "id": "spl-chaap-staters",
    "title": "Spl Chaap Staters",
    "tags": [
      "Chaap"
    ],
    "icon": "🔥",
    "items": [
      {
        "n": "Chilli Soyabean",
        "p": 260,
        "spicy": true
      },
      {
        "n": "Lemon Chaap Tikka Dry",
        "p": 260
      },
      {
        "n": "Chaap Lolipop Heaven",
        "p": 260
      },
      {
        "n": "Crispy Chaap Tikka Beijing Style",
        "p": 260
      },
      {
        "n": "Crispy Chaap Tikka Shanghai Style",
        "p": 260
      },
      {
        "n": "Chilli Chaap Manchurian Dry",
        "p": 260,
        "spicy": true
      },
      {
        "n": "Chaap Stater",
        "p": 220,
        "needsConfirm": true
      }
    ],
    "svg": "flame"
  },
  {
    "id": "rumali-rolls",
    "title": "Rumali Rolls — Grilled",
    "tags": [
      "Rolls"
    ],
    "icon": "🌯",
    "half": "Half (2 pcs)",
    "full": "Full (4 pcs)",
    "items": [
      {
        "n": "Afghani Chaap Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Veg Kebab Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Peshawari Seekh Roll",
        "d": "2 pcs / 4 pcs",
        "half": 190,
        "full": 280
      },
      {
        "n": "Kathi Roll",
        "d": "1 pc",
        "p": 140
      },
      {
        "n": "Keema Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Chatpta Tikka Roll",
        "half": 190,
        "full": 260,
        "spicy": true
      },
      {
        "n": "Soya Tikka Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Haryali Chaap Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Achari Chaap Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Kali Mirch Tikka Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Fish Tikka Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Boti Kebab Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Malai Chaap Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Bharwa Chaap Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Chilli Tikka Roll",
        "half": 190,
        "full": 260,
        "spicy": true
      },
      {
        "n": "Paneer Tikka Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Haryali Paneer Tikka Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Malai Paneer Tikka Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Achari Paneer Tikka Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Reshami Tikka Roll",
        "half": 190,
        "full": 260
      },
      {
        "n": "Peri Peri Roll",
        "half": 190,
        "full": 260,
        "spicy": true
      },
      {
        "n": "Peri Peri Paneer Tikka Roll",
        "half": 190,
        "full": 260,
        "spicy": true
      },
      {
        "n": "Fish Malai Roll",
        "half": 190,
        "full": 280
      },
      {
        "n": "Mushroom Masala Roll",
        "half": 190,
        "full": 280
      },
      {
        "n": "Roll Platter",
        "d": "Kebab / Mushroom / Paneer / Chaap",
        "p": 290
      },
      {
        "n": "WVGW Spl Pizza Rolls",
        "d": "Fry & Crispy",
        "half": 190,
        "full": 260
      }
    ],
    "svg": "roll"
  },
  {
    "id": "tawa-gravy",
    "title": "Tawa Chaap & Tawa Gravy",
    "tags": [
      "Chaap",
      "Paneer"
    ],
    "icon": "🥘",
    "half": "Half",
    "full": "Full",
    "items": [
      {
        "n": "Tawa Chaap Masala",
        "half": 220,
        "full": 320
      },
      {
        "n": "Rara Chaap",
        "half": 220,
        "full": 320
      },
      {
        "n": "Kali Mirch Tikka Gravy",
        "half": 220,
        "full": 320
      },
      {
        "n": "Tawa Tikka Masala",
        "half": 220,
        "full": 320
      },
      {
        "n": "Changezi Chaap Masala",
        "half": 220,
        "full": 320
      },
      {
        "n": "Chaap Lababdar",
        "half": 220,
        "full": 320
      },
      {
        "n": "Malai Chaap Gravy",
        "d": "Non Spicy",
        "half": 220,
        "full": 320
      },
      {
        "n": "Tawa Paneer Masala",
        "half": 220,
        "full": 360,
        "fullUnit": "750ml"
      },
      {
        "n": "Tawa Mushroom Masala",
        "half": 220,
        "full": 360,
        "fullUnit": "750ml"
      },
      {
        "n": "Tawa Mix Masala",
        "d": "2 pcs tawa paneer, 2 pcs tawa chaap, 4 pcs tawa tikka, 4 pcs tawa mushroom",
        "half": 250,
        "full": 360,
        "fullUnit": "1000ml"
      }
    ],
    "svg": "pot"
  },
  {
    "id": "handi",
    "title": "Handi",
    "tags": [
      "Paneer"
    ],
    "icon": "🥘",
    "half": "Half",
    "full": "Full",
    "items": [
      {
        "n": "Paneer 2 Pyaza",
        "half": 240,
        "full": 340
      },
      {
        "n": "Shahi Paneer",
        "half": 240,
        "full": 340
      },
      {
        "n": "Kadhai Paneer",
        "half": 240,
        "full": 340
      },
      {
        "n": "Paneer Lababdar",
        "half": 240,
        "full": 340
      },
      {
        "n": "Paneer Butter Masala",
        "half": 240,
        "full": 340
      },
      {
        "n": "Paneer Malai Gravy",
        "d": "Non Spicy",
        "half": 240,
        "full": 340
      },
      {
        "n": "Paneer Changezi",
        "half": 240,
        "full": 340
      },
      {
        "n": "Rara Paneer",
        "half": 240,
        "full": 340
      },
      {
        "n": "Soya Keema",
        "half": 240,
        "full": 340
      },
      {
        "n": "Soya Keema Kaleji",
        "half": 240,
        "full": 340
      },
      {
        "n": "Chatpata Chaap Tikka",
        "d": "Gravy",
        "half": 240,
        "full": 340
      },
      {
        "n": "Veg Soya Butter Masala",
        "half": 240,
        "full": 340
      },
      {
        "n": "Veg Soya Mutton Rogan Josh",
        "half": 240,
        "full": 340
      },
      {
        "n": "Soya Bhuna Tangri",
        "d": "1 pc / 2 pc",
        "half": 240,
        "full": 340
      },
      {
        "n": "Mix Veg",
        "half": 240,
        "full": 340
      },
      {
        "n": "Malai Kofta White Gravy",
        "half": 240,
        "full": 340
      },
      {
        "n": "Rara Mushroom",
        "half": 240,
        "full": 340
      },
      {
        "n": "Mushroom Rogan Josh",
        "half": 240,
        "full": 340
      },
      {
        "n": "Mushroom Lababdar",
        "half": 240,
        "full": 340
      },
      {
        "n": "Malai Mushroom Gravy",
        "d": "Non Spicy",
        "half": 240,
        "full": 340
      },
      {
        "n": "Soya Fish Curry",
        "half": 240,
        "full": 340
      },
      {
        "n": "Rada Seekh Kebab",
        "half": 250,
        "full": 400
      }
    ],
    "svg": "pot"
  },
  {
    "id": "biryani-rice",
    "title": "Veg Biryani & Rice",
    "tags": [
      "Rice"
    ],
    "icon": "🍚",
    "half": "Half",
    "full": "Full",
    "items": [
      {
        "n": "Biryani With Gravy",
        "half": 200,
        "full": 260
      },
      {
        "n": "Peri Peri Biryani With Gravy",
        "half": 200,
        "full": 260,
        "spicy": true
      },
      {
        "n": "Jeera Rice",
        "half": 180,
        "full": 220
      }
    ],
    "svg": "rice"
  },
  {
    "id": "dal-raita",
    "title": "Dal & Raita",
    "tags": [],
    "icon": "🥣",
    "items": [
      {
        "n": "Boondi Raita",
        "d": "500ml",
        "p": 80
      },
      {
        "n": "Spl Dal Makhani",
        "half": 180,
        "full": 280,
        "jumbo": 340,
        "half2": "Half 500ml",
        "full2": "Full 750ml",
        "jumbo2": "Jumbo 1000ml"
      }
    ],
    "svg": "soup"
  },
  {
    "id": "breads",
    "title": "Breads",
    "tags": [],
    "icon": "🫓",
    "items": [
      {
        "n": "Tandoori Roti / Rumali Roti",
        "p": 15
      },
      {
        "n": "Butter Roti",
        "p": 20
      },
      {
        "n": "Plain Naan",
        "p": 35
      },
      {
        "n": "Butter Naan / Lacha Prantha",
        "p": 50
      },
      {
        "n": "Green Chilli Naan",
        "p": 70,
        "spicy": true
      },
      {
        "n": "Spl Garlic Chilly Naan",
        "p": 70,
        "spicy": true
      },
      {
        "n": "Pudhina Prantha",
        "p": 60
      },
      {
        "n": "Garlic Prantha",
        "p": 60
      },
      {
        "n": "Garlic Naan",
        "p": 60
      },
      {
        "n": "Green Chilli Prantha",
        "p": 60,
        "spicy": true
      },
      {
        "n": "Onion Prantha",
        "p": 80
      },
      {
        "n": "Punjabi Keema Kulcha Spl",
        "p": 80
      },
      {
        "n": "Paneer Prantha",
        "p": 80
      },
      {
        "n": "Cream Masala Onion",
        "p": 50
      }
    ],
    "svg": "bread"
  },
  {
    "id": "desserts",
    "title": "Desserts",
    "tags": [
      "Desserts"
    ],
    "icon": "🍮",
    "items": [
      {
        "n": "Spl Phirni",
        "p": 50
      }
    ],
    "svg": "dessert"
  },
  {
    "id": "kuch-thanda",
    "title": "Kuch Thanda",
    "subtitle": "Cold Beverages · 300ml Glass",
    "tags": [
      "Beverages"
    ],
    "icon": "🥤",
    "items": [
      {
        "n": "Fresh Lime Soda",
        "p": 70
      },
      {
        "n": "Jeera Soda",
        "p": 70
      },
      {
        "n": "Shikanji Masala",
        "p": 70
      },
      {
        "n": "Malt Beer",
        "d": "Non-Alcoholic",
        "p": 70
      },
      {
        "n": "Mojito",
        "d": "Mint, Passion Fruit or Peach",
        "p": 70
      },
      {
        "n": "Fruit Bear",
        "p": 70
      },
      {
        "n": "Kala Khatta",
        "p": 70
      },
      {
        "n": "Lychee / Mango / Pineapple",
        "d": "Water Based",
        "p": 50
      },
      {
        "n": "Cold Coffee",
        "p": 100
      }
    ],
    "svg": "drink"
  },
  {
    "id": "soups",
    "title": "Soups",
    "tags": [],
    "icon": "🍲",
    "note": "Splitting one soup into two bowls: +₹30",
    "items": [
      {
        "n": "Veg Clear Soup",
        "p": 120
      },
      {
        "n": "Veg Sweet Corn / Manchow Soup",
        "p": 120
      },
      {
        "n": "Veg Lemon Coriander Soup",
        "p": 120,
        "needsConfirm": true
      },
      {
        "n": "Veg Hot N Sour Soup",
        "p": 120,
        "needsConfirm": true
      },
      {
        "n": "Veg Special Soup",
        "p": 120,
        "needsConfirm": true
      }
    ],
    "svg": "soup"
  },
  {
    "id": "pastas",
    "title": "Pastas",
    "tags": [],
    "icon": "🍝",
    "items": [
      {
        "n": "Red Sauce Pasta",
        "p": 220
      },
      {
        "n": "White Sauce Pasta",
        "p": 220
      },
      {
        "n": "Spl Mix Sauce Pasta",
        "p": 240
      }
    ],
    "svg": "pasta"
  },
  {
    "id": "veg-starters",
    "title": "Veg Starters",
    "tags": [
      "Chinese"
    ],
    "icon": "🥦",
    "note": "The dish names below were unreadable in the source photo due to glare — prices are accurate. Please confirm the exact names.",
    "items": [
      {
        "n": "Veg Starter",
        "p": 260,
        "needsConfirm": true
      },
      {
        "n": "Veg Starter",
        "p": 190,
        "needsConfirm": true
      },
      {
        "n": "Veg Starter",
        "p": 200,
        "needsConfirm": true
      },
      {
        "n": "Veg Starter",
        "p": 260,
        "needsConfirm": true
      },
      {
        "n": "Veg Starter",
        "p": 260,
        "needsConfirm": true
      },
      {
        "n": "Veg Starter",
        "p": 260,
        "needsConfirm": true
      },
      {
        "n": "Veg Starter",
        "p": 260,
        "needsConfirm": true
      },
      {
        "n": "Veg Starter",
        "p": 270,
        "needsConfirm": true
      },
      {
        "n": "Veg Starter",
        "p": 340,
        "needsConfirm": true
      },
      {
        "n": "French Fries",
        "p": 150
      },
      {
        "n": "Peri Peri French Fries",
        "p": 180,
        "spicy": true
      },
      {
        "n": "Loaded French Fries",
        "p": 210
      }
    ],
    "svg": "leaf"
  },
  {
    "id": "newly-introduced",
    "title": "Newly Introduced",
    "tags": [
      "Tandoori"
    ],
    "icon": "✨",
    "half": "Half",
    "full": "Full",
    "items": [
      {
        "n": "Soya Sticks",
        "full": 220
      },
      {
        "n": "Soya Fish Amritsari",
        "half": 190,
        "full": 260
      },
      {
        "n": "Soya Fish Tikka",
        "half": 190,
        "full": 260
      },
      {
        "n": "Bhatti Tikka",
        "half": 190,
        "full": 260
      },
      {
        "n": "Soya Mutton Tikka",
        "half": 190,
        "full": 260
      },
      {
        "n": "Soya Tandoori Leg Masala",
        "half": 240,
        "full": 340
      },
      {
        "n": "Soya Pamphlet",
        "full": 240
      },
      {
        "n": "Soya Nuggets",
        "d": "8 pcs",
        "full": 220
      },
      {
        "n": "Peshawri Seekh Kebab",
        "half": 180,
        "full": 280
      },
      {
        "n": "Lahori Kebab",
        "full": 280
      },
      {
        "n": "Soya Mini Fish Crispy Crumbs",
        "full": 260
      },
      {
        "n": "Soya Crispy Sticks",
        "full": 240
      },
      {
        "n": "Veg Crispy Kebab",
        "d": "4 pcs",
        "full": 140
      }
    ],
    "svg": "flame"
  },
  {
    "id": "chinese-noodles",
    "title": "Chinese Noodles",
    "tags": [
      "Chinese"
    ],
    "icon": "🍜",
    "half": "Half",
    "full": "Full",
    "items": [
      {
        "n": "Veg Noodles",
        "half": 160,
        "full": 200
      },
      {
        "n": "Veg Hakka Noodles",
        "half": 170,
        "full": 210
      },
      {
        "n": "Schezwan Noodles",
        "half": 170,
        "full": 210,
        "spicy": true
      },
      {
        "n": "Singapuri Noodles",
        "half": 170,
        "full": 210
      },
      {
        "n": "Chilli Garlic Noodles",
        "half": 170,
        "full": 210,
        "spicy": true
      },
      {
        "n": "WVGW Special Noodles",
        "half": 170,
        "full": 230
      },
      {
        "n": "Soya Chaap Spl Noodles",
        "half": 170,
        "full": 230
      }
    ],
    "svg": "noodle"
  },
  {
    "id": "chinese-rolls",
    "title": "Chinese Rolls",
    "tags": [
      "Chinese",
      "Rolls"
    ],
    "icon": "🥡",
    "items": [
      {
        "n": "Spring Roll",
        "p": 170
      },
      {
        "n": "Kurkure Spring Roll",
        "p": 190
      }
    ],
    "svg": "roll"
  },
  {
    "id": "rice",
    "title": "Rice",
    "tags": [
      "Rice",
      "Chinese"
    ],
    "icon": "🍚",
    "items": [
      {
        "n": "Veg Fried Rice",
        "p": 190
      },
      {
        "n": "Chilli Garlic Fried Rice",
        "p": 200,
        "spicy": true
      },
      {
        "n": "Singapuri Fried Rice",
        "p": 200
      },
      {
        "n": "Shanghai Fried Rice",
        "p": 200
      },
      {
        "n": "Veg Soya Chaap Spl Rice",
        "p": 220
      }
    ],
    "svg": "rice"
  },
  {
    "id": "momos",
    "title": "Momos",
    "tags": [
      "Chinese"
    ],
    "icon": "🥟",
    "items": [
      {
        "n": "Veg Momos",
        "d": "Steam: Half ₹100 / Full ₹160 · Fried: Half ₹110 / Full ₹180",
        "half": 100,
        "full": 160
      },
      {
        "n": "Paneer Momos",
        "d": "Steam: Half ₹120 / Full ₹180 · Fried: Half ₹110 / Full ₹190",
        "half": 120,
        "full": 180
      },
      {
        "n": "Soya Momos",
        "d": "Steam: Half ₹120 / Full ₹180 · Fried: Half ₹110 / Full ₹190",
        "half": 120,
        "full": 180
      },
      {
        "n": "Veg Kurkure Momos",
        "half": 120,
        "full": 200
      },
      {
        "n": "Paneer Kurkure Momos",
        "half": 130,
        "full": 220
      },
      {
        "n": "Soya Kurkure Momos",
        "half": 130,
        "full": 220
      },
      {
        "n": "Veg Tandoori Momos",
        "half": 140,
        "full": 220
      },
      {
        "n": "Paneer Tandoori Momos",
        "half": 150,
        "full": 240
      },
      {
        "n": "Soya Tandoori Momos",
        "half": 150,
        "full": 240
      },
      {
        "n": "Peri-Peri Tandoori Momos",
        "half": 150,
        "full": 240,
        "spicy": true
      },
      {
        "n": "Afghani Tandoori Momos",
        "half": 150,
        "full": 240
      },
      {
        "n": "Chilli Gravy Momos",
        "p": 280,
        "spicy": true
      },
      {
        "n": "Manchurian Gravy Momos",
        "p": 280
      },
      {
        "n": "Steam Momos Platter",
        "d": "9 pcs",
        "p": 240
      },
      {
        "n": "Kurkure Momos Platter",
        "d": "9 pcs",
        "p": 260
      },
      {
        "n": "Tandoor Momos Platter",
        "d": "9 pcs",
        "p": 260
      }
    ],
    "svg": "dumpling"
  },
  {
    "id": "chinese-combo",
    "title": "Spl Chinese Combo",
    "tags": [
      "Chinese"
    ],
    "icon": "🥡",
    "items": [
      {
        "n": "Chilli Potato + Manchurian Dry",
        "p": 300,
        "spicy": true
      },
      {
        "n": "Manchurian + Chowmein",
        "p": 320
      },
      {
        "n": "Manchurian + Rice",
        "p": 320
      },
      {
        "n": "Chilli Paneer + Chowmein",
        "p": 320,
        "spicy": true
      },
      {
        "n": "Chilli Paneer + Rice",
        "p": 320,
        "spicy": true
      }
    ],
    "svg": "wok"
  },
  {
    "id": "main-course",
    "title": "Main Course (Chinese Gravy)",
    "tags": [
      "Chinese"
    ],
    "icon": "🥘",
    "half": "Half",
    "full": "Full",
    "items": [
      {
        "n": "Veg Manchurian Gravy",
        "d": "6 / 10 pcs",
        "half": 200,
        "full": 270
      },
      {
        "n": "Chilli Paneer Gravy",
        "d": "8 / 12 pcs",
        "half": 200,
        "full": 270,
        "spicy": true
      },
      {
        "n": "Mix Veg in Hot Garlic Sauce",
        "half": 200,
        "full": 270,
        "spicy": true
      },
      {
        "n": "Mix Veg in Schezwan Sauce",
        "half": 200,
        "full": 270,
        "spicy": true
      },
      {
        "n": "Chilli Chaap Tikka Gravy",
        "d": "6 / 12 pcs",
        "half": 200,
        "full": 270,
        "spicy": true
      },
      {
        "n": "Chaap Tikka Manchurian Gravy",
        "half": 200,
        "full": 270
      }
    ],
    "svg": "wok"
  }
];
