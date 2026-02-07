import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // 1. Ambil Semua Produk (Bisa Cari Nama)
  async findAll(keyword?: string) {
    return this.prisma.product.findMany({
      where: keyword
        ? {
            OR: [
              { name: { contains: keyword } }, // Cari berdasarkan Nama
            ],
          }
        : {}, // Kalau kosong, ambil semua
      include: { category: true }, // Tetap ikutkan kategori
      orderBy: { id: 'desc' },
    });
  }

  // 2. Ambil Semua Kategori (Untuk Dropdown)
  async findAllCategories() {
    return this.prisma.category.findMany();
  }

  // 3. Tambah Produk Baru
  async create(data: Prisma.ProductCreateInput) {
    return this.prisma.product.create({ data });
  }

  // 4. Hapus Produk
  async remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}