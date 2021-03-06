import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { gql } from 'apollo-server-express';
import { GqlTestRunner } from 'src/utils/gql-test-runner.utils';
import { User } from '../entities/user.entity';

describe('UserResolver (e2e)', () => {
  let app: INestApplication;
  let firstUser: User;

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
    it('should return an array of users', async () => {
      const query = gql`
        query {
          users {
            id
          }
        }
      `;

      const res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        query,
      );
      const users = res.body?.data?.users;
      firstUser = users?.[0];

      expect(users).toBeDefined();
      expect(users?.length).toBeGreaterThan(0);
    });
  });

  describe('findOne()', () => {
    it('should return some users', async () => {
      const query = gql`
        query {
          user(id: ${firstUser?.id}) {
            id
          }
        }
      `;
      const res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        query,
      );

      expect(res.body?.data?.user).toBeDefined();
    });
  });
});
