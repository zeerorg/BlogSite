import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Post from "./Post";

const Router = function() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <Home section="all" />} />
          <Route path="/tech" exact component={() => <Home section="tech" />} />
          <Route
            path="/casual"
            exact
            component={() => <Home section="casual" />}
          />
          <Route
            path="/major"
            exact
            component={() => <Home section="major" />}
          />
          <Route path="/post/:slug" component={Post} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;
