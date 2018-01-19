import { dot } from './dot'

describe('dot', () => {
  test('it should get an item from a given object', () => {
    const obj = {
      foo: {
        bar: 'lorem',
        baz: {
          bob: true,
          qux: null
        }
      }
    }

    expect(dot(obj, 'foo.bar')).toBe('lorem')
    expect(dot(obj, ['foo', 'bar'])).toBe('lorem')
    expect(dot(obj, 'foo.baz')).toEqual(obj.foo.baz)
    expect(dot(obj, 'foo.baz.bob')).toBe(true)
    expect(dot(obj, 'foo.baz.bar', 'someDefault')).toBe('someDefault')
    expect(dot(obj, 'foo.baz.qux')).toBe(null)
    expect(dot(obj, 'foo.foo.foo')).toBeUndefined()
    expect(dot(void 0, 'foo.bar')).toBeUndefined()
  })
})
