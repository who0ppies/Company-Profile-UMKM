import ContactForm from "../../components/ContactForm";
import FaqAkordeon from "../../components/FaqAkordeon";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Kontak — MAPIL",
  description:
    "Hubungi tim MAPIL untuk pertanyaan produk, kemitraan, dan komisi bespoke.",
};

export default function KontakPage() {
  return (
    <main>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-10 pt-16 sm:px-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Mari Menciptakan <span className="italic">Sesuatu yang Abadi</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Untuk komisi bespoke, konsultasi salon, pers dossier, atau kritik
            saran — tim concierge kami siap membantu.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 pb-20 sm:px-6">
        <Reveal>
          <h2 className="text-center font-serif text-3xl font-bold text-zinc-900 dark:text-zinc-50">Hubungi Kami</h2>
        </Reveal>
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-900 py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-center font-serif text-4xl font-bold">FAQ</h2>
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-yellow-400">
              Bagaimana Saya Bisa Melihat Koleksi Secara Langsung?
            </p>
          </Reveal>
          <div className="mt-10">
            <FaqAkordeon />
          </div>
        </div>
      </section>
    </main>
  );
}
