import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 40px;
  margin-top: 20px;


  input {
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
  }

  input:checked {
    width: 26px;
    height: 26px;
    border: none;
    border-radius: 50%;
  }

  div {
    padding-left: 20px;
    padding-right: 20px;

    p {
      font-size: 12px;
      font-weight: normal;
    }

    h1 {
      font-size: 18px;
    }
  }
`;


