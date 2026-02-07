import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

// --- BAGIAN PERBAIKAN ---
// Kita pakai 'require' agar tidak ada masalah import
const session = require('express-session');
const hbs = require('hbs');
// ------------------------

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Setup Static & Views
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'views/partials'));

  // Setup Session
  app.use(
    session({
      secret: 'rahasia-magang-123', // Kunci rahasia (bebas)
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 }, // Sesi aktif 1 jam
    }),
  );

  await app.listen(3000);
}
bootstrap();