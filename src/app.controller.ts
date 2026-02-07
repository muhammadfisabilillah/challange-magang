import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import type { Response } from 'express'; // <--- PERBAIKAN: Pakai 'import type'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService 
  ) {}

  @Get()
  root(@Res() res: Response) {
    return res.redirect('/dashboard');
  }

  @Get('/dashboard')
  @Render('dashboard')
  async dashboard(@Req() req: any, @Res() res: Response) {
    // 1. Cek Login
    if (!req.session.user) {
      return res.redirect('/auth/login');
    }

    // 2. HITUNG DATA
    const totalProducts = await this.prisma.product.count();
    const totalCategories = await this.prisma.category.count();

    // 3. Kirim data
    return { 
      user: req.session.user,
      stats: {
        products: totalProducts,
        categories: totalCategories
      }
    };
  }
}