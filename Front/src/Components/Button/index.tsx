import { IChildren } from "../../interface";
import { StyledButton } from "./styles";

interface Props extends IChildren {
  desing: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<Props> = ({
  children,
  desing,
  onClick,
  type,
}) => {
  return (
    <StyledButton desing={desing} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};
