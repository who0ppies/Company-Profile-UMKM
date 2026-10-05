"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const INITIAL_FORM = { nama: "", email: "", pesan: "" };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.nama.trim() || !form.email.trim() || !form.pesan.trim()) {
      setError("Mohon lengkapi nama, email, dan pesan terlebih dahulu.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Format email tidak valid. Periksa kembali email kamu.");
      return;
    }

    setSent(true);
    setForm(INITIAL_FORM);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-10 text-center">
        <CheckCircle2 size={44} className="text-zinc-900 dark:text-zinc-50" />
        <h2 className="mt-4 text-lg font-bold">Pesan Terkirim!</h2>
        <p className="mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
          Terima kasih sudah menghubungi Git Store. Tim kami akan membalas
          maksimal 1×24 jam kerja.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-zinc-900"
        >
          Kirim Pesan Lain
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold">Nama</span>
          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Nama kamu"
            className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-yellow-400"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="nama@email.com"
            className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-yellow-400"
          />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-semibold">Pesan</span>
        <textarea
          name="pesan"
          value={form.pesan}
          onChange={handleChange}
          rows={5}
          placeholder="Tulis pertanyaan, kritik, atau saran..."
          className="mt-1.5 w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-yellow-400"
        />
      </label>

      {error && (
        <p role="alert" className="mt-3 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 dark:bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-white dark:text-zinc-950 transition-transform hover:scale-[1.02] sm:w-auto"
      >
        <Send size={16} />
        Kirim Pesan
      </button>
    </form>
  );
}
