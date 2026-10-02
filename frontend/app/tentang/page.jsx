import Image from "next/image";

export const metadata = {
  title: "Tentang Kami — MAPIL",
  description:
    "Cerita brand fashion lokal MAPIL: dari pengrajin lokal untuk Indonesia.",
};

const STATS = [
  { value: "2019", label: "Berdiri Sejak" },
  { value: "25+", label: "Pengrajin Mitra" },
  { value: "8Rb+", label: "Pelanggan" },
  { value: "34", label: "Provinsi Terjangkau" },
];

export default function TentangPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
        Tentang Kami
      </p>
      <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        Dari Tangan Pengrajin Lokal, untuk Indonesia
      </h1>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-900/10">
          <Image
            src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop"
            alt="Proses produksi pakaian MAPIL"
            width={1000}
            height={750}
            className="h-72 w-full object-cover sm:h-96"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">Cerita Brand</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-zinc-600">
            <p>
              MAPIL lahir pada 2019 dari sebuah konveksi kecil yang bermimpi
              besar: membuktikan bahwa produk lokal bisa sejajar dengan brand
              internasional — tanpa harga yang mengada-ada.
            </p>
            <p>
              Hari ini kami bermitra dengan lebih dari 25 pengrajin dan
              penjahit lokal. Setiap potong pakaian melewati kontrol kualitas
              tiga tahap sebelum sampai ke tanganmu.
            </p>
            <p>
              Dengan membeli MAPIL, kamu ikut menggerakkan ekonomi kreatif
              dan menjaga keterampilan pengrajin Indonesia tetap hidup.
            </p>
          </div>
        </div>
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-zinc-200 bg-white p-6 text-center"
          >
            <dd className="text-3xl font-bold">{stat.value}</dd>
            <dt className="mt-1 text-sm text-zinc-500">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </main>
  );
}
