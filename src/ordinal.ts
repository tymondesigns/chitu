/**
 * Get the ordinal value for a given number.
 */
export function ordinal(num: number): string {
  const suffix = ['th', 'st', 'nd', 'rd']
  let v = num % 100

  return num + (suffix[(v - 20) % 10] || suffix[v] || suffix[0])
}
