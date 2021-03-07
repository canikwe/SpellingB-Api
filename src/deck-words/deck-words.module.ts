import { Module } from '@nestjs/common';
import { DeckWordRepository } from './repositories/deck-word.repository';
import { PrismaService } from '../_base/services/prisma.service';
import { DeckWordsResolver } from './resolvers/deck-words.resolver';
import { DeckWordsService } from './services/deck-words.service';

@Module({
  providers: [
    DeckWordsResolver,
    DeckWordsService,
    DeckWordRepository,
    PrismaService,
  ],
  imports: [],
  exports: [],
})
export class DeckWordsModule {}
