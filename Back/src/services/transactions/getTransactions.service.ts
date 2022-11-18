import AppDataSource from "../../data-source";
import { Accounts } from "../../entities/accounts.entity";
import { Transactions } from "../../entities/transactions.entity";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import { ITransaction, ITransactionParams } from "../../interfaces";

export const getTransactionsService = async (
  userId: string,
  params: ITransactionParams
): Promise<ITransaction[]> => {
  const userRepository = AppDataSource.getRepository(Users);
  const transactionRepository = AppDataSource.getRepository(Transactions);

  const user = await userRepository.findOneBy({ id: userId });

  const cashout = Object.keys(params).some((key) => key === "cashout");
  const cashin = Object.keys(params).some((key) => key === "cashin");

  if (cashout && cashin) {
    throw new AppError("Você deve escolher entre cashin e cashout");
  }

  if (!user) {
    throw new AppError("Usuário não encontrado");
  }

  const transactions = await transactionRepository.find({
    where: whereParams(cashin, cashout, user.account),
  });

  const ResponseTransaction = filterTransactionsbyDate(
    transactions,
    params
  ).map((transaction) => {
    return {
      id: transaction.id,
      value: transaction.value,
      creditedAccount: transaction.creditedAccount.id,
      debitedAccount: transaction.debitedAccount.id,
      createdAt: transaction.createdAt.toString(),
    };
  });

  return ResponseTransaction.reverse();
};

const whereParams = (cashin: boolean, cashout: boolean, account: Accounts) => {
  if (cashin) {
    return [{ creditedAccount: account }];
  }
  if (cashout) {
    return [{ debitedAccount: account }];
  }
  return [{ creditedAccount: account }, { debitedAccount: account }];
};

const filterTransactionsbyDate = (
  transactions: Transactions[],
  params: ITransactionParams
) => {
  if (params.date) {
    return transactions.filter(
      ({ createdAt }) => createdAt.toLocaleDateString() === params.date
    );
  }

  if (params.month) {
    const year = params.year ? params.year : new Date().getFullYear();

    return transactions.filter(
      ({ createdAt }) =>
        createdAt.getMonth() + 1 === Number(params.month) &&
        createdAt.getFullYear() === Number(year)
    );
  }

  if (params.year) {
    return transactions.filter(
      ({ createdAt }) => createdAt.getFullYear() === Number(params.year)
    );
  }

  return transactions;
};
