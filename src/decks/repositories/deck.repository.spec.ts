import { Test, TestingModule } from '@nestjs/testing';
import { createPrismaSpy } from 'src/utils/unit-tests';
import { PrismaService } from 'src/_base/services/prisma.service';
import { DeckRepository } from './deck.repository';

describe('DeckRepository', () => {
  let repository: DeckRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeckRepository,
        {
          provide: PrismaService,
          useValue: createPrismaSpy(['decks']),
        },
      ],
    }).compile();
    repository = module.get(DeckRepository);
  });

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(repository).toBeDefined();
    });
  });
});
