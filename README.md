# Pengelolaan Data Pengguna

Proyek ini adalah aplikasi web untuk mengelola daftar pengguna, termasuk fungsi untuk menambah, mengedit, menghapus, serta menyaring dan menyortir data pengguna. Aplikasi ini juga mengambil data pengguna dari API GitHub untuk ditampilkan di halaman terpisah.

## Fitur Utama

- **CRUD Pengguna**: Pengguna dapat ditambah, diedit, dan dihapus.
- **Sort dan Filter**: Data dapat disortir berdasarkan nama, umur, atau status keanggotaan. Pengguna juga bisa memfilter berdasarkan status.
- **Loading State**: Aplikasi menampilkan efek loading saat data sedang diambil dari `localStorage` atau API.
- **API Integration**: Mengambil data pengguna dari API GitHub dan menampilkannya di halaman terpisah.

## Prasyarat

Pastikan bahwa Anda memiliki aplikasi berikut di sistem lokal Anda:

- **Node.js**: Untuk menjalankan aplikasi ini, pastikan Anda telah menginstal [Node.js](https://nodejs.org/).
- **npm**: npm adalah manajer paket yang biasanya sudah terinstal dengan Node.js.

## Instalasi

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini di lingkungan lokal Anda:

1. **Clone repository**:

   Pertama, clone proyek ini ke dalam direktori lokal Anda menggunakan perintah berikut:

   ```bash
   git clone https://github.com/Geusan31/dlabs-fe
   ```

2. **Instalasi dependensi:**:

   Masuk ke direktori proyek dan instal dependensi dengan npm:

   ```bash
   cd dlabs
   npm install
   ```

3. **Jalankan aplikasi:**:

   Setelah semua dependensi diinstal, jalankan aplikasi dengan perintah berikut:

   ```bash
   npm run dev
   ```

Perintah ini akan menjalankan aplikasi pada http://localhost:3000.