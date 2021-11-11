/* eslint-disable @typescript-eslint/no-var-requires */
import { User } from 'src/@generated/prisma-nestjs-graphql/_models/user.model';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { PrismaClient } from '@prisma/client';
const faker = require('faker');

export const buildUsers = (prisma: PrismaClient): Promise<User>[] => {
  return buildUsersList().map(async (data) => {
    return await prisma.user.create({
      data,
    });
  });
};

const buildUsersList = (): CreateUserInput[] => {
  return new Array(1).fill(undefined).reduce((acc: CreateUserInput[]) => {
    return acc.concat({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    });
  }, []);
};
