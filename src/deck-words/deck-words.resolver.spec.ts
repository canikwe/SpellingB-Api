import { Test, TestingModule } from '@nestjs/testing';
import { DeckWordsResolver } from './deck-words.resolver';
import { DeckWordsService } from './deck-words.service';

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
