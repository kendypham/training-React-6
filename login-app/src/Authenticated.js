import React, { useContext } from 'react'
import { Redirect } from "react-router-dom";
import isLoginContext from './isLoginContext'
import Login from './components/Login';
const Authenticated = (props) => {
const {isLogin} = useContext(isLoginContext)
	return (
		<div>
			{isLogin ? props.children : <Login />}
		</div>
	)
}

export default Authenticated
