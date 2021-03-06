import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CommonEntity } from 'src/_base/entities/common.entity';
import { DeckWord } from 'src/deck-words/entities/deck-word.entity';

@ObjectType()
export class Deck extends CommonEntity {
  @Field()
  title: string;

  @Field()
  isPublic: boolean;

  @Field((type) => User)
  user: User;

  @Field((type) => Int)
  userId: number;

  @Field((type) => [DeckWord])
  deckWords: DeckWord[];
}
