import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
export default class NavigationBar extends Component {

    logOut = () => {
        this.props.logOut({
            isLogin : false
        })
    }

    render() {
        const { username, password } = this.props.user
        const itemLogged = <Navbar variant="dark" className="d-flex justify-content-between bg-nav">
            <Navbar.Brand href="#home" className="flex-grow-1 text-center text-uppercase text-nav">Contact us</Navbar.Brand>
            <i className="fas fa-user icon text-light"></i> <Nav><Link className="text-uppercase text-light text-icon" to="/">{username}</Link></Nav>
            <Nav><Link className="text-uppercase text-light text-icon" to="/login" onClick={this.Logout}>Logout</Link></Nav>
        </Navbar>
        const itemLogin = <Navbar variant="dark" className="d-flex justify-content-between bg-nav">
            <Navbar.Brand href="#home" className="flex-grow-1 text-center text-uppercase text-nav">Contact us</Navbar.Brand>
            <i className="fas fa-sign-in-alt icon text-light"></i> <Nav><Link className="text-uppercase text-light text-icon" to="/login">Login/Signup</Link></Nav>
        </Navbar>
        return (
            <div>
                {username && password ? itemLogged : itemLogin}
            </div>
        )
    }
}
