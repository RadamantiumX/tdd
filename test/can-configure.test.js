import { describe, expect, it } from 'vitest'
import { canReconfigure } from '../src/can-configure'

describe('canReconfigure', () => {
  // it('should be a function', () => {
  // expect(canReconfigure).toBeTypeOf('function')
  // })

  // Si falta el primer parametro
  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  // Si el primer parametro no es un STRING
  it('should throw if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })

  // Si el segundo parametro no es un STRING
  it('should throw if first parameter is not a string', () => {
    expect(() => canReconfigure('a')).toThrow() // El primero ya comprobamos que es un STRING, ahora lo hacemos con el segundo
  })

  // Deberia devolver un BOOLEANO
  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })

  // Deberia ser FALSO en los casos que sean diferentes logitudes, a pesar de tener los mismas cantidades unicas de letras
  it('should return false if strings provided have different length, even with same unique letters', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false) // Hay dos letras unicas, pero las longitudes son diferentes
  })

  // Las letras deberias ser distintas o unicas
  it('should return false if strings provided have diffrent number of unique letters', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false)
  })

  // Tiene que devolver falso si es diferente el orden de transformacion
  it('should return false if strings has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
