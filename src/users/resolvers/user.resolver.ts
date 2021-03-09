import { Resolver} from '@nestjs/graphql'; // prettier-ignore
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { BaseService } from 'src/_base/services/base.service';

@Resolver(User)
export class UserResolver extends BaseResolver(User) {
  constructor(
    private readonly baseService: BaseService,
    private readonly userService: UserService,
  ) {
    super(baseService, 'users');
  }

  // @ResolveField((type) => [Deck], { name: 'decks' })
  // async decks(@Parent() user: Users): Promise<Deck[]> {
  //   const { id: userId } = user;
  //   return this.deckService.findAll({ where: { userId } });
  // }
}
