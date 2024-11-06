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


## Struktur Proyek

Berikut adalah struktur folder dan file dalam proyek ini:

├── components/ # Folder yang berisi komponen React │ ├── layout.js # Layout dan sidebar untuk aplikasi │ ├── pengguna.js # Komponen utama untuk mengelola data pengguna │ ├── form.js # Form untuk menambah dan mengedit data pengguna │ ├── delete.js # Modal konfirmasi untuk menghapus data │ ├── fetchUser.js # Mengambil data pengguna dari API GitHub │ └── lib/ │ └── data/data.js # Data dummy yang digunakan untuk pengujian ├── pages/ # Folder yang berisi halaman Next.js │ ├── index.js # Halaman utama yang menampilkan daftar pengguna │ ├── \_app.js # File utama untuk mengatur layout di seluruh aplikasi │ └── users.js # Halaman untuk menampilkan pengguna dari GitHub ├── public/ # Folder untuk file statis seperti gambar │ └── ... # File statis lainnya ├── styles/ # Folder untuk file CSS global │ └── globals.css # Gaya global aplikasi └── package.json # Konfigurasi proyek dan dependensi


### Penjelasan Kode

#### 1. **data.js** (Di dalam folder `components/lib/data`)

- **Deskripsi**: File ini berisi data dummy pengguna yang digunakan untuk pengujian aplikasi. Data ini berisi informasi pengguna seperti nama, umur, status keanggotaan, dan lainnya.
- **Fungsi**: Digunakan untuk menampilkan data pengguna di aplikasi jika tidak ada data yang disimpan di `localStorage` atau jika aplikasi pertama kali dijalankan.

#### 2. **pengguna.js** (Di dalam folder `components`)

- **Deskripsi**: Komponen ini adalah komponen utama untuk menampilkan daftar pengguna dan mengelola data pengguna (menambah, mengedit, menghapus).
- **Fungsi**: Menggunakan data yang ada di `localStorage` atau data dummy (dari `data.js`). Selain itu, komponen ini mengelola proses pengeditan dan penghapusan pengguna, serta memberikan fitur penyaringan dan pengurutan.

#### 3. **fetchUser.js** (Di dalam folder `components`)

- **Deskripsi**: Komponen ini bertanggung jawab untuk mengambil data pengguna dari API eksternal (misalnya, API GitHub).
- **Fungsi**: Menggunakan `axios` untuk melakukan permintaan HTTP ke API GitHub dan menampilkan data pengguna dari hasil API di halaman terpisah.

#### 4. **form.js** (Di dalam folder `components`)

- **Deskripsi**: Formulir untuk menambah atau mengedit data pengguna.
- **Fungsi**: Menangani pengumpulan data input dari pengguna, validasi data, dan pengiriman data yang dimasukkan. Form ini digunakan baik untuk menambah pengguna baru maupun untuk mengedit data pengguna yang ada.

#### 5. **delete.js** (Di dalam folder `components`)

- **Deskripsi**: Modal konfirmasi untuk menghapus data pengguna.
- **Fungsi**: Menampilkan dialog modal yang meminta konfirmasi dari pengguna sebelum menghapus data pengguna tertentu. Modal ini akan dipanggil ketika pengguna memilih untuk menghapus pengguna dari daftar.

#### 6. **layout.js** (Di dalam folder `components`)

- **Deskripsi**: Komponen ini menyediakan layout dasar untuk aplikasi, termasuk sidebar navigasi.
- **Fungsi**: Layout ini berisi navigasi utama aplikasi yang memudahkan pengguna untuk berpindah antar halaman (misalnya, halaman daftar pengguna dan halaman API pengguna GitHub). Sidebar dapat diatur untuk tampil atau disembunyikan, tergantung pada ukuran layar (responsive).

#### 7. **\_app.js** (Di dalam folder `pages`)

- **Deskripsi**: File ini menangani konfigurasi global aplikasi.
- **Fungsi**: Di dalam file ini, kita mengatur layout yang akan digunakan di seluruh halaman aplikasi. Selain itu, ini adalah tempat untuk mengimpor file CSS global.

#### 8. **index.js** (Di dalam folder `pages`)

- **Deskripsi**: Halaman utama yang menampilkan daftar pengguna.
- **Fungsi**: Menggunakan komponen `pengguna.js` untuk menampilkan data pengguna, memberikan fitur untuk menambah pengguna baru, mengedit, menghapus, dan menyaring pengguna. Ini adalah tampilan utama yang dilihat pengguna setelah mengakses aplikasi.

#### 9. **users.js** (Di dalam folder `pages`)

- **Deskripsi**: Halaman yang menampilkan data pengguna dari API GitHub.
- **Fungsi**: Mengambil data pengguna dari API eksternal menggunakan `fetchUser.js`. Data yang diambil akan ditampilkan dalam bentuk daftar pengguna dengan informasi terkait seperti nama dan gambar profil.

#### 10. **globals.css** (Di dalam folder `styles`)

- **Deskripsi**: File CSS untuk gaya global aplikasi.
- **Fungsi**: Menyediakan styling dasar untuk elemen HTML dan komponen aplikasi. Ini termasuk pengaturan untuk layout, warna, font, dan elemen UI lainnya.

#### 11. **package.json**

- **Deskripsi**: File konfigurasi untuk proyek.
- **Fungsi**: Menyimpan informasi proyek dan daftar dependensi yang digunakan (misalnya, `react`, `next`, `axios`). File ini juga berisi skrip yang digunakan untuk menjalankan proyek, seperti `npm run dev` untuk memulai aplikasi.

---
