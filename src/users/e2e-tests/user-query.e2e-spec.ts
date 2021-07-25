import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { gql } from 'apollo-server-express';
import { User } from '../entities/user.entity';
import { GqlTestRunner } from 'src/utils/e2e-tests';

describe('UserResolver (e2e)', () => {
  let app: INestApplication;
  let firstUser: User;

  // ==========================================================================
  // CONFIG 🌈
  // ==========================================================================

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

  // ==========================================================================
  // TESTS 🧪
  // ==========================================================================

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(app).toBeDefined();
    });
  });

  describe('findAll()', () => {
    it('should return an array of users', async () => {
      const res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        findAllQuery(),
      );
      const users = res.body?.data?.Users;
      firstUser = users?.[0];

      expect(users).toBeDefined();
      expect(users?.length).toBeGreaterThan(0);
    });
  });

  describe('findOne()', () => {
    it('should return a specific user', async () => {
      const res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        findOneQuery(),
      );

      expect(res.body?.data?.User).toBeDefined();
    });
  });

  // ==========================================================================
  // HELPERS 🤙🏾
  // ==========================================================================

  const findAllQuery = () => {
    return gql`
      query {
        Users {
          id

          decks {
            id
          }
        }
      }
    `;
  };

  const findOneQuery = () => {
    return gql`
        query {
          User(id: ${firstUser?.id}) {
            id

            decks {
              id
            }
          }
        }
      `;
  };
});
