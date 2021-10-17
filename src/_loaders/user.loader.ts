import * as DataLoader from 'dataloader';
import { keyBy } from 'lodash';
import { prisma } from '../../prisma/client';

async function batchUsers(userIds: number[]) {
  const users = await prisma.user.findMany({
    where: {
      id: { in: userIds },
    },
  });
  const usersById = keyBy(users, 'id');
  return userIds.map((id) => usersById[id] ?? null);
}

export const userLoader = new DataLoader(batchUsers);
