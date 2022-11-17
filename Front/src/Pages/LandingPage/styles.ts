import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px 48px;

  .main__title {
    color: white;
    font-size: 36px;
    font-weight: 70%;
  }

  .main__subtitle {
    color: #cdcdcd;
    font-weight: 300;
  }

  .main__img {
    display: none;
  }

  .main__logo {
    width: 90px;
    height: 48px;

    position: absolute;
    top: 16px;
    left: 32px;
  }

  .main__infos-wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .main__buttons-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  .main__buttons-wrap button {
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid white;
    border-radius: 5px;
    font-size: 24px;
    color: white;
    margin-top: 12px;
    padding: 4px 12px;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  @media screen and (min-width: 845px) {
    .main__img {
      display: block;
      width: auto;
      height: 425px;
    }

    .main__title {
      font-size: 48px;
    }

    .main__subtitle {
      font-size: 36px;
    }
  }
`;
