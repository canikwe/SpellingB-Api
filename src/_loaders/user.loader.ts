import * as DataLoader from 'dataloader';
import { batchOneEntity } from './_helpers/batch-one-entity';
import { User } from '../@generated/prisma-nestjs-graphql/_models/user.model';

async function batchUsers(ids: number[]): Promise<User[]> {
  return batchOneEntity<User>({ ids, entity: User });
}

export const userLoader = new DataLoader(batchUsers);
