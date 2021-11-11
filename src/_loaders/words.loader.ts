import * as DataLoader from 'dataloader';
import { batchManyEntitiesThrough } from './_helpers/batch-many-entities-through';
import { Word } from '../@generated/prisma-nestjs-graphql/_models/word.model';
import { BatchConfig } from './_helpers/batch-config.interface';

async function batchWords<T>(batchConfig: BatchConfig<T>): Promise<Word[][]> {
  return batchManyEntitiesThrough<Word>(batchConfig);
}

export const wordsLoader = <T>(
  batchConfig: Pick<BatchConfig<T>, 'foreignKey' | 'entity' | 'relationName'>,
) => new DataLoader((ids: number[]) => batchWords({ ...batchConfig, ids }));
