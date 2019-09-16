import React, { Component } from 'react'
import { Col, Row, Container, Card, Form } from 'react-bootstrap'
import { Redirect, Route } from "react-router-dom";
export default class Login extends Component {
    /**
     * @param  {object} props
     * create default state and fake account to check
     */
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: 'Truong',
                password: '123456'
            },
            tmp: {
                username: '',
                password: ''
            }
        }
    }

    /**
     * @param  {object} e - event of input
     * handle change when user input and setState
     */
    handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        this.setState({
            tmp: {
                username: name === 'username' ? value : this.state.tmp.username,
                password: name === 'password' ? value : this.state.tmp.password
            }
        })
    }

    /**
     * Check if user account available and send data login to app
     */
    onSubmit = () => {
        if (this.state.tmp.username === this.state.user.username && this.state.tmp.password === this.state.user.password) {         
            this.props.checkLogin({
                isLogin : true,
                user: {
                    username: this.state.user.username,
                    password: this.state.user.password
                  }
            })
        }
        else {
            this.setState({
                tmp: {
                    username: null,
                    password: null
                }
            })
            alert("Username or password wrong")
        }

    }

    /**
     * Check if user has logged, if not show login form
     */
    render() {
        if (this.props.isLogin) {
             return <Route render={() => <Redirect to='/' />}/>
        }
        return (
            <Container fluid={true}>
                <Row className="justify-content-md-center align-items-md-center mt-5 ">
                    <Col lg="auto">
                        <Card style={{ width: '25rem' }}>
                            <div className="login-text card-header color-header">Login</div>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="text-uppercase label">Username</Form.Label>
                                        <Form.Control type="text" placeholder="Username"
                                            className="input" name='username'
                                            value={this.state.tmp.username}
                                            onChange={this.handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="text-uppercase label">Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"
                                            className="input" name='password'
                                            value={this.state.tmp.password}
                                            onChange={this.handleChange} />
                                    </Form.Group>
                                    <button type="submit" className="btn text-uppercase btn-color" onClick={this.onSubmit}>
                                        Login
                                    </button>
                                    <Card.Link href="#" className="float-right text-uppercase text-forgot">Forgot Password ?</Card.Link>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
