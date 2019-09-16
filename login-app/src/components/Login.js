import React, { Component } from 'react'
import { Col, Row, Container, Card, Form } from 'react-bootstrap'
import NavigationBar from './NavigationBar'
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
			},
			isError: false
		}
	}

  /**
   * @param  {object} e - event of input
   * handle change when user input and setState
   */

	handleChange = (e) => {
		e.preventDefault()
		this.setState({
			tmp: {
				...this.state.tmp,
				[e.target.name]: e.target.value
			}
		})
	}

  /**
   * Check if user account available and send data login to app
   */
	onSubmit = (e) => {
		if (this.state.tmp.username === this.state.user.username && this.state.tmp.password === this.state.user.password) {
			e.preventDefault()
			this.props.checkLogin({
				isLogin: true,
				user: this.state.user
			})
		}
		else {
			e.preventDefault()
			this.setState({
				tmp: {
					...this.state.tmp,
					password: '',
				},
				isError: true
			})
		}
	}

  /**
   * Check if user has logged, if not show login form
   */

	render() {
		return (
			<div>
				<Container fluid={true}>
					<Row className="justify-content-md-center align-items-md-center mt-5 ">
						<Col lg="auto">
							<Card style={{ width: '25rem' }}>
								<div className="login-text card-header color-header">Login</div>
								{this.state.isError ? <div className="alert alert-danger" role="alert">
									Username or password wrong
                            </div> : ''}
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
			</div>
		)
	}
}
