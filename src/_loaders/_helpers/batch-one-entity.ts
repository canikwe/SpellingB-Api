import { prisma } from 'prisma/client';
import { keyBy, camelCase } from 'lodash';
import { BatchConfig } from './batch-config.interface';

export const batchOneEntity = async <T>({
  ids,
  entity,
}: BatchConfig<typeof entity>): Promise<T[]> => {
  const entityName = camelCase(entity.name);
  const entities = await prisma[entityName].findMany({
    where: {
      id: { in: ids },
    },
  });
  const entitiedById = keyBy(entities, 'id');
  return ids.map((id) => entitiedById[id] ?? null);
};
