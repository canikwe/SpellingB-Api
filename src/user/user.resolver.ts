import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Deck } from 'src/deck/entities/deck.entity';
import { DeckService } from 'src/deck/deck.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly deckService: DeckService,
  ) {}

  @Query(() => [User], { name: 'users' })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @ResolveField((type) => [Deck], { name: 'decks' })
  async decks(@Parent() user: User): Promise<Deck[]> {
    const { id: userId } = user;
    return this.deckService.findAll({ where: { userId } });
  }
}
