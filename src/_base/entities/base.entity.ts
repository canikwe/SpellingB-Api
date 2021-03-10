import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Sync } from 'factory.ts';
const faker = require('faker');

@ObjectType()
export class Base {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

export const baseFactory = Sync.makeFactory({
  id: faker.random.number(),
  createdAt: Sync.each(() => new Date()),
  updatedAt: Sync.each(() => new Date()),
});
