import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUserDateColumns1609415023761 implements MigrationInterface {
    name = 'UpdateUserDateColumns1609415023761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "updatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "createdAt" date NOT NULL`);
    }

}
