import { Injectable } from '@nestjs/common';
import { CreateBaseInput } from './dto/create-shared.input';
import { UpdateBaseInput } from './dto/update-shared.input';

@Injectable()
export class BaseService {
  create(createSharedInput: CreateBaseInput) {
    return 'This action adds a new shared';
  }

  findAll() {
    return `This action returns all shared`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shared`;
  }

  update(id: number, updateSharedInput: UpdateBaseInput) {
    return `This action updates a #${id} shared`;
  }

  remove(id: number) {
    return `This action removes a #${id} shared`;
  }
}
