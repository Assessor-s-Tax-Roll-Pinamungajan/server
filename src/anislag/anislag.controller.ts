import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AnislagService } from './anislag.service';
import { Prisma } from '@prisma/client';

@Controller('anislag')
export class AnislagController {
  constructor(private anislagService: AnislagService) {}



 //no touch
  @Get('indexes')
  getUniqueIndexes() {
    return this.anislagService.getUniqueIndexes();
  }
  
  @Get('barangays')
  getUniqueBarangays() {
    return this.anislagService.getUniqueBarangays();
  }
//no touch


@Get()
getAll() {
  return this.anislagService.getAll();
}




  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: Prisma.AnislagUpdateInput) {
    return this.anislagService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.anislagService.delete(id);
  }

  @Post()
  create(@Body() dto: Prisma.AnislagCreateInput) {
    return this.anislagService.create(dto);
  }
  
  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
      return this.anislagService.get(id);
  }

  
  
}
