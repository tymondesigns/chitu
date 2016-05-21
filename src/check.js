
/**
 * Module for checking variable types.
 *
 * @module check
 */
const check = {},
    types = 'Array Object String Date RegExp Function Boolean Number Error Null Undefined Symbol'.split(' ');

/**
 * Check the type of a value.
 *
 * @param  {String}  type  The primitive type as a capitalized string.
 * @param  {Mixed}   val   The value to check.
 *
 * @return {Boolean}
 */
check.is = (type, val) => Object.prototype.toString.call(val).slice(8, -1) === type;

// Populate helper methods.
types.forEach(type => check[`is${type}`] = (val) => check.is(type, val));

export default check;
