import * as DataLoader from 'dataloader';
import { groupBy } from 'lodash';
import { prisma } from '../../prisma/client';

async function batchDecks(ids: number[], fk: string) {
  const decks = await prisma.decks.findMany({
    where: {
      [fk]: { in: ids },
    },
  });
  const decksById = groupBy(decks, fk);
  return ids.map((id) => decksById[id] ?? []);
}

export const decksLoader = (foreignKey: string) =>
  new DataLoader((ids: number[]) => batchDecks(ids, foreignKey));
