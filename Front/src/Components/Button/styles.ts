import styled from "styled-components";

interface Props {
  desing: string;
}

export const StyledButton = styled.button<Props>`
  background-color: ${({ desing }) =>
    desing === "confirm" ? "black" : "white"};
  border: 1px solid;
  border-color: ${({ desing }) => (desing === "confirm" ? "white" : "black")};
  padding: 8px 12px;
  border-radius: 5px;
  color: ${({ desing }) => (desing === "confirm" ? "white" : "black")};
  font-weight: 500;

  &:hover {
    filter: opacity(0.5);
  }
`;
