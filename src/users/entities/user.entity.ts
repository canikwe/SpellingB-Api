import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/_base/entities/base.entity';
import * as Factory from 'factory.ts';
import { baseFactory } from 'src/_base/entities/base.entity';
import { User } from 'src/@generated/prisma-nestjs-graphql/_models/user.model';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');

export const userFactory = Factory.Sync.makeFactory<Partial<User>>({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
}).combine(baseFactory);
