/**
 * Colocar en el package.json el script "dev" de "vite" para poder iniciar el entorno REACT
 */
import { createRoot } from 'react-dom/client'
import { AppCalculator } from './AppCalculator'
import { ContextProvider } from './context/ContextProvider'

createRoot(
  document.getElementById('root')
).render(
  <ContextProvider>
    <AppCalculator />
  </ContextProvider>
  
)
