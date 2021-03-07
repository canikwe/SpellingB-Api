import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDecksTable1610853455900 implements MigrationInterface {
    name = 'CreateDecksTable1610853455900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Decks" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "isPublic" boolean NOT NULL, "userId" integer, CONSTRAINT "PK_001f26cb3ec39c1f25269943473" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Decks" ADD CONSTRAINT "FK_a119997bdaee9c776965df9321b" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Decks" DROP CONSTRAINT "FK_a119997bdaee9c776965df9321b"`);
        await queryRunner.query(`DROP TABLE "Decks"`);
    }

}
