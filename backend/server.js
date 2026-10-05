const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

function loadCatalog() {
  const filePath = path.join(__dirname, "product.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const catalog = JSON.parse(raw);
  if (!Array.isArray(catalog.products)) {
    throw new Error("product.json tidak valid: products harus array.");
  }
  return catalog;
}

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "git-store-backend" });
});

app.get("/api/products", (req, res) => {
  let catalog;
  try {
    catalog = loadCatalog();
  } catch (err) {
    return res.status(500).json({ message: "Gagal memuat katalog produk." });
  }
  const { kategori, q, limit } = req.query;
  let products = catalog.products;

  if (kategori && kategori !== "Semua") {
    products = products.filter((p) => p.kategori === kategori);
  }

  if (q) {
    const keyword = String(q).toLowerCase();
    products = products.filter(
      (p) =>
        String(p.nama || "").toLowerCase().includes(keyword) ||
        String(p.deskripsi || "").toLowerCase().includes(keyword) ||
        String(p.kategori || "").toLowerCase().includes(keyword)
    );
  }

  if (limit) {
    const n = Number(limit);
    if (Number.isFinite(n) && n >= 0) {
      products = products.slice(0, Math.floor(n));
    }
  }

  res.json({
    brand: catalog.brand,
    currency: catalog.currency,
    total: products.length,
    data: products,
  });
});

app.get("/api/products/:id", (req, res) => {
  let catalog;
  try {
    catalog = loadCatalog();
  } catch (err) {
    return res.status(500).json({ message: "Gagal memuat katalog produk." });
  }
  const product = catalog.products.find((p) => p.id === req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Produk tidak ditemukan." });
  }

  res.json({ data: product });
});

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint tidak ditemukan." });
});

app.listen(PORT, () => {
  console.log(`git-store-backend berjalan di http://localhost:${PORT}`);
});
