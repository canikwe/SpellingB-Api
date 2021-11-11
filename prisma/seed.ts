import { PrismaClient } from '@prisma/client';
import { buildUsers } from './seed-helpers/build-users';
import { buildWords } from './seed-helpers/build-words';
import { buildDecks } from './seed-helpers/build-decks';
import { buildDeckWords } from './seed-helpers/build-deck-words';
const prisma = new PrismaClient();

async function main() {
  /** Users Seeds */
  const users = await Promise.all(buildUsers(prisma));
  users && console.log('✨ successfully seeded users');

  /** Words seeds */
  const words = await Promise.all(buildWords(prisma));
  words && console.log('✨ successfully seeded words');

  /** Decks seeds */
  const decks = await Promise.all(buildDecks(prisma, users[0]));
  decks && console.log('✨ successfully seeded decks');

  /** DeckWords seeds */
  const deckWords = await Promise.all(buildDeckWords(prisma, words, decks[0]));
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
