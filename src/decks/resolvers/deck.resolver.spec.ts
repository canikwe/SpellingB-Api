import { Test, TestingModule } from '@nestjs/testing';
import { createSpyFromClass } from 'test/unit-tests';
import { DeckResolver } from './deck.resolver';
import { userFactory } from '../../_factories/user.factory';
import { deckFactory } from '../../_factories/deck.factory';
import { BaseService } from '../../_base/services/base.service';
import { Deck } from 'src/@generated/prisma-nestjs-graphql/_models/deck.model';
import { User } from 'src/@generated/prisma-nestjs-graphql/_models/user.model';

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
      (resolver as any).userLoader = {
        load: jest.fn().mockReturnValue(userFactory.build()),
      } as any;
      result = await resolver.user(deckFactory.build() as Deck);
    });

    it('should return the user', () => {
      expect(result).toBeDefined();
    });
  });
});
