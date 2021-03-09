import { Test, TestingModule } from '@nestjs/testing';
import { createPrismaSpy } from 'src/utils/unit-tests';
import { PrismaService } from '../services/prisma.service';
import { BaseRepository } from './base.repository';

describe('BaseRepository', () => {
  let repository: BaseRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BaseRepository,
        {
          provide: PrismaService,
          useValue: createPrismaSpy('users'),
        },
      ],
    }).compile();
    repository = module.get(BaseRepository);
  });

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(repository).toBeDefined();
    });
  });
});
