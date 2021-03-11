import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { createSpyFromClass } from '../../utils/unit-tests/create-spy-from-class';
import { BaseService } from '../../_base/services/base.service';

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        { provide: BaseService, useValue: createSpyFromClass(BaseService) },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
