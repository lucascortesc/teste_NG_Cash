import request from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Services/api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  IChildren,
  ITransaction,
  schameTransactionProps,
} from "../../interface";
import { useUser } from "../User";

interface ITransactionsProvider {
  transactions: ITransaction[];
  clearTransactions: () => void;
  sendTransaction: (
    data: schameTransactionProps,
    setOpenModal: (arg: boolean) => void,
    setIsLoading: (arg: boolean) => void
  ) => void;
  getFiltredTransactions: (date: string) => void;
  getTransactions: (token: string) => void;
}

interface IErrorResponse {
  error: string;
}

const TransactionsContext = createContext<ITransactionsProvider>(
  {} as ITransactionsProvider
);

export const useTransactions = () => useContext(TransactionsContext);

export const TransactionsProvider = ({ children }: IChildren) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [token, setToken] = useState<string>("");

  const navigate = useNavigate();

  const { user, setUser } = useUser();

  const clearTransactions = () => {
    setTransactions([]);
  };

  const getTransactions = async (responseToken: string) => {
    try {
      const retrieveTransactions = await api.get("/transactions", {
        headers: {
          Authorization: `Bearer ${responseToken}`,
        },
      });

      setTransactions(retrieveTransactions.data);
    } catch (err) {
      if (request.isAxiosError(err)) {
        const typedErr = err.response?.data as IErrorResponse;
        typedErr
          ? toast.error(typedErr.error)
          : toast.error("Algo deu errado, tente novamente");
      }
      navigate("/");
      localStorage.clear();
    }
  };

  const getFiltredTransactions = async (date: string) => {
    try {
      const retrieveTransactions = await api.get(`/transactions?date=${date}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTransactions(retrieveTransactions.data);
    } catch (err) {
      if (request.isAxiosError(err)) {
        const typedErr = err.response?.data as IErrorResponse;
        typedErr
          ? toast.error(typedErr.error)
          : toast.error("Algo deu errado, tente novamente");
      }
      navigate("/");
      localStorage.clear();
    }
  };

  useEffect(() => {
    const retrieveToken = localStorage.getItem("@token");
    if (retrieveToken) {
      setToken(retrieveToken);

      (async function () {
        await getTransactions(retrieveToken);
      })();
    }
  }, [user]);

  const defaultCatch = (err: unknown, setIsLoading: (arg: boolean) => void) => {
    if (request.isAxiosError(err)) {
      const typedErr = err.response?.data as IErrorResponse;
      typedErr
        ? toast.error(typedErr.error)
        : toast.error("Algo deu errado, tente novamente");
    }
    setIsLoading(false);
  };

  const sendTransaction = async (
    data: schameTransactionProps,
    setOpenModal: (arg: boolean) => void,
    setIsLoading: (arg: boolean) => void
  ) => {
    setIsLoading(true);
    try {
      const response = await api.post("/transactions", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTransactions([response.data, ...transactions]);

      const newUser = { ...user };
      newUser.account.balance = user.account.balance - data.value;
      setUser(newUser);

      toast.success("Transferência feita com sucesso");
      setOpenModal(false);
      setIsLoading(true);
    } catch (err) {
      defaultCatch(err, setIsLoading);
    }
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        clearTransactions,
        sendTransaction,
        getFiltredTransactions,
        getTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
