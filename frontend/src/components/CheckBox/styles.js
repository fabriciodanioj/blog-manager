import styled from "styled-components";

export const Container = styled.label`
  cursor: pointer;

  display: flex;
  align-items: center;
  margin-right: 20px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  span {
    width: 25px;
    height: 25px;
    background-color: #888888;
    position: absolute;
    border-radius: 50%;
  }

  span:after {
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    content: "";
    position: absolute;
  }

  input:checked ~ span:after {
    display: block;
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
  }

  input:checked ~ span {
    background-color: #9954ff;
  }
`;
