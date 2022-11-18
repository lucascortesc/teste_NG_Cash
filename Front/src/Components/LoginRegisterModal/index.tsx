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
import { useUser } from "../../Providers/User";
import { schemaUserProps } from "../../interface";
import Lottie from "react-lottie";
import { lottieLoadOptions } from "../../Styles";

interface Props {
  title: string;
}

export const LoginRegisterModal: React.FC<Props> = ({ title }) => {
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { login, registerUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<schemaUserProps>({
    resolver: yupResolver(userRequestSchama),
    mode: "onChange",
    context: { title: title },
  });

  const submit = (data: schemaUserProps) => {
    if (title === "Login") {
      login(data, setIsLoading);
    }
    if (title === "Cadastro") {
      registerUser(
        { username: data.username, password: data.password },
        setIsLoading,
        reset
      );
    }
  };

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
        <form className="userModal__body" onSubmit={handleSubmit(submit)}>
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
          {!isLoading ? (
            <div className="userModal__buttons">
              <Button
                onClick={() => navigate("/")}
                desing="cancel"
                type="button"
              >
                CANCELAR
              </Button>
              <Button desing="confirm" type="submit">
                {title === "Login" ? "ENTRAR" : "CADASTRAR"}
              </Button>
            </div>
          ) : (
            <div className="userModal__lottie">
              <Lottie
                options={lottieLoadOptions}
                isClickToPauseDisabled={true}
              />
            </div>
          )}
        </form>
      </motion.div>
    </Background>
  );
};
