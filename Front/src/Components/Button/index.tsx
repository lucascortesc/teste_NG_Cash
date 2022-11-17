import { IChildren } from "../../interface";
import { StyledButton } from "./styles";

interface Props extends IChildren {
  desing: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({ children, desing, onClick }) => {
  return (
    <StyledButton desing={desing} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
