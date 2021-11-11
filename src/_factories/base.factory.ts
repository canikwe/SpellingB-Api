import { Sync } from 'factory.ts';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');

export const baseFactory = Sync.makeFactory({
  id: faker.random.number(),
  createdAt: Sync.each(() => new Date()),
  updatedAt: Sync.each(() => new Date()),
});
