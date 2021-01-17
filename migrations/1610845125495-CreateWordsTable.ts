import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateWordsTable1610845125495 implements MigrationInterface {
    name = 'CreateWordsTable1610845125495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Words" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_5c34b8c60f9ea27c67ba5369cc8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Words"`);
    }

}
