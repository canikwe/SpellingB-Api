import { BaseService } from '../services/base.service';
import { BaseResolver } from './base.resolver';
import { BaseResolverHostType } from '../types/base-resolver-host.type';
import { Spy, createSpyFromClass } from 'src/utils/unit-tests';

describe('BaseResolver', () => {
  let resolver: BaseResolverHostType;
  let serviceSpy: Spy<BaseService>;
  class mockClass {
    name = 'My Awesome Class Name';
  }

  beforeEach(() => {
    serviceSpy = (createSpyFromClass(
      BaseService,
    ) as unknown) as Spy<BaseService>;
    const base = BaseResolver(mockClass);
    resolver = new base(serviceSpy);
  });

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(resolver).toBeDefined();
    });
  });

  describe('findAll()', () => {
    let result: unknown[];

    it('should return the list of entities', () => {
      serviceSpy.findAll.mockReturnValue([{}]);
      result = resolver.findAll();

      expect(result.length).toBe(1);
    });
  });

  describe('findOne()', () => {
    let result: unknown;

    it('should return the list of entities', () => {
      serviceSpy.findOne.mockReturnValue({ id: 1 });
      result = resolver.findOne(1);

      expect(result).toEqual({ id: 1 });
    });
  });
});
