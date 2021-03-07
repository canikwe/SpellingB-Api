import { Word } from '../../src/words/entities/word.entity';
import { Deck } from '../../src/decks/entities/deck.entity';
import { CreateDeckWordInput } from 'src/deck-words/dto/create-deck-word.input';

export const buildDeckWords = (words: Word[], deck: Deck) => {
  const filteredWords = words.filter((_, i) => i % 2 === 0);
  return filteredWords.map<CreateDeckWordInput>((word, i) => ({
    order: i,
    starred: false,
    wordId: word.id,
    deckId: deck.id,
  }));
};
