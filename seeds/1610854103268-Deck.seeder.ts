import { getRepository } from 'typeorm';
import { Deck } from 'src/deck/entities/deck.entity';
import { User } from '../src/users/entities/user.entity';
import { CreateDeckInput } from '../src/deck/dto/create-deck.input';
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
  name: 'Deck' /** Do not update */,
  timeStamp: 1610854103268 /** Do not update */,
  up: async (): Promise<number> => {
    /**
     * Hint: start by commenting these lines in.
     */

    /** Get the Deck repository to access Type ORM repository methods on the Entity */
    const deckRepository = getRepository(Deck);
    const deckInserts = await buildDecks();

    /** Adds records to the Deck database table */
    const result = await deckRepository.insert(deckInserts);

    /** Return the number of inserted table records */
    return result.generatedMaps.length;
  },
  down: async (): Promise<void> => {
    /** Removes records from the Deck database table */
    await getRepository(Deck).delete({});
  },
};

const buildDecks = async () => {
  const users = await getRepository(User).find();

  return new Array(2).fill(undefined).reduce((acc: CreateDeckInput[]) => {
    return acc.concat({
      title: faker.random.words(3),
      isPublic: faker.random.boolean(),
      userId: users[0].id,
    });
  }, []);
};
