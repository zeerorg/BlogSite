import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from './Main';
import Post from './Post';

const Router = function() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <Main section='tech'/>} />
          <Route path="/tech" exact component={() => <Main section='tech'/>} />
          <Route path="/casual" exact component={() => <Main section='casual'/>} />
          <Route path="/major" exact component={() => <Main section='major'/>} />
          <Route path="/post/:slug" component={Post} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Router;