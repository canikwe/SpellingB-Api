import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { gql } from 'apollo-server-express';
import { DeckWord } from '../entities/deck-word.entity';
import { GqlTestRunner } from 'src/utils/e2e-tests';

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
          deckWords {
            id
          }
        }
      `;

      const res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        query,
      );
      const deckWords = res.body?.data?.deckWords;
      deckWord = deckWords?.[0];

      expect(deckWords).toBeDefined();
      expect(deckWords?.length).toBeGreaterThan(0);
    });
  });

  describe('findOne()', () => {
    it('should return a deckWord', async () => {
      const query = gql`
        query {
          deckWord(id: ${deckWord?.id}) {
            id
          }
        }
      `;
      const res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        query,
      );

      expect(res.body?.data?.deckWord).toBeDefined();
    });
  });
});
