import * as DataLoader from 'dataloader';
import { Deck } from 'src/@generated/prisma-nestjs-graphql/_models/deck.model';
import { batchManyEntities } from './_helpers/batch-many-entities';

async function batchDecks(
  ids: number[],
  foreignKey: string,
): Promise<Deck[][]> {
  return batchManyEntities<Deck>({ ids, foreignKey, entity: Deck });
}

export const decksLoader = (foreignKey: string) =>
  new DataLoader((ids: number[]) => batchDecks(ids, foreignKey));
