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
