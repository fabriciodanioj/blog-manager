import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0px;

  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  a {
    color: #888888;
  }

  div {
    color: #888888;
    h1 {
      font-size: 14px;
      color: #000;
    }
    h2 {
      font-size: 10px;
      text-transform: uppercase;
    }
  }
`;
