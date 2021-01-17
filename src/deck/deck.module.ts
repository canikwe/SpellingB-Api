import { Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckResolver } from './deck.resolver';

@Module({
  providers: [DeckResolver, DeckService],
  exports: [DeckService],
})
export class DeckModule {}
