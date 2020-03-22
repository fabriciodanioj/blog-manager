import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 50px;
  overflow-y: auto;

  @media (max-width: 380px) {
    visibility: hidden;
    width: 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      font-size: 18px;
      font-weight: bold;
    }

    input {
      margin-top: 20px;
    }

    .text-input {
      width: 600px;
      min-height: 400px;
      height: 100%;
      margin-top: 20px;
    }

    button {
      align-self: center;
      margin-top: 20px;
    }
  }
`;
