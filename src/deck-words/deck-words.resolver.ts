import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { DeckWordsService } from './deck-words.service';
import { DeckWord } from './entities/deck-word.entity';

@Resolver(() => DeckWord)
export class DeckWordsResolver {
  constructor(private readonly deckWordsService: DeckWordsService) {}

  @Query(() => [DeckWord], { name: 'deckWords' })
  findAll() {
    return this.deckWordsService.findAll();
  }

  @Query(() => DeckWord, { name: 'deckWord' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.deckWordsService.findOne(id);
  }
}
