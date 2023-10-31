import { createContext, useContext, useState } from 'react'

const StateContext = createContext({
    username: null,
    token: null,
    setUsername: () => {},
    setToken: () => {}
})

export const ContextProvider = ({children}) => {
    const [username, setUsername ] = useState({})
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token)
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    return(
       <StateContext.Provider value={{
        username,
        token,
        setUsername,
        setToken
       }}>
        {children}
       </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)