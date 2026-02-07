# 🚀 Admin Panel Management System

> Sistem Manajemen Admin Full-Stack berbasis **MVC** yang dibangun dengan **NestJS**, **Prisma ORM**, dan **MySQL**.
> Dibuat untuk memenuhi Technical Internship Challenge.

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

---

## 📖 A. Penjelasan Project
Aplikasi ini adalah **Web Admin Dashboard** yang berfungsi untuk mengelola data inventaris (Produk dan Kategori). Aplikasi menggunakan pola arsitektur **MVC (Model-View-Controller)** di mana logika bisnis, data, dan tampilan dipisahkan untuk kemudahan pengembangan.

**Fitur Utama:**
1.  **Autentikasi:** Login Admin dengan Session & Password Hashing.
2.  **Manajemen Kategori:** CRUD Kategori dengan proteksi relasi data.
3.  **Manajemen Produk:** CRUD Produk dengan fitur pencarian (Search) dan relasi ke Kategori.
4.  **Integritas Data:** Menggunakan *Cascade Delete* (Jika kategori dihapus, produk terkait ikut terhapus).

---

## 🗄️ B. Desain Database (ER Diagram)

Aplikasi menggunakan database relasional **MySQL** dengan skema sebagai berikut:

**1. Tabel User (Admin)**
* `id` (Int, PK): ID Unik
* `email` (String, Unique): Email untuk login
* `password` (String): Password terenkripsi
* `name` (String): Nama lengkap admin

**2. Tabel Category (Parent)**
* `id` (Int, PK): ID Kategori
* `name` (String): Nama kategori
* `description` (String): Deskripsi singkat
* *Relasi:* Satu Kategori memiliki banyak Produk (One-to-Many).

**3. Tabel Product (Child)**
* `id` (Int, PK): ID Produk
* `name` (String): Nama produk
* `price` (Decimal): Harga produk
* `stock` (Int): Jumlah stok
* `categoryId` (Int, FK): Menghubungkan ke tabel Category

---

## 📸 C. Screenshot Aplikasi

| Halaman Login | Dashboard |
| :---: | :---: |
| *(Tempel Screenshot Login Disini)* | *(Tempel Screenshot Dashboard Disini)* |

| Data Produk | Data Kategori |
| :---: | :---: |
| *(Tempel Screenshot Produk Disini)* | *(Tempel Screenshot Kategori Disini)* |

---

## 📦 D. Dependency (Teknologi Utama)

Berikut adalah library utama yang digunakan dalam `package.json`:

* **Core:** `@nestjs/core`, `@nestjs/common` (Framework utama)
* **Database:** `prisma`, `@prisma/client` (ORM & Query Builder)
* **Tampilan:** `hbs` (Handlebars View Engine)
* **Keamanan:** `bcrypt` (Hashing Password), `express-session` (Manajemen Sesi Login)
* **Validasi:** `class-validator`, `class-transformer`
* **Frontend Assets:** `Bootstrap 5`, `SweetAlert2`

---

## 🚀 E. Informasi untuk Developer (Cara Menjalankan)

Panduan untuk meneruskan atau menjalankan project ini di lokal:

1.  **Persiapan Lingkungan:**
    * Node.js (v16+)
    * MySQL (XAMPP/Laragon)
    * Git

2.  **Instalasi:**
    ```bash
    git clone [https://github.com/username/repository-kamu.git](https://github.com/username/repository-kamu.git)
    cd repository-kamu
    npm install
    ```

3.  **Konfigurasi Database:**
    * Copy file `.env.example` menjadi `.env`.
    * Sesuaikan `DATABASE_URL` dengan kredensial MySQL lokal Anda.
    * Jalankan migrasi: `npx prisma db push`

4.  **Menjalankan Server:**
    ```bash
    npm run start:dev
    ```
    Akses aplikasi di: `http://localhost:3000/auth/login`
    * **Akun Demo:** admin@gmail.com / 123

---
