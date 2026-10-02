const ITEMS = [
  "Bangga Buatan Lokal",
  "Bahan Berkualitas",
  "Jahitan Rapi",
  "Harga Jujur",
  "Kirim Nasional",
  "Pengrajin Lokal",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-zinc-200 bg-zinc-50 py-4"
    >
      <div className="flex w-max animate-marquee items-center gap-8 pr-8">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-zinc-600"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
          </span>
        ))}
      </div>
    </div>
  );
}
