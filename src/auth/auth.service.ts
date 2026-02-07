import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    // 1. Cari user berdasarkan email
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    // 2. Jika user ada DAN password cocok
    // (PENTING: Kita pakai cek manual dulu karena di DB passwordnya belum di-hash)
    if (user && user.password === pass) {
      const { password, ...result } = user; // Buang password dari hasil return biar aman
      return result;
    }

    // 3. Jika salah, kembalikan null
    return null;
  }
}