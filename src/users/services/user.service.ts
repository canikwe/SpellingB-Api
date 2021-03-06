import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '@prisma/client';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UsersRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UsersRepository) {}

  findAll(): Promise<Users[]> {
    return this._userRepository.find();
  }

  findOne(id: number): Promise<Users> {
    return this._userRepository.findOne(id);
  }
}
