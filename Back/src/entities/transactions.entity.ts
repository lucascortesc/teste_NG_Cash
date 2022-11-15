import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Users } from "./users.entity";

@Entity("users")
export class Accounts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Accounts, {
    eager: true,
  })
  debitedAccountId: Users;

  @ManyToOne(() => Accounts, {
    eager: true,
  })
  creditedAccountId: Users;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;
}
