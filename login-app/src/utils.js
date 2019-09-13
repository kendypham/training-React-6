const USER = 'user'

export const saveData = (data) => {
    localStorage.setItem(USER, JSON.stringify({
        isLogin: data.isLogin,
        user: {
          username: data.user.username,
          password: data.user.password
        }
    }))
}

export const getData = () => {
    const data = JSON.parse(localStorage.getItem(USER))
    return data
}