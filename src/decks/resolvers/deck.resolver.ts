import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { BaseService } from 'src/_base/services/base.service';
import { Deck } from '../entities/deck.entity';
import { User } from 'src/graphql.schema.generated';
import { userLoader } from 'src/_data-loaders';

@Resolver(() => Deck)
export class DeckResolver extends BaseResolver(Deck) {
  userLoader = userLoader;

  constructor(private readonly baseService: BaseService) {
    super(baseService);
  }

  @ResolveField(() => User)
  async user(@Parent() deck: Deck): Promise<User> {
    const { userId } = deck;
    return this.userLoader.load(userId);
  }
}
