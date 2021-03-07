import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Word } from '../../words/entities/word.entity';
import { Deck } from '../../decks/entities/deck.entity';
import { CommonEntity } from '../../_base/entities/common.entity';

@ObjectType()
@Entity('DeckWords')
export class DeckWord extends CommonEntity {
  @Field()
  @Column()
  starred: boolean;

  @Field((type) => Int)
  @Column()
  order: number;

  @Field((type) => Word)
  @ManyToOne(() => Word, (word) => word.deckWords)
  word: Word;

  @Field((type) => Int)
  @Column('integer')
  wordId: number;

  @Field((type) => Deck)
  @ManyToOne(() => Deck, (deck) => deck.deckWords)
  deck: Deck;

  @Field((type) => Int)
  @Column('integer')
  deckId: number;
}
