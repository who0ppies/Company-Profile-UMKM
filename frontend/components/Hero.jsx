"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, BadgeCheck } from "lucide-react";

const STATS = [
  { value: "12+", label: "Produk Lokal" },
  { value: "8Rb+", label: "Pelanggan Puas" },
  { value: "4.8", label: "Rating Toko" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-zinc-100 blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:pt-20">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-600"
          >
            <BadgeCheck size={14} />
            UMKM Fashion Indonesia
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Bangga Buatan Lokal, Tampil{" "}
            <span className="relative inline-block">
              Maksimal
              <span className="absolute inset-x-0 -bottom-1 h-2 rounded bg-zinc-900/10" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-5 max-w-lg text-base leading-relaxed text-zinc-600 sm:text-lg"
          >
            MAPIL menghadirkan pakaian dan fashion harian dari pengrajin
            lokal — bahan berkualitas, jahitan rapi, dan harga yang jujur.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/koleksi"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition-transform hover:scale-105"
            >
              Lihat Koleksi
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-7 py-3.5 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-900"
            >
              Cerita Brand
            </Link>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-zinc-100 pt-6"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-zinc-100 shadow-2xl shadow-zinc-900/10">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
              alt="Koleksi fashion lokal MAPIL di toko"
              width={1000}
              height={1200}
              className="h-[420px] w-full object-cover sm:h-[520px]"
              priority
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-8 flex items-center gap-2 rounded-2xl border border-zinc-100 bg-white/95 px-4 py-3 shadow-lg sm:-left-6"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white">
              <Star size={16} />
            </span>
            <div>
              <p className="text-sm font-bold">4.8/5.0</p>
              <p className="text-xs text-zinc-500">2.300+ ulasan</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -right-3 bottom-8 flex items-center gap-2 rounded-2xl border border-zinc-100 bg-white/95 px-4 py-3 shadow-lg sm:-right-6"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white">
              <Truck size={16} />
            </span>
            <div>
              <p className="text-sm font-bold">Kirim Nasional</p>
              <p className="text-xs text-zinc-500">Seluruh Indonesia</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
