import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "MAPIL — Brand Fashion Lokal UMKM",
  description:
    "Company profile UMKM MAPIL: brand fashion lokal dengan katalog produk, cerita brand, toko, dan kontak.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
