import AppDataSource from "../../data-source";
import { Transactions } from "../../entities/transactions.entity";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import { ITransaction } from "../../interfaces";

export const getTransactionsService = async (
  userId: string
): Promise<ITransaction[]> => {
  const userRepository = AppDataSource.getRepository(Users);
  const transactionRepository = AppDataSource.getRepository(Transactions);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("Usuário não encontrado");
  }

  const transactions = await transactionRepository.find({
    where: [
      { debitedAccount: user.account },
      { creditedAccount: user.account },
    ],
  });

  const ResponseTransaction = transactions.map((transaction) => {
    return {
      id: transaction.id,
      value: transaction.value,
      creditedAccount: transaction.creditedAccount.id,
      debitedAccount: transaction.debitedAccount.id,
      createdAt: transaction.createdAt.toString(),
    };
  });

  return ResponseTransaction;
};
