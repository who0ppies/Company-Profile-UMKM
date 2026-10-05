"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ProdukUnggulan({ limit = 3 }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/api/products?limit=${limit}`)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat produk");
        return res.json();
      })
      .then((json) => {
        if (active) setProducts(json.data || []);
      })
      .catch((err) => {
        if (active) setError(err.message);
      });
    return () => {
      active = false;
    };
  }, [limit]);

  if (error) {
    return (
      <p className="text-sm text-red-600">
        Katalog belum dapat dimuat. Pastikan backend berjalan di{" "}
        {API_URL}.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.length === 0 &&
        [0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-72 animate-pulse rounded-2xl bg-zinc-100 dark:bg-zinc-800"
          />
        ))}
      {products.map((p) => (
        <article key={p.id} className="group">
          <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.gambar}
              alt={p.nama}
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="mt-4 font-bold">{p.nama}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
            {p.deskripsi}
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Rp {(Number(p.harga) || 0).toLocaleString("id-ID")}
          </p>
        </article>
      ))}
    </div>
  );
}
