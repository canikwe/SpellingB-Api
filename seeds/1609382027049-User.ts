import { CreateUserInput } from 'src/user/dto/create-user.input';
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

const buildUsers = (): CreateUserInput[] => {
  const usersInserts: CreateUserInput[] = [];
  for (const userId in [1, 2, 3, 4, 5]) {
    usersInserts.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    });
  }
  return usersInserts;
};
