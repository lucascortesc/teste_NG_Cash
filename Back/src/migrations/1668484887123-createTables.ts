import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1668484887123 implements MigrationInterface {
    name = 'createTables1668484887123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "balance" integer NOT NULL DEFAULT '100', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "balance"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "balance" integer NOT NULL DEFAULT '100'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(128) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "value" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "debitedAccountIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD "creditedAccountIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_303d76256930bfd374971ceb672" FOREIGN KEY ("debitedAccountIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_84aae5af4b331e0e355cb085db1" FOREIGN KEY ("creditedAccountIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_84aae5af4b331e0e355cb085db1"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_303d76256930bfd374971ceb672"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "creditedAccountIdId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "debitedAccountIdId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "balance"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "balance" integer NOT NULL DEFAULT '100'`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
