/**
 * Convert seconds to a human readable time string.
 */
export function time(s: number): string {
  const hours = Math.floor(s / 3600)
  const minutes = Math.floor((s % 3600) / 60)
  const seconds = Math.floor((s % 3600) % 60)

  const ms = `0${minutes}`.slice(-2) + ':' + `0${seconds}`.slice(-2)

  return hours === 0 ? ms : `0${hours}`.slice(-2) + ':' + ms
}
