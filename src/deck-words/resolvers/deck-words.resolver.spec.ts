import { Test, TestingModule } from '@nestjs/testing';
import { DeckWordsService } from '../services/deck-words.service';
import { DeckWordsResolver } from './deck-words.resolver';

describe('DeckWordsResolver', () => {
  let resolver: DeckWordsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeckWordsResolver, DeckWordsService],
    }).compile();

    resolver = module.get<DeckWordsResolver>(DeckWordsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
