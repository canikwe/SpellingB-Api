import { ObjectType, Field } from '@nestjs/graphql';
import { CommonEntity } from 'src/_base/entities/common.entity';
import { DeckWord } from 'src/deck-words/entities/deck-word.entity';

@ObjectType()
export class Word extends CommonEntity {
  @Field()
  name: string;

  @Field((type) => [DeckWord])
  deckWords?: DeckWord[];
}
