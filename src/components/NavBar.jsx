import { useStateContext } from "../context/ContextProvider"
export const NavBar = () => {
    const { setUsername, setToken } = useStateContext()
    const handleLogout = () => {
       setUsername({})
       setToken(null)
    }
   
     return(
        <>
        <nav>
            <ul>
                <li>User</li>
                <li><form onSubmit={handleLogout}><button>Logout</button></form> </li>
                   
            </ul>
        </nav>
        </>
    )
}