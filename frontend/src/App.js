import React from "react";

import GlobalStyle from "./GlobalStyles";

import SideBar from "./components/SideBar";

import Routes from "./routes";

function App() {
  return (
    <>
      <SideBar />
      <Routes />
      
      <GlobalStyle />
    </>
  );
}

export default App;
