import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { gql } from 'apollo-server-express';
import { Word } from '../entities/word.entity';
import { GqlTestRunner } from 'src/utils/e2e-tests';

describe('WordResolver (e2e)', () => {
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
    it('should return an array of words', async () => {
      const query = gql`
        query {
          Words {
            id
          }
        }
      `;

      const res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        query,
      );
      const words = res.body?.data?.Words;
      word = words?.[0];

      expect(words).toBeDefined();
      expect(words?.length).toBeGreaterThan(0);
    });
  });

  describe('findOne()', () => {
    it('should return a word', async () => {
      const query = gql`
        query {
          Word(id: ${word?.id}) {
            id
          }
        }
      `;
      const res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        query,
      );

      expect(res.body?.data?.Word).toBeDefined();
    });
  });
});
