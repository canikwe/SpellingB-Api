import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  findAll(): Promise<User[]> {
    return this._userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this._userRepository.findOne(id);
  }
}
