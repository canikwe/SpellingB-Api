import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { DeckService } from './deck.service';
import { Deck } from './entities/deck.entity';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Resolver(() => Deck)
export class DeckResolver {
  constructor(
    private readonly deckService: DeckService,
    private readonly userService: UserService,
  ) {}

  @Query(() => [Deck], { name: 'decks' })
  findAll(): Promise<Deck[]> {
    return this.deckService.findAll();
  }

  @ResolveField((type) => [User], { name: 'user' })
  async user(@Parent() deck: Deck): Promise<User> {
    const { userId } = deck;
    return this.userService.findOne(userId);
  }
}
