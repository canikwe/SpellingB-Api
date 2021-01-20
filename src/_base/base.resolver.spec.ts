import { Test, TestingModule } from '@nestjs/testing';
import { BaseService } from './base.service';
import { BaseResolver } from './resolvers/base.resolver';

describe('BaseResolver', () => {
  let resolver: typeof BaseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // providers: [BaseResolver, BaseService],
    }).compile();

    // resolver = module.get<BaseResolver>(BaseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
