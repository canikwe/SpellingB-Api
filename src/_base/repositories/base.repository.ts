import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from 'src/_base/services/prisma.service';

/**
 * Repository wrapper class for Base Repository. Contains all persistence and
 * logging logic instead of mixing with the service's business logic.
 */
@Injectable()
export class BaseRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async find(modelName: string): Promise<any[]> {
    return this.prisma[modelName].findMany();
  }

  async findOne(id: number, modelName: string): Promise<any> {
    return this.prisma[modelName].findFirst({ where: { id } });
  }
}
