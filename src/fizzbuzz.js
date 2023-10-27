/**
 * Escribir una funcion que al pasarle un numero:
 *  - Muestra "fizz" si es múltiplo de 3.
 *  - Muestra "buzz" si es multiplo de 5.
 *  - Muestra "fizzbuzz" si es multiplo de 3 y 5.
 *  - Muestra el numero si no es multiplo de ninguno de los anteriores.
 *
 * El sentido del TEST es tratar de escribir lo menos codigo posible, tenemos que lograr pasar el TEST
 * los patrones sin fundamentales
 */

export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

  const multiplies = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  // Refactorizacion del codigo
  // Podemos agregar otro elemento al OBJETO multiplies si quisieramos, todo funcionario de igual forma.
  Object // Obtenemos un ARRAY de OBJETOS
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word // Si es multiplo de uno u otro numero toma la palabra 'fizz' o 'buzz', si es de ambos las concatena
    })

  // Si el output esta vacio devuelvo el number, si no, el output
  return output === '' ? number : output
}
