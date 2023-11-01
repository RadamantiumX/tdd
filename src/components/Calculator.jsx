import { evaluate } from 'mathjs' // Dependencia instalada
import { useState } from 'react'

// Numeros de la calculadora
export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Filas de la calculadora
const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

// Operaciones de la calculadora
export const operations = ['+', '-', '*', '/']

// Signo de IGUAL
export const equalSign = '='

// Definimos el elemento
export const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandleClick = op => () => {
    setValue(value.concat(op)) // Concatenemos los numero q recibimos en el INPUT
  }

  return (
    <section style={{ marginTop: '30px' }}>
      <h1>Use Calculator</h1>
     <input value={value} readOnly />
      <div role='grid'>
        {/** Definimos los botones */}
        {rows.map((row, index) => (
          <div key={index} role='row'>
            {row.map(num => (
              <button key={num} onClick={createHandleClick(num)}> {num} </button>
            ))}
          </div>
        ))}
        {/** Definimos las operaciones */}
        {operations.map(operation => (
          <button onClick={createHandleClick(operation)} key={operation}>{operation}</button>
        ))}
        {/** Definimos el igual -- Utilizamos el "evaluate" de la libreria MATHJS */}
        <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
      </div>

    </section>
  )
}
