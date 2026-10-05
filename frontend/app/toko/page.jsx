import { MapPin, Clock, Phone } from "lucide-react";
import Reveal from "../../components/Reveal";
import ReservasiSalon from "../../components/ReservasiSalon";

export const metadata = {
  title: "Toko Kami — Git Store",
  description:
    "Kunjungi gerai offline Git Store di Jakarta, Bandung, dan Bali, atau reservasi private salon.",
};

const KANONIK = [
  { label: "Arsitektur", value: "Brutalist Zen" },
  { label: "Kurasi", value: "Hasta 6 Archive" },
  { label: "Salon", value: "Private Suites" },
  { label: "Concierge", value: "On · Demand" },
];

const GERAI = [
  {
    ref: "Archive Ref. 01 — GS-JKT",
    kota: "Jakarta",
    nama: "Capital Atelier",
    alamat: "SCBD Pacific Century Tower",
    jam: "Daily · 10:00 – 21:00 WIB",
    telepon: "+62 21 555 8890",
    foto: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900&auto=format&fit=crop",
  },
  {
    ref: "Archive Ref. 02 — GS-BDO",
    kota: "Bandung",
    nama: "Highland Salon",
    alamat: "Jl. Braga Heritage No. 94",
    jam: "Tue · Wed–Sun · 10:00 – 20:00 WIB",
    telepon: "+62 22 555 8890",
    foto: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop",
  },
  {
    ref: "Archive Ref. 03 — GS-DPS",
    kota: "Bali",
    nama: "Coastal Pavilion",
    alamat: "Jalan Sunu Bali Beach, Canggu",
    jam: "Daily · 10:00 – 22:00 WITA",
    telepon: "+62 21 555 8890",
    foto: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=900&auto=format&fit=crop",
  },
];

const LAYANAN_VIP = [
  {
    title: "Sesi Styling Private",
    text: "Akses 90 menit ke studio fitting kami. Pendamping stylist Git Store mendampingi pemilihan busana sesuai siluet dan kebutuhan.",
    note: "Complimentary with Reservation",
  },
  {
    title: "Alterasi & Tailoring",
    text: "Master penjahit kami menangani penyesuaian rumah secara in-house. Setiap layanan dirancang dan dijahit dengan presisi tangan.",
    note: "Express Hand Delivery Available",
  },
  {
    title: "Concierge Global",
    text: "Konsultasi virtual atau on-site bersama tim global kami — reservasi, rute private viewing, dan styling arsip.",
    note: "Direct Liaison Access",
  },
];

const KOTA_2027 = [
  { kota: "Singapura", sub: "Marina Bay · 250 m²", text: "Studio terbatas di tepi pantai, memadukan koleksi resort dengan layanan concierge penuh." },
  { kota: "Tokyo", sub: "Ginza · Minato-ku", text: "Bangunan bergaya minimalis-arsitektural — siluet arsip yang dirancang bersama pengrajin master Jepang." },
  { kota: "Seoul", sub: "Cheongdam-dong · Gangnam", text: "Studio pameran tersembunyi yang menggabungkan arsip dengan kolaborasi desainer lokal." },
];

export default function TokoPage() {
  return (
    <main>
      <section className="mx-auto w-full max-w-6xl px-4 pt-16 pb-12 sm:px-6">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <h1 className="font-serif text-4xl font-bold sm:text-5xl">
                Kunjungi <span className="italic">Git Store</span>
              </h1>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-yellow-400">
                Butik flagship kami adalah semacam sanctuary.
              </p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Dirancang dengan arsitek minimalis, koleksi kami ditampilkan
              dalam ruang intim yang memadukan arsip dengan apresiasi mode.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {KANONIK.map((k) => (
            <div key={k.label} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 text-center">
              <p className="text-[11px] uppercase tracking-widest text-zinc-500 dark:text-yellow-400">{k.label}</p>
              <p className="mt-1 text-sm font-semibold">{k.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        {GERAI.map((g, i) => (
          <Reveal key={g.nama} delay={i * 0.08}>
            <article className="mb-5 grid items-center gap-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{g.ref}</p>
                <h2 className="mt-2 font-serif text-3xl font-bold">
                  {g.kota} <span className="italic">{g.nama}</span>
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-center gap-2.5"><MapPin size={15} className="text-zinc-400 dark:text-zinc-500" /> {g.alamat}</li>
                  <li className="flex items-center gap-2.5"><Clock size={15} className="text-zinc-400 dark:text-zinc-500" /> {g.jam}</li>
                  <li className="flex items-center gap-2.5"><Phone size={15} className="text-zinc-400 dark:text-zinc-500" /> {g.telepon}</li>
                </ul>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.foto} alt={g.nama} className="h-56 w-full rounded-xl object-cover" />
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <Reveal>
          <ReservasiSalon />
        </Reveal>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-900 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-yellow-400">Layanan Concierge Eksklusif</p>
              <h2 className="mt-2 font-serif text-4xl font-bold">Layanan Pelanggan VIP</h2>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Setiap kunjungan bisa diperpanjang menjadi bespoke ritual. Dari penjahit hingga salt-together, layanan kurasi prioritas tersedia.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {LAYANAN_VIP.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest">{l.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{l.text}</p>
                  <p className="mt-4 text-xs font-semibold tracking-wide text-zinc-900 dark:text-zinc-50">→ {l.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 pb-28 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-yellow-400">Jejak Global</p>
            <h2 className="mt-2 font-serif text-4xl font-bold">Segera Datang — 2027</h2>
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-yellow-400">Ekspansi Internasional</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {KOTA_2027.map((k, i) => (
            <Reveal key={k.kota} delay={i * 0.1}>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
                <h3 className="font-serif text-xl font-bold uppercase">{k.kota}</h3>
                <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-yellow-400">{k.sub}</p>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{k.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
