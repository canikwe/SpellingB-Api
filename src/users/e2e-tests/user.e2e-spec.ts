import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import * as request from 'supertest';

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
      return request(app.getHttpServer())
        .post('/graphql')
        .send({ operationName: null, query: '{users{id}}' })
        .expect(({ body }) => {
          const data = body.data.users;
          expect(data.length).toBeGreaterThan(0);
          console.log(data);
        });
    });
  });
});
