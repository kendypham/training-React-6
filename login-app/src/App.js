import React, { useState,useEffect } from 'react'
import './App.css';
import NavigationBar from './components/NavigationBar';
import * as util from './utils'
import isLoginContext from './isLoginContext'
import Home from './pages/Home';
const App = (props) => {
  const [user,setUser] = useState({
    username: '',
    password: ''
  })

  const [isLogin, setIsLogin] = useState(false)

  const logIn = (data) => {
    setIsLogin(data.isLogin)
    setUser(data.user)
    util.saveData(data)
  }

  const logOut = () => {
    setIsLogin(false)
    setUser({
      username: '',
      password: ''
    })
    util.saveData({
      isLogin : false, 
      user : {
        username : '',
        password : ''
      }
    })
  }

  useEffect(() => {
    const data = util.getData()
    if(data){
      setIsLogin(data.isLogin)
      setUser(data.user)
    }
  },[])

    return (
      <isLoginContext.Provider value={{user, isLogin, logIn, logOut}}>
          <div className="App">
            <NavigationBar/>
            <Home />
          </div>   
      </isLoginContext.Provider>
    );
}

export default App