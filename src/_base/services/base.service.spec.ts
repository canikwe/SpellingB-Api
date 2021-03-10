import { Test, TestingModule } from '@nestjs/testing';
import { BaseService } from './base.service';
import { BaseRepository } from '../repositories/base.repository';
import { createSpyFromClass } from '../../utils/unit-tests/create-spy-from-class';
import { Spy } from 'src/utils/unit-tests/spy.type';

describe('PrismaService', () => {
  let service: BaseService;
  let repositorySpy: Spy<BaseRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BaseService,
        {
          provide: BaseRepository,
          useValue: createSpyFromClass(BaseRepository),
        },
      ],
    }).compile();

    service = module.get<BaseService>(BaseService);
    repositorySpy = module.get(BaseRepository);
  });

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });

  describe('findOne()', () => {
    let result: any;

    beforeEach(() => {
      repositorySpy.findOne.mockResolvedValue({});
    });

    it('should return a foo', async () => {
      result = await service.findOne(1, 'foos');
      expect(result).toEqual({});
    });
  });

  describe('findAll()', () => {
    let result: any[];

    beforeEach(() => {
      repositorySpy.find.mockResolvedValue([{}, {}]);
    });

    it('should return a foo', async () => {
      result = await service.findAll('foos');
      expect(result).toEqual([{}, {}]);
    });
  });
});
