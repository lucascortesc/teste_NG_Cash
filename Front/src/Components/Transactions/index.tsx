import { useTransactions } from "../../Providers/Transactions";
import { useUser } from "../../Providers/User";
import { Background } from "./styles";

export const Transactions = () => {
  const { transactions } = useTransactions();
  const { user } = useUser();

  return (
    <Background>
      <div className="transactions__header">
        <h1>Transações</h1>
      </div>
      {transactions.length > 0 ? (
        <div className="transactions__wrap">
          {transactions.map((transaction) => {
            return (
              <div className="transactions__transaction" key={transaction.id}>
                <h6 className="transaction__date">
                  {new Date(transaction.createdAt).toLocaleString()}
                </h6>
                <div className="transaction__wrap">
                  <h3>
                    {user.account &&
                    transaction.creditedAccount === user.account.id
                      ? "RECEBIDO"
                      : "ENVIADO"}
                  </h3>
                  <h3
                    className={
                      user.account &&
                      transaction.creditedAccount === user.account.id
                        ? "cashin"
                        : "cashout"
                    }
                  >
                    {user.account &&
                    transaction.creditedAccount === user.account.id
                      ? "+"
                      : "-"}
                    {transaction.value.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 className="transactions__empty">
          Você não possue nenhuma transação
        </h2>
      )}
    </Background>
  );
};
