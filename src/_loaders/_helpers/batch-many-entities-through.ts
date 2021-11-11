import { groupBy, camelCase, Dictionary } from 'lodash';
import { prisma } from '../../../prisma/client';
import { BatchConfig } from './batch-config.interface';

export const batchManyEntitiesThrough = async <T>({
  ids,
  foreignKey,
  relationName,
  entity,
}: BatchConfig<typeof entity>): Promise<T[][]> => {
  const batchConfig = { ids, foreignKey, relationName, entity };
  const entities = await getEntities<T>(batchConfig);
  const relations = getRelations<T>(batchConfig, entities);
  return relations;
};

const getEntities = async <T>(batchConfig: BatchConfig<T>): Promise<T[]> => {
  const entityName = camelCase((batchConfig.entity as any).name);
  const findManyConfig = getFindManyConfig<T>(batchConfig);
  return prisma[entityName].findMany(findManyConfig);
};

const getFindManyConfig = <T>(batchConfig: BatchConfig<T>) => {
  const { ids, foreignKey, relationName } = batchConfig;
  return {
    where: { [foreignKey]: { in: ids } },
    include: { [relationName]: true },
  };
};

const getRelations = <T>(
  { ids, relationName, foreignKey }: BatchConfig<T>,
  entities: T[],
): T[][] => {
  const entitiesByFk = groupBy(entities, foreignKey);
  return ids.map((id) => mapRelation(id, entitiesByFk, relationName));
};

const mapRelation = <T>(
  id: number,
  entitiesByFk: Dictionary<T[]>,
  relationName: string,
) => {
  return entitiesByFk[id]?.map((entity) => entity[relationName]) ?? [];
};
