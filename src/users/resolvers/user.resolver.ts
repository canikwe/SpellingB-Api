import { Parent, ResolveField, Resolver} from '@nestjs/graphql'; // prettier-ignore
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { BaseService } from 'src/_base/services/base.service';
import { decksLoader } from 'src/_loaders';
import { User } from 'src/@generated/prisma-nestjs-graphql/_models/user.model';
import { Deck } from 'src/@generated/prisma-nestjs-graphql/_models/deck.model';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
@Resolver(User)
export class UserResolver extends BaseResolver({
  entityRef: User,
  findManyInputRef: FindManyUserArgs,
}) {
  private decksLoader = decksLoader('userId');

  constructor(private readonly baseService: BaseService) {
    super(baseService);
  }

  @ResolveField(() => [Deck], { name: 'decks' })
  async decks(@Parent() user: User): Promise<Deck[]> {
    const { id: userId } = user;
    return this.decksLoader.load(userId);
  }
}
