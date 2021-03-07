import { CreateDeckInput } from 'src/decks/dto/create-deck.input';
import { User } from '../../src/users/entities/user.entity';
const faker = require('faker');

export const buildDecks = (user: User): CreateDeckInput[] => {
  return new Array(2).fill(undefined).reduce((acc: CreateDeckInput[]) => {
    return acc.concat({
      title: faker.random.words(3),
      isPublic: faker.random.boolean(),
      userId: user.id,
    });
  }, [] as CreateDeckInput[]);
};
