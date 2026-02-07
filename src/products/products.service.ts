import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // 1. Ambil Semua Produk (Search Logic)
  async findAll(keyword?: string) {
    return this.prisma.product.findMany({
      where: keyword ? { OR: [{ name: { contains: keyword } }] } : {},
      include: { category: true },
      orderBy: { id: 'desc' },
    });
  }

  // 2. Ambil Semua Kategori
  async findAllCategories() {
    return this.prisma.category.findMany();
  }

  // 3. Tambah Produk
  async create(data: Prisma.ProductCreateInput) {
    return this.prisma.product.create({ data });
  }

  // 4. Hapus Produk
  async remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }

  // --- BARU: Ambil 1 Produk (Buat Form Edit) ---
  async findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  // --- BARU: Update Produk ---
  async update(id: number, data: any) {
    return this.prisma.product.update({
      where: { id },
      data: data,
    });
  }
}