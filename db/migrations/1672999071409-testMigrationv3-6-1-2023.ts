import { MigrationInterface, QueryRunner } from "typeorm";

export class testMigrationv36120231672999071409 implements MigrationInterface {
    name = 'testMigrationv36120231672999071409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "something12345"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "something12345" character varying NOT NULL`);
    }

}
