// Menampilkan komponen Pengguna dalam layout yang telah ditentukan
import Layout from "@/components/layout";
import Pengguna from "@/components/pengguna";

export default function Home() {
  return (
    <>
      <Pengguna /> {/* Menampilkan daftar pengguna */}
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>; // Membungkus halaman dengan Layout
};
