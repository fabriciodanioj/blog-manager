import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eff3f8;
  overflow-y: auto;

  @media (max-width: 480px) {
    visibility: hidden;
    width: 0px;
  }

  .top {
    display: flex;
    margin-top: 40px;
    margin-right: 40px;
    justify-content: space-between;

    button {
      width: 100px;
      height: 30px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      background-color: #9954ff;
      border: none;
      color: white;
      cursor: pointer;
      border-radius: 5%;
    }

    button:hover {
      background-color: #9956f9;
    }
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #000;
  margin-left: 40px;
`;

export const Content = styled.div`
  overflow-y: hidden;
`;
