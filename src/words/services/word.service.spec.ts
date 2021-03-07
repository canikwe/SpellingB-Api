import { Test, TestingModule } from '@nestjs/testing';
import { WordService } from './word.service';
import { WordRepository } from '../repositories/word.repository';
import { createSpyFromClass } from '../../utils/unit-tests/create-spy-from-class';

describe('WordService', () => {
  let service: WordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WordService,
        {
          provide: WordRepository,
          useValue: createSpyFromClass(WordRepository),
        },
      ],
    }).compile();

    service = module.get<WordService>(WordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
