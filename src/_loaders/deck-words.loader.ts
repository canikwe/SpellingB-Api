import * as DataLoader from 'dataloader';
import { groupBy } from 'lodash';
import { prisma } from '../../prisma/client';

async function batchDeckWords(ids: number[], foreignKey: string) {
  const decks = await prisma.deck.findMany({
    where: {
      [foreignKey]: { in: ids },
    },
  });
  const decksByFk = groupBy(decks, foreignKey);
  return ids.map((id) => decksByFk[id] ?? []);
}

export const deckWordsLoader = (foreignKey: string) =>
  new DataLoader((ids: number[]) => batchDeckWords(ids, foreignKey));
