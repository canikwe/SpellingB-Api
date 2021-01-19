import { getRepository, Repository } from 'typeorm';
import { DeckWord } from 'src/deck-words/entities/deck-word.entity';
import { Word } from '../src/word/entities/word.entity';
import { Deck } from '../src/deck/entities/deck.entity';
import { CreateDeckWordInput } from '../src/deck-words/dto/create-deck-word.input';

/**
 * This file is structured in the way the seeder cli can run seeds (insert records into the database) and revert seeds (remove seeds from the database).
 * It assumes a certain file structure, so please double check imports.
 * @property {string} name - Typically the name of the seeded table. Used to run single seed files. This must match the name on your seed file.
 * @property {number} timeStamp - Needed to run the seeds in order. This must match the timestamp on your seed file.
 * @property {method} up - Logic that inserts records into the database table. Must retrun a Promise of type number.
 * @property {method} down - Logic that removes records from the database table. Returns nothing.
 */
export default {
  name: 'DeckWord' /** Do not update */,
  timeStamp: 1611027452125 /** Do not update */,
  up: async (): Promise<number> => {
    /**
     * Hint: start by commenting these lines in.
     */

    /** Get the DeckWord repository to access Type ORM repository methods on the Entity */
    const deckwordRepository = getRepository(DeckWord);
    const deckWordInserts = await buildDeckWords();

    /** Adds records to the DeckWord database table */
    const result = await deckwordRepository.insert(deckWordInserts);

    /** Return the number of inserted table records */
    return result.generatedMaps.length;
  },
  down: async (): Promise<void> => {
    /** Removes records from the DeckWord database table */
    await getRepository(DeckWord).delete({});
  },
};

const buildDeckWords = async () => {
  const words = await getRepository(Word).find();
  const decks = await getRepository(Deck).find();

  const filteredWords = words.filter((_, i) => i % 2 === 0);
  return filteredWords.map<CreateDeckWordInput>((word, i) => ({
    order: i,
    starred: false,
    wordId: word.id,
    deckId: decks[0].id,
  }));
};
