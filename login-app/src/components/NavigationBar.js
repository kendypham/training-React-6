import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import LoginContext from '../context/LoginContext'

const NavigationBar = props => {
  const { user, isLogin, logOut } = useContext(LoginContext)
  const { username } = user

  const itemLogged =
    <Navbar variant="dark" className="d-flex justify-content-between bg-nav">
      <Navbar.Brand href="#home" className="flex-grow-1 text-center text-uppercase text-nav">Contact us</Navbar.Brand>
      <i className="fas fa-user icon text-light"></i>
      <Nav><Link className="text-uppercase text-light text-icon" to="/">{username}</Link></Nav>
      <Nav><Link className="text-uppercase text-light text-icon" to="/" onClick={logOut}>Logout</Link></Nav>
    </Navbar>

  const itemLogin =
    <Navbar variant="dark" className="d-flex justify-content-between bg-nav">
      <Navbar.Brand href="#home" className="flex-grow-1 text-center text-uppercase text-nav">Contact us</Navbar.Brand>
      <i className="fas fa-sign-in-alt icon text-light"></i>
      <Nav><Link className="text-uppercase text-light text-icon" to="/">Login/Signup</Link></Nav>
    </Navbar>

  return (
    <div>
      {isLogin ? itemLogged : itemLogin}
    </div>
  )
}

export default NavigationBar