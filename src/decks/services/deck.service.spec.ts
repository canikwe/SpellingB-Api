import { Test, TestingModule } from '@nestjs/testing';
import { DeckService } from './deck.service';
import { DeckRepository } from '../repositories/deck.repository';
import { createSpyFromClass } from 'src/utils/unit-tests';

describe('DeckService', () => {
  let service: DeckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeckService,
        {
          provide: DeckRepository,
          useValue: createSpyFromClass(DeckRepository),
        },
      ],
    }).compile();

    service = module.get<DeckService>(DeckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
