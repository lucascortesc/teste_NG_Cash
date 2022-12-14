import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

interface IAccount {
  id: string;
  balance: number;
}

export interface IUser {
  id: string;
  username: string;
  account: IAccount;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface schemaUserProps extends IUserLogin {
  confirmPassword?: number;
}

export interface schameTransactionProps {
  username: string;
  value: number;
}

export interface ITransaction {
  id: string;
  value: number;
  debitedAccount: string;
  creditedAccount: string;
  createdAt: string;
}
