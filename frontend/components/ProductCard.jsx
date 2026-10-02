"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { formatRupiah } from "../lib/format";

const FALLBACK_IMAGE = "/images/placeholder.svg";

export default function ProductCard({ product, index = 0 }) {
  const [src, setSrc] = useState(product.gambar);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-xl hover:shadow-zinc-900/10"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
        <Image
          src={src}
          alt={product.nama}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setSrc(FALLBACK_IMAGE)}
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
          {product.kategori}
        </p>
        <h3 className="mt-1 line-clamp-1 text-sm font-bold sm:text-base">
          {product.nama}
        </h3>
        <div className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
          <Star size={13} className="fill-zinc-900 text-zinc-900" />
          <span className="font-semibold text-zinc-900">
            {product.rating.toFixed(1)}
          </span>
          <span>· {product.terjual.toLocaleString("id-ID")}+ terjual</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <p className="text-base font-bold sm:text-lg">
            {formatRupiah(product.harga)}
          </p>
          {product.hargaCoret && (
            <p className="text-xs text-zinc-400 line-through">
              {formatRupiah(product.hargaCoret)}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
