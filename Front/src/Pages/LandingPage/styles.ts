import styled from "styled-components";
import background from "../../assets/backgroundLandingPage.png";

export const WrapLimiter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 56px;

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
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    font-size: 24px;
    color: white;
    margin-top: 12px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 8px;

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
