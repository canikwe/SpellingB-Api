import { Test, TestingModule } from '@nestjs/testing';
import { createPrismaSpy } from 'src/utils/unit-tests';
import { PrismaService } from 'src/_base/services/prisma.service';
import { WordRepository } from './word.repository';

describe('WordRepository', () => {
  let repository: WordRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WordRepository,
        {
          provide: PrismaService,
          useValue: createPrismaSpy('words'),
        },
      ],
    }).compile();
    repository = module.get(WordRepository);
  });

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(repository).toBeDefined();
    });
  });
});
