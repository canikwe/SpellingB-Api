import { Test, TestingModule } from '@nestjs/testing';
import { User } from 'src/users/entities/user.entity';
import { createSpyFromClass } from 'src/utils/unit-tests';
import { DeckResolver } from './deck.resolver';
import { userFactory } from '../../users/entities/user.entity';
import { Deck, deckFactory } from '../entities/deck.entity';
import { BaseService } from '../../_base/services/base.service';

describe('DeckResolver', () => {
  let resolver: DeckResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeckResolver,
        {
          provide: BaseService,
          useValue: createSpyFromClass(BaseService),
        },
      ],
    }).compile();

    resolver = module.get<DeckResolver>(DeckResolver);
  });

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(resolver).toBeDefined();
    });
  });

  describe('user()', () => {
    let result: User;

    beforeEach(async () => {
      resolver.userLoader = {
        load: jest.fn().mockReturnValue(userFactory.build()),
      } as any;
      result = await resolver.user(deckFactory.build() as Deck);
    });

    it('should return the user', () => {
      expect(result).toBeDefined();
    });
  });
});
