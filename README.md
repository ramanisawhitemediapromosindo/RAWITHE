# Ramanisa White — Premium LRT Advertising Marketplace V3

Base website tetap memakai visual **navy + champagne gold + liquid glass**. V3 menambahkan sistem penjualan marketplace dari referensi `RAMANISA_WHITE_UI_V2_FINAL` tanpa membuang desain premium versi awal.

## Fitur V3
- 24 media/placement: static station placements + pillar + naming rights + station + parapet + skybridge + train media.
- Harga referensi sesuai data rate-card yang ada; placement tanpa harga tetap **Request Rate**.
- 12 paket campaign lengkap dengan harga dan inclusion.
- Search + filter kategori + stasiun + budget + durasi + sorting.
- Favorites (LocalStorage).
- Media Plan/cart dengan quantity, durasi, subtotal, dan estimasi total.
- Rule pricing: rate paket 1/6/12 bulan memakai nilai rate-card; train media memakai monthly rate dengan minimum campaign 3 bulan.
- Compare maksimal 3 media.
- Campaign Recommender berbasis rules (budget + objective + durasi), bukan AI generatif.
- 13 stasiun LRT + panel inventory per stasiun.
- Audience/traffic dashboard.
- WhatsApp Marketing otomatis: **0831 4329 4993**.
- Request Proposal + brief WhatsApp otomatis.
- Email composer + field email client.
- Visual proof / lightbox marketing material.
- Responsive desktop/mobile.

## Email resmi
Email marketing resmi **tidak tercantum pada file sumber yang diberikan**, jadi sengaja tidak dibuat-buat. Website tetap punya fitur email composer. Kalau email resmi sudah ada, buka `app.js` lalu isi:

```js
const CONFIG = {
  company: "Ramanisa White Media Promosindo",
  whatsapp: "6283143294993",
  whatsappDisplay: "0831 4329 4993",
  email: "email-resmi@domain.com"
};
```

Semua tombol email otomatis akan menggunakan alamat tersebut.

## Menjalankan
Website statis, tanpa build step.

1. Extract ZIP.
2. Upload `index.html`, `styles.css`, `app.js`, dan folder `assets/` ke hosting.
3. Pastikan semua file berada pada struktur folder yang sama.

## Catatan komersial
Harga pada website adalah referensi dari data yang dipakai untuk pengembangan katalog. Availability, lokasi final, spesifikasi, produksi, pemasangan, pelepasan, pajak, masa berlaku harga, dan commercial terms wajib dikonfirmasi kembali dengan tim marketing Ramanisa White.
