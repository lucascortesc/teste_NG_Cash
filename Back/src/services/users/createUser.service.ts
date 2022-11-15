import * as bcrypst from "bcryptjs";
import AppDataSource from "../../data-source";
import { Accounts } from "../../entities/accounts.entity";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import { IUserRequest, IUserResponse } from "../../interfaces";

export const createUserService = async ({
  username,
  password,
}: IUserRequest): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(Users);
  const accountRepository = AppDataSource.getRepository(Accounts);

  const usernameAlreadyExists = await userRepository.findOneBy({
    username: username,
  });

  if (usernameAlreadyExists) {
    throw new AppError("Usuário já cadastrado");
  }

  const hashedPassword = await bcrypst.hash(password, 10);

  const createdAccount = await accountRepository.save({});

  const createdUser = await userRepository.save({
    username,
    password: hashedPassword,
    account: createdAccount,
  });

  return createdUser;
};
