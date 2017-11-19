/**
 * Round a number to a given number of decimal places.
 */
export function round(val: number, places: number = 2): number {
  return Number(val.toFixed(places))
}
