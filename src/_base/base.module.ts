import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { BaseService } from './_types/base-service.type';

@Module({
  providers: [BaseService, PrismaService],
})
export class SharedModule {}
