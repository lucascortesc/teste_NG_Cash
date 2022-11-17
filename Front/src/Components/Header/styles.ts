import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 96px;

  padding: 0 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  background-color: rgba(0, 0, 0, 0);

  .header__widthLimiter {
    width: 100%;
    max-width: 1600px;
  }

  .header__logo {
    width: 90px;
    height: 48px;
  }
`;
