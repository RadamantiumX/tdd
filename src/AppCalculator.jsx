import { Calculator } from "./components/Calculator"
import { Header } from "./components/Header"
import { NavBar } from "./components/NavBar"
import { Notes } from "./components/Notes"
import { useStateContext } from "./context/ContextProvider"
import { NewNotes } from "./components/NewNotes"

export const AppCalculator = () => {
  const { token } = useStateContext()
    return(
    <>
    
     
        <main> 
          
         
          <Calculator/>
          
        </main>
    </>
    )
}