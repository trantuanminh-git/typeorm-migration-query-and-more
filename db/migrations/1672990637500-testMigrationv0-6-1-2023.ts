import { MigrationInterface, QueryRunner } from "typeorm";

export class testMigrationv06120231672990637500 implements MigrationInterface {
    name = 'testMigrationv06120231672990637500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "something" TO "something123"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "something123" TO "something"`);
    }

}
