import * as DataLoader from 'dataloader';
import { groupBy } from 'lodash';
import { prisma } from '../../prisma/client';

async function batchDecks(userIds: number[]) {
  const decks = await prisma.decks.findMany({
    where: {
      userId: { in: userIds },
    },
  });
  const decksByUserId = groupBy(decks, 'userId');
  return userIds.map((userId) => decksByUserId[userId] ?? []);
}

export const userDecksLoader = new DataLoader(batchDecks);
