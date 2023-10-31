import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { Calculator, operations, numbers, equalSign } from '../src/components/Calculator'

describe('Calculator', () => {
  afterEach(cleanup) // Que limpie el renderizado (render) despues de cada uno, para evitar que lo haga continuamente
  // Deberia renderizarce
  it('should render', () => {
    // Le pasamos nuestro componente
    render(<Calculator />)
  })

  // Deberia renderizar correctamente el titulo
  // Buscamos el elemento
  it('should render title correctly', () => {
    render(<Calculator />)

    screen.getByText('Use Calculator')
  })

  // Deberia renderizar numeros
  it('sould render numbers', () => {
    render(<Calculator />)
    // Itereamos sobre la lista de numero necesario para una calculadora
    numbers.forEach(num => {
      screen.getByText(num)
    })
  })

  // Deberia renderizar 4 filas
  it('should render 4 rows', () => {
    render(<Calculator />)
    const rows = screen.getAllByRole('row') // Recuperamos los elementos por el ROL de ROW
    expect(rows.length).toBe(4) // La longitud tiene q tener 4 filas
  })

  // Deberia tener las operaciones
  it('should render operations', () => {
    render(<Calculator />)
    operations.forEach(operation => {
      screen.getByText(operation) // Recuperamos el texto de la operacion
    })
  })

  // Deberia tener un IGUAL
  it('should render equal sign', () => {
    render(<Calculator />)
    screen.getByText('=')
  })

  // Deberia tener un INPUT
  it('should render an input', () => {
    render(<Calculator />)
    screen.getByRole('textbox')
  })

  // Cada vez que clickee en los diferentes numeros
  it('should user input after clicking several number', () => {
    render(<Calculator />)

    // SOBRESCRIBIMOS A FUEGO, con fireEvent (Mejor seria utilizar userEvent())
    const one = screen.getByText('1') // Recuperamos el '1'
    fireEvent.click(one)

    const two = screen.getByText('2') // Recuperamos el '2'
    fireEvent.click(two)

    const three = screen.getByText('3') // Recuperamos el '3'
    fireEvent.click(three)

    const input = screen.getByRole('textbox') // Recuperamos el INPUT
    expect(input.value).toBe('123')
  })

  // Deberia mostrar los numeros y operaciones q clickee el usuario
  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+1') // Esperamos que nos muestre 1 + 1 y no 11
  })

  // Deberia mostrar el resultado de una operacion
  it('should calculate based on user input and show the calculation', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const equal = screen.getByText(equalSign)
    fireEvent.click(equal)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2') // Esperamos el resultado de la suma
  })
})
