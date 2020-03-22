import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-right: 40px;
  padding-left: 40px;

  border-radius: ${props => {
    if (props.state) {
      return "5px";
    }
    return null;
  }};

  box-shadow: ${props => {
    if (props.state) {
      return "2px 2px 2px 1px rgba(0, 0, 0, 0.2);";
    }
    return null;
  }};

  background-color: ${props => {
    if (props.state) {
      return "white";
    }
    return null;
  }};

  input {
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
    margin-right: 5px;
  }

  input:checked {
    width: 26px;
    height: 26px;
    border: none;
    border-radius: 50%;
  }

  button {
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: flex-start;
    border: none;
    background-color: #eff3f8;
    padding-top: 10px;
    padding-top: 10px;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-right: 4px;
    cursor: pointer;

    background-color: ${props => {
      if (props.state) {
        return "white";
      }
      return null;
    }};

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 20px;

      p {
        font-size: 12px;
        font-weight: normal;
      }

      h1 {
        font-size: 18px;
      }
    }
  }
`;
