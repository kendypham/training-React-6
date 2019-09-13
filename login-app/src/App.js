import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './components/Login';
import * as util from './utils'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      user: {
        username: '',
        password: ''
      }
    }
  }

  componentWillMount() {
    const data = util.getData()
    if (data) {
      this.setState({
        isLogin: data.isLogin,
        user: {
          username: data.user.username,
          password: data.user.password
        }
      })
    }
  }


  checkLogin = (data) => {
    if (data) {
      util.saveData({
        isLogin: true,
        user: {
          username: data.user.username,
          password: data.user.password
        }
      })

      this.setState({
        isLogin: true,
        user: {
          username: data.username,
          password: data.password
        }
      })
    }
    else return;
  }

  logOut = (data) => {
    if (data) {
      util.saveData({
        isLogin: false,
        user: {
          username: null,
          password: null
        }
      })
      this.setState({
        isLogin: false,
        user: {
          username: null,
          password: null
        }
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar logOut={(data) => this.logOut(data)} />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact render={() => <Login checkLogin={(data) => this.checkLogin(data)} />} />
          <Route path="/error/" exact component={Error} />

        </div>
      </Router>
    );
  }
}
