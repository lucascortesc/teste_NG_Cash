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
  name: string;
  account: IAccount;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface schemaUserProps extends IUserLogin {
  confirmPassword?: number;
}
