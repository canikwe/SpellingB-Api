/* eslint-disable @typescript-eslint/no-var-requires */
const faker = require('faker');
import { User } from 'src/@generated/prisma-nestjs-graphql/_models/user.model';
import { PrismaClient } from '.prisma/client';
import { Deck } from 'src/@generated/prisma-nestjs-graphql/_models/deck.model';

export const buildDecks = (
  prisma: PrismaClient,
  user: User,
): Promise<Deck>[] => {
  return buildDecksList(user).map(async (data) => {
    return await prisma.deck.create({
      data,
    });
  });
};

const buildDecksList = (user: User): any[] => {
  return new Array(2).fill(undefined).reduce((acc: any[]) => {
    return acc.concat({
      title: faker.random.words(3),
      isPublic: faker.datatype.boolean(),
      userId: user.id,
    });
  }, [] as any[]);
};
