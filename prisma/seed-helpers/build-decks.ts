import faker from 'faker';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';

export const buildDecks = (user: User): any[] => {
  return new Array(2).fill(undefined).reduce((acc: any[]) => {
    return acc.concat({
      title: faker.random.words(3),
      isPublic: faker.random.boolean(),
      userId: user.id,
    });
  }, [] as any[]);
};
