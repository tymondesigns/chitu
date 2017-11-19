import { value } from './value'

describe('value', () => {
  test('it should return correct value if a function is passed', () => {
    let foo = (a, b, c) => `${a}${b}${c}`
    let bar = (x, y, z) => (x + y) * z

    expect(value(foo, 'foo', 'bar', 'baz')).toEqual('foobarbaz')
    expect(value(bar, 1, 2, 3)).toEqual(9)
  })

  test('it should return correct value if not a function', () => {
    let foo = 'bar'

    expect(value(foo)).toEqual('bar')
  })
})
