// Codigo REFACTORIZADO
export const canReconfigure = (from, to) => {
  // if (from === undefined) throw new Error('from is required') // Verificamos el primer parametro
  if ((typeof from && typeof to) !== 'string') throw new Error('from and to must be a string') // Verificamos que sea un STRING (ambos parametros)

  const isSameLength = from.length === to.length // Verificar longitudes de los STRING
  if (!isSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size // Verificamos las letras unicas del STRING con con el Objeto Set().size
  if (!hasSameUniqueLetters) return false // Si no tiene letras unicas

  // Realizamos la transformacion siempre en la misma posicion
  const transformations = {} // Objeto para guardar transformaciones
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storeLetter = transformations[fromLetter]
    // Si tenemos la letra y la letra del objeto y es distinto a la letra q queremos convertir
    if (storeLetter && storeLetter !== toLetter) return false

    transformations[fromLetter] = toLetter // Guardamos las transformaciones en el objeto
  }

  return true // Devuelve Booleano
}
