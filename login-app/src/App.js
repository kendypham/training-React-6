import React, { useState } from 'react'
import './App.css';
import NavigationBar from './components/NavigationBar';
import * as util from './utils'
import LoginContext from './context/LoginContext'
import Routes from './components/Routes'
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
      <LoginContext.Provider value={{user, isLogin, logIn, logOut}}>
          <div className="App">
            <NavigationBar/>
            <Routes />
          </div>   
      </LoginContext.Provider>
    );
}

export default App