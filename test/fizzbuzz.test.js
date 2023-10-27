import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // Deberia ser una funcion
  // Este TEST es redundante
  // it('should be a function', () => {
  //  expect(typeof fizzbuzz).toBe('function')
  //  })

  // Deberia ser un numero lo q se le pasa por parametro
  it('should throw if not number is provided as parameter', () => {
    // Lo ejecutamos en una funcion, y no como funcion
    expect(() => fizzbuzz()).toThrow()
  })

  // Deberia tener el especifico mensaje de error
  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow(/number/) // Que contenga number en el ERROR
  })

  // Que pasa si no se le pasa el parametro indicado, por ejemplo, si no es numerico
  it('should throw a specific error message if not number is provided', () => {
    // Le pasamos como parametro un NaN
    expect(() => fizzbuzz(NaN)).toThrow(/number/) // Que contenga number en el ERROR
  })

  // Si el numero que le pasamos es = 1
  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  // Si el numero que le pasamos es = 2
  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  // Tiene que devolver "fizz" si le pasamos 3
  it('should return "fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  // Tiene que devolver "fizz" si le pasamos un multiplo de 3
  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  // Tiene que devolver "buzz" si el pasamos un multiplo de 5, o igual a 5
  it('should return "buzz" id number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  // Si es multiplo de 15 deberia devolver "fizzbuzz"
  it('should return "fizzbuzz" if number provided is multiple of 15', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})
