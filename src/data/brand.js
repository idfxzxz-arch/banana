export const brand = {
  name: "Banana Krezzz",
  restoName: "Resto Godong Gedang",
  tagline: "Pusat Oleh-Oleh & Resto Keluarga",
  phone: "6282220583113",
  phoneDisplay: "0822-2058-3113",
  linktree: "https://linktr.ee/bananakrezzz.id",
  address:
    "Jl. Raya Solo - Tawangmangu, Gedangan, Salam, Kec. Karangpandan, Kabupaten Karanganyar, Jawa Tengah 57791",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Jl.%20Raya%20Solo%20Tawangmangu%20Gedangan%20Salam%20Karangpandan%20Karanganyar%20Jawa%20Tengah%2057791",
};

export const services = [
  "Pesan antar",
  "Ambil di toko",
  "Belanja di toko",
  "Layanan di tempat",
];

export const facilities = ["Wi-Fi", "Wi-Fi Gratis", "Belanja kilat"];

export const payments = ["Kartu debit", "Pembayaran seluler dengan NFC"];

export const parking = ["Parkir di jalan berbayar", "Parkir di jalan gratis"];

export const advantages = [
  "Pusat oleh-oleh lengkap",
  "Produk khas Banana Krezzz",
  "Tersedia resto keluarga",
  "Menerima pesanan prasmanan",
  "Bisa reservasi via WhatsApp",
  "Lokasi strategis di jalur Solo - Tawangmangu",
];

export const testimonials = [
  {
    name: "Rani",
    text: "Pilihan oleh-olehnya lengkap, cocok dibawa pulang setelah perjalanan.",
  },
  {
    name: "Dimas",
    text: "Menu restonya enak dan cocok untuk makan bersama keluarga.",
  },
  {
    name: "Ayu",
    text: "Banana Krezzz-nya favorit, teksturnya enak dan packaging-nya rapi.",
  },
];

export const flavors = [
  {
    name: "BananaKrezzz",
    desc: "Produk utama dan best seller dari Banana Krezzz.",
    price: "Kecil Rp26.000 / Besar Rp39.500",
    icon: "🍌",
  },
  {
    name: "DurianKrezzz",
    desc: "Krezzz dengan cita rasa durian yang khas.",
    price: "Kecil Rp26.000 / Besar Rp39.500",
    icon: "🥐",
  },
  {
    name: "UbiKrezzz",
    desc: "Varian Krezzz dengan rasa ubi yang unik.",
    price: "Kecil Rp26.000 / Besar Rp39.500",
    icon: "🍠",
  },
  {
    name: "SukariKrezzz",
    desc: "Camilan khas dengan rasa manis dan renyah.",
    price: "Rp26.000",
    icon: "🍪",
  },
];
// ============================================================
// olehOlehProducts — DATA LENGKAP
// Sumber: brand.js (existing) + Katalog_Produk_2026.docx
// Update: semua produk dari katalog ditambahkan, tanpa duplikat
// Gambar: pakai URL Unsplash placeholder (ganti dengan foto asli)
// ============================================================

export const olehOlehProducts = [
  // ─── 1. PRODUK KREZZZ ────────────────────────────────────
  {
    category: "Produk Krezzz",
    emoji: "🍌",
    slideImg: "images/Produk Krezzz/BananaKrezzz.png",
    items: [
      { name: "BananaKrezzz", img: "images/Produk Krezzz/BananaKrezzz.png" },
      { name: "DurianKrezzz", img: "images/Produk Krezzz/DurianKrezzz.png" },
      { name: "UbiKrezzz", img: "images/Produk Krezzz/UbiKrezzz.png" },
      { name: "SukariKrezzz", img: "images/Produk Krezzz/BananaKrezzz.png" },
    ],
  },

  // ─── 2. PRODUK BOLU & LAPIS KUKUS ────────────────────────
  {
    category: "Produk Bolu & Lapis Kukus",
    emoji: "🎂",
    slideImg: "images/Produk Bolu & Lapis Kukus/Bolu Coklat.png",
    items: [
      { name: "Bolu Coklat", img: "images/Produk Bolu & Lapis Kukus/Bolu Coklat.png" },
      { name: "Bolu Red Velvet", img: "images/Produk Bolu & Lapis Kukus/Bolu Red Velvet.png" },
      { name: "Bolu Vanila", img: "images/Produk Bolu & Lapis Kukus/Bolu Vanila.png" },
      { name: "Banana Kukus", img: "images/Produk Bolu & Lapis Kukus/Banana Kukus.png" },
      { name: "Lapis Kukus Jamtelu", img: "images/Produk Bolu & Lapis Kukus/Lapis Kukus Jamtelu.png" },
      { name: "Lapis Kukus Pisang Bawen", img: "images/Produk Bolu & Lapis Kukus/Lapis Kukus Pisang Bawen.png" },
      { name: "Pandan Ketan", img: "images/Produk Bolu & Lapis Kukus/Pandan Ketan.png" },
    ],
  },

  // ─── 3. COOKIES & SNACK ──────────────────────────────────
  {
    category: "Cookies & Snack",
    emoji: "🍪",
    slideImg: "images/Cookies & Snack/Almond Crispy.png",
    items: [
      { name: "Almond Crispy", img: "images/Cookies & Snack/Almond Crispy.png" },
      { name: "Cookies Bites Original", img: "images/Cookies & Snack/Almond Crispy.png" },
      { name: "Puff Cookies", img: "images/Cookies & Snack/Almond Crispy.png" },
      { name: "Cookies Bites Chocolate", img: "images/Cookies & Snack/Banana Cookies Chocolate.png" },
      { name: "Cookies Bites Greentea", img: "images/Cookies & Snack/Banana Cookies Original.png" },
      { name: "Cookies Bites Red Velvet", img: "images/Cookies & Snack/Banana Cookies Cheese.png" },
      { name: "Cookies Bites Mix", img: "images/Cookies & Snack/Banana Cookies Brown Sugar.png" },
      { name: "Banana Cookies Original", img: "images/Cookies & Snack/Banana Cookies Original.png" },
      { name: "Banana Cookies Chocolate", img: "images/Cookies & Snack/Banana Cookies Chocolate.png" },
      { name: "Banana Cookies Cheese", img: "images/Cookies & Snack/Banana Cookies Cheese.png" },
      { name: "Banana Cookies Brown Sugar", img: "images/Cookies & Snack/Banana Cookies Brown Sugar.png" },
      { name: "Soft Cookies Original", img: "images/Cookies & Snack/Soft Cookies Original.png" },
      { name: "Soft Cookies Chocolate", img: "images/Cookies & Snack/Soft Cookies Chocolate.png" },
      { name: "Soft Cookies Red Velvet", img: "images/Cookies & Snack/Soft Cookies Red Velvet.png" },
      { name: "Soft Cookies Greentea", img: "images/Cookies & Snack/Soft Cookies Greentea.png" },
    ],
  },

  // ─── 4. KERIPIK & CAMILAN
  {
    category: "Keripik & Camilan",
    emoji: "🥨",
    slideImg: "images/Keripik & Camilan/Chili Bana.png",
    items: [
      { name: "Chili Bana", img: "images/Keripik & Camilan/Chili Bana.png" },
      { name: "Tempe Krezzz", img: "images/Keripik & Camilan/Tempe Krezzz.png" },
      { name: "Pisang Genit", img: "images/Keripik & Camilan/Pisang Genit.png" },
      { name: "Pillow Bite", img: "images/Keripik & Camilan/Pillow Bite.png" },
      { name: "Singkong Mentega", img: "images/Keripik & Camilan/Singkong Mentega.png" },
    ],
  },

  // ─── 5. PASTRY & PIE ─────────────────────────────────────
  {
    category: "Pastry & Pie",
    emoji: "🥧",
    slideImg: "images/Pastry & Pie/Bolen Lilit Coklat.png",
    items: [
      { name: "Bolen Lilit Coklat", img: "images/Pastry & Pie/Bolen Lilit Coklat.png" },
      { name: "Bolen Lilit Durian", img: "images/Pastry & Pie/Bolen Lilit Durian.png" },
      { name: "Bolen Lilit Mix", img: "images/Pastry & Pie/Bolen Lilit Mix.png" },
      { name: "Bolen Lilit Ubi", img: "images/Pastry & Pie/Bolen Lilit Ubi.png" },
      { name: "Crolen", img: "images/Pastry & Pie/Crolen.png" },
      { name: "Gulung Jadoel", img: "images/Pastry & Pie/Gulung Jadoel.png" },
      { name: "Lawu Floss Roll", img: "images/Pastry & Pie/Lawu Floss Roll.png" },
      { name: "Banana Healthy", img: "images/Pastry & Pie/Banana Healthy.png" },
      { name: "Strudel Pisang", img: "images/Pastry & Pie/Strudel Pisang.png" },
      { name: "Strudel Ubi", img: "images/Pastry & Pie/Strudel Ubi.png" },
      { name: "Banana Pillow", img: "images/Pastry & Pie/Banana Pillow.png" },
      { name: "Strudel Mix", img: "images/Pastry & Pie/Strudel Mix.png" },
      { name: "Pie Original", img: "images/Pastry & Pie/Pie Original.png" },
      { name: "Cheese Pie", img: "images/Pastry & Pie/Cheese Pie.png" },
      { name: "Chocolate Pie", img: "images/Pastry & Pie/Chocolate Pie.png" },
      { name: "Taro Pie", img: "images/Pastry & Pie/Taro Pie.png" },
      { name: "Pie Jambu", img: "images/Pastry & Pie/Pie Jambu.png" },
      { name: "Pie Ubi", img: "images/Pastry & Pie/Pie Ubi.png" },
    ],
  },
];

export const restoPackages = [
  {
    price: "Rp23.000",
    menus: [
      {
        name: "Menu A",
        items: [
          "Nasi",
          "Ayam Goreng",
          "Sayur Lodeh",
          "Bakwan Sayur",
          "Lalapan",
          "Sambal",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu B",
        items: [
          "Nasi",
          "Ayam Krispy",
          "Sop Merah",
          "Lalapan",
          "Tahu Isi",
          "Sambal",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu C",
        items: [
          "Nasi",
          "Soto Ayam Pecok",
          "Tempe Garit",
          "Perkedel",
          "Karak",
          "Sambal",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu D",
        items: [
          "Nasi",
          "Timlo Solo",
          "Tempe Garit",
          "Sosis",
          "Karak",
          "Sambal Kecap",
          "Buah",
          "Teh / Es Teh",
        ],
      },
    ],
  },
  {
    price: "Rp28.000",
    menus: [
      {
        name: "Menu A",
        items: [
          "Nasi",
          "Ayam Kribo 1/4",
          "Tahu & Tempe",
          "Urap",
          "Sayur Asam",
          "Sambal Kemangi",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu B",
        items: [
          "Nasi",
          "Ayam Bakar",
          "Urap",
          "Tempe Mendoan",
          "Sayur Asem",
          "Sambal Tomat",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu C",
        items: [
          "Nasi",
          "Rawon",
          "Telur Asin",
          "Tempe Goreng",
          "Kerupuk Udang",
          "Sambal",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu D",
        items: [
          "Nasi",
          "Opor Ayam",
          "Telur Opor",
          "Tempe Goreng",
          "Sambel Goreng Kentang",
          "Kerupuk",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
    ],
  },
  {
    price: "Rp33.000",
    menus: [
      {
        name: "Menu A",
        items: [
          "Nasi",
          "Nila Goreng / Bakar",
          "Dadar Jagung Panas",
          "Lalapan Sambal",
          "Sop Sayur",
          "Kerupuk",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu B",
        items: [
          "Nasi",
          "Ayam Bakar Asap 1/4",
          "Balado Telor",
          "Sayur Asem-asem",
          "Trancam",
          "Dadar Jagung",
          "Sambal Tomat",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu C",
        items: [
          "Nasi / Lontong",
          "Sate Ayam",
          "Bakso",
          "Dadar Jagung",
          "Sambal",
          "Kerupuk",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu D",
        items: [
          "Nasi Bakar",
          "Ayam Bakar",
          "Telur Asin 1/2",
          "Tempe Mendoan",
          "Kerupuk",
          "Sambal Bajak",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
    ],
  },
  {
    price: "Rp38.000",
    menus: [
      {
        name: "Menu A",
        items: [
          "Nasi",
          "Ikan Asam Manis",
          "Udang Tempura",
          "Sop Rolade",
          "Tempe Kemul",
          "Puding",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu B",
        items: [
          "Nasi",
          "Ayam Cabe Bawang",
          "Fuyung Hai",
          "Ca Sayur",
          "Pangsit Goreng",
          "Puding",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu C",
        items: [
          "Nasi",
          "Ayam Asap Bakar Kampung",
          "Tahu & Tempe",
          "Urap",
          "Sayur Bening",
          "Sambal Bakar",
          "Puding",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu D",
        items: [
          "Nasi",
          "Bebek Bakar Asap",
          "Tahu & Tempe",
          "Sambal Bakar",
          "Urap",
          "Sayur Bening",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
    ],
  },
  {
    price: "Rp54.000",
    menus: [
      {
        name: "Menu A",
        items: [
          "Nasi / Nasi Goreng",
          "Ayam Teriyaki",
          "Ikan Cabe Bawang",
          "Dadar Telor",
          "Bihun Ayam Jamur",
          "Sop Sayur",
          "Kerupuk",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu B",
        items: [
          "Nasi / Lontong",
          "Sate Ayam",
          "Garang Asem",
          "Telur Asin",
          "Tempe Kemul",
          "Kerupuk",
          "Puding",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu C",
        items: [
          "Nasi / Nasi Merah",
          "Empal Sapi",
          "Dadar Telor",
          "Pecelan + Bothok Sedep",
          "Sambel Tumpang Krecek",
          "Rempeyek",
          "Tempe Garit",
          "Puding",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
      {
        name: "Menu D",
        items: [
          "Nasi / Nasi Goreng",
          "Semur Daging",
          "Fuyung Hai",
          "Sop Jamur Baso",
          "Bihun Goreng Ayam",
          "Pangsit Goreng",
          "Kerupuk",
          "Puding",
          "Air Mineral",
          "Buah",
          "Teh / Es Teh",
        ],
      },
    ],
  },
];