/**
 * Colocar en el package.json el script "dev" de "vite" para poder iniciar el entorno REACT
 */
import ReactDOM  from 'react-dom/client'
import { AppCalculator } from './AppCalculator'
import { ContextProvider } from './context/ContextProvider'

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <ContextProvider>
    <AppCalculator />
  </ContextProvider>
  
)
