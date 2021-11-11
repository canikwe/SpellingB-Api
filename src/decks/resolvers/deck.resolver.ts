import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { BaseService } from 'src/_base/services/base.service';
import { userLoader } from 'src/_loaders';
import { Deck } from 'src/@generated/prisma-nestjs-graphql/_models/deck.model';
import { User } from 'src/@generated/prisma-nestjs-graphql/_models/user.model';
import { FindManyDeckArgs } from 'src/@generated/prisma-nestjs-graphql/deck/find-many-deck.args';

@Resolver(() => Deck)
export class DeckResolver extends BaseResolver({
  entityRef: Deck,
  findManyInputRef: FindManyDeckArgs,
}) {
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
