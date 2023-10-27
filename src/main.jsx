// Archivo importante para crear una aplicacion REACT
/**
 * Colocar en el package.json el script "dev" de "vite" para poder iniciar el entorno REACT
 */
import { createRoot } from 'react-dom/client'
import { Calculator } from './Calculator'

createRoot(
  document.getElementById('root')
).render(
  <Calculator />
)
