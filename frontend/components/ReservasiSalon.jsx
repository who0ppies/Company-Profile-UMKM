"use client";

import { useState } from "react";

export default function ReservasiSalon() {
  const [done, setDone] = useState(false);

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-yellow-400 p-8 text-white dark:text-zinc-950 sm:p-12">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
        Private Appointment Protocol
      </p>
      <h2 className="mt-3 font-serif text-3xl font-bold">
        Reservasi Private Salon
      </h2>
      {done ? (
        <p className="mt-6 text-sm text-zinc-300">
          Terima kasih! Tim concierge kami akan menghubungi Anda untuk
          konfirmasi jadwal.
        </p>
      ) : (
        <form
          className="mt-8 grid gap-4 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <input required placeholder="Nama Lengkap" className="rounded-lg bg-zinc-800 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:bg-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:bg-zinc-900" />
          <input required placeholder="WhatsApp / Email" className="rounded-lg bg-zinc-800 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:bg-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:bg-zinc-900" />
          <input type="date" required className="rounded-lg bg-zinc-800 px-4 py-3 text-sm text-zinc-200 outline-none transition-colors focus:bg-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:focus:bg-zinc-900" />
          <select className="rounded-lg bg-zinc-800 px-4 py-3 text-sm text-zinc-200 outline-none transition-colors focus:bg-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:focus:bg-zinc-900">
            <option>Jakarta — Capital Atelier</option>
            <option>Bandung — Highland Salon</option>
            <option>Bali — Coastal Pavilion</option>
          </select>
          <button type="submit" className="rounded-full bg-white dark:bg-zinc-950 px-6 py-3 text-sm font-bold text-zinc-900 dark:text-zinc-50 transition-transform hover:scale-[1.02] sm:col-span-2">
            Kirim Reservasi
          </button>
        </form>
      )}
    </div>
  );
}
