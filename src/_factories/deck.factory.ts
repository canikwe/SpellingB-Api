import { baseFactory } from 'src/_factories/base.factory';
import * as Factory from 'factory.ts';
import * as faker from 'faker';
import { Deck } from 'src/@generated/prisma-nestjs-graphql/_models/deck.model';

export const deckFactory = Factory.Sync.makeFactory<Partial<Deck>>({
  title: faker.random.word(),
  isPublic: faker.datatype.boolean(),
  userId: faker.datatype.number(),
}).combine(baseFactory);
