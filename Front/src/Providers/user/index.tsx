import request from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Services/api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IChildren, IUser, IUserLogin, schemaUserProps } from "../../interface";
import { UseFormReset } from "react-hook-form";

interface IUserProvider {
  login: (data: IUserLogin, setIsLoading: (arg: boolean) => void) => void;
  registerUser: (
    data: IUserLogin,
    setIsLoading: (arg: boolean) => void,
    reset: UseFormReset<schemaUserProps>
  ) => void;
  user: IUser;
  token: string;
  clearUser: () => void;
  setUser: (data: IUser) => void;
}

interface IErrorResponse {
  error: string;
}

const UserContext = createContext<IUserProvider>({} as IUserProvider);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [token, setToken] = useState<string>("");

  const navigate = useNavigate();

  const clearUser = () => {
    localStorage.clear();
    setUser({} as IUser);
  };

  const getUser = async (responseToken: string) => {
    try {
      const retrieveUser = await api.get("/user", {
        headers: {
          Authorization: `Bearer ${responseToken}`,
        },
      });

      setUser(retrieveUser.data);
      localStorage.setItem("@user", JSON.stringify(retrieveUser.data));
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
        await getUser(retrieveToken);
      })();
    }
  }, []);

  const defaultCatch = (err: unknown, setIsLoading: (arg: boolean) => void) => {
    if (request.isAxiosError(err)) {
      const typedErr = err.response?.data as IErrorResponse;
      typedErr
        ? toast.error(typedErr.error)
        : toast.error("Algo deu errado, tente novamente");
    }
    setIsLoading(false);
  };

  const login = async (
    data: IUserLogin,
    setIsLoading: (arg: boolean) => void
  ): Promise<void> => {
    setIsLoading(true);

    try {
      const response = await api.post("/login", data);

      const responseToken = response.data.token;

      setToken(responseToken);
      localStorage.setItem("@token", responseToken);

      const retrieveUser = await api.get("/user", {
        headers: {
          Authorization: `Bearer ${responseToken}`,
        },
      });

      setUser(retrieveUser.data);
      localStorage.setItem("@user", JSON.stringify(retrieveUser.data));

      toast.success("Logado com sucesso!");

      setTimeout(() => {
        navigate("/home");
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      defaultCatch(err, setIsLoading);
    }
  };

  const registerUser = async (
    data: IUserLogin,
    setIsLoading: (arg: boolean) => void,
    reset: UseFormReset<schemaUserProps>
  ): Promise<void> => {
    setIsLoading(true);

    try {
      await api.post("/register", data);

      toast.success("Registro feito com sucesso!");

      setTimeout(() => {
        navigate("/login");
        reset();
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      defaultCatch(err, setIsLoading);
    }
  };

  return (
    <UserContext.Provider
      value={{ login, user, token, registerUser, clearUser, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
