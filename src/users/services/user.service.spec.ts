import { Test, TestingModule } from '@nestjs/testing';
import { createSpyFromClass } from 'src/utils/unit-tests/create-spy-from-class';
import { Spy } from 'src/utils/unit-tests/spy.type';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let repositorySpy: Spy<UserRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: createSpyFromClass(UserRepository),
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repositorySpy = module.get(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
