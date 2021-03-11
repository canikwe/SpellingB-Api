import { ObjectType, Field } from '@nestjs/graphql';
import { Deck } from 'src/decks/entities/deck.entity';
import { BaseEntity } from 'src/_base/entities/base.entity';
import * as Factory from 'factory.ts';
import { baseFactory } from 'src/_base/entities/base.entity';
const faker = require('faker');

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

export const userFactory = Factory.Sync.makeFactory<Partial<User>>({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
}).combine(baseFactory);
