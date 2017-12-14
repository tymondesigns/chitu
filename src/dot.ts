import { type } from './type'

/**
 * Get an item from a given object using string dot notation.
 */
export function dot(obj: object, ref: string, def: any = void 0): any {
  return ref
    .split('.')
    .reduce((o, i) => (type.isUndefined(o) || !o.hasOwnProperty(i) ? def : o[i]), obj)
}
