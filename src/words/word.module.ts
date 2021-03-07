import { Module } from '@nestjs/common';
import { PrismaService } from '../_base/services/prisma.service';
import { WordRepository } from './repositories/word.repository';
import { WordResolver } from './resolvers/word.resolver';
import { WordService } from './services/word.service';

@Module({
  providers: [WordResolver, WordService, WordRepository, PrismaService],
  imports: [],
})
export class WordModule {}
