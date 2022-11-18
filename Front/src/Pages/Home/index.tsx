import { motion } from "framer-motion";
import { Header } from "../../Components/Header";
import { Transactions } from "../../Components/Transactions";
import { UserModal } from "../../Components/UserModal";
import { Background } from "./styles";

export const Home = () => {
  return (
    <>
      <Header />
      <Background>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home__body"
        >
          <UserModal />
          <Transactions />
        </motion.div>
      </Background>
    </>
  );
};
