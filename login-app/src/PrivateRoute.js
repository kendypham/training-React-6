import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
export default class PrivateRoute extends Component {

  state = {
    isLogin: false
  }

  componentDidMount() {
    console.log('home');
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.setState({
        isLogin: true
      })
    }
  }

  render() {
    var sum = <Redirect
      to='/login'
    />
    if (this.state.isLogin) {
      sum = this.props.component
    }
    return sum;
  }
}

