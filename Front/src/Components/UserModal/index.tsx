import { Background } from "./styles";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useUser } from "../../Providers/User";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { MdPaid } from "react-icons/md";
import { ITransaction, schameTransactionProps } from "../../interface";
import { useForm, UseFormReset } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { transactionRequestSchama } from "../../validation";
import { useTransactions } from "../../Providers/Transactions";

export const UserModal = () => {
  const [showBalance, setShowBalance] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useUser();
  const { sendTransaction } = useTransactions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<schameTransactionProps>({
    resolver: yupResolver(transactionRequestSchama),
    mode: "onChange",
  });

  const handleCancel = () => {
    reset(), setOpenModal(false);
  };

  const submit = (data: schameTransactionProps) => {
    sendTransaction(data, setOpenModal, setIsLoading);
  };

  return (
    <Background>
      <div
        className="user__showIcon"
        onClick={() => setShowBalance(!showBalance)}
      >
        {showBalance ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </div>
      <div>
        <div className="user__icon">
          <AiOutlineUser />
        </div>
        <h1 className="user__name">{user.username && user.username}</h1>
      </div>
      <div className="user__balance-wrap">
        <h2>Saldo:</h2>
        {showBalance ? (
          <h2 className="user__balance">
            {user.account &&
              user.account.balance.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
          </h2>
        ) : (
          <h2>----</h2>
        )}
      </div>
      <div className="user__transaction-button">
        <Button
          type="button"
          desing="confirm"
          onClick={() => setOpenModal(true)}
        >
          FAZER TRANSFERÊNCIA
        </Button>
      </div>
      {openModal && (
        <Modal title="Enviar" setOpenModal={setOpenModal}>
          <form
            className="modal__transaction-body"
            onSubmit={handleSubmit(submit)}
          >
            <div className="modal__input-wrap">
              <p>Para quem deseja fazer a transferência?</p>
              <div className="modal__input">
                <Input
                  placeholder="username"
                  icon={<AiOutlineUser />}
                  register={register("username")}
                  error={errors.username}
                  errorMessage={errors.username?.message}
                />
              </div>
            </div>
            <div className="modal__input-wrap">
              <p>Valor</p>
              <div className="modal__input">
                <Input
                  placeholder="R$"
                  icon={<MdPaid />}
                  register={register("value")}
                  error={errors.value}
                  errorMessage={errors.value?.message}
                />
              </div>
            </div>
            <div className="modal__buttons-wrap">
              <Button type="button" desing="cancel" onClick={handleCancel}>
                CANCELAR
              </Button>
              <Button type="submit" desing="confirm">
                ENVIAR
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </Background>
  );
};
