import { CreateWordInput } from 'src/words/dto/create-word.input';
const faker = require('faker');

export const buildWords = (): CreateWordInput[] => {
  const wordsArray = new Array(100).fill(undefined);
  const wordsSet: Set<CreateWordInput> = new Set(wordsArray);

  return [...wordsSet].reduce((acc: CreateWordInput[]) => {
    return acc.concat({ name: faker.random.word().toLowerCase() });
  }, []);
};
