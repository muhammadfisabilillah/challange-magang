import { Controller, Get, Post, Body, Render, Res, Param, ParseIntPipe, Req, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import type { Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async index(@Req() req, @Res() res: Response, @Query('search') search: string) {
    if (!req.session.user) return res.redirect('/auth/login');
    
    const products = await this.productsService.findAll(search);
    const categories = await this.productsService.findAllCategories();

    return res.render('products/index', {
      products, categories, user: req.session.user, searchKeyword: search
    });
  }

  @Post()
  async create(@Body() body, @Res() res: Response) {
    await this.productsService.create({
      name: body.name,
      price: Number(body.price),
      stock: Number(body.stock),
      category: { connect: { id: Number(body.categoryId) } },
    });
    return res.redirect('/products');
  }

  @Get('delete/:id')
  async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    await this.productsService.remove(id);
    return res.redirect('/products');
  }

  // --- BARU: Buka Halaman Edit ---
  @Get('edit/:id')
  async editPage(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const product = await this.productsService.findOne(id);
    const categories = await this.productsService.findAllCategories();
    return res.render('products/edit', { product, categories });
  }

  // --- BARU: Proses Simpan Edit ---
  @Post('update/:id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() body, @Res() res: Response) {
    await this.productsService.update(id, {
      name: body.name,
      price: Number(body.price),
      stock: Number(body.stock),
      categoryId: Number(body.categoryId),
    });
    return res.redirect('/products');
  }
}