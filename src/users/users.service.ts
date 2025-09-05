import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(username: string, name: string, password: string) {
    if (!username ||!name || !password) {
      throw new BadRequestException('Username and password are required');
    }
    return this.prisma.user.create({ data: { username, name, password } as Prisma.UserCreateInput });
  }

  async verify(username: string, password: string) {
    if (!username || !password) {
      throw new BadRequestException('Username and password are required');
    }
    const user = await this.prisma.user.findFirst({ where: { username, password } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return { user_id: user.user_id, username: user.username, name: (user as any).name };
  }
}


