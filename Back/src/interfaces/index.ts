import { Accounts } from "../entities/accounts.entity";

export interface IUserRequest {
  username: string;
  password: string;
}

export interface IUserResponse extends IUserRequest {
  id: string;
}

export interface IAccount {
  id: string;
  balance: number;
}

export interface IRetrieveUser {
  id: string;
  username: string;
  account: Accounts;
}

export interface ITransaction {
  id: string;
  value: number;
  debitedAccount: string;
  creditedAccount: string;
  createdAt: string;
}

export interface ITransactionParams {
  cashin?: string;
  cashout?: string;
  date?: string;
  year?: string;
  month?: string;
}
