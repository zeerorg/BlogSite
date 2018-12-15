import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoadingComponent from "./LoadingComponent";
import DelayedRender from "./DelayedRender";

const Home = React.lazy(() => import("./Home"));
const Post = React.lazy(() => import("./Post"));

const Router = function() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Suspense
          fallback={
            <DelayedRender timeout={4000}>
              <LoadingComponent />
            </DelayedRender>
          }
        >
          <Switch>
            <Route path="/" exact component={() => <Home section="all" />} />
            <Route
              path="/tech"
              exact
              component={() => <Home section="tech" />}
            />
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
            <Route
              path="/post/:slug"
              component={params => <Post {...params} />}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;
