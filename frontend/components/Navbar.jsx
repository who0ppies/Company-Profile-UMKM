"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, User, Menu, X, Sun, Moon } from "lucide-react";

const LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Koleksi", href: "/koleksi" },
  { label: "Toko", href: "/toko" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("tema");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enable = stored ? stored === "gelap" : prefersDark;
    setDark(enable);
    document.documentElement.classList.toggle("dark", enable);
  }, []);

  function toggleTema() {
    const el = document.documentElement;
    const enable = !el.classList.contains("dark");
    el.classList.toggle("dark", enable);
    setDark(enable);
    window.localStorage.setItem("tema", enable ? "gelap" : "terang");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Git Store
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi utama">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold transition-colors ${
                  active
                    ? "border-b-2 border-zinc-900 pb-0.5 text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTema}
            aria-label="Ganti mode warna"
            className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-yellow-400 dark:hover:text-yellow-300"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link href="/koleksi" aria-label="Keranjang" className="text-zinc-700 transition-colors hover:text-zinc-900">
            <ShoppingBag size={20} />
          </Link>
          <Link href="/kontak" aria-label="Akun" className="hidden h-9 w-9 items-center justify-center rounded-md bg-zinc-900 text-white sm:flex">
            <User size={18} />
          </Link>
          <button
            type="button"
            className="md:hidden"
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-zinc-100 px-4 py-3 md:hidden" aria-label="Menu seluler">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-semibold ${
                    pathname === link.href ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
