import { Module } from '@nestjs/common';
import { PrismaService } from '../_base/services/prisma.service';
import { WordRepository } from './repositories/word.repository';
import { WordResolver } from './resolvers/word.resolver';
import { WordService } from './services/word.service';
import { BaseModule } from '../_base/base.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [WordResolver, WordService, WordRepository, PrismaService],
  imports: [HttpModule, BaseModule],
})
export class WordModule {}
