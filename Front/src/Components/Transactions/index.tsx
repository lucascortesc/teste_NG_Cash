import { useState } from "react";
import { useTransactions } from "../../Providers/Transactions";
import { useUser } from "../../Providers/User";
import { Background } from "./styles";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button } from "../Button";

export const Transactions = () => {
  const { transactions, getFiltredTransactions, getTransactions } =
    useTransactions();
  const { user } = useUser();
  const [transactionType, setTransactionType] = useState<string>("all");
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const filtredtransactions = () => {
    if (transactionType === "cashin") {
      return transactions.filter(
        (transaction) => transaction.creditedAccount === user.account.id
      );
    }

    if (transactionType === "cashout") {
      return transactions.filter(
        (transaction) => transaction.debitedAccount === user.account.id
      );
    }
    return transactions;
  };

  const handleDate = (date: Date) => {
    setShowCalendar(false);
    const formatedDate = date.toLocaleString("pt-BR").split(" ")[0];
    getFiltredTransactions(formatedDate);
  };

  const handleReset = () => {
    const token = localStorage.getItem("@token");
    if (token) {
      getTransactions(token);
    }
  };

  return (
    <>
      <Background>
        <div className="transaction__filter">
          <div className="filter__wrap-buttons">
            <Button
              desing="confirm"
              type="button"
              onMouseEnter={() => setShowCalendar(true)}
            >
              Filtrar Data
            </Button>
            <Button desing="cancel" type="button" onClick={handleReset}>
              Resetar Data
            </Button>
          </div>
          <div
            onMouseLeave={() => setShowCalendar(false)}
            className="calendar__wrap"
          >
            {showCalendar && (
              <Calendar
                locale="pt-BR"
                onChange={(date: Date) => handleDate(date)}
              />
            )}
          </div>

          <select
            className=""
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="cashout">Enviados</option>
            <option value="cashin">Recebidos</option>
          </select>
        </div>
        <div className="transactions__header">
          <h1>Transações</h1>
        </div>
        {transactions.length > 0 ? (
          <div className="transactions__wrap">
            {filtredtransactions().map((transaction) => {
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
    </>
  );
};
