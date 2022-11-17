import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import { Container, InputContainer } from "./styles";
import { useState } from "react";

interface Props {
  placeholder: string;
  icon?: JSX.Element;
  register?: UseFormRegisterReturn;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  errorMessage?: string;
  type?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Input: React.FC<Props> = ({
  placeholder,
  icon,
  register,
  error,
  type,
  onClick,
  errorMessage,
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <Container>
      {error && <span>{errorMessage}</span>}
      <InputContainer type={placeholder} className={error && "error"}>
        <input
          placeholder={placeholder}
          {...register}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={type}
        />
        <div className="input__icon" onClick={onClick}>
          {icon && icon}
        </div>
      </InputContainer>
    </Container>
  );
};
