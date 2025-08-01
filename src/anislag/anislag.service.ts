import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AnislagService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.anislag.findMany();
  }

  get(id: number) {
    return this.prisma.anislag.findUniqueOrThrow({ where: { id } });
  }

  create(data: Prisma.AnislagCreateInput) {
    return this.prisma.anislag.create({ data });
  }

  update(id: number, data: Prisma.AnislagUpdateInput) {
    return this.prisma.anislag.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prisma.anislag.delete({ where: { id } });
  }

  getUniqueIndexes() {
    return this.prisma.anislag.findMany({
      distinct: ['index_no'],
      select: { index_no: true },
      orderBy: { index_no: 'asc' }
    });
  }

  getUniqueBarangays() {
    return this.prisma.anislag.findMany({
      distinct: ['barangay'],
      select: { barangay: true },
      orderBy: { barangay: 'asc' }
    });
  }
}
