export const removeEmpty = obj =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([k, v]) => v != null)
      .map(([k, v]) => (typeof v === 'object' ? [k, removeEmpty(v)] : [k, v]))
  )

export function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

export function mergeDeep(target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}

export const indexOfId = (array, value) => {
  return indexOfProperty(array, 'id', value)
}

export const indexOfProperty = (array, prop, value) => {
  for (var i = 0; i < array.length; i++) if (array[i][prop] === value) return i
  return -1
}
