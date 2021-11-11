import { PrismaActionsSpy } from '.';

export const createPrismaSpy = (
  modelNames: string[],
): { [key: string]: PrismaActionsSpy } => {
  return modelNames.reduce((mockPrismaClient, modelName) => {
    mockPrismaClient[modelName] = new PrismaActionsSpy();
    return mockPrismaClient;
  }, {} as { [key: string]: PrismaActionsSpy });
};
