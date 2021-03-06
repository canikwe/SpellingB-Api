import { Injectable } from '@nestjs/common';
import { Word } from '../entities/word.entity';
import { WordRepository } from '../repositories/word.repository';

@Injectable()
export class WordService {
  constructor(private readonly _wordRepository: WordRepository) {}

  findAll(): Promise<Word[]> {
    return this._wordRepository.find();
  }

  findOne(id: number) {
    return this._wordRepository.findOne(id);
  }
}
