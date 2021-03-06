import { Module } from '@nestjs/common';
import { BaseService } from './base.service';
import { PrismaService } from './services/prisma.service';

@Module({
  providers: [BaseService, PrismaService],
})
export class SharedModule {}
