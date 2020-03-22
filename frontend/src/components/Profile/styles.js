import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    justify-content: center;
    align-items: space-between;
    margin-top: 50px;
    div {
      h1 {
        margin-left: 10px;
        margin-right: 10px;
      }
      h2 {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }

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

  i {
    color: #888888;
  }
`;
