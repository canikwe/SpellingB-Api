import { Test, TestingModule } from '@nestjs/testing';
import { WordResolver } from './word.resolver';
import { WordService } from '../services/word.service';
import { createSpyFromClass } from '../../utils/unit-tests/create-spy-from-class';

describe('WordResolver', () => {
  let resolver: WordResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WordResolver,
        {
          provide: WordService,
          useValue: createSpyFromClass(WordService),
        },
      ],
    }).compile();

    resolver = module.get<WordResolver>(WordResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
