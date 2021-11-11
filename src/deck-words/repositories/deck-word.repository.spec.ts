import { Test, TestingModule } from '@nestjs/testing';
import { DeckWordRepository } from './deck-word.repository';
import { PrismaService } from '../../_base/services/prisma.service';
import { createPrismaSpy } from '../../../test/unit-tests/create-prisma-spy';

describe('DeckWordRepository', () => {
  let repository: DeckWordRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeckWordRepository,
        {
          provide: PrismaService,
          useValue: createPrismaSpy(['deckWords']),
        },
      ],
    }).compile();
    repository = module.get(DeckWordRepository);
  });

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(repository).toBeDefined();
    });
  });
});
