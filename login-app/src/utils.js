const USER = 'user'

/**
 * @param  {object} data - Includes isLogin and user 
 * Save data to localstorage to check when refresh
 */
export const saveData = (data) => {
    localStorage.setItem(USER, JSON.stringify({
        isLogin: data.isLogin,
        user: {
          username: data.user.username,
          password: data.user.password
        }
    }))
}

/**
 * Get data to check login
 */
export const getData = () => {
    const data = JSON.parse(localStorage.getItem(USER))
    return data
}