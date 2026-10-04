import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import ProdukUnggulan from "../components/ProdukUnggulan";

const PRINSIP = [
  {
    no: "01",
    title: "Desain Abadi",
    text: "Setiap potongan MAPIL dirancang untuk bertahan lebih lama dari tren musiman, dengan siluet yang bersih dan proporsi yang tenang.",
  },
  {
    no: "02",
    title: "Dibuat dengan Nyata",
    text: "Dari workshop pengrajin di Bandung hingga jahitan tangan, setiap produk lahir dari proses kerajinan yang terukur.",
  },
  {
    no: "03",
    title: "Keyakinan Tanpa Usaha",
    text: "Potongan berat, kain premium, dan potongan bersih — kepercayaan diri yang hadir tanpa perlu dijelaskan.",
  },
];

const ETIKA = [
  { value: "85%", label: "Bahan Tersertifikasi", text: "Dari pemasok lokal yang terverifikasi dan bersertifikat etis." },
  { value: "70%", label: "Kemasan Daur Ulang", text: "Pesanan dikirim dengan kemasan daur ulang H+1 dari Bandung." },
  { value: "100%", label: "Kualitas Terjaga", text: "Setiap jahitan diperiksa satu per satu sebelum dikirim." },
];

const GERAI = [
  { nama: "Jakarta", sub: "Capital Atelier", alamat: "SCBD Pacific Century Tower" },
  { nama: "Bandung", sub: "Highland Salon", alamat: "Jl. Braga Heritage No. 94" },
  { nama: "Bali", sub: "Coastal Pavilion", alamat: "Jl. Sunu Bali Beach, Canggu" },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-[80vh] items-center bg-zinc-100 dark:bg-zinc-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop"
          alt="Koleksi fashion MAPIL"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 dark:bg-black/60" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-600 dark:text-zinc-400">
              Seri Musim — Autumn / Winter 2026
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-2xl font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Dirancang untuk Keseharianmu yang Paling Berkesan.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-zinc-700 dark:text-zinc-300">
              MAPIL adalah rumah baju dan fashion lokal kontemporer — bahan
              pilihan, jahitan pengrajin, dan desain yang tenang namun tegas.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/koleksi"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-yellow-400 px-7 py-3.5 text-sm font-semibold text-white dark:text-zinc-950 transition-transform hover:scale-105"
              >
                Jelajahi Koleksi <ArrowRight size={16} />
              </Link>
              <Link href="/tentang" className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 underline-offset-4 hover:underline">
                Kisah MAPIL
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      <section className="mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <p className="font-serif text-2xl leading-relaxed sm:text-3xl">
            “Kami percaya gaya bukan soal mengikuti tren. Gaya adalah tentang
            menemukan siapa dirimu yang sesungguhnya.”
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            MAPIL adalah rumah baju kontemporer buatan lokal yang memadukan
            busana sehari-hari yang halus dengan riak fesyen musiman — permanen
            dalam bentuk, sementara dalam tren.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-yellow-400">
              Edisi Kapsul
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold">Autumn / Winter 2026</h2>
          </div>
          <Link href="/koleksi" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 underline-offset-4 hover:underline">
            Lihat Semua →
          </Link>
        </div>
        <div className="mt-8">
          <ProdukUnggulan limit={3} />
        </div>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-900 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-yellow-400">
                Komitmen Kami
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold">Lebih Sedikit, Namun Lebih Baik.</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                MAPIL dirancang untuk kesederhanaan yang tenang. Setiap potongan
                ditelaah, setiap kategori dikurasi, apa pun yang tidak bawa
                nilai nyata ditiadakan.
              </p>
            </Reveal>
            <div className="space-y-4">
              {PRINSIP.map((p, i) => (
                <Reveal key={p.no} delay={i * 0.1}>
                  <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
                    <p className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500">{p.no} / {p.title.toUpperCase()}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-yellow-400">
          Jejak Etis
        </p>
        <h2 className="mt-2 font-serif text-4xl font-bold">Mode dengan Masa Depan</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {ETIKA.map((e, i) => (
            <Reveal key={e.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
                <p className="font-serif text-4xl font-bold">{e.value}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-yellow-400">{e.label}</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-900 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-yellow-400">
            Gerai Kami
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold">Kunjungi MAPIL</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {GERAI.map((g, i) => (
              <Reveal key={g.nama} delay={i * 0.1}>
                <Link href="/toko" className="block overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-shadow hover:shadow-xl">
                  <div className="flex h-40 items-center justify-center bg-zinc-100 dark:bg-zinc-800">
                    <MapPin size={28} className="text-zinc-400 dark:text-zinc-500" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-yellow-400">{g.sub}</p>
                    <h3 className="mt-1 font-serif text-xl font-bold">{g.nama}</h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{g.alamat}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-yellow-400">
            Layanan Personal
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Mari Menciptakan Sesuatu yang Abadi.</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Pesan komisi personal atau konsultasi gaya bersama kami — konsultan
            kami siap mendengar.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link
            href="/kontak"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-yellow-400 px-8 py-4 text-sm font-semibold text-white dark:text-zinc-950 transition-transform hover:scale-105"
          >
            Hubungi Kami <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
