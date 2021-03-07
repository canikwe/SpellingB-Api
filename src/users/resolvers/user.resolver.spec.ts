import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../services/user.service';
import { UserResolver } from './user.resolver';
import { createSpyFromClass } from '../../utils/unit-tests/create-spy-from-class';

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        { provide: UserService, useValue: createSpyFromClass(UserService) },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
