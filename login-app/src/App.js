import React, { Component } from 'react'
import './App.css';
import NavigationBar from './components/NavigationBar';
import * as util from './utils'
import Login from './components/Login';
import Home from './pages/Home';
import isLoginContext from './isLoginContext'
import Authenticated from './Authenticated';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
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
        user: data.user
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
    console.log("chay vao app");

    return (
      <isLoginContext.Provider value={this.state}>
          <div className="App">
            <NavigationBar user={this.state.user} logOut={(data) => this.logOut(data)} />
          </div>
          
      </isLoginContext.Provider>
    );
  }
}
