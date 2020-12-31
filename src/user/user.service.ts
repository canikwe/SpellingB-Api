import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor() {}

  // create(createUserInput: CreateUserInput) {
  //   return 'This action adds a new user';
  // }

  findAll(): Promise<User[]> {
    const userRepo = getRepository(User)
    const users = userRepo.createQueryBuilder().getMany()
    return users
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
