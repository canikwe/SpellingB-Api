import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../services/user.service';
import { UsersRepository } from './user.repository';

describe('UserRepository', () => {
  let repository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersRepository, UserService],
    }).compile();

    repository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
