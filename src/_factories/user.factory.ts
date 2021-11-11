import * as Factory from 'factory.ts';
import { User } from 'src/@generated/prisma-nestjs-graphql/_models/user.model';
import { baseFactory } from 'src/_factories/base.factory';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');

export const userFactory = Factory.Sync.makeFactory<Partial<User>>({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
}).combine(baseFactory);
