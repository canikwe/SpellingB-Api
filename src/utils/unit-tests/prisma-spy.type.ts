export type PrismaSpy = {
  [key: string]: PrismaActionsSpy;
};

export class PrismaActionsSpy {
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
