import React from "react";

import { Provider } from "react-redux";

import GlobalStyle from "./GlobalStyles";
import SideBar from "./components/SideBar";

import Routes from "./routes";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <SideBar />
        <Routes />

        <GlobalStyle />
      </div>
    </Provider>
  );
}

export default App;
