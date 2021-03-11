import { Module } from '@nestjs/common';
import { DeckResolver } from './resolvers/deck.resolver';
import { DeckService } from './services/deck.service';
import { DeckRepository } from './repositories/deck.repository';
import { BaseModule } from '../_base/base.module';

@Module({
  imports: [BaseModule],
  providers: [DeckResolver, DeckService, DeckRepository],
  exports: [DeckService],
})
export class DeckModule {}
