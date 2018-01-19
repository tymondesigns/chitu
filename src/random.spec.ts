import { random } from './random'

describe('random', () => {
  test('it should generate a random string', () => {
    expect(random().length).toBe(16)
    expect(random(32).length).toBe(32)
    expect(random(64).length).toBe(64)
  })
})
