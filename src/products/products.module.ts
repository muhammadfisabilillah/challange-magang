import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from '../prisma.service'; // <--- Jangan lupa import ini

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService], // <--- Daftarkan service di sini
})
export class ProductsModule {} 
// ^^^ Pastikan ada kata 'export' ini biar bisa dipanggil App Module