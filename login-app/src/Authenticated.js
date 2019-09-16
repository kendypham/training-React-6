import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import isLoginContext from './isLoginContext'
export default class Authenticated extends Component {
    render() {
        return (
            <div>
                  { this.context.isLogin ? this.props.children : <Redirect to='/login' />}
            </div>
        )
    }
}

Authenticated.contextType = isLoginContext;
