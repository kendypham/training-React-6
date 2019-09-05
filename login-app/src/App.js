import React, { Component } from 'react'
import './App.css';
import { Navbar, Col, Row, Button, Container, Card, Form, Nav } from 'react-bootstrap'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar  variant="dark" className="d-flex justify-content-between bg-nav">
          <Navbar.Brand href="#home" className="flex-grow-1 text-center text-uppercase text-nav">Contact us</Navbar.Brand>
          <i className="fas fa-sign-in-alt icon text-light"></i> <Nav.Link href="#link" className="text-uppercase text-light text-icon">Login/Signup</Nav.Link>
        </Navbar>
        <Container fluid={true}>
          <Row className="justify-content-md-center align-items-md-center mt-5">
            <Col lg="auto">
              <Card style={{ width: '25rem' }}> 
                <Card.Header className="login-text">Login</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="text-uppercase label">Email address</Form.Label>
                      <Form.Control type="email" placeholder="Email address" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label className="text-uppercase label">Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <button  type="submit" className="btn text-uppercase btn-color">
                      Login
                  </button>
                  <Card.Link href="#" className="float-right text-uppercase text-forgot">Forgot Password ?</Card.Link>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
