import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { gql } from 'apollo-server-express';
import { GqlTestRunner } from 'src/utils/gql-test-runner.utils';
import { GraphQLErrorCode } from 'src/utils/gql-error-code.enum';

describe('UserResolver (e2e)', () => {
  let app: INestApplication;

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
    it('should return some users', async () => {
      const query = gql`
        query {
          users {
            id
          }
        }
      `;
      GqlTestRunner.sendGqlRequest(app.getHttpServer(), query);
    });
  });
});
