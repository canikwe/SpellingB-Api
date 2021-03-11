export type BaseResolverHostType = {
  findOne: (id: number) => unknown;
  findAll: () => unknown[];
};
