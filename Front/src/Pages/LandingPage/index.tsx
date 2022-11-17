import { Background } from "./styles";
import mainPhones from "../../assets/mainPhones.png";
import NGCashLogo from "../../assets/NGCashLogo.png";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <img className="main__logo" alt="Logo NG.Cash" src={NGCashLogo} />
      <div className="main__infos-wrap">
        <h1 className="main__title">A CARTEIRA DA NOVA GERAÇÃO.</h1>
        <h2 className="main__subtitle">É para todas as idades!</h2>
        <div className="main__buttons-wrap">
          <button onClick={() => navigate("login")}>ENTRAR</button>
          <button onClick={() => navigate("register")}>CADASTRAR</button>
        </div>
      </div>
      <img
        className="main__img"
        src={mainPhones}
        alt="Tela do celular com aplicativo NG.Cash"
      />
    </Background>
  );
};
