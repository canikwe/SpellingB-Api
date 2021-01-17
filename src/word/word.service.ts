import { Injectable } from '@nestjs/common';
import { CreateWordInput } from './dto/create-word.input';
import { UpdateWordInput } from './dto/update-word.input';
import { Word } from './entities/word.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class WordService {
  async findAll(): Promise<Word[]> {
    return getRepository(Word).find();
  }
}
