import React, { useContext } from 'react'
import { Redirect } from "react-router-dom";
import isLoginContext from './isLoginContext'

const Authenticated = (props) => {
	const { isLogin } = useContext(isLoginContext)
	return (
		<div>
			{isLogin ? props.children : <Redirect to='/login' />}
		</div>
	)
}

export default Authenticated
