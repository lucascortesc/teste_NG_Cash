import { Exclude } from "class-transformer";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./accounts.entity";

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 128 })
  username: string;

  @Exclude()
  @Column()
  password: string;

  @OneToOne(() => Accounts, {
    eager: true,
    onDelete: "CASCADE",
    nullable: false,
  })
  @JoinColumn({ name: "accountId" })
  account: Accounts;
}
