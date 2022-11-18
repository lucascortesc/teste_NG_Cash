import styled from "styled-components";

export const Background = styled.div`
  width: 95%;
  min-height: 300px;
  padding: 32px 16px;
  border-radius: 12px;
  background-color: white;

  margin-top: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .transactions__header {
    width: 100%;
    color: #6d6d6d;
    font-size: 0.7rem;
    margin-bottom: 16px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .transactions__wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .transactions__transaction {
    width: 100%;
    padding: 1.5%;
  }

  .transaction__date {
    color: #6d6d6d;
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 5px;
  }

  .transaction__wrap {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }

  .cashin {
    color: green;
  }

  .cashout {
    color: red;
  }

  .transactions__empty {
    margin-top: 50px;
  }

  @media screen and (min-width: 1024px) {
    width: calc(100% - 475px);
  }

  @media screen and (min-width: 480px) {
    .transactions__header {
      font-size: 1rem;
    }
    .transaction__wrap {
      font-size: 16px;
    }
  }
`;
