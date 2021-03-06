import { Test, TestingModule } from '@nestjs/testing';
import { DeckWordRepository } from './deck-word.repository';

describe('DeckWordRepository', () => {
  let repository: DeckWordRepository
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ DeckWordRepository ],
    }).compile();
    repository = module.get(DeckWordRepository);
  });
  
  describe('Initialization', () => {
    it('should be defined', () => {
      expect(repository).toBeDefined();
    });
  });
});
