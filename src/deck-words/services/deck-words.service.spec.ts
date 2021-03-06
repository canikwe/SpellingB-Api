import { Test, TestingModule } from '@nestjs/testing';
import { DeckWordsService } from './deck-words.service';

describe('DeckWordsService', () => {
  let service: DeckWordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeckWordsService],
    }).compile();

    service = module.get<DeckWordsService>(DeckWordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
