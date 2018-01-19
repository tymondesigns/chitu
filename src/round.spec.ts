import { round } from './round'

describe('round', () => {
  test('it should return a number to a given number of decimal places', () => {
    expect(round(1, 2)).toBe(1.0)
    expect(round(1.937, 2)).toBe(1.94)
    expect(round(1.93788456, 4)).toBe(1.9379)
    expect(round(1.93788456, 0)).toBe(2)
    expect(round(12.345)).toBe(12.35)
    expect(round(12, 0)).toBe(12)
  })
})
