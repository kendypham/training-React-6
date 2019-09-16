import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
export default class NavigationBar extends Component {
    /**
     * reset data and send to App component in order to update state 
     */
    logOut = () => {
        this.props.logOut({
            isLogin : false,
            user: {
                username: '',
                password: ''
              }
        })
    }

    /**
     * check if user has logged to render UI 
     */
    render() {
        const { username, password } = this.props.user
        const itemLogged = 
            <Navbar variant="dark" className="d-flex justify-content-between bg-nav">
                <Navbar.Brand href="#home" className="flex-grow-1 text-center text-uppercase text-nav">Contact us</Navbar.Brand>
                <i className="fas fa-user icon text-light"></i> 
                <Nav><Link className="text-uppercase text-light text-icon" to="/">{username}</Link></Nav>
                <Nav><Link className="text-uppercase text-light text-icon" to="/" onClick={this.logOut}>Logout</Link></Nav>
            </Navbar>
        const itemLogin = 
            <Navbar variant="dark" className="d-flex justify-content-between bg-nav">
                <Navbar.Brand href="#home" className="flex-grow-1 text-center text-uppercase text-nav">Contact us</Navbar.Brand>
                <i className="fas fa-sign-in-alt icon text-light"></i> 
                <Nav><Link className="text-uppercase text-light text-icon" to="/">Login/Signup</Link></Nav>
            </Navbar>
        return (
            <div>
                {username !== '' && password !== '' && this.props.user ? itemLogged : itemLogin}
            </div>
        )
    }
}
