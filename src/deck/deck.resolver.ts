import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { DeckService } from './deck.service';
import { Deck } from './entities/deck.entity';
import { User } from '../users/entities/user.entity';
import { UserService } from '../users/user.service';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';

@Resolver(() => Deck)
export class DeckResolver extends BaseResolver(Deck) {
  constructor(
    private readonly deckService: DeckService,
    private readonly userService: UserService,
  ) {
    super(deckService);
  }

  @ResolveField((type) => [User], { name: 'user' })
  async user(@Parent() deck: Deck): Promise<User> {
    const { userId } = deck;
    return this.userService.findOne(userId);
  }
}
