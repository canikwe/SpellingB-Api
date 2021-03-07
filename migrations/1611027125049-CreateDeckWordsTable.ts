import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDeckWordsTable1611027125049 implements MigrationInterface {
    name = 'CreateDeckWordsTable1611027125049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "DeckWords" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "starred" boolean NOT NULL, "order" integer NOT NULL, "wordId" integer NOT NULL, "deckId" integer NOT NULL, CONSTRAINT "PK_e1bc15f40103768afda67cc9f19" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "DeckWords" ADD CONSTRAINT "FK_40ce57cd41de2c99ba06ded833d" FOREIGN KEY ("wordId") REFERENCES "Words"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "DeckWords" ADD CONSTRAINT "FK_5dac0af713e2620a079499acbc1" FOREIGN KEY ("deckId") REFERENCES "Decks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "DeckWords" DROP CONSTRAINT "FK_5dac0af713e2620a079499acbc1"`);
        await queryRunner.query(`ALTER TABLE "DeckWords" DROP CONSTRAINT "FK_40ce57cd41de2c99ba06ded833d"`);
        await queryRunner.query(`DROP TABLE "DeckWords"`);
    }

}
