import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Word } from '../../words/entities/word.entity';
import { Deck } from '../../decks/entities/deck.entity';
import { BaseEntity } from '../../_base/entities/base.entity';

@ObjectType()
export class DeckWord extends BaseEntity {
  @Field()
  starred: boolean;

  @Field((type) => Int)
  order: number;

  @Field((type) => Int)
  wordId: number;

  @Field((type) => Int)
  deckId: number;

  @Field((type) => Word)
  word?: Word;

  @Field((type) => Deck)
  deck?: Deck;
}
