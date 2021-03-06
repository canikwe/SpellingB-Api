import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Users } from 'src/users/entities/user.entity';
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

  @Field((type) => Users)
  @ManyToOne((type) => Users, (user) => user.decks)
  user: Users;

  @Field((type) => Int)
  @Column('int')
  userId: number;

  @Field((type) => [DeckWord])
  @OneToMany(() => DeckWord, (deckWord) => deckWord.deck)
  deckWords: DeckWord[];
}
