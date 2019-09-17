import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Error from '../pages/Error';
import Login from './Login';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/error" exact render={() => <Error />} />
        <Route path="/home" exact render={() => <Home />} />
        <Route path='*' component={Error} />
      </Switch>
    </div>
  )
}
