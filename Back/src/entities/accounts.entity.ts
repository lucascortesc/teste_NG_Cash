import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accounts")
export class Accounts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: 100 })
  balance: number;
}
