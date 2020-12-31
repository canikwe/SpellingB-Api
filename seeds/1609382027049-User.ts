import { User } from 'src/user/entities/user.entity';
import { Connection } from 'typeorm';
const faker = require('faker');

export default {
  name: 'User',
  timeStamp: 1609382027049,
  up: async (connection: Connection) => {
    const userRepo = connection.getRepository(User);
    const userInserts = buildUsers();
    const result = await userRepo.insert(userInserts);

    return result.generatedMaps.length;
  },
  down: async (connection: Connection) => {
    await connection.getRepository(User).delete({});
  },
};

const buildUsers = (): User[] => {
  const usersInserts: User[] = [];
  for (const userId in [1, 2, 3, 4, 5]) {
    usersInserts.push({
      id: +userId,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return usersInserts;
};
