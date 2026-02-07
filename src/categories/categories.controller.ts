import { Controller, Get, Post, Body, Render, Res, Param, ParseIntPipe, Req } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import type { Response } from 'express';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // 1. Tampilkan Daftar Kategori
  @Get()
  async index(@Req() req: any, @Res() res: Response) {
    // Cek Login
    if (!req.session.user) {
      return res.redirect('/auth/login');
    }

    const categories = await this.categoriesService.findAll();
    return res.render('categories/index', { 
      categories,
      user: req.session.user 
    });
  }

  // 2. Proses Tambah Kategori
  @Post()
  async create(@Body() body: any, @Res() res: Response) {
    await this.categoriesService.create({
      name: body.name,
      description: body.description,
    });
    return res.redirect('/categories');
  }

  // 3. Proses Hapus
  @Get('delete/:id')
  async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    await this.categoriesService.remove(id);
    return res.redirect('/categories');
  }

  // --- BARU: Tampilkan Halaman Edit ---
  @Get('edit/:id')
  async editPage(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const category = await this.categoriesService.findOne(id);
    return res.render('categories/edit', { category });
  }

  // --- BARU: Proses Simpan Edit ---
  @Post('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any,
    @Res() res: Response,
  ) {
    await this.categoriesService.update(id, {
      name: body.name,
      description: body.description,
    });
    return res.redirect('/categories');
  }
}