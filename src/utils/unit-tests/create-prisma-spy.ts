import { PrismaService } from 'src/_base/services/prisma.service';

export const createPrismaSpy = (modelName: string): Partial<PrismaService> => {
  return {
    [modelName]: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      findUnique: jest.fn(),
    },
  };
};
