import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Deck } from '../deck/deck.model';
import { Word } from '../word/word.model';

@ObjectType()
export class DeckWord {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Boolean, { nullable: false })
  starred!: boolean;

  @Field(() => Int, { nullable: false })
  order!: number;

  @Field(() => Int, { nullable: false })
  wordId!: number;

  @Field(() => Int, { nullable: false })
  deckId!: number;

  @Field(() => Deck, { nullable: false })
  deck?: Deck;

  @Field(() => Word, { nullable: false })
  word?: Word;
}
