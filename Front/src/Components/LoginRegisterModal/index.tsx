import { IChildren } from "../../interface";
import { Background } from "./styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { RiUserAddLine } from "react-icons/ri";

interface Props extends IChildren {
  title: string;
}

export const LoginRegisterModal: React.FC<Props> = ({ title, children }) => {
  const navigate = useNavigate();
  return (
    <Background>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="userModal"
      >
        <div className="userModal__header-icon">
          {title === "Login" ? <FiLogIn /> : <RiUserAddLine />}
        </div>
        <div className="userModal__header">
          <h1>{title}</h1>

          <p onClick={() => navigate("/")}>x</p>
        </div>
        {children}
      </motion.div>
    </Background>
  );
};
