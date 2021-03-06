import { CreateUserInput } from 'src/users/dto/create-user.input';
import { Users } from 'src/users/entities/user.entity';
import { getRepository } from 'typeorm';
const faker = require('faker');

export default {
  name: 'User',
  timeStamp: 1609382027049,
  up: async () => {
    const userRepo = getRepository(Users);
    const userInserts = buildUsers();
    const result = await userRepo.insert(userInserts);

    return result.generatedMaps.length;
  },
  down: async () => {
    await getRepository(Users).delete({});
  },
};

const buildUsers = (): CreateUserInput[] => {
  return new Array(1).fill(undefined).reduce((acc: CreateUserInput[]) => {
    return acc.concat({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    });
  }, []);
};
