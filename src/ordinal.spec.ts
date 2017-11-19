import { ordinal } from './ordinal'

describe('ordinal', () => {
  test('it should return the ordinal value for a given number', () => {
    expect(ordinal(1)).toEqual('1st')
    expect(ordinal(2)).toEqual('2nd')
    expect(ordinal(3)).toEqual('3rd')
    expect(ordinal(4)).toEqual('4th')
    expect(ordinal(12)).toEqual('12th')
    expect(ordinal(22)).toEqual('22nd')
    expect(ordinal(33)).toEqual('33rd')
    expect(ordinal(101)).toEqual('101st')
  })
})
