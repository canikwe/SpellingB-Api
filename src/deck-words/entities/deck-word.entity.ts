import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Word } from '../../words/entities/word.entity';
import { Deck } from '../../decks/entities/deck.entity';
import { CommonEntity } from '../../_base/entities/common.entity';

@ObjectType()
export class DeckWord extends CommonEntity {
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
