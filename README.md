# MAPIL — Company Profile UMKM (Proyek D)

Landing page + katalog produk brand fashion lokal **MAPIL** oleh startup
**KodeKita Studio**. Dibangun sebagai simulasi tim pengembang perangkat
lunak (RPL Kelas XI) dengan Git workflow ala industri: `main` ← `develop`
← `feature/*` / `fix/*`, commit konvensional, dan Pull Request + review.

## Struktur Repository

```
Company-Profile-UMKM/
├── frontend/            # Next.js 14 (App Router, .jsx) + Tailwind + Framer Motion
│   ├── app/             # Beranda, koleksi, tentang, toko, kontak + API /api/products
│   ├── components/      # Navbar, Hero, ProductCard, Footer, Marquee, Reveal, ...
│   └── data/product.json# Mirror katalog untuk API frontend
├── backend/             # Express mini-API + product.json (sumber data kanonis)
└── README.md
```

Halaman: **Beranda** (`/`), **Koleksi** (`/koleksi`), **Tentang**
(`/tentang`), **Toko** (`/toko`), **Kontak** (`/kontak`).

## Anggota Tim

| Nama | Username GitHub | Peran |
|------|-----------------|-------|
| Fadiyah | `who0ppies` | Project Manager / Team Lead |
| Willdan | `willdannaltairr` | Front-End Developer |
| Habibi | `HabibiGanteng9` | Back-End Developer |
| Reyza | `zaa657` | UI/UX & Dokumentasi |
| Zakky| `zakky-cloud` | QA / Tester |

> PM melengkapi nama di atas. Lihat riwayat commit tiap akun sebagai bukti
> kontribusi individu.

## Cara Menjalankan

Butuh Node.js 18+ dan npm.

**Backend (port 5000):**

```bash
cd backend
npm install
npm start
```

Cek: `http://localhost:5000/api/products`

**Frontend (port 3000):**

```bash
cd frontend
npm install
npm run dev
```

Buka `http://localhost:3000`. Build produksi: `npm run build`.

## Screenshot

> Tim UI/UX menaruh tangkapan layar di `docs/screenshots/` lalu menautkannya
> di sini sebelum presentasi.

- Beranda: `docs/screenshots/beranda.png`
- Koleksi: `docs/screenshots/koleksi.png`
- Tentang: `docs/screenshots/tentang.png`

## Daftar Tugas Tim

Dikelola PM. Status: `To Do` → `In Progress` → `Review` → `Done`.

| No | Tugas | PIC | Status | Issue |
|----|-------|-----|--------|-------|
| 1 | Scaffold frontend + backend + product.json | FE | Done | - |
| 2 | Navbar + halaman utama (hero) | FE | Review | PR #1 |
| 3 | Katalog produk (filter/search/sortir) | FE | Review | PR #2 |
| 4 | Halaman tentang | FE | Review | PR #3 |
| 5 | Halaman toko + kontak + footer | FE | Review | PR #4 |
| 6 | Animasi interaksi (Reveal/marquee) | FE | Review | PR #5 |
| 7 | Bug: panel menu mobile tidak bisa di-scroll | FE | Review | #6 / PR #7 |
| 8 | README + dokumentasi | FE | Review | PR #8 |
| 9 | Membuat design UI/UX | UI/UX | Done | - |
| 10 | Membuat data API Product | BE | Done | PR #11 |


## API Katalog

Sumber kanonis: `backend/product.json` (12 produk fashion UMKM).

| Method | URL | Query |
|--------|-----|-------|
| GET | `/api/products` (backend `:5000`, frontend `/api/products`) | `kategori`, `q`, `limit` |
| GET | `/api/products/:id` (backend) | - |
| GET | `/health` (backend) | - |

## Aturan Kolaborasi Git (ringkas)

- `main` stabil (hanya PM yang merge) ← `develop` ← `feature/*` / `fix/*`.
- Satu tugas = satu branch dari `develop` yang terbaru:
  `git checkout develop && git pull && git checkout -b feature/nama-fitur`.
- Commit konvensional (`feat:`, `fix:`, `style:`, `docs:`, `refactor:`),
  minimal 3 commit per fitur. Dilarang: `update`, `asdf`, `revisi lagi`.
- Push branch lalu buat PR ke `develop`; minimal 1 review sebelum merge.
- Dilarang push langsung ke `main`.
