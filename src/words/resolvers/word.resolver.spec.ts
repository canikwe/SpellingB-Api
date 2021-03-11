import { Test, TestingModule } from '@nestjs/testing';
import { WordResolver } from './word.resolver';
import { createSpyFromClass } from '../../utils/unit-tests/create-spy-from-class';
import { BaseService } from '../../_base/services/base.service';

describe('WordResolver', () => {
  let resolver: WordResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WordResolver,
        {
          provide: BaseService,
          useValue: createSpyFromClass(BaseService),
        },
      ],
    }).compile();

    resolver = module.get<WordResolver>(WordResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
