import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: auto;

  .modal {
    width: 95%;
    max-width: 480px;
    min-height: 280px;
    max-height: 480px;
    background-color: white;

    padding: 24px 32px;

    border-radius: 16px;

    overflow: auto;

    .modal__header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;

      margin-bottom: 12px;

      p:hover {
        cursor: pointer;
      }
    }
  }
`;
