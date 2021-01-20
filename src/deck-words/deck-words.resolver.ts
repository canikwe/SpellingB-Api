import { Resolver } from '@nestjs/graphql';
import { DeckWordsService } from './deck-words.service';
import { DeckWord } from './entities/deck-word.entity';
import { BaseResolver } from '../_base/resolvers/base.resolver';

import { Injectable } from '@nestjs/common';

@Injectable()
@Resolver(() => DeckWord)
export class DeckWordsResolver extends BaseResolver(DeckWord) {
  constructor(private readonly deckWordsService: DeckWordsService) {
    super(deckWordsService);
  }
}
