import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eff3f8;
  overflow-y: auto;

  .top {
    display: flex;
    margin-top: 40px;
    margin-right: 40px;
    justify-content: space-between;
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
