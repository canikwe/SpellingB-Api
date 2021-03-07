import { ObjectType, Field } from '@nestjs/graphql';
import { Deck } from 'src/decks/entities/deck.entity';
import { BaseEntity } from 'src/_base/entities/base.entity';

@ObjectType()
export class User extends BaseEntity {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field((type) => [Deck])
  decks?: Deck[];
}
