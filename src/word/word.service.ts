import { Injectable } from '@nestjs/common';
import { Word } from './entities/word.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(Word) private readonly _wordRepository: Repository<Word>,
  ) {}

  findAll(): Promise<Word[]> {
    return this._wordRepository.find();
  }

  findOne(id: number) {
    return this._wordRepository.findOne();
  }
}
