import React, { useContext } from 'react'
import { Redirect } from "react-router-dom";
import LoginContext from '../context/LoginContext'

const Authenticated = (props) => {
	const { isLogin } = useContext(LoginContext)
	return (
		<div>
			{isLogin ? props.children : <Redirect to='/login' />}
		</div>
	)
}

export default Authenticated
