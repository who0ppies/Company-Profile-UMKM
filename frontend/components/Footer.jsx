import Link from "next/link";

const SHOP_LINKS = [
  { label: "Koleksi", href: "/koleksi" },
  { label: "Tentang", href: "/tentang" },
  { label: "Toko", href: "/toko" },
  { label: "Kontak", href: "/kontak" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 dark:bg-yellow-400 text-sm font-bold text-white dark:text-zinc-950">
              M
            </span>
            <span className="text-lg font-bold tracking-tight">Git Store</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Brand fashion lokal dari pengrajin Indonesia. Bangga buatan
            lokal, tampil maksimal setiap hari.
          </p>
        </div>

        <nav aria-label="Navigasi toko">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-yellow-400">
            Jelajahi
          </h3>
          <ul className="mt-4 space-y-2.5">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-yellow-400">
            Hubungi Kami
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
            <li>halo@gitstore.id</li>
            <li>+62 812-3456-7890</li>
            <li>Jl. Pengrajin No. 12, Bandung</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-zinc-500 dark:text-yellow-400 sm:flex-row sm:px-6">
          <p>© 2026 Git Store — KodeKita Studio. Bangga Buatan Indonesia.</p>
          <p>Dibuat oleh Tim Front-End RPL Kelas XI</p>
        </div>
      </div>
    </footer>
  );
}
