import { MigrationInterface, QueryRunner } from "typeorm";

export class testMigrationv16120231672991140475 implements MigrationInterface {
    name = 'testMigrationv16120231672991140475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "something123" TO "something1234"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "something1234" TO "something123"`);
    }

}
