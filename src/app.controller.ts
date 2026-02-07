import { Controller, Get, Render, Req, Res } from '@nestjs/common';

@Controller()
export class AppController {
  
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello World' };
  }

  // --- TAMBAHAN BARU ---
  @Get('dashboard')
  @Render('dashboard')
  dashboard(@Req() req, @Res() res) {
    // Cek apakah user sudah login?
    if (!req.session.user) {
      return res.redirect('/auth/login'); // Kalau belum, tendang balik ke login
    }
    return { user: req.session.user };
  }
  // --------------------
}