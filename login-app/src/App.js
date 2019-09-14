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

  /**
   * Get data from localstorage
   */

  componentDidMount() {
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

  /**
   * @param  {object} data - Includes isLogin and user data
   * Save data user logged to localstorage
   */
  checkLogin = (data) => {
    if (data) {    
      util.saveData(data)
      this.setState({
        isLogin: true,
        user: {
          username: data.user.username,
          password: data.user.password
        }
      })
    }
    else return;
  }
  /**
   * @param  {object} data - Includes isLogin and user data
   * reset state user to default and clean localstorage
   */
  logOut = (data) => {
    if (data) {
      util.saveData(data)
      this.setState(data)
    }
  }

  /**
   * render Navbar and check condition if login to redirect path
   */
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar user={this.state.user} logOut={(data) => this.logOut(data)} />
          <Switch>
          <Route path="/" exact render={() => <Home isLogin={this.state.isLogin}/>} />
          <Route path="/login" exact render={() => <Login isLogin={this.state.isLogin} checkLogin={(data) => this.checkLogin(data)} />} />
          <Route path="/error/" exact component={Error} />
          <Route component={Error}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
