import { Module } from '@nestjs/common';
import { AnislagService } from './anislag.service';
import { AnislagController } from './anislag.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AnislagController],
  providers: [AnislagService, PrismaService],
})
export class AnislagModule {}
