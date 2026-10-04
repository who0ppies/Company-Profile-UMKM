# Git Store Backend — Mini-API Katalog Produk

Sumber data tunggal katalog produk UMKM Git Store (`product.json`), disajikan lewat Express.

## Endpoint

| Method | URL | Deskripsi |
|--------|-----|-----------|
| GET | `/health` | Cek status service |
| GET | `/api/products` | Daftar produk (query: `kategori`, `q`, `limit`) |
| GET | `/api/products/:id` | Detail satu produk |

## Cara menjalankan

```bash
cd backend
npm install
npm start
```

Service berjalan di `http://localhost:5000`.

Contoh: `http://localhost:5000/api/products?kategori=Kaos&limit=4`
