import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";
// <Route path="/dashboard" component={Dashboard} />

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/  " />} />
    </Switch>
  </BrowserRouter>
);
