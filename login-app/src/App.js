import React, { useState } from 'react'
import './App.css';
import NavigationBar from './components/NavigationBar';
import * as util from './utils'
import isLoginContext from './isLoginContext'
import { Redirect } from "react-router-dom";
const App = props => {
  const data = util.getData()

  /**
   * set state before render
   */

  const [user,setUser] = useState({
    username: data ? data.user.username : '',
    password: data ? data.user.password : ''
  })

  const [isLogin, setIsLogin] = useState(data ? data.isLogin : false)

  /**
   * @param  {object} data - includes isLogin and data user
   * Save data to localstorage and set state with new data
   */
  const logIn = (data) => {
    util.saveData(data)
    setIsLogin(data.isLogin)
    setUser(data.user)
  }

  /**
   * reset data in localstorage and state
   */
  const logOut = () => {
    util.saveData({
      isLogin : false, 
      user : {
        username : '',
        password : ''
      }
    })
    setIsLogin(false)
    setUser({
      username: '',
      password: ''
    })
  }
    
    return (
      <isLoginContext.Provider value={{user, isLogin, logIn, logOut}}>
          <div className="App">
            <NavigationBar/>

            {/* Check if logged will redirect to path '/home' and render component Home 
              if not will render component Login
            */}

            {isLogin ?  <Redirect to='/home' /> : props.children}

            {/* Check if logged will render component Home else redirect to '/login' */}

            {isLogin && props.children.type.name !=='Login' ? props.children : <Redirect to='/login' />}
          </div>   
      </isLoginContext.Provider>
    );
}

export default App