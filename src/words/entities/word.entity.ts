import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/_base/entities/base.entity';
import { DeckWord } from 'src/deck-words/entities/deck-word.entity';

@ObjectType()
export class Word extends BaseEntity {
  @Field()
  name: string;

  @Field((type) => [DeckWord])
  deckWords?: DeckWord[];
}
