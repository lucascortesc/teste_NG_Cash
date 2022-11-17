import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 96px;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  .header__widthLimiter {
    width: 100%;
    max-width: 1600px;
  }

  .header__logo {
    width: 90px;
    height: 48px;
  }
`;
