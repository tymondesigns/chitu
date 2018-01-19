import { type } from './type'

/**
 * Get an item from a given object using string dot notation.
 */
export function dot(obj: object, ref: string | string[], def: any = void 0): any {
  const path = type.isArray(ref) ? ref : (<string>ref).split('.')

  return (<string[]>path).reduce(
    (o, i) => (type.isUndefined(o) || !o.hasOwnProperty(i) ? def : o[i]),
    obj
  )
}
