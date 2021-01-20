import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Deck } from 'src/deck/entities/deck.entity';
import { DeckService } from 'src/deck/deck.service';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';

@Resolver(() => User)
export class UserResolver extends BaseResolver(User) {
  constructor(
    private readonly userService: UserService,
    private readonly deckService: DeckService,
  ) {
    super(userService);
  }
  @ResolveField((type) => [Deck], { name: 'decks' })
  async decks(@Parent() user: User): Promise<Deck[]> {
    const { id: userId } = user;
    return this.deckService.findAll({ where: { userId } });
  }
}
