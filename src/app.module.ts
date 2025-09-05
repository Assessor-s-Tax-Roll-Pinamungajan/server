import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AnislagModule } from './anislag/anislag.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AnislagModule, PrismaModule, UsersModule],
})
export class AppModule {}
