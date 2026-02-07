# Admin Panel Magang - NestJS MVC

Project ini adalah aplikasi **Admin Panel** sederhana untuk memanajemen data Kategori dan Produk. Dibangun menggunakan **NestJS** dengan pola **MVC (Model-View-Controller)**, menggunakan database **MySQL**, dan **Prisma ORM**.

Dibuat untuk memenuhi tantangan teknis magang Full Stack Developer.

## 📋 Fitur Utama
1.  **Autentikasi:** Login Admin dengan proteksi session.
2.  **CRUD Kategori:** Create, Read, Delete data kategori.
3.  **CRUD Produk:** Create, Read, Delete data produk dengan relasi ke Kategori.
4.  **Pencarian (Search):** Mencari produk berdasarkan nama.
5.  **Tech Stack:**
    * Framework: NestJS (Node.js)
    * Database: MySQL
    * ORM: Prisma
    * View Engine: Handlebars (HBS)
    * Styling: Bootstrap 5

## 🗄️ Desain Database (ERD)
Aplikasi ini menggunakan 2 tabel utama dengan relasi **One-to-Many**:
* **User:** Untuk data login admin.
* **Category:** Menyimpan data kategori produk.
* **Product:** Menyimpan data produk (terhubung ke CategoryId).

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
    Akses di browser: `http://localhost:3000`

## 🧪 Testing
Gunakan akun default berikut untuk login:
* **Email:** `admin@gmail.com`
* **Password:** `admin123`

---
*Dibuat oleh muhammad fsabilillah - 2026*