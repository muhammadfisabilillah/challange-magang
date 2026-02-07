import { Controller, Get, Post, Body, Render, Res, Param, ParseIntPipe, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import type { Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // 1. Tampilkan Halaman Produk
  @Get()
  async index(@Req() req, @Res() res: Response) {
    // Cek Login
    if (!req.session.user) {
      return res.redirect('/auth/login');
    }

    // Ambil Data Produk & Data Kategori (Buat Dropdown)
    const products = await this.productsService.findAll();
    const categories = await this.productsService.findAllCategories();

    return res.render('products/index', {
      products,
      categories, // Kirim kategori ke HTML
      user: req.session.user
    });
  }

  // 2. Proses Tambah Produk
  @Post()
  async create(@Body() body, @Res() res: Response) {
    // Konversi harga & categoryId jadi angka (karena dari HTML itu String)
    await this.productsService.create({
      name: body.name,
      price: Number(body.price),
      stock: Number(body.stock),
      category: {
        connect: { id: Number(body.categoryId) } // <--- Cara hubungkan relasi di Prisma
      }
    });
    return res.redirect('/products');
  }

  // 3. Hapus Produk
  @Get('delete/:id')
  async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    await this.productsService.remove(id);
    return res.redirect('/products');
  }
}