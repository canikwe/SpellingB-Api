import { Injectable } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { DeckWord } from '../entities/deck-word.entity';
import { DeckWordsService } from '../services/deck-words.service';

@Injectable()
@Resolver((of) => DeckWord)
export class DeckWordsResolver extends BaseResolver(DeckWord) {
  constructor(private readonly deckWordsService: DeckWordsService) {
    super(deckWordsService);
  }
}
