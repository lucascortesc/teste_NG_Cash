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

  .transaction__filter {
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 15px;
    position: relative;
  }

  .filter__wrap-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .transaction__filter > select {
    width: 150px;
    font-size: 14px;
    color: #6d6d6d;
    font-weight: 600;
    height: 30px;
    border-radius: 4px;
    border: 2px solid #6d6d6d;
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

  .react-calendar {
    position: absolute;
    left: 16px;
    width: 300px;
    border-radius: 8px;
    box-shadow: 13px 16px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 13px 16px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 13px 16px 5px 0px rgba(0, 0, 0, 0.75);
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
