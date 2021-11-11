import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { BaseResolver } from 'src/_base/resolvers/base.resolver';
import { BaseService } from 'src/_base/services/base.service';
import { userLoader, deckWordsLoader } from 'src/_loaders';
import { Deck } from 'src/@generated/prisma-nestjs-graphql/_models/deck.model';
import { User } from 'src/@generated/prisma-nestjs-graphql/_models/user.model';
import { FindManyDeckArgs } from 'src/@generated/prisma-nestjs-graphql/deck/find-many-deck.args';
import { DeckWord } from '../../@generated/prisma-nestjs-graphql/_models/deck-word.model';

@Resolver(() => Deck)
export class DeckResolver extends BaseResolver({
  entityRef: Deck,
  findManyInputRef: FindManyDeckArgs,
}) {
  private deckWordsLoader = deckWordsLoader('deckId');
  private userLoader = userLoader;

  constructor(private readonly baseService: BaseService) {
    super(baseService);
  }

  @ResolveField(() => User)
  async user(@Parent() { userId }: Deck): Promise<User> {
    return this.userLoader.load(userId);
  }

  @ResolveField(() => DeckWord)
  async deckWords(@Parent() { id }: Deck): Promise<DeckWord[]> {
    return this.deckWordsLoader.load(id);
  }
}
