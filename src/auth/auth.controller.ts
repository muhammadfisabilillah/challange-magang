import { Controller, Get, Post, Body, Render, Res, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
// PERBAIKAN: Tambahkan 'type' di sini
import type { Response } from 'express'; 

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Halaman Login
  @Get('login')
  @Render('auth/login')
  showLoginPage() {
    return { title: 'Login Page' };
  }

  // Proses Login
  @Post('login')
  async login(@Body() body, @Res() res: Response, @Req() req) {
    // Ambil data dari form
    const { email, password } = body;

    // Panggil Service untuk cek ke Database
    // (Pastikan kamu sudah buat auth.service.ts sesuai langkah sebelumnya ya!)
    const user = await this.authService.validateUser(email, password);

    if (user) {
      // BERHASIL: Simpan sesi dan lempar ke Dashboard
      req.session.user = user;
      return res.redirect('/dashboard'); 
    } else {
      // GAGAL: Balikin ke login
      return res.redirect('/auth/login?error=InvalidCredentials');
    }
  }
}