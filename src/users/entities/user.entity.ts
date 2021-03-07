import { ObjectType, Field } from '@nestjs/graphql';
import { Deck } from 'src/decks/entities/deck.entity';
import { CommonEntity } from 'src/_base/entities/common.entity';

@ObjectType()
export class User extends CommonEntity {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field((type) => [Deck])
  decks?: Deck[];
}
