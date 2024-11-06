export default function Delete({ confirmDelete, setDeleteConfirmId }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-lg font-bold mb-4">
          Apakah Anda yakin ingin menghapus data ini?
        </h2>
        {/* Konfirmasi sebelum menghapus data */}
        <button
          onClick={confirmDelete}
          className="bg-red-500 text-white py-2 px-4 rounded-md mr-2"
        >
          Hapus
        </button>
        <button
          onClick={() => setDeleteConfirmId(null)}
          className="bg-gray-500 text-white py-2 px-4 rounded-md"
        >
          Batal
        </button>
      </div>
    </div>
  );
}
