import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Shared from "./pages/Shared";


export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/dashboard" />} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/shared" component={Shared} />
    </Switch>
  </BrowserRouter>
);
