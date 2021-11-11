import { Field, Int } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DeckWord } from '../deck-word/deck-word.model';
import { WordCount } from './word-count.output';

@ObjectType()
export class Word {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => [DeckWord], { nullable: true })
  deckWords?: Array<DeckWord>;

  @Field(() => WordCount, { nullable: true })
  _count?: WordCount | null;
}
