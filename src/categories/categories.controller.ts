import { Controller, Get, Post, Body, Render, Res, Param, Req, ParseIntPipe } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import type { Response, Request } from 'express'; // Pastikan ada type Request

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // 1. Tampilkan Daftar Kategori (DILINDUNGI)
  @Get()
  async index(@Req() req: any, @Res() res: Response) {
    // --- CEK LOGIN DI SINI ---
    if (!req.session.user) {
      return res.redirect('/auth/login'); // Kalau belum login, tendang!
    }
    // -------------------------

    const categories = await this.categoriesService.findAll();
    
    // Kita render manual agar bisa kirim data user juga
    return res.render('categories/index', { 
      categories,
      user: req.session.user 
    });
  }

  // 2. Proses Tambah (POST)
  @Post()
  async create(@Body() body, @Res() res: Response) {
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
}