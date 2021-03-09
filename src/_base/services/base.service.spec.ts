import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';
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
    repositorySpy = (<unknown>(
      module.get(BaseRepository)
    )) as Spy<BaseRepository>;
  });

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });

  describe('findOne()', () => {
    let result;

    beforeEach(() => {
      spyOn(repositorySpy, 'findOne').and.returnValue({});
    });

    it('should return a foo', () => {
      result = service.findOne(1, 'foos');
      expect(result).toEqual({});
    });
  });

  describe('findAll()', () => {
    let result;

    beforeEach(() => {
      spyOn(repositorySpy, 'find').and.returnValue([{}, {}]);
    });

    it('should return a foo', () => {
      result = service.findAll('foos');
      expect(result).toEqual([{}, {}]);
    });
  });
});
