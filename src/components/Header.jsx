import { useRef, useState  } from "react"
import { useStateContext } from "../context/ContextProvider"

export const Header = () => {
    const [message, setMessage] = useState(null)
    const [showLogin, setShowLogin] = useState(false)
    const userRef = useRef(null)
    const passwordRef = useRef(null)
    const {setUsername, setToken, token} = useStateContext()

    const handleShowForm = () => {
       setShowLogin(true)
    }
    const handleHideForm = () => {
      setShowLogin(false)
    }

    const handleLogin = (e) => {
      e.preventDefault()
      const payload = {
        username: userRef.current.value,
        password: passwordRef.current.value
      }
      fetch('http://localhost:1234/login', {
        method: 'post',
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
          }
      })
        .then(response => response.json())
        .then((result) => {
            setMessage(result.message)
            setUsername(result.user)
            setToken(result.token)
        })
      
    }
    return(
        <header style={{ marginBottom:'20px' }}>
            <h1>Welcome to Calculator & Notes page</h1>
            
           {!showLogin && !token &&<button onClick={handleShowForm}>Show login</button>}
             {showLogin&&<div>
                {!token&&<><p>User Login</p>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="username" ref={userRef} id="user" name="user"/>
                    <input type="password" placeholder="password" ref={passwordRef} id="password" name="password"/>
                    <button id="login-form-button">Login</button>
                    
                </form>
              <button onClick={handleHideForm}>Hide login</button></>}  
             </div>}
             {message !== null &&<p className="error">{message}</p>}
        </header>
    )
}