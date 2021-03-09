import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { BaseService } from './services/base.service';
import { BaseRepository } from './repositories/base.repository';

@Module({
  providers: [BaseService, PrismaService, BaseRepository],
  exports: [BaseService, PrismaService, BaseRepository],
})
export class BaseModule {}
