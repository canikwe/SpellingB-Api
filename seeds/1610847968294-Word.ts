import { getRepository } from 'typeorm';
import { Word } from 'src/word/entities/word.entity';
import { CreateWordInput } from '../src/word/dto/create-word.input';
const faker = require('faker');

/**
 * This file is structured in the way the seeder cli can run seeds (insert records into the database) and revert seeds (remove seeds from the database).
 * It assumes a certain file structure, so please double check imports.
 * @property {string} name - Typically the name of the seeded table. Used to run single seed files. This must match the name on your seed file.
 * @property {number} timeStamp - Needed to run the seeds in order. This must match the timestamp on your seed file.
 * @property {method} up - Logic that inserts records into the database table. Must retrun a Promise of type number.
 * @property {method} down - Logic that removes records from the database table. Returns nothing.
 */
export default {
  name: 'Word' /** Do not update */,
  timeStamp: 1610847968294 /** Do not update */,
  up: async (): Promise<number> => {
    /**
     * Hint: start by commenting these lines in.
     */

    /** Get the Word repository to access Type ORM repository methods on the Entity */
    const wordRepository = getRepository(Word);
    const wordInserts = buildWords();

    /** Adds records to the Word database table */
    const result = await wordRepository.insert(wordInserts);

    /** Return the number of inserted table records */
    return result.generatedMaps.length;
  },
  down: async (): Promise<void> => {
    /** Removes records from the Word database table */
    await getRepository(Word).delete({});
  },
};

const buildWords = (): CreateWordInput[] => {
  return new Array(10).fill(undefined).reduce((acc: CreateWordInput[]) => {
    return acc.concat({ name: faker.random.word().toLowerCase() });
  }, []);
};
