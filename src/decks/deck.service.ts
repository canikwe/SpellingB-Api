import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Deck } from './entities/deck.entity';

@Injectable()
export class DeckService {
  constructor(
    @InjectRepository(Deck) private readonly _deckRepository: Repository<Deck>,
  ) {}

  findAll(options?: FindManyOptions<Deck>): Promise<Deck[]> {
    return this._deckRepository.find(options);
  }

  findOne(id: number) {
    return this._deckRepository.findOne(id);
  }
}
