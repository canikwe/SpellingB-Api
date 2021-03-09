import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/_base/entities/common.entity';
import { DeckWord } from 'src/deck-words/entities/deck-word.entity';

@ObjectType()
export class Deck extends BaseEntity {
  @Field()
  title: string;

  @Field()
  isPublic: boolean;

  @Field((type) => Int)
  userId: number;

  @Field((type) => User)
  user?: User;

  @Field((type) => [DeckWord])
  deckWords?: DeckWord[];
}
