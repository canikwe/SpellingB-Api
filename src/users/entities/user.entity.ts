import { ObjectType, Field } from '@nestjs/graphql';
import { Deck } from 'src/decks/entities/deck.entity';
import { CommonEntity } from 'src/_base/entities/common.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@ObjectType()
@Entity('Users')
export class User extends CommonEntity {
  @Field()
  @Column({ type: 'varchar', length: 255 })
  firstName: string;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Field((type) => [Deck])
  @OneToMany((type) => Deck, (deck) => deck.user)
  decks?: Deck[];
}
