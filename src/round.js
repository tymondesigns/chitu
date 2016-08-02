/**
 * Round a number to a given number of decimal places.
 *
 * @param   {Number}  val         The number to round
 * @param   {Number}  [places=2]  The number of places to round to
 *
 * @return  {Number}
 */
export default function round (val, places = 2) {
    return Number(val.toFixed(places));
}
