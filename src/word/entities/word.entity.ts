import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';
import { CommonEntity } from 'src/_shared/entities/common.entity';
import { DeckWord } from 'src/deck-words/entities/deck-word.entity';

@ObjectType()
@Entity('Words')
export class Word extends CommonEntity {
  @Field()
  @Column({ unique: true })
  name: string;

  @Field((type) => [DeckWord])
  @OneToMany(() => DeckWord, (deckWord) => deckWord.word)
  deckWords: DeckWord[];
}
