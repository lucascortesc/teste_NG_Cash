import { Container } from "./styles";
import NGCashLogo from "../../assets/NGCashLogo.png";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [showLogout, SetShowLogout] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/home") {
      SetShowLogout(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Container path={window.location.pathname}>
      <div className="header__widthLimiter">
        <img className="header__logo" alt="Logo NG.Cash" src={NGCashLogo} />
        {showLogout && (
          <Button type="button" desing="cancel" onClick={handleLogout}>
            LOGOUT
          </Button>
        )}
      </div>
    </Container>
  );
};
