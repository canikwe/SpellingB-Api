import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { createSpyFromClass } from '../../utils/unit-tests/create-spy-from-class';
import { BaseService } from '../../_base/services/base.service';
import { Deck, deckFactory } from '../../decks/entities/deck.entity';
import { User, userFactory } from '../entities/user.entity';

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

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(resolver).toBeDefined();
    });
  });

  describe('decks()', () => {
    let result: Deck[];

    beforeEach(async () => {
      resolver.decksLoader = {
        load: jest.fn().mockReturnValue(deckFactory.buildList(5)),
      } as any;
      result = await resolver.decks(userFactory.build() as User);
    });

    it('should return a list of decks', () => {
      expect(result.length).toBe(5);
    });
  });
});
