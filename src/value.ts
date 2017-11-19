import { type } from './type'

/**
 * Return the value or execute as a function
 */
export function value(val: any, ...args): any {
  return type.isFunction(val) ? val.apply(this, args) : val
}
