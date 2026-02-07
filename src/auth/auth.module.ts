import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma.service'; // <--- Import ini

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService], // <--- Masukkan di sini
})
export class AuthModule {}