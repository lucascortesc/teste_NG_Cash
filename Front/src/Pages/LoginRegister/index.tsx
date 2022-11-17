import { useEffect, useState } from "react";
import { LoginRegisterModal } from "../../Components/LoginRegisterModal";
import { Background } from "./styles";

export const LoginRegister = () => {
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    if (window.location.pathname === "/login") {
      setPath("Login");
    } else {
      setPath("Cadastro");
    }
  }, []);

  return (
    <Background>
      <LoginRegisterModal title={path}>
        <p></p>
      </LoginRegisterModal>
    </Background>
  );
};
