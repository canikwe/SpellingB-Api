import { Parent, ResolveField, Resolver} from '@nestjs/graphql'; // prettier-ignore
import { User } from '../entities/user.entity';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { BaseService } from 'src/_base/services/base.service';
import { Deck } from 'src/decks/entities/deck.entity';
import { Users } from '@prisma/client';
import { decksLoader } from 'src/_loaders';
@Resolver(User)
export class UserResolver extends BaseResolver(User) {
  decksLoader = decksLoader('userId');

  constructor(private readonly baseService: BaseService) {
    super(baseService);
  }

  @ResolveField(() => [Deck], { name: 'decks' })
  async decks(@Parent() user: Users): Promise<Deck[]> {
    const { id: userId } = user;
    return this.decksLoader.load(userId);
  }
}
