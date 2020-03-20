import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 40px 40px 40px 40px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  
  
  h1 {
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
      color: #888888;
      font-size: 12px;
    }
  }

  img {
    border-radius: 10px;
    width: 100%;
  }

  p {
    font-size: 12px;
    margin-top: 10px;
    padding-bottom: 20px;
  }
`;
