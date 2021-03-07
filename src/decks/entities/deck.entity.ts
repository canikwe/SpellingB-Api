import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CommonEntity } from 'src/_base/entities/common.entity';
import { DeckWord } from 'src/deck-words/entities/deck-word.entity';

@ObjectType()
@Entity('Decks')
export class Deck extends CommonEntity {
  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  isPublic: boolean;

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.decks)
  user: User;

  @Field((type) => Int)
  @Column('int')
  userId: number;

  @Field((type) => [DeckWord])
  @OneToMany(() => DeckWord, (deckWord) => deckWord.deck)
  deckWords: DeckWord[];
}
