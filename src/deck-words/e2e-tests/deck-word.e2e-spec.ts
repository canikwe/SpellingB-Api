import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { gql } from 'apollo-server-express';
import { GqlTestRunner } from 'test/e2e-tests';
import { DeckWord } from 'src/@generated/prisma-nestjs-graphql/_models/deck-word.model';

describe('DeckWordResolver (e2e)', () => {
  let app: INestApplication;
  let deckWord: DeckWord;

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
    it('should return an array of deckWords', async () => {
      const query = gql`
        query {
          DeckWords {
            id
          }
        }
      `;

      const res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        query,
      );
      const deckWords = res.body?.data?.DeckWords;
      deckWord = deckWords?.[0];

      expect(deckWords).toBeDefined();
      expect(deckWords?.length).toBeGreaterThan(0);
    });
  });

  describe('findOne()', () => {
    it('should return a DeckWord', async () => {
      const query = gql`
        query {
          DeckWord(id: ${deckWord?.id}) {
            id
          }
        }
      `;
      const res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        query,
      );

      expect(res.body?.data?.DeckWord).toBeDefined();
    });
  });
});
