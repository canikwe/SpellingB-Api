import { Module } from '@nestjs/common';
import { PrismaService } from '../_base/services/prisma.service';
import { WordRepository } from './repositories/word.repository';
import { WordResolver } from './resolvers/word.resolver';
import { WordService } from './services/word.service';
import { BaseModule } from '../_base/base.module';

@Module({
  providers: [WordResolver, WordService, WordRepository, PrismaService],
  imports: [BaseModule],
})
export class WordModule {}
