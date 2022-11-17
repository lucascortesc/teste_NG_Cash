import styled from "styled-components";

interface Props {
  type?: string;
}

export const InputContainer = styled.div<Props>`
  width: 100%;
  max-width: 315px;
  height: 36px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  border-bottom: 1px solid black;

  &:focus-within {
    border-color: #cdcdcd;
  }

  .input__icon {
    font-size: 24px;

    :hover {
      cursor: ${({ type }) => (type === "senha" ? "pointer" : "initial")};
    }
  }

  input {
    width: 85%;
    border: none;

    font-size: 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  span {
    font-size: 14px;
    color: red;
  }

  .error {
    border-color: red;
  }
`;
