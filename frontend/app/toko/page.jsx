import { MapPin, Clock, Phone } from "lucide-react";

export const metadata = {
  title: "Toko Kami — MAPIL",
  description:
    "Kunjungi gerai offline MAPIL di Bandung, Yogyakarta, dan Surabaya.",
};

const STORES = [
  {
    kota: "Bandung",
    nama: "MAPIL Flagship — Bandung",
    alamat: "Jl. Pengrajin No. 12, Bandung, Jawa Barat",
    jam: "Senin–Sabtu, 10.00–21.00 WIB",
    telepon: "+62 812-3456-7890",
  },
  {
    kota: "Yogyakarta",
    nama: "MAPIL Store — Yogyakarta",
    alamat: "Jl. Malioboro No. 88, Yogyakarta, DIY",
    jam: "Setiap Hari, 10.00–22.00 WIB",
    telepon: "+62 813-2345-6789",
  },
  {
    kota: "Surabaya",
    nama: "MAPIL Store — Surabaya",
    alamat: "Jl. Tunjungan No. 45, Surabaya, Jawa Timur",
    jam: "Senin–Sabtu, 10.00–21.00 WIB",
    telepon: "+62 821-4567-8901",
  },
];

export default function TokoPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
        Gerai Offline
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Kunjungi Toko Kami
      </h1>
      <p className="mt-3 max-w-2xl text-zinc-600">
        Rasakan langsung bahan dan jahitan produk MAPIL di gerai terdekat.
        Tim kami siap membantu menemukan ukuran yang pas.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {STORES.map((store) => (
          <article
            key={store.nama}
            className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-zinc-900/10"
          >
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
              <MapPin size={12} />
              {store.kota}
            </span>
            <h2 className="mt-4 text-lg font-bold">{store.nama}</h2>
            <ul className="mt-4 flex-1 space-y-3 text-sm text-zinc-600">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-zinc-400" />
                {store.alamat}
              </li>
              <li className="flex gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-zinc-400" />
                {store.jam}
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-zinc-400" />
                {store.telepon}
              </li>
            </ul>
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(
                store.alamat
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 rounded-full border border-zinc-300 px-5 py-2.5 text-center text-sm font-semibold transition-colors hover:border-zinc-900"
            >
              Lihat di Peta
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
