import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // 1. Ambil Semua Produk (Plus Nama Kategorinya)
  async findAll() {
    return this.prisma.product.findMany({
      include: { category: true }, // <--- INI KUNCINYA (JOIN)
      orderBy: { id: 'desc' },
    });
  }

  // 2. Ambil Semua Kategori (Untuk Dropdown di Form)
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