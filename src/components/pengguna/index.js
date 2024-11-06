import { data } from "@/components/lib/data/data"; // Data dummy untuk tabel
import Delete from "@/components/modal/delete"; // Modal untuk konfirmasi delete
import Form from "@/components/modal/form"; // Form untuk input data pengguna
import { useEffect, useState } from "react";

export default function Pengguna() {
  const [tableData, setTableData] = useState(data); // Menyimpan data pengguna
  const [filter, setFilter] = useState("all"); // Menyaring berdasarkan status
  const [form, setForm] = useState({
    id: null,
    nama: "",
    email: "",
    umur: "",
    status: "aktif",
  }); // Form input
  const [isEditing, setIsEditing] = useState(false); // Menandakan mode edit
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal untuk form input
  const [deleteConfirmId, setDeleteConfirmId] = useState(null); // ID pengguna yang akan dihapus
  const [isLoading, setIsLoading] = useState(true); // Menampilkan loading ketika data sedang diambil
  const [errors, setErrors] = useState({ nama: "", email: "", umur: "" }); // Validasi input form

  // Fungsi untuk validasi form
  const validateForm = () => {
    let valid = true;
    let errorMessages = { nama: "", email: "", umur: "" };

    // Validasi Nama
    if (!form.nama.trim()) {
      errorMessages.nama = "Nama tidak boleh kosong.";
      valid = false;
    }

    // Validasi Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.email.trim() || !emailRegex.test(form.email)) {
      errorMessages.email = "Email tidak valid.";
      valid = false;
    }

    // Validasi Umur
    if (!form.umur || isNaN(form.umur) || form.umur <= 0) {
      errorMessages.umur = "Umur harus berupa angka positif.";
      valid = false;
    }

    setErrors(errorMessages); // Set error messages untuk ditampilkan di form
    return valid;
  };

  // Mengambil data dari localStorage
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const storedData = localStorage.getItem("tableData");

      // Simulasi delay untuk efek loading
      setTimeout(() => {
        if (storedData) {
          setTableData(JSON.parse(storedData));
        } else {
          setTableData(data); // Jika tidak ada data, gunakan data dummy
        }
        setIsLoading(false); // Set loading selesai setelah data diambil
      }, 1000); // Simulasi delay
    };

    fetchData();
  }, []);

  // Menyimpan data ke localStorage setiap kali tableData berubah
  useEffect(() => {
    if (tableData.length > 0) {
      localStorage.setItem("tableData", JSON.stringify(tableData)); // Simpan ke localStorage
    }
  }, [tableData]);

  const sortData = (key) => {
    const sortedData = [...tableData].sort((a, b) => {
      if (key === "umur") {
        return a[key] - b[key];
      }
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setTableData(sortedData);
  };

  const handleSortChange = (e) => {
    const sortKey = e.target.value;
    if (sortKey) sortData(sortKey);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOpenModal = (item = null) => {
    setIsEditing(!!item);
    setForm(
      item || { id: null, nama: "", email: "", umur: "", status: "aktif" }
    );
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    if (!validateForm()) {
      return; // Jika validasi gagal, tidak dilanjutkan
    }

    // Jika sedang dalam mode edit, update data
    if (isEditing) {
      setTableData(
        tableData.map((item) => (item.id === form.id ? form : item))
      );
      setIsEditing(false); // Set mode edit selesai
    } else {
      setTableData([...tableData, { ...form, id: Date.now() }]); // Tambah data baru
    }

    setIsModalOpen(false); // Menutup modal
    setForm({ id: null, nama: "", email: "", umur: "", status: "aktif" }); // Reset form
  };

  const handleDeleteConfirm = (id) => {
    setDeleteConfirmId(id); // Menyimpan ID yang akan dihapus
  };

  const confirmDelete = () => {
    setTableData(tableData.filter((item) => item.id !== deleteConfirmId)); // Hapus data
    setDeleteConfirmId(null); // Reset ID setelah hapus
  };

  const displayedData = tableData.filter((item) =>
    filter === "all" ? true : item.status === filter
  );

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold text-center mb-6">
        Daftar Keanggotaan
      </h1>

      {/* Tombol Create */}
      <button
        onClick={() => handleOpenModal()}
        className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4"
      >
        Create
      </button>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
        {/* Dropdown Sort dan Filter */}
        <div className="flex gap-4">
          <select
            onChange={handleSortChange}
            defaultValue=""
            className="p-2 border rounded-lg border-gray-300 text-gray-700"
          >
            <option value="" disabled>
              Sort by
            </option>
            <option value="nama">Nama</option>
            <option value="umur">Umur</option>
            <option value="status">Status Keanggotaan</option>
          </select>

          <select
            onChange={handleFilterChange}
            value={filter}
            className="p-2 border rounded-lg border-gray-300 text-gray-700"
          >
            <option value="all">All Status</option>
            <option value="aktif">Aktif</option>
            <option value="tidak aktif">Tidak Aktif</option>
          </select>
        </div>
      </div>

      {/* Tabel Data */}
      {isLoading ? (
        <div className="flex justify-center items-center py-4">
          <div className="loader">Loading...</div>{" "}
          {/*Menampilkan spinner saat loading*/}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-blue-600 text-white text-left text-sm font-semibold">
                  Nama
                </th>
                <th className="px-6 py-3 bg-blue-600 text-white text-left text-sm font-semibold">
                  Email
                </th>
                <th className="px-6 py-3 bg-blue-600 text-white text-left text-sm font-semibold">
                  Umur
                </th>
                <th className="px-6 py-3 bg-blue-600 text-white text-left text-sm font-semibold">
                  Status Keanggotaan
                </th>
                <th className="px-6 py-3 bg-blue-600 text-white text-left text-sm font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Tampilkan data pengguna */}
              {displayedData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                >
                  <td className="px-6 py-4 text-gray-700 text-sm">
                    {item.nama}
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-sm">
                    {item.email}
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-sm">
                    {item.umur}
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-sm">
                    {item.status}
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-sm">
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteConfirm(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Form */}
      {isModalOpen && (
        <Form
          errors={errors}
          isEditing={isEditing}
          handleSubmit={handleSubmit}
          form={form}
          handleInputChange={handleInputChange}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {/* Modal konfirmasi hapus */}
      {deleteConfirmId && (
        <Delete
          confirmDelete={confirmDelete}
          setDeleteConfirmId={setDeleteConfirmId}
        />
      )}
    </div>
  );
}
