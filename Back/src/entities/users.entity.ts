import { Exclude } from "class-transformer";
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Accounts } from "./accounts.entity";

@Entity("users")
@Unique(["email"])
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 128 })
  name: string;

  @Column()
  @Exclude()
  password: string;

  @OneToOne(() => Accounts, {
    eager: true,
    onDelete: "CASCADE",
  })
  account: Accounts;
}
