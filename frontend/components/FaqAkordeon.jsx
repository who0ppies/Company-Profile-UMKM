"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const FAQ = [
  {
    q: "Bagaimana cara menjadwalkan fitting private atelier?",
    a: "Private fitting dapat dipesan lewat formulir kami di atas. Sebaiknya reservasi dibuat setidaknya 72 jam sebelumnya agar slot konsultasi tersedia.",
  },
  {
    q: "Apakah MAPIL menerima komisi siluet custom?",
    a: "Ya — MAPIL menerima jumlah terbatas komisi bespoke setiap kuartal. Direktur kreatif kami menangani fitting muslin awal dan penentuan kain individu dari workshop mitra lokal.",
  },
  {
    q: "Berapa lama penjahitan bespoke dan made-to-measure?",
    a: "Order bespoke memerlukan empat hingga enam minggu dari penentuan pola, sementara evening pieces atau bordir tangan bisa delapan hingga dua belas minggu — tiga kali fitting strukturnya.",
  },
  {
    q: "Di mana saya bisa melihat koleksi secara langsung?",
    a: "Private viewing bisa diadakan di Singapura, Tokyo, Dubai, dan Paris setiap musim — hubungi concierge kami untuk jadwal.",
  },
];

export default function FaqAkordeon() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {FAQ.map((item, i) => (
        <div key={item.q} className="rounded-2xl border border-zinc-200 bg-white p-6">
          <button
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between text-left text-sm font-bold uppercase tracking-wide transition-colors hover:text-zinc-500"
            aria-expanded={open === i}
          >
            {item.q}
            {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {open === i && (
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
