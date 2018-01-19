/**
 * Generate a random string of a given length.
 */
export function random(length: number = 16): string {
  let str = ''
  while (str.length < length && length > 0) {
    let r = Math.random()
    str +=
      r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65))
  }

  return str
}
