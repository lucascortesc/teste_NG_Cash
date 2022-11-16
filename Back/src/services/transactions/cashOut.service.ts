import AppDataSource from "../../data-source";
import { Accounts } from "../../entities/accounts.entity";
import { Users } from "../../entities/users.entity";
import { Transactions } from "../../entities/transactions.entity";
import { AppError } from "../../errors/AppError";
import { ITransaction } from "../../interfaces";

export const cashOutService = async (
  userId: string,
  target: string,
  value: number
): Promise<ITransaction> => {
  const userRepository = AppDataSource.getRepository(Users);
  const accountRepository = AppDataSource.getRepository(Accounts);
  const transactionRepository = AppDataSource.getRepository(Transactions);

  const user = await userRepository.findOneBy({ id: userId });
  const targetUser = await userRepository.findOneBy({ username: target });

  if (!user) {
    throw new AppError("Usuário não encontrado");
  }

  if (!targetUser) {
    throw new AppError("Destinatário não encontrado");
  }

  if (user.id === targetUser.id) {
    throw new AppError(
      "Você não pode realizar uma transferência para si mesmo"
    );
  }

  if (user.account.balance < value) {
    throw new AppError("Saldo insuficiente");
  }

  const newUserBalance = user.account.balance - value;
  const newTargetBalance = targetUser.account.balance + value;

  await accountRepository.update(
    { id: user.account.id },
    {
      balance: newUserBalance,
    }
  );

  await accountRepository.update(
    { id: targetUser.account.id },
    {
      balance: newTargetBalance,
    }
  );

  const transaction = await transactionRepository.save({
    debitedAccount: user.account,
    creditedAccount: targetUser.account,
    value,
  });

  const responseTransaction = {
    id: transaction.id,
    value: transaction.value,
    debitedAccount: transaction.debitedAccount.id,
    creditedAccount: transaction.creditedAccount.id,
    createdAt: transaction.createdAt.toString(),
  };

  return responseTransaction;
};
