import { IChildren } from "../interface";
import { TransactionsProvider } from "./Transactions";
import { UserProvider } from "./User";

export const Providers = ({ children }: IChildren) => {
  return (
    <UserProvider>
      <TransactionsProvider>{children}</TransactionsProvider>
    </UserProvider>
  );
};
