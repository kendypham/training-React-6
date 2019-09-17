import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './components/Login';
import App from './App'
const routes = (
  <Router>
    <Switch>
      <Route path="/" exact render={() => <App><Home /></App>} />
      <Route path="/login" exact render={() => <App><Login /></App>} />
      <Route path="/error" exact component={Error} />
      <Route path="/home" exact render={() => <App><Home /></App>} />
      <Route path='*' component={Error} />
    </Switch>
  </Router>
)

export default routes