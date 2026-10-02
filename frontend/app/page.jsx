import Link from "next/link";
import { ArrowRight, Ruler, Truck, RefreshCcw } from "lucide-react";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import SectionHeading from "../components/SectionHeading";

const KEUNGGULAN = [
  {
    icon: Ruler,
    title: "Panduan Ukuran Jelas",
    text: "Tabel ukuran standar Indonesia di setiap produk agar tidak salah pilih.",
  },
  {
    icon: Truck,
    title: "Kirim ke Seluruh Indonesia",
    text: "Pesanan dikirim H+1 dari Bandung dengan kemasan aman dan rapi.",
  },
  {
    icon: RefreshCcw,
    title: "Mudah Tukar Ukuran",
    text: "Salah ukuran? Tukar dalam 7 hari tanpa drama, ongkir ringan.",
  },
];

export default function HomePage() {
  return (
    <main className="w-full">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-20 text-center sm:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            MAPIL — Brand Fashion Lokal
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Bangga Buatan Lokal, Tampil Maksimal
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600">
            Pakaian dan fashion harian dari pengrajin lokal — bahan
            berkualitas, jahitan rapi, dan harga yang jujur.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link
            href="/koleksi"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition-transform hover:scale-105"
          >
            Jelajahi Koleksi
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <Marquee />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Kenapa MAPIL"
          title="Belanja Tenang, Kualitas Terjaga"
          description="Tiga komitmen kami untuk setiap pelanggan di seluruh Indonesia."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {KEUNGGULAN.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-zinc-900/10">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-white">
                  <item.icon size={20} />
                </span>
                <h3 className="mt-4 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
