import styled from "styled-components";

interface Props {
  path: string;
}

export const Container = styled.div<Props>`
  background-color: black;
  width: 100%;
  height: 96px;

  padding: 0 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  background-color: ${({ path }) =>
    path === "/" ? "rgba(0, 0, 0, 0)" : "rgb(0, 0, 0)"};
  border-bottom: ${({ path }) =>
    path === "/home" ? "1px solid white" : "none"};

  .header__widthLimiter {
    width: 100%;
    max-width: 1600px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__logo {
    width: 90px;
    height: 48px;
  }
`;
