import { Test, TestingModule } from '@nestjs/testing';
import { BaseService } from '../services/base.service';
import { BaseResolver } from './base.resolver';
import { createSpyFromClass } from '../../utils/unit-tests/create-spy-from-class';
import { Spy } from 'src/utils/unit-tests/spy.type';

describe('BaseResolver', () => {
  let resolver: mockResolver;
  let serviceSpy: Spy<BaseService>;

  class mockClass {
    name: 'My Awesome Class Name';
  }

  class mockResolver extends BaseResolver(mockClass) {
    constructor() {
      super(createSpyFromClass(BaseService));
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        mockResolver,
        { provide: BaseService, useValue: createSpyFromClass(BaseService) },
      ],
    }).compile();

    resolver = module.get(mockResolver);
    serviceSpy = module.get(BaseService);
  });

  it('should be defined', () => {
    console.log(resolver);
    console.log(serviceSpy);
    expect(resolver).toBeDefined();
  });
});
