const type: any = {},
  types = 'Array Object String Date RegExp Function Boolean Number Error Null Undefined'.split(
    ' '
  )

/**
 * Check the type of a value.
 */
type.is = (type: string, val: any): boolean =>
  Object.prototype.toString.call(val).slice(8, -1) === type

// Populate helper methods.
types.forEach(t => (type[`is${t}`] = (v): boolean => type.is(t, v)))

export { type }
