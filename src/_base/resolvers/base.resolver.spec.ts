import { BaseService } from '../services/base.service';
import { BaseResolver } from './base.resolver';

describe('BaseResolver', () => {
  let resolver: { findOne: (id: number) => any; findAll: () => any[] };

  const serviceSpy: Partial<BaseService> = {
    findAll: jest.fn().mockReturnValue([{}]),
    findOne: jest.fn().mockReturnValue({}),
  };
  class mockClass {
    name = 'My Awesome Class Name';
  }

  beforeEach(() => {
    const base = BaseResolver(mockClass);
    resolver = new base(serviceSpy);
  });

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(resolver).toBeDefined();
    });
  });

  describe('findAll()', () => {
    let result: any[];

    it('should return the list of entities', () => {
      result = resolver.findAll();

      expect(result.length).toBe(1);
    });
  });

  describe('findOne()', () => {
    let result: any[];

    it('should return the list of entities', () => {
      result = resolver.findOne(1);

      expect(result).toEqual({});
    });
  });
});
