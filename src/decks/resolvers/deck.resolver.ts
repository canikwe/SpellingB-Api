import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
// import { BaseService } from 'src/_base/services/base.service';
import { Deck } from '../entities/deck.entity';
import { userLoader } from 'src/_loaders';
import { User } from 'src/users/entities/user.entity';
import { DeckService } from '../services/deck.service';
import { DecksWhereInput } from '../dto/decks-where.inpt';

@Resolver(() => Deck)
export class DeckResolver extends BaseResolver(Deck) {
  userLoader = userLoader;

  constructor(
    // private readonly baseService: BaseService,
    private readonly deskService: DeckService,
  ) {
    super(deskService);
  }

  @Query(() => [Deck], { name: 'decks' })
  findAll(
    @Args('where', { type: () => DecksWhereInput }) where: DecksWhereInput,
  ) {
    console.log(DecksWhereInput);
    return this.deskService.findAll();
  }

  @ResolveField(() => User)
  async user(@Parent() deck: Deck): Promise<User> {
    const { userId } = deck;
    return this.userLoader.load(userId);
  }
}
