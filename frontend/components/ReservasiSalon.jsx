"use client";

import { useState } from "react";

export default function ReservasiSalon() {
  const [done, setDone] = useState(false);

  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-900 p-8 text-white sm:p-12">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
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
          <input required placeholder="Nama Lengkap" className="rounded-lg bg-zinc-800 px-4 py-3 text-sm outline-none placeholder:text-zinc-500" />
          <input required placeholder="WhatsApp / Email" className="rounded-lg bg-zinc-800 px-4 py-3 text-sm outline-none placeholder:text-zinc-500" />
          <input type="date" required className="rounded-lg bg-zinc-800 px-4 py-3 text-sm outline-none text-zinc-300" />
          <select className="rounded-lg bg-zinc-800 px-4 py-3 text-sm outline-none">
            <option>Jakarta — Capital Atelier</option>
            <option>Bandung — Highland Salon</option>
            <option>Bali — Coastal Pavilion</option>
          </select>
          <button type="submit" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-transform hover:scale-[1.02] sm:col-span-2">
            Kirim Reservasi
          </button>
        </form>
      )}
    </div>
  );
}
