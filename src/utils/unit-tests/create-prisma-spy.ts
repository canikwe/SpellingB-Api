export const createPrismaSpy = (
  modelNames: string[],
): { [key: string]: PrismaActionsSpy } => {
  return modelNames.reduce((mockPrismaClient, modelName) => {
    mockPrismaClient[modelName] = new PrismaActionsSpy();
    return mockPrismaClient;
  }, {} as { [key: string]: PrismaActionsSpy });
};

class PrismaActionsSpy {
  findUnique = jest.fn();
  findMany = jest.fn();
  findFirst = jest.fn();
  create = jest.fn();
  createMany = jest.fn();
  update = jest.fn();
  updateMany = jest.fn();
  upsert = jest.fn();
  delete = jest.fn();
  deleteMany = jest.fn();
  executeRaw = jest.fn();
  queryRaw = jest.fn();
  aggregate = jest.fn();
  count = jest.fn();
}
