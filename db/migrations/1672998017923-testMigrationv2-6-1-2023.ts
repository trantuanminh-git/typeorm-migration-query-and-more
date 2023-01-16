import { MigrationInterface, QueryRunner } from "typeorm";

export class testMigrationv26120231672998017923 implements MigrationInterface {
    name = 'testMigrationv26120231672998017923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "something1234" TO "something12345"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "something12345" TO "something1234"`);
    }

}
