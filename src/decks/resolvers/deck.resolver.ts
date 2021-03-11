import { Resolver } from '@nestjs/graphql';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { CreateDeckInput } from '../dto/create-deck.input';
import { UpdateDeckInput } from '../dto/update-deck.input';
import { Deck } from '../entities/deck.entity';
import { DeckService } from '../services/deck.service';

@Resolver(() => Deck)
export class DeckResolver extends BaseResolver(Deck) {
  constructor(private readonly deckService: DeckService) {
    super(deckService, CreateDeckInput, UpdateDeckInput);
  }

  // @ResolveField((type) => [User], { name: 'user' })
  // async user(@Parent() deck: Deck): Promise<User> {
  //   const { userId } = deck;
  //   return this.userService.findOne(userId);
  // }
}
