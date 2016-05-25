import type from './type';

/**
 * Return the value or execute as a function
 *
 * @module  value
 *
 * @param   {Mixed}  val     A value or a function that returns a value
 * @param   {Mixed}  [args]  One or more arguments
 *
 * @return  {Mixed}
 */
export default function value (val, ...args) {
    return type.isFunction(val) ? val.apply(this, args) : val;
}
