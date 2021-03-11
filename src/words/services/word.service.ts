import { Injectable } from '@nestjs/common';
import { WordRepository } from '../repositories/word.repository';

@Injectable()
export class WordService {
  constructor(private readonly wordRepository: WordRepository) {}
}
