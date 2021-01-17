import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Deck } from './entities/deck.entity';

@Injectable()
export class DeckService {
  findAll(): Promise<Deck[]> {
    return getRepository(Deck).find();
  }
}
