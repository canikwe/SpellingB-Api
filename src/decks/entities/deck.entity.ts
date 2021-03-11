import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity, baseFactory } from 'src/_base/entities/base.entity';
import { DeckWord } from 'src/deck-words/entities/deck-word.entity';
import * as Factory from 'factory.ts';
import * as faker from 'faker';

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

export const deckFactory = Factory.Sync.makeFactory<Partial<Deck>>({
  title: faker.random.word(),
  isPublic: faker.random.boolean(),
  userId: faker.random.number(),
}).combine(baseFactory);
