import React, { useState, useContext } from 'react'
import { Col, Row, Container, Card, Form } from 'react-bootstrap'
import isLoginContext from './../isLoginContext';
const Login = props => {
	const { logIn } = useContext(isLoginContext)
	const fakeUser = {
		username: 'Truong',
		password: '123456'
	}
	const [tmp, setTmp] = useState({
		username: '',
		password: ''
	})
	const [isError, setIsError] = useState(false)
	
	/**
	 * @param  {object} e - input event
	 * handle state change when user input
	 */

	const handleChange = (e) => {
		e.preventDefault()
		setTmp({
			...tmp,
			[e.target.name]: e.target.value
		})
	}

	/**
	 * @param  {object} e - form event
	 * Compare data user input and handle
	 */
	
	const onSubmit = (e) => {
		if (JSON.stringify(tmp) === JSON.stringify(fakeUser)) {
			e.preventDefault()
			logIn({
				isLogin: true,
				user: tmp
			})
		}
		else {
			e.preventDefault()
			setTmp({
				...tmp,
				password: '',
			})
			setIsError(true)
		}
	}

	return (
		<div>
			<Container fluid={true}>
				<Row className="justify-content-md-center align-items-md-center mt-5 ">
					<Col lg="auto">
						<Card style={{ width: '25rem' }}>
							<div className="login-text card-header color-header">Login</div>
							{isError ?
								<div className="alert alert-danger" role="alert">
									Username or password wrong
              	</div> : ''}
							<Card.Body>
								<Form>
									<Form.Group controlId="formBasicEmail">
										<Form.Label className="text-uppercase label">Username</Form.Label>
										<Form.Control type="text" placeholder="Username"
											className="input" name='username'
											value={tmp.username}
											onChange={handleChange} />
									</Form.Group>
									<Form.Group controlId="formBasicPassword">
										<Form.Label className="text-uppercase label">Password</Form.Label>
										<Form.Control type="password" placeholder="Password"
											className="input" name='password'
											value={tmp.password}
											onChange={handleChange} />
									</Form.Group>
									<button type="submit" className="btn text-uppercase btn-color" onClick={onSubmit}>
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

export default Login