import { Injectable } from '@nestjs/common';
import { DeckRepository } from '../repositories/deck.repository';

@Injectable()
export class DeckService {
  constructor(private readonly deckRepository: DeckRepository) {}
}
