import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseEntity, baseFactory } from 'src/_base/entities/base.entity';
import * as Factory from 'factory.ts';
import * as faker from 'faker';
import { Deck } from 'src/@generated/prisma-nestjs-graphql/deck/deck.model';

export const deckFactory = Factory.Sync.makeFactory<Partial<Deck>>({
  title: faker.random.word(),
  isPublic: faker.random.boolean(),
  userId: faker.random.number(),
}).combine(baseFactory);
