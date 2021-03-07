import { Injectable } from '@nestjs/common';
import { Deck } from '../entities/deck.entity';
import { DeckRepository } from '../repositories/deck.repository';

@Injectable()
export class DeckService {
  constructor(private readonly _deckRepository: DeckRepository) {}

  findAll(): Promise<Deck[]> {
    return this._deckRepository.find();
  }

  findOne(id: number) {
    return this._deckRepository.findOne(id);
  }
}
