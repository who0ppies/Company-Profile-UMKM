# Company Profile UMKM — Git Store

Website company profile UMKM brand fashion lokal **Git Store**, dibangun oleh Kelompok 7 XI RPL 2.

## Struktur Repository

```
backend/   → API Express (product.json — katalog produk fashion/baju)
frontend/  → Next.js (App Router, JSX, Tailwind CSS)
```

## Menjalankan Proyek

Backend (API katalog, port 5000):

```bash
cd backend
npm install
node server.js
```

Frontend (port 3000):

```bash
cd frontend
npm install
npm run dev
```

Buka http://localhost:3000. Variabel `NEXT_PUBLIC_API_URL` (opsional) mengatur alamat API — default `http://localhost:5000`.

## Alur Kolaborasi Tim

- `main` → rilis stabil (merge hanya dari PM)
- `develop` → branch pengembangan utama
- `feature/*` → satu branch per fitur, PR ke `develop` dengan minimal 1 review
- Pesan commit memakai Conventional Commits: `feat:`, `fix:`, `style:`, `docs:`, `refactor:`, `perf:`

## Anggota Tim & Peran

| Nama | Peran |
|------|-------|
| Fadiyah Syafiqah | Project Manager |
| Wildan Daffi Altair Darmawan | Front-End Developer |
| Riza Habibi | Back-End Developer |
| Reyza Aryo Attala | UI/UX & Dokumentasi |
| Zakky Revandi | QA/Tester |

## Halaman

- `/` — Beranda (hero, manifesto, kapsul produk, prinsip brand, gerai, CTA)
- `/tentang` — Cerita brand, pilar, tonggak 2020–2026, pelopor
- `/koleksi` — Katalog produk dari API backend (filter kategori + pencarian)
- `/toko` — Gerai, layanan VIP, formulir reservasi, ekspansi 2027
- `/kontak` — Formulir kontak + FAQ
