import { IChildren } from "../../interface";
import { Background } from "./styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { RiUserAddLine } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRequestSchama } from "../../validation";
import { Input } from "../Input";
import { useState } from "react";
import { Button } from "../Button";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useForm } from "react-hook-form";

interface Props extends IChildren {
  title: string;
}

interface schemaProps {
  username: string;
  password: number;
  confirmPassword?: number;
}

export const LoginRegisterModal: React.FC<Props> = ({ title, children }) => {
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaProps>({
    resolver: yupResolver(userRequestSchama),
    mode: "onChange",
    context: { title: title },
  });

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
        <form
          className="userModal__body"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <Input
            placeholder="usuário"
            icon={<AiOutlineUser />}
            register={register("username")}
            error={errors.username}
            errorMessage={errors.username?.message}
          />
          <Input
            placeholder="senha"
            type={visiblePassword ? "" : "password"}
            icon={
              visiblePassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
            }
            onClick={() => setVisiblePassword(!visiblePassword)}
            register={register("password")}
            error={errors.password}
            errorMessage={errors.password?.message}
          />
          {title === "Cadastro" ? (
            <Input
              placeholder="confirmar senha"
              type={visiblePassword ? "" : "password"}
              register={register("confirmPassword")}
              error={errors.confirmPassword}
              errorMessage={errors.confirmPassword?.message}
            />
          ) : (
            <></>
          )}
          <div className="userModal__buttons">
            <Button onClick={() => navigate("/")} desing="cancel">
              CANCELAR
            </Button>
            <Button desing="confirm">
              {title === "Login" ? "ENTRAR" : "CADASTRAR"}
            </Button>
          </div>
        </form>
        {children}
      </motion.div>
    </Background>
  );
};
