import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none
  }

  .app {
    display:flex;
    flex-direction:row;
    height: 100%;
    flex: 1;
  }

  @media (max-width: 380px) {
    .app {
    display:grid;
    grid-template-columns: 1fr;
    height: 100%;
    flex: 1;

    .sidebar {
      height: 100%;
    }
  }
  }
  
`;
