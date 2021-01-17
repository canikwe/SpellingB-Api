import { Injectable } from '@nestjs/common';
import { FindManyOptions, getRepository } from 'typeorm';
import { Deck } from './entities/deck.entity';

@Injectable()
export class DeckService {
  findAll(options?: FindManyOptions<Deck>): Promise<Deck[]> {
    return getRepository(Deck).find(options);
  }
}
