import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 250px;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    button {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50px;
      background-color: #fff;
      color: #888888;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: 0;
    }

    button:hover {
      background-color: #fff;
    }
  }

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
    cursor: pointer;
  }

  button:hover {
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

  @media (min-width: 480px) {
    .header {
      button {
        width: 0;
        height: 0;
        visibility: hidden;
      }
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .add {
    display: flex;
    align-items: center;
    margin-left: 5px;
    padding-left: 5px;
    border: solid 0.5px;
    margin-bottom: 10px;
    width: 170px;
    height: 30px;
    border-top: none;
    border-right: none;

    input {
      border: none;
      width: 150px;
    }

    button {
      width: 20px;
      height: 20px;
      background-color: white;
      color: #888888;
    }
  }

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

  p {
    margin-bottom: 5px;
    font-size: 14px;
    text-decoration: none;
    color: #000;
    padding-left: 5px;
  }
`;
