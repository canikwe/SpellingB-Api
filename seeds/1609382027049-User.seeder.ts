import { CreateUserInput } from 'src/user/dto/create-user.input';
import { User } from 'src/user/entities/user.entity';
import { getRepository } from 'typeorm';
const faker = require('faker');

export default {
  name: 'User',
  timeStamp: 1609382027049,
  up: async () => {
    const userRepo = getRepository(User);
    const userInserts = buildUsers();
    const result = await userRepo.insert(userInserts);

    return result.generatedMaps.length;
  },
  down: async () => {
    await getRepository(User).delete({});
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