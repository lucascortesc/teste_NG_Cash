import { Background } from "./styles";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useUser } from "../../Providers/user";
import { useState } from "react";

export const UserModal = () => {
  const [showBalance, setShowBalance] = useState<boolean>(false);
  const { user } = useUser();
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
        <h1 className="user__name">{user.username}</h1>
      </div>
      <div className="user__balance-wrap">
        <h2>Saldo:</h2>
        {showBalance ? (
          <h2 className="user__balance">
            {user.account.balance.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </h2>
        ) : (
          <h2>----</h2>
        )}
      </div>
    </Background>
  );
};
