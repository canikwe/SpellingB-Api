import { Module } from '@nestjs/common';
import { DeckWordsService } from './deck-words.service';
import { DeckWordsResolver } from './deck-words.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeckWord } from './entities/deck-word.entity';

@Module({
  providers: [DeckWordsResolver, DeckWordsService],
  imports: [TypeOrmModule.forFeature([DeckWord])],
  exports: [TypeOrmModule],
})
export class DeckWordsModule {}
