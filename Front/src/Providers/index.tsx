import { IChildren } from "../interface";
import { UserProvider } from "./user";

export const Providers = ({ children }: IChildren) => {
  return <UserProvider>{children}</UserProvider>;
};
