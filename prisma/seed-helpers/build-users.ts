import { CreateUserInput } from 'src/users/dto/create-user.input';
const faker = require('faker');

export const buildUsers = (): CreateUserInput[] => {
  return new Array(1).fill(undefined).reduce((acc: CreateUserInput[]) => {
    return acc.concat({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    });
  }, []);
};
