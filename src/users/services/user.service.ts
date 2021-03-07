import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UsersRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UsersRepository) {}

  findAll(): Promise<User[]> {
    return this._userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this._userRepository.findOne(id);
  }
}
