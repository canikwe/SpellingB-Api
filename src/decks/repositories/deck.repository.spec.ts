import { Test, TestingModule } from '@nestjs/testing';
import { DeckRepository } from './deck.repository';

describe('DeckRepository', () => {
  let repository: DeckRepository
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ DeckRepository ],
    }).compile();
    repository = module.get(DeckRepository);
  });
  
  describe('Initialization', () => {
    it('should be defined', () => {
      expect(repository).toBeDefined();
    });
  });
});
