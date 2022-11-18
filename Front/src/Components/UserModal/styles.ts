import styled from "styled-components";

export const Background = styled.div`
  width: 95%;
  max-width: 425px;
  min-height: 300px;
  padding: 24px 16px;
  border-radius: 12px;
  background-color: white;

  margin-top: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  font-size: 14px;

  .user__icon {
    width: 90px;
    height: 90px;
    background-color: #6d6d6d;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 70%;
      height: 70%;
      color: white;
    }
  }

  .user__name {
    text-transform: uppercase;
    margin-top: 16px;
  }

  .user__balance-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    flex-wrap: wrap;
  }

  .user__balance {
    color: green;
  }

  .user__showIcon {
    position: absolute;
    right: 15px;
    cursor: pointer;

    svg {
      width: 30px;
      height: 30px;

      color: #6d6d6d;
    }
  }

  .user__transaction-button {
    margin-top: 15px;
  }

  .modal__transaction-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .modal__input-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .modal__input-wrap > p {
    font-weight: 500;
  }

  .modal__buttons-wrap {
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 15px;
  }

  .modal__input {
    width: 75%;
    margin: auto auto;
  }

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;
