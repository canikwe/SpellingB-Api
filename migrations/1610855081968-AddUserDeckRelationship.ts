import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserDeckRelationship1610855081968 implements MigrationInterface {
    name = 'AddUserDeckRelationship1610855081968'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Decks" DROP CONSTRAINT "FK_a119997bdaee9c776965df9321b"`);
        await queryRunner.query(`ALTER TABLE "Decks" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "Decks"."userId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "Decks" ADD CONSTRAINT "FK_a119997bdaee9c776965df9321b" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Decks" DROP CONSTRAINT "FK_a119997bdaee9c776965df9321b"`);
        await queryRunner.query(`COMMENT ON COLUMN "Decks"."userId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "Decks" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Decks" ADD CONSTRAINT "FK_a119997bdaee9c776965df9321b" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
