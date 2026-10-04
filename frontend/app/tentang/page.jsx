import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Tentang — MAPIL",
  description:
    "Kisah brand MAPIL: dari studio kecil Bandung 2020 hingga rumah mode lokal 2026.",
};

const PILAR = [
  {
    no: "01",
    title: "Asal Mula",
    text: "MAPIL dimulai dari sebuah meja rancangan kecil di Bandung pada 2020 — tiga pengrajin, satu mesin jahit, dan keyakinan bahwa busana sehari-hari bisa bernilai tinggi.",
  },
  {
    no: "02",
    title: "Filosofi Kami",
    text: "Kami percaya pada pokok-pokok yang benar: siluet bersih, bahan jujur, dan jahitan yang bertahan. Sedikit, tetapi sangat baik.",
  },
  {
    no: "03",
    title: "Signature",
    text: "Potongan asimetris, lipatang turban, dan jahitan tepi tangan — elemen kecil yang menjadi bahasa visual MAPIL.",
  },
  {
    no: "04",
    title: "Kerajinan",
    text: "Setiap musim, workshop mitra kami di Cimahi dan Bandung menjahit dengan proses terverifikasi — waktu yang tepat, bukan kecepatan.",
  },
  {
    no: "05",
    title: "Arah Ke Depan",
    text: "Kami menargetkan 100% bahan daur ulang dan jejak karbon nol di seluruh rantai pasok pada 2030.",
  },
];

const MILESTONE = [
  { tahun: "2020", label: "Foundation" },
  { tahun: "2022", label: "First Retail" },
  { tahun: "2024", label: "Flagship" },
  { tahun: "2026", label: "Expansion" },
  { tahun: "2027", label: "Archipelago" },
];

const PELOPOR = [
  {
    nama: "Evelyn Vance",
    peran: "Direktur Kreatif — Paris Atelier",
    foto: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop",
  },
  {
    nama: "Dian Arisanti",
    peran: "Atelier Head — Jakarta",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    nama: "Matteo Rosetti",
    peran: "Master Tailor — Milan",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
];

export default function TentangPage() {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <Reveal>
            <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Kisah <span className="italic">di Balik</span> MAPIL.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-zinc-600">
              Menciptakan kemewahan yang sederhana dengan sedikit upaya.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700">
              Berakar dari jalanan Indonesia dan adat tenun yang halus, MAPIL
              menciptakan arkade generasi lintas yang memantulkan siklus kain
              pada setiap potongan pakaiannya.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop"
              alt="Atelier MAPIL"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-xs text-zinc-500">
              Autumn / W 2026 — Dibentuk di Atelier
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Pilar Manifestasi
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold">Anatomi Bentuk yang Penuh Kesadaran</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PILAR.map((p, i) => (
              <Reveal key={p.no} delay={(i % 3) * 0.1}>
                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6">
                  <p className="text-xs font-bold tracking-widest text-zinc-400">{p.no} / JENSEN</p>
                  <h3 className="mt-3 font-serif text-xl font-bold uppercase">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Kronologi Rumah Mode
        </p>
        <h2 className="mt-2 font-serif text-4xl font-bold">Tonggak 2020 – 2026</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {MILESTONE.map((m) => (
            <div key={m.tahun} className="rounded-2xl border border-zinc-200 bg-white p-5 text-center">
              <p className="font-serif text-2xl font-bold">{m.tahun}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Para Pelopor
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold">Direktur Kreatif & Master Tailor</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PELOPOR.map((p) => (
              <Reveal key={p.nama}>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.foto} alt={p.nama} className="aspect-[4/5] w-full rounded-2xl object-cover" />
                  <figcaption className="mt-4">
                    <p className="font-serif text-lg font-bold">{p.nama}</p>
                    <p className="text-xs uppercase tracking-widest text-zinc-500">{p.peran}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Horizon Saat Ini → Autumn / Winter 2026
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold">Rasakan Arsitektur Berpakaian</h2>
          <p className="mt-4 text-zinc-600">
            Saksikan puncak disiplin arsitektural kami selama setahun — tiga
            siluet terbatas, sutra bantuan, dan sentihan denim liar.
          </p>
          <Link
            href="/koleksi"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Jelajahi Koleksi Autumn / Winter 2026 <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
