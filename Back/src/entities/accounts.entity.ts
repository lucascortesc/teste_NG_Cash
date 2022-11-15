import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class Accounts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: 100 })
  balance: number;
}
