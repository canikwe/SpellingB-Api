import { Injectable } from '@nestjs/common';
import { DeckWordRepository } from '../repositories/deck-word.repository';

@Injectable()
export class DeckWordsService {
  constructor(private readonly _deckWordRepository: DeckWordRepository) {}

  findAll() {
    return this._deckWordRepository.find();
  }

  findOne(id: number) {
    return this._deckWordRepository.findOne(id);
  }
}
