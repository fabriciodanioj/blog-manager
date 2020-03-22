import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 20px;
  border-bottom: 0.5px solid #888888;

  i {
    color: #888888;
  }

  .selector {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
  }
`;
