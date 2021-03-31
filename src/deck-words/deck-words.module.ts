import { Module } from '@nestjs/common';
import { DeckWordRepository } from './repositories/deck-word.repository';
import { PrismaService } from '../_base/services/prisma.service';
import { DeckWordsResolver } from './resolvers/deck-words.resolver';
import { DeckWordsService } from './services/deck-words.service';
import { BaseModule } from 'src/_base/base.module';

@Module({
  providers: [
    DeckWordsResolver,
    DeckWordsService,
    DeckWordRepository,
    PrismaService,
  ],
  imports: [BaseModule],
  exports: [],
})
export class DeckWordsModule {}
