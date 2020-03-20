import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;

  button {
    width: 210px;
    height: 40px;
    border: none;
    border-radius: 50px;
    background-color: #9954ff;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
  }

  button:hover {
    cursor: pointer;
    background-color: #9954e0;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  i {
    margin-right: 5px;
  }

  .logo {
    width: 80px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h1 {
    color: #888888;
    font-size: 14px;
    margin-bottom: 5px;
  }

  a {
    margin-bottom: 5px;
    font-size: 14px;
    text-decoration: none;
    color: #000;
    padding-left: 5px;
  }

  li {
    margin-bottom: 5px;
    font-size: 14px;
    text-decoration: none;
    color: #000;
    padding-left: 5px;
  }
`;

