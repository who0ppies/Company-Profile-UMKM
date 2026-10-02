"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal, PackageSearch } from "lucide-react";
import ProductCard from "./ProductCard";

const KATEGORI = [
  "Semua",
  "Kemeja",
  "Kaos",
  "Hoodie & Jaket",
  "Bawahan",
  "Dress",
  "Aksesoris",
];

const SORT_OPTIONS = [
  { value: "populer", label: "Paling Populer" },
  { value: "termurah", label: "Harga Termurah" },
  { value: "termahal", label: "Harga Termahal" },
  { value: "rating", label: "Rating Tertinggi" },
];

export default function KoleksiClient() {
  const [products, setProducts] = useState([]);
  const [kategori, setKategori] = useState("Semua");
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState("populer");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchProducts() {
      setLoading(true);
      setError("");
      try {
        const params = new URLSearchParams();
        if (kategori !== "Semua") params.set("kategori", kategori);
        if (keyword.trim()) params.set("q", keyword.trim());

        const res = await fetch(`/api/products?${params.toString()}`);
        if (!res.ok) throw new Error("Gagal memuat data");
        const json = await res.json();
        if (!cancelled) setProducts(json.data || []);
      } catch (err) {
        if (!cancelled) {
          setError("Katalog tidak dapat dimuat. Coba lagi nanti.");
          setProducts([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    const timer = setTimeout(fetchProducts, 300);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [kategori, keyword]);

  const sorted = useMemo(() => {
    const list = [...products];
    switch (sort) {
      case "termurah":
        return list.sort((a, b) => a.harga - b.harga);
      case "termahal":
        return list.sort((a, b) => b.harga - a.harga);
      case "rating":
        return list.sort((a, b) => b.rating - a.rating);
      default:
        return list.sort((a, b) => b.terjual - a.terjual);
    }
  }, [products, sort]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            type="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Cari kemeja, kaos, hoodie..."
            className="w-full rounded-full border border-zinc-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900"
          />
        </label>
        <label className="relative inline-flex items-center gap-2">
          <SlidersHorizontal
            size={16}
            className="pointer-events-none absolute left-4 text-zinc-400"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full appearance-none rounded-full border border-zinc-200 bg-white py-3 pl-11 pr-8 text-sm font-medium outline-none focus:border-zinc-900 sm:w-auto"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {KATEGORI.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setKategori(item)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              kategori === item
                ? "bg-zinc-900 text-white"
                : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-900 hover:text-zinc-900"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-zinc-500">
        Menampilkan{" "}
        <span className="font-semibold text-zinc-900">{sorted.length}</span>{" "}
        produk
        {kategori !== "Semua" && (
          <>
            {" "}
            kategori <span className="font-semibold">{kategori}</span>
          </>
        )}
      </p>

      {loading ? (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse overflow-hidden rounded-2xl border border-zinc-200"
            >
              <div className="aspect-[4/5] bg-zinc-100" />
              <div className="space-y-2 p-4">
                <div className="h-3 w-2/3 rounded bg-zinc-100" />
                <div className="h-4 w-full rounded bg-zinc-100" />
                <div className="h-4 w-1/2 rounded bg-zinc-100" />
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-10 text-center text-sm text-zinc-600">
          {error}
        </div>
      ) : sorted.length === 0 ? (
        <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-zinc-300 p-12 text-center">
          <PackageSearch size={40} className="text-zinc-300" />
          <p className="mt-3 font-semibold">Produk tidak ditemukan</p>
          <p className="mt-1 text-sm text-zinc-500">
            Coba kata kunci atau kategori lain.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {sorted.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
