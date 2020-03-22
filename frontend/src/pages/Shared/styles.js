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
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #000;
  margin-left: 40px;
  margin-top: 40px;
`;

export const Content = styled.div`
  overflow-y: hidden;
  margin-top: 20px;
`;
