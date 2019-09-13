import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';
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

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("user"))
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
      localStorage.setItem("user", JSON.stringify({
        isLogin: true,
        user: {
          username: data.username,
          password: data.password
        }
      }))
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
    console.log(data);

    if (data) {
      this.setState({
        isLogin: false,
        user: {
          username: '',
          password: ''
        }
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar user={this.state.user} logOut={(data) => this.logOut(data)} />
          {/* {this.state.isLogin && <Home /> } */}
          <Route path="/" exact render={() => <PrivateRoute isLogin={this.state.isLogin} component={Home} />} />
          <Route path="/login" exact render={() => <Login checkLogin={(data) => this.checkLogin(data)} />} />
          <Route path="/error/" exact component={Error} />

        </div>
      </Router>
    );
  }
}
