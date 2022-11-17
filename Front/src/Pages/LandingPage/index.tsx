import { Background, Container } from "./styles";
import mainPhones from "../../assets/mainPhones.png";
import { FiLogIn } from "react-icons/fi";
import { RiUserAddLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { motion } from "framer-motion";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Background>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="main__infos-wrap"
          >
            <h1 className="main__title">A CARTEIRA DA NOVA GERAÇÃO.</h1>
            <h2 className="main__subtitle">É para todas as idades!</h2>
            <div className="main__buttons-wrap">
              <button onClick={() => navigate("login")}>
                ENTRAR
                <FiLogIn />
              </button>
              <button onClick={() => navigate("register")}>
                CADASTRAR
                <RiUserAddLine />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <img
              className="main__img"
              src={mainPhones}
              alt="Tela do celular com aplicativo NG.Cash"
            />
          </motion.div>
        </Container>
      </Background>
    </>
  );
};
