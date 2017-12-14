import { time } from './time'

describe('time', () => {
  test('it should return a string from seconds', () => {
    expect(time(100)).toBe('01:40')
    expect(time(5000)).toBe('01:23:20')
    expect(time(25)).toBe('00:25')
    expect(time(10000)).toBe('02:46:40')
  })
})
