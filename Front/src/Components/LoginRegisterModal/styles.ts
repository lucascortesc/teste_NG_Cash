import styled from "styled-components";
import background from "../../assets/backgroundLandingPage.png";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  background-image: url(${background});
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: auto;

  .userModal {
    width: 95%;
    max-width: 480px;
    height: auto;
    background-color: white;

    padding: 12px 24px;

    border-radius: 16px;
  }

  .userModal__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    color: grey;

    p {
      font-weight: bold;
      color: black;
      cursor: pointer;
    }
  }

  .userModal__header-icon {
    height: 100px;
    width: 100px;
    left: calc(50% - 50px);
    background-color: #cdcdcd;
    color: grey;
    border-radius: 50%;
    position: absolute;
    margin-top: -62px;
    z-index: 10;

    display: none;

    svg {
      width: 70%;
      height: 70%;
    }
  }

  .userModal__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top: 32px;
  }

  .userModal__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    height: 70px;

    button {
      height: 36px;
    }
  }

  .userModal__lottie {
    width: 70px;
  }

  @media screen and (min-width: 420px) {
    .userModal__header-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
