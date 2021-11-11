import { groupBy, camelCase } from 'lodash';
import { prisma } from '../../../prisma/client';
import { BatchConfig } from './batch-config.interface';

export const batchManyEntities = async <T>({
  ids,
  foreignKey,
  entity,
}: BatchConfig<typeof entity>): Promise<T[][]> => {
  const entityName = camelCase((entity as any).name);
  const entities = await prisma[entityName].findMany({
    where: {
      [foreignKey]: { in: ids },
    },
  });

  const entitiesByFk = groupBy(entities, foreignKey);
  return ids.map((id) => entitiesByFk[id] ?? []);
};
