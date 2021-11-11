import * as DataLoader from 'dataloader';
import { batchManyEntities } from './_helpers/batch-many-entities';
import { DeckWord } from '../@generated/prisma-nestjs-graphql/_models/deck-word.model';

async function batchDeckWords(
  ids: number[],
  foreignKey: string,
): Promise<DeckWord[][]> {
  return batchManyEntities<DeckWord>({ ids, foreignKey, entity: DeckWord });
}

export const deckWordsLoader = (foreignKey: string) =>
  new DataLoader((ids: number[]) => batchDeckWords(ids, foreignKey));
