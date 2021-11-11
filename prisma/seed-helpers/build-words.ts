/* eslint-disable @typescript-eslint/no-var-requires */
import { PrismaClient } from '.prisma/client';
import { Word } from 'src/@generated/prisma-nestjs-graphql/_models/word.model';
import { CreateWordInput } from 'src/words/dto/create-word.input';
const faker = require('faker');

export const buildWords = (prisma: PrismaClient): Promise<Word>[] => {
  return buildWordsList().map(async (data) => {
    return await prisma.word.upsert({
      where: { name: data.name },
      update: {},
      create: { name: data.name },
    });
  });
};

const buildWordsList = (): CreateWordInput[] => {
  return new Array(100).fill(undefined).reduce((acc: CreateWordInput[]) => {
    return acc.concat({ name: faker.random.word().toLowerCase() });
  }, []);
};
