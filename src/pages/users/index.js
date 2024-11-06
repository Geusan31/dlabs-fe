// Mengimpor Layout dan Fetch User dari api public github untuk digunakan di halaman api users
import FetchUsers from "@/components/fetchUser/fetch_user";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <FetchUsers /> {/* Menampilkan komponen fetch users */}
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>; // Membungkus halaman dengan Layout
};
