import "./globals.css";

export const metadata = {
  title: "MAPIL — Brand Fashion Lokal UMKM",
  description:
    "Company profile UMKM MAPIL: brand fashion lokal dengan katalog produk, cerita brand, toko, dan kontak.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
