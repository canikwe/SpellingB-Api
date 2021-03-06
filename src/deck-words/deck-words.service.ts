import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeckWord } from './entities/deck-word.entity';

@Injectable()
export class DeckWordsService {
  constructor(
    @InjectRepository(DeckWord)
    private readonly _deckWordRepository: Repository<DeckWord>,
  ) {}

  findAll() {
    return this._deckWordRepository.find();
  }

  findOne(id: number) {
    return this._deckWordRepository.findOne(id);
  }
}
