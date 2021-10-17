import { CreateDeckWordInput } from 'src/deck-words/dto/create-deck-word.input';
import { Deck } from 'src/@generated/prisma-nestjs-graphql/deck/deck.model';
import { Word } from 'src/@generated/prisma-nestjs-graphql/word/word.model';

export const buildDeckWords = (words: Word[], deck: Deck) => {
  const filteredWords = words.filter((_, i) => i % 2 === 0);
  return filteredWords.map<CreateDeckWordInput>((word, i) => ({
    order: i,
    starred: false,
    wordId: word.id,
    deckId: deck.id,
  }));
};
