import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor() {}

  findAll(): Promise<User[]> {
    const userRepo = getRepository(User);
    const users = userRepo.find();
    return users;
  }
}
