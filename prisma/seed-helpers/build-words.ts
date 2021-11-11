/* eslint-disable @typescript-eslint/no-var-requires */
import { CreateWordInput } from 'src/words/dto/create-word.input';
const faker = require('faker');

export const buildWords = (): CreateWordInput[] => {
  return new Array(100).fill(undefined).reduce((acc: CreateWordInput[]) => {
    return acc.concat({ name: faker.random.word().toLowerCase() });
  }, []);
};
