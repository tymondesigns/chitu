
/**
 * Module for checking variable types.
 *
 * @module check
 */
const check = {},
    types = 'Array Object String Date RegExp Function Boolean Number Error Null Undefined Symbol'.split(' '),
    getType = val => Object.prototype.toString.call(val).slice(8, -1);

/**
 * Check the type of a value.
 *
 * @param  {String}  type  The primitive type as a capitalized string.
 * @param  {Mixed}   val   The value to check.
 *
 * @return {Boolean}
 */
check.is = (type, val) => getType(val) === type;

// Populate helper methods.
for (let i = types.length; i--;) {
    check[`is${types[i]}`] = (val) => check.is(types[i], val);
}

export default check;
