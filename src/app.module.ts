import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AnislagModule } from './anislag/anislag.module';

@Module({
  imports: [ AnislagModule],
})
export class AppModule {}
