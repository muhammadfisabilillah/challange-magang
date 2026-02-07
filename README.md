# 🚀 Admin Panel Management System

> Full-Stack Admin Dashboard built with **NestJS**, **Prisma ORM**, and **MySQL**.
> Created for Technical Internship Challenge.

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## 📖 About The Project

Aplikasi ini adalah **Sistem Manajemen Admin** yang dibangun menggunakan arsitektur **MVC (Model-View-Controller)** dan **Server-Side Rendering**. Aplikasi ini dirancang untuk menangani manajemen data produk dan kategori dengan integritas data yang tinggi.

### ✨ Key Features (Fitur Utama)

1.  🔐 **Secure Authentication**
    * Sistem Login Admin menggunakan `express-session`.
    * Password hashing menggunakan `bcrypt`.

2.  📊 **Realtime Dashboard**
    * Menampilkan statistik jumlah Produk & Kategori secara langsung dari database.

3.  📦 **Product Management (CRUD)**
    * **Create, Read, Update, Delete** data produk.
    * **Search Feature:** Pencarian produk berdasarkan nama (Server-side filtering).
    * **Relasi:** Setiap produk terhubung dengan Kategori.

4.  🏷️ **Category Management (CRUD)**
    * **Create, Read, Update, Delete** data kategori.
    * **Cascade Delete:** Menghapus kategori akan otomatis menghapus semua produk di dalamnya (Menjaga database tetap bersih dari data sampah).

5.  🎨 **Modern UI/UX**
    * **SweetAlert2:** Notifikasi interaktif untuk konfirmasi hapus.
    * **Bootstrap 5:** Tampilan responsif dengan tema warna konsisten (Hijau untuk Produk, Biru untuk Kategori).

---

## 🛠️ Tech Stack

* **Framework:** [NestJS](https://nestjs.com/) (Node.js)
* **Language:** TypeScript
* **Database:** MySQL
* **ORM:** Prisma ORM
* **Templating:** Handlebars (HBS)
* **Styling:** Bootstrap 5 & Bootstrap Icons

---

## 🚀 How to Run

Ikuti langkah ini untuk menjalankan project di komputer lokal:

### 1. Clone Repository
```bash
git clone [https://github.com/muhammadfisabilillah/challange-magang.git](https://github.com/muhammadfisabilillah/challange-magang.git)
cd challange-magang

## 🚀 Cara Menjalankan Project (Installation)

1.  **Clone Repository**
    ```bash
    git clone [https://github.com/USERNAME-KAMU/backend-magang-admin.git](https://github.com/USERNAME-KAMU/backend-magang-admin.git)
    cd backend-magang-admin
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Setup Database**
    * Buat database baru di MySQL bernama `db_magang`.
    * Duplikat file `.env.example` menjadi `.env`.
    * Sesuaikan `DATABASE_URL` dengan password MySQL lokal Anda.

4.  **Migrasi Database (Prisma)**
    ```bash
    npx prisma db push
    ```

5.  **Jalankan Project**
    ```bash
    npm run start:dev
    ```
    Akses di browser: http://localhost:3000/auth/login

## 🧪 Testing
Gunakan akun default berikut untuk login:
* **Email:** `admin@gmail.com`
* **Password:** `admin123`

---
*Dibuat oleh muhammad fsabilillah - 2026*
