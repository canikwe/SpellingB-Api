import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Sync } from 'factory.ts';
const faker = require('faker');

@ObjectType()
export abstract class BaseEntity {
  @Field(() => Int)
  id: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

export const baseFactory = Sync.makeFactory({
  id: faker.random.number(),
  createdAt: Sync.each(() => new Date()),
  updatedAt: Sync.each(() => new Date()),
});
