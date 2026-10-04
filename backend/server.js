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
  return JSON.parse(raw);
}

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "git-store-backend" });
});

app.get("/api/products", (req, res) => {
  const { kategori, q, limit } = req.query;
  const catalog = loadCatalog();
  let products = catalog.products;

  if (kategori && kategori !== "Semua") {
    products = products.filter((p) => p.kategori === kategori);
  }

  if (q) {
    const keyword = String(q).toLowerCase();
    products = products.filter(
      (p) =>
        p.nama.toLowerCase().includes(keyword) ||
        p.deskripsi.toLowerCase().includes(keyword) ||
        p.kategori.toLowerCase().includes(keyword)
    );
  }

  if (limit) {
    products = products.slice(0, Number(limit));
  }

  res.json({
    brand: catalog.brand,
    currency: catalog.currency,
    total: products.length,
    data: products,
  });
});

app.get("/api/products/:id", (req, res) => {
  const catalog = loadCatalog();
  const product = catalog.products.find((p) => p.id === req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Produk tidak ditemukan." });
  }

  res.json({ data: product });
});

app.listen(PORT, () => {
  console.log(`git-store-backend berjalan di http://localhost:${PORT}`);
});
