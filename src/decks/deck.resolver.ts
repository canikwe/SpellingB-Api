import {
  Resolver,
  ResolveField,
  Parent,
  Args,
  Mutation,
} from '@nestjs/graphql';
import { DeckService } from './deck.service';
import { Deck } from './entities/deck.entity';
import { User } from '../users/entities/user.entity';
import { UserService } from '../users/user.service';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { CreateDeckInput } from './dto/create-deck.input';
import { UpdateDeckInput } from './dto/update-deck.input';

@Resolver(() => Deck)
export class DeckResolver extends BaseResolver(Deck) {
  constructor(
    private readonly deckService: DeckService,
    private readonly userService: UserService,
  ) {
    super(deckService, CreateDeckInput, UpdateDeckInput);
  }

  @Mutation(() => Deck, {
    name: 'deck_createOne',
  })
  createOne(@Args('createDeckInput') createInput: CreateDeckInput) {
    // return this.deckService.createOne(createInput);
  }

  @ResolveField((type) => [User], { name: 'user' })
  async user(@Parent() deck: Deck): Promise<User> {
    const { userId } = deck;
    return this.userService.findOne(userId);
  }
}
