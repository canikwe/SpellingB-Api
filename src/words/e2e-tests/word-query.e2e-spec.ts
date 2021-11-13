import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { GqlTestRunner } from '../../../test/e2e-tests';
import { Word } from 'src/@generated/prisma-nestjs-graphql/_models/word.model';
import {
  RandomWordAndDefinitionQuery,
  WordQuery,
  WordsAndDefinitionsQuery,
  WordsQuery,
} from './queries';
import supertest from 'supertest';

describe('Word Query (e2e)', () => {
  let app: INestApplication;
  let word: Word;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(app).toBeDefined();
    });
  });

  describe('findAll()', () => {
    let res: supertest.Response;

    beforeEach(async () => {
      res = await GqlTestRunner.sendGqlRequest(app.getHttpServer(), WordsQuery);
    });

    it('should return an array of words', async () => {
      const words = res.body?.data?.Words;
      word = words?.[0];

      expect(words).toBeDefined();
      expect(words?.length).toBeGreaterThan(0);
    });
  });

  describe('findOne()', () => {
    let res: supertest.Response;

    beforeEach(async () => {
      res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        WordQuery(word),
      );
    });

    it('should return a word', async () => {
      expect(res.body?.data?.Word).toBeDefined();
    });
  });

  describe('getRandomWordAndDefinition()', () => {
    let res: supertest.Response;

    beforeEach(async () => {
      res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        RandomWordAndDefinitionQuery,
      );
    });

    it('should return a random word', async () => {
      expect(res.body?.data?.RandomWordAndDefinition).toBeDefined();
    });
  });

  describe('getWordsAndDefinitions()', () => {
    let res: supertest.Response;

    beforeEach(async () => {
      res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        WordsAndDefinitionsQuery,
      );
    });

    it('should return words', async () => {
      expect(res.body?.data?.WordsAndDefinitions).toBeDefined();
      expect(res.body?.data?.WordsAndDefinitions).toBeInstanceOf(Array);
    });
  });
});
