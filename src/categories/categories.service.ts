import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  // 1. Ambil Semua Data
  async findAll() {
    return this.prisma.category.findMany({
      orderBy: { id: 'desc' }, // Urutkan dari yang terbaru
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
}