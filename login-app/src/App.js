import React, { Component } from 'react'
import './App.css';
import { Navbar, Col, Row, Button, Container, Card, Form, Nav } from 'react-bootstrap'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
          <Navbar.Brand href="#home" className="flex-grow-1 text-center">Contact us</Navbar.Brand>
          <Nav.Link href="#link" className="fas fa-sign-in-alt text-uppercase text-light"> Login/Signup</Nav.Link>
        </Navbar>
        <Container fluid={true}>
          <Row className="justify-content-md-center align-items-md-center mt-5">
            <Col lg="auto">
              <Card style={{ width: '25rem' }}> 
                <Card.Header className="font-weight-bold h3">Login</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="success" type="submit" className="text-uppercase">
                      Login
                  </Button>
                  <Card.Link href="#" className="float-right text-uppercase text-dark h5">Forgot Password ?</Card.Link>
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
