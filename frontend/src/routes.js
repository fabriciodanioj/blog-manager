import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Shared from "./pages/Shared";
import Trash from "./pages/Trash";
import Categories from "./pages/Categories";
import NewArticle from "./pages/NewArticle";


export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/dashboard" />} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/shared" component={Shared} />
      <Route path="/trash" component={Trash} />
      <Route path="/new" component={NewArticle} />
      <Route path="/category/:id" component={Categories} />
    </Switch>
  </BrowserRouter>
);
