import * as Factory from 'factory.ts';
import { baseFactory } from 'src/_factories/base.factory';
import { DeckWord } from '../@generated/prisma-nestjs-graphql/_models/deck-word.model';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');

export const wordFactory = Factory.Sync.makeFactory<Partial<DeckWord>>({
  starred: faker.datatype.boolean(),
  order: faker.random.number(),
  wordId: faker.random.number(),
  deckId: faker.random.number(),
}).combine(baseFactory);
