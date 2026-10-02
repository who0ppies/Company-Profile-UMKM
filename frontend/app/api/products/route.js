import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

async function loadCatalog() {
  const filePath = path.join(process.cwd(), "data", "product.json");
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const kategori = searchParams.get("kategori");
    const q = searchParams.get("q");
    const limit = Number(searchParams.get("limit") || 0);

    const catalog = await loadCatalog();
    let products = catalog.products;

    if (kategori && kategori !== "Semua") {
      products = products.filter((p) => p.kategori === kategori);
    }

    if (q) {
      const keyword = q.toLowerCase();
      products = products.filter(
        (p) =>
          p.nama.toLowerCase().includes(keyword) ||
          p.deskripsi.toLowerCase().includes(keyword) ||
          p.kategori.toLowerCase().includes(keyword)
      );
    }

    if (limit > 0) {
      products = products.slice(0, limit);
    }

    return NextResponse.json({
      brand: catalog.brand,
      currency: catalog.currency,
      total: products.length,
      data: products,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal memuat katalog produk.", error: String(error) },
      { status: 500 }
    );
  }
}
