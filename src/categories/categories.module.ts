import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PrismaService } from '../prisma.service'; // <--- 1. Import ini

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService], // <--- 2. Masukkan di sini
})
export class CategoriesModule {}