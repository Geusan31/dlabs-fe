import "@/styles/globals.css";

// Mendapatkan layout untuk setiap halaman, jika tidak ada, gunakan halaman itu sendiri
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page); // Cek jika ada getLayout di halaman

  // Menerapkan layout pada komponen halaman
  return getLayout(<Component {...pageProps} />);
}
