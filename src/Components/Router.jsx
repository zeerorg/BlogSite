import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LoadingComponent from "./LoadingComponent";
import DelayedRender from "./DelayedRender";

const Home = React.lazy(() => import("./Home"));
const Post = React.lazy(() => import("./Post"));

/**
 * Takes the react router prop and returns the page number
 * @param {React router passed prop} routeParams 
 */
const GetPageNum = function(routeParams) {
  return Number(routeParams.match.params.num);
}

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
            <Route
              path="/post/:slug"
              component={params => <Post {...params} />}
            />
            <Route path="/page/1" exact component={() => <Redirect to="/" />} />
            <Route path="/page/:num" component={params => <Home num={GetPageNum(params)} />} />
            <Route path="/" exact component={() => <Home num={1} />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;
