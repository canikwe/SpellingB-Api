import * as Factory from 'factory.ts';
import { baseFactory } from 'src/_factories/base.factory';
import { Word } from '../@generated/prisma-nestjs-graphql/_models/word.model';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');

export const wordFactory = Factory.Sync.makeFactory<Partial<Word>>({
  name: faker.name.firstName(),
}).combine(baseFactory);
