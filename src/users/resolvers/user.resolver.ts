import {
  Resolver,
  ResolveField,
  Parent,
  Query,
  Int,
  Args,
} from '@nestjs/graphql';

import { Deck } from 'src/decks/entities/deck.entity';
import { DeckService } from 'src/decks/deck.service';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';

@Resolver(User)
export class UserResolver {
  constructor(
    private readonly userService: UserService, // private readonly deckService: DeckService,
  ) {}

  @Query(() => [User])
  users() {
    return this.userService.findAll();
  }

  @Query(() => User)
  user(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  // @ResolveField((type) => [Deck], { name: 'decks' })
  // async decks(@Parent() user: Users): Promise<Deck[]> {
  //   const { id: userId } = user;
  //   return this.deckService.findAll({ where: { userId } });
  // }
}
