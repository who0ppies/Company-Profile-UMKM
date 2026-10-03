import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Kontak — MAPIL",
  description:
    "Hubungi tim MAPIL untuk pertanyaan produk, kemitraan, dan kritik saran.",
};

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "halo@mapil.id",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jl. Pengrajin No. 12, Bandung",
  },
];

export default function KontakPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
        Hubungi Kami
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Ada yang Bisa Kami Bantu?
      </h1>
      <p className="mt-3 max-w-2xl text-zinc-600">
        Kirim pesan lewat formulir atau hubungi salah satu kanal resmi kami
        di bawah ini.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {CONTACTS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white">
                <item.icon size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  {item.label}
                </p>
                <p className="mt-0.5 font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
