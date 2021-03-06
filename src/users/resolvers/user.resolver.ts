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
import { Users } from '../entities/user.entity';

@Resolver(Users)
export class UserResolver {
  constructor(
    private readonly userService: UserService, // private readonly deckService: DeckService,
  ) {}

  @Query(() => [Users])
  users() {
    return this.userService.findAll();
  }

  @Query(() => Users)
  user(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  // @ResolveField((type) => [Deck], { name: 'decks' })
  // async decks(@Parent() user: Users): Promise<Deck[]> {
  //   const { id: userId } = user;
  //   return this.deckService.findAll({ where: { userId } });
  // }
}
