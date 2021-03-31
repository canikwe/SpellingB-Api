import { Test, TestingModule } from '@nestjs/testing';
import { createSpyFromClass } from 'src/utils/unit-tests';
import { BaseService } from 'src/_base/services/base.service';
import { DeckWordsResolver } from './deck-words.resolver';

describe('DeckWordsResolver', () => {
  let resolver: DeckWordsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeckWordsResolver,
        {
          provide: BaseService,
          useValue: createSpyFromClass(BaseService),
        },
      ],
    }).compile();

    resolver = module.get<DeckWordsResolver>(DeckWordsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
