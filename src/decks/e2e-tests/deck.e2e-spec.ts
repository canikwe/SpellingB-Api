import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { gql } from 'apollo-server-express';
import { Deck } from '../entities/deck.entity';
import { GqlTestRunner } from 'src/utils/e2e-tests';

describe('DeckResolver (e2e)', () => {
  let app: INestApplication;
  let deck: Deck;

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
    it('should return an array of decks', async () => {
      const query = gql`
        query {
          decks {
            id
          }
        }
      `;

      const res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        query,
      );
      const decks = res.body?.data?.decks;
      deck = decks?.[0];

      expect(decks).toBeDefined();
      expect(decks?.length).toBeGreaterThan(0);
    });
  });

  describe('findOne()', () => {
    it('should return a deck', async () => {
      const query = gql`
        query {
          deck(id: ${deck?.id}) {
            id
          }
        }
      `;
      const res = await GqlTestRunner.sendGqlRequest(
        app.getHttpServer(),
        query,
      );

      expect(res.body?.data?.deck).toBeDefined();
    });
  });
});
