import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Accounts } from "./accounts.entity";

@Entity("transactions")
export class Transactions {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Accounts, {
    eager: true,
  })
  debitedAccount: Accounts;

  @ManyToOne(() => Accounts, {
    eager: true,
  })
  creditedAccount: Accounts;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;
}
