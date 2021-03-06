import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
