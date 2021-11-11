import { CreateDeckWordInput } from 'src/deck-words/dto/create-deck-word.input';
import { Deck } from 'src/@generated/prisma-nestjs-graphql/_models/deck.model';
import { Word } from 'src/@generated/prisma-nestjs-graphql/_models/word.model';
import { PrismaClient } from '@prisma/client';

export const buildDeckWords = (
  prisma: PrismaClient,
  words: Word[],
  deck: Deck,
) => {
  return buildDeckWordsList(words, deck).map(async (data) => {
    return await prisma.deckWord.create({
      data,
    });
  });
};

const buildDeckWordsList = (words: Word[], deck: Deck) => {
  const filteredWords = words.filter((_, i) => i % 2 === 0);
  return filteredWords.map<CreateDeckWordInput>((word, i) => ({
    order: i,
    starred: false,
    wordId: word.id,
    deckId: deck.id,
  }));
};
