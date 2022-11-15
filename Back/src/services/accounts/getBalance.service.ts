import { IAccount } from "../../interfaces";
import AppDataSource from "../../data-source";
import { Accounts } from "../../entities/accounts.entity";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";

export const getBalanceService = async (userId: string): Promise<IAccount> => {
  const userRepository = AppDataSource.getRepository(Users);
  const accountRespository = AppDataSource.getRepository(Accounts);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("Usuario não encontrado");
  }
  return user.account;
};
