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

  async update(id: number, data: Prisma.AnislagUpdateInput) {
    // Handle transfer tracking for ANY cancellation type that has reference lots
    if (data.cancel_reason && data.cancel_details) {
      const cancelDetails = data.cancel_details as any;
      console.log('Cancellation tracking - cancelDetails:', cancelDetails);
      
      if (cancelDetails.lots && cancelDetails.lots.length > 0) {
        // Get the current lot's assessor_no first
        const currentLot = await this.prisma.anislag.findUnique({ where: { id } });
        const currentAssessorNo = currentLot?.assessor_no;
        
        console.log(`Cancelling Lot ${currentAssessorNo} (ID: ${id}) due to ${data.cancel_reason}`);
        console.log(`Reference lots:`, cancelDetails.lots);
        
        // Update ALL reference lots to point back to this cancelled lot
        for (const referenceLot of cancelDetails.lots) {
          const targetLotId = referenceLot.id;
          
          console.log(`Updating lot ID ${targetLotId} to reference cancelled lot ${currentAssessorNo}`);
          
          const updateResult = await this.prisma.anislag.update({
            where: { id: targetLotId },
            data: {
              transferred_from: {
                id: id,
                assessor_no: currentAssessorNo
              }
            }
          });
          
          console.log('Reference lot updated:', {
            id: updateResult.id,
            assessor_no: updateResult.assessor_no,
            name_owner: updateResult.name_owner,
            transferred_from: updateResult.transferred_from
          });
        }
      }
    }
    
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
