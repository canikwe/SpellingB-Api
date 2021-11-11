import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../repositories/base.repository';

@Injectable()
export class BaseService {
  constructor(private readonly baseRepository: BaseRepository) {}

  findOne(id: number, modelName: string): Promise<any> {
    return this.baseRepository.findOne(id, modelName);
  }

  findAll<T>(modelName: string, findManyArgs?: T): Promise<any[]> {
    return this.baseRepository.find(modelName, findManyArgs);
  }
}
