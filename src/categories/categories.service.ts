import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  // 1. Ambil Semua Data (Urut dari terbaru)
  async findAll() {
    return this.prisma.category.findMany({
      orderBy: { id: 'desc' },
    });
  }

  // 2. Tambah Data Baru
  async create(data: Prisma.CategoryCreateInput) {
    return this.prisma.category.create({ data });
  }

  // 3. Hapus Data
  async remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }

  // --- BARU: Ambil 1 Kategori (Buat Form Edit) ---
  async findOne(id: number) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  // --- BARU: Update Kategori ---
  async update(id: number, data: any) {
    return this.prisma.category.update({
      where: { id },
      data: data,
    });
  }
}