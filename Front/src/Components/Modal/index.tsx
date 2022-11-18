import { IChildren } from "../../interface";
import { Background } from "./styles";
import { motion } from "framer-motion";
import { UseFormReset } from "react-hook-form";

interface Props extends IChildren {
  title: string;
  setOpenModal: (arg: boolean) => void;
  reset?: UseFormReset<any>;
}

export const Modal: React.FC<Props> = ({
  title,
  children,
  setOpenModal,
  reset,
}) => {
  return (
    <Background>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="modal"
      >
        <div className="modal__header">
          <h1>{title}</h1>
        </div>
        {children}
      </motion.div>
    </Background>
  );
};
