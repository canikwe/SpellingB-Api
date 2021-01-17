import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeckService } from './deck.service';
import { Deck } from './entities/deck.entity';

@Resolver(() => Deck)
export class DeckResolver {
  constructor(private readonly deckService: DeckService) {}

  @Query(() => [Deck], { name: 'decks' })
  findAll(): Promise<Deck[]> {
    return this.deckService.findAll();
  }
}
