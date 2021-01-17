import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor() {}

  // create(createUserInput: CreateUserInput) {
  //   return 'This action adds a new user';
  // }

  findAll(): Promise<User[]> {
    const userRepo = getRepository(User);
    const users = userRepo.find();
    return users;
  }

  findOne(id: number): Promise<User> {
    const userRepo = getRepository(User);
    return userRepo.findOne(id);
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
