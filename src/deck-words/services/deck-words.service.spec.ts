import { Test, TestingModule } from '@nestjs/testing';
import { DeckWordsService } from './deck-words.service';
import { DeckWordRepository } from '../repositories/deck-word.repository';
import { createSpyFromClass } from 'test/unit-tests';

describe('DeckWordsService', () => {
  let service: DeckWordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeckWordsService,
        {
          provide: DeckWordRepository,
          useValue: createSpyFromClass(DeckWordRepository),
        },
      ],
    }).compile();

    service = module.get<DeckWordsService>(DeckWordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
