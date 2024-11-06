import React, { useState } from "react";

// Form untuk menambah atau mengedit data
export default function Form({
  isEditing,
  handleSubmit,
  form,
  handleInputChange,
  setIsModalOpen,
  errors,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">
          {isEditing ? "Edit Data" : "Tambah Data"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Input field untuk nama, email, umur, status */}
          <div>
            <input
              type="text"
              name="nama"
              placeholder="Nama"
              value={form.nama}
              onChange={handleInputChange}
              className="p-2 border rounded-md w-full"
            />
            {errors.nama && (
              <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleInputChange}
              className="p-2 border rounded-md w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              name="umur"
              placeholder="Umur"
              value={form.umur}
              onChange={handleInputChange}
              className="p-2 border rounded-md w-full"
            />
            {errors.umur && (
              <p className="text-red-500 text-sm mt-1">{errors.umur}</p>
            )}
          </div>
          <select
            name="status"
            value={form.status}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          >
            <option value="aktif">Aktif</option>
            <option value="tidak aktif">Tidak Aktif</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md"
          >
            {isEditing ? "Update" : "Create"}
            {/* Tombol submit */}
          </button>
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-500 text-white py-2 rounded-md mt-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
