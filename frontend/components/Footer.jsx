import Link from "next/link";

const SHOP_LINKS = [
  { label: "Koleksi", href: "/koleksi" },
  { label: "Tentang", href: "/tentang" },
  { label: "Toko", href: "/toko" },
  { label: "Kontak", href: "/kontak" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
              M
            </span>
            <span className="text-lg font-bold tracking-tight">MAPIL</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-600">
            Brand fashion lokal dari pengrajin Indonesia. Bangga buatan
            lokal, tampil maksimal setiap hari.
          </p>
        </div>

        <nav aria-label="Navigasi toko">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">
            Jelajahi
          </h3>
          <ul className="mt-4 space-y-2.5">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">
            Hubungi Kami
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-zinc-600">
            <li>halo@mapil.id</li>
            <li>+62 812-3456-7890</li>
            <li>Jl. Pengrajin No. 12, Bandung</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-zinc-500 sm:flex-row sm:px-6">
          <p>© 2026 MAPIL — KodeKita Studio. Bangga Buatan Indonesia.</p>
          <p>Dibuat oleh Tim Front-End RPL Kelas XI</p>
        </div>
      </div>
    </footer>
  );
}
