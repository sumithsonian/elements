const camelize = (str) => {
  if (typeof str !== 'string') {
    return
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const toBem = (block, elements, modifiers) => {
  let className = block

  elements = elements !== null ? elements.filter((v) => v) : null
  modifiers = modifiers !== null ? modifiers.filter((v) => v) : null

  if (elements !== null && elements.length > 0) {
    className += '__'
    elements.forEach((e, i) => {
      className += i === 0 ? e.toLowerCase() : camelize(e)
    })
  }

  if (modifiers !== null && modifiers.length > 0) {
    className += '--'
    modifiers.forEach((m, i) => {
      className += i === 0 ? m.toLowerCase() : camelize(m)
    })
  }

  return className
}

export default (context, inject) => {
  inject('toBem', toBem)
}
