import { Resolver} from '@nestjs/graphql'; // prettier-ignore
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';

@Resolver(User)
export class UserResolver extends BaseResolver(User) {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  // @ResolveField((type) => [Deck], { name: 'decks' })
  // async decks(@Parent() user: Users): Promise<Deck[]> {
  //   const { id: userId } = user;
  //   return this.deckService.findAll({ where: { userId } });
  // }
}
