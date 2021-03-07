import { PrismaClient } from '@prisma/client';
import { buildUsers } from './seed-helpers/build-users';
import { buildWords } from './seed-helpers/build-words';
import { buildDecks } from './seed-helpers/build-decks';
import { buildDeckWords } from './seed-helpers/build-deck-words';
const prisma = new PrismaClient();

async function main() {
  /** Users Seeds */
  const users = await Promise.all(
    buildUsers().map(async (data) => {
      return await prisma.users.create({
        data,
      });
    }),
  );
  users && console.log('✨ successfully seeded users');

  /** Words seeds */
  const words = await Promise.all(
    buildWords().map(async (data) => {
      return await prisma.words.upsert({
        where: { name: data.name },
        update: {},
        create: { name: data.name },
      });
    }),
  );
  words && console.log('✨ successfully seeded words');

  /** Decks seeds */
  const decks = await Promise.all(
    buildDecks(users[0]).map(async (data) => {
      return await prisma.decks.create({
        data,
      });
    }),
  );
  decks && console.log('✨ successfully seeded decks');

  /** DeckWords seeds */
  const deckWords = await Promise.all(
    buildDeckWords(words, decks[0]).map(async (data) => {
      return await prisma.deckWords.create({
        data,
      });
    }),
  );
  deckWords && console.log('✨ successfully seeded deckWords');
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
