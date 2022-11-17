import { IChildren } from "../../interface";
import { Background } from "./styles";
import { motion } from "framer-motion";

interface Props extends IChildren {
  title: string;
  setOpenModal: (arg: boolean) => void;
}

export const Modal: React.FC<Props> = ({ title, children, setOpenModal }) => {
  return (
    <Background>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="modal"
      >
        <div className="modal__header">
          <h1>{title}</h1>
          <p onClick={() => setOpenModal(false)}>x</p>
        </div>
        {children}
      </motion.div>
    </Background>
  );
};
