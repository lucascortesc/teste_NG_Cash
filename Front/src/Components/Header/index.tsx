import { Container } from "./styles";
import NGCashLogo from "../../assets/NGCashLogo.png";

export const Header = () => {
  return (
    <Container>
      <div className="header__widthLimiter">
        <img className="header__logo" alt="Logo NG.Cash" src={NGCashLogo} />
      </div>
    </Container>
  );
};
