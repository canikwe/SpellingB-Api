import { Test, TestingModule } from '@nestjs/testing';
import { WordRepository } from './word.repository';

describe('WordRepository', () => {
  let repository: WordRepository
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ WordRepository ],
    }).compile();
    repository = module.get(WordRepository);
  });
  
  describe('Initialization', () => {
    it('should be defined', () => {
      expect(repository).toBeDefined();
    });
  });
});
