"use client";

import { useEffect, useState } from "react";
import Reveal from "../../components/Reveal";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const KATEGORI = ["Semua", "Kemeja", "Kaos", "Hoodie & Jaket", "Bawahan", "Dress", "Aksesoris"];

export default function KoleksiPage() {
  const [products, setProducts] = useState([]);
  const [kategori, setKategori] = useState("Semua");
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedQ(q.trim()), 400);
    return () => clearTimeout(t);
  }, [q]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    const params = new URLSearchParams();
    if (kategori !== "Semua") params.set("kategori", kategori);
    if (debouncedQ) params.set("q", debouncedQ);
    fetch(`${API_URL}/api/products?${params.toString()}`)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat katalog");
        return res.json();
      })
      .then((json) => {
        if (active) {
          setProducts(json.data || []);
          setError(null);
        }
      })
      .catch((err) => {
        if (active) setError(err.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [kategori, debouncedQ]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-12 sm:px-6">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-yellow-400">
          Studi pada ketepatan potongan
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
          Koleksi
        </h1>
        <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          Rangkaian daily ritual yang berstruktur — presisi tailoring, draping
          pakaian yang tenang, dan bentuk yang mudah dikenakan.
        </p>
      </Reveal>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {KATEGORI.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setKategori(k)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                kategori === k
                  ? "border-zinc-900 bg-zinc-900 dark:bg-yellow-400 text-white dark:text-zinc-950"
                  : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-900"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari produk…"
          className="w-full rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-yellow-400 sm:w-64"
        />
      </div>

      {error && (
        <p className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}. Pastikan backend berjalan di {API_URL}.
        </p>
      )}

      <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-2">
        {loading
          ? [0, 1, 2, 3].map((i) => (
              <div key={i} className="mb-6 h-80 break-inside-avoid animate-pulse rounded-2xl bg-zinc-100 dark:bg-zinc-800" />
            ))
          : products.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 0.05}>
                <article className="group mb-6 break-inside-avoid">
                  <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.gambar}
                      alt={p.nama}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-lg font-bold uppercase tracking-wide">{p.nama}</h3>
                    <p className="text-sm font-semibold">Rp {(Number(p.harga) || 0).toLocaleString("id-ID")}</p>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{p.deskripsi}</p>
                </article>
              </Reveal>
            ))}
      </div>

      {!loading && !error && products.length === 0 && (
        <div className="mt-10 flex flex-col items-center gap-3 text-sm text-zinc-500 dark:text-yellow-400">
          <p>Tidak ada produk yang cocok. Coba kata kunci lain.</p>
          <button
            type="button"
            onClick={() => {
              setKategori("Semua");
              setQ("");
            }}
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2 font-semibold text-zinc-700 dark:text-zinc-300 transition-colors hover:border-zinc-900 hover:text-zinc-900 dark:text-zinc-50"
          >
            Reset Filter
          </button>
        </div>
      )}
    </main>
  );
}
