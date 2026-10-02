import KoleksiClient from "../../components/KoleksiClient";

export const metadata = {
  title: "Koleksi Produk — MAPIL",
  description:
    "Katalog produk fashion lokal MAPIL: kemeja, kaos, hoodie, bawahan, dress, dan aksesoris.",
};

export default function KoleksiPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
        Katalog UMKM
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Koleksi Produk
      </h1>
      <p className="mt-3 max-w-2xl text-zinc-600">
        Semua produk dibuat oleh pengrajin lokal dengan bahan pilihan.
        Cari, filter, dan urutkan sesuai kebutuhanmu.
      </p>

      <div className="mt-8">
        <KoleksiClient />
      </div>
    </main>
  );
}
