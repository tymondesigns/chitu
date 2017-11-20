import { type } from './type'

const TYPES = {
  Array: {
    Truthy: [['foo'], [], 'foo.bar'.split('.')],
    Falsy: ['foo', true]
  },
  Object: {
    Truthy: [{ foo: 'bar' }, {}],
    Falsy: [void 0]
  },
  String: {
    Truthy: ['foo', String('foo')],
    Falsy: [[], false]
  },
  Date: {
    Truthy: [new Date()],
    Falsy: [[], false]
  },
  RegExp: {
    Truthy: [/test/g],
    Falsy: [[], false]
  },
  Function: {
    Truthy: [() => {}, Math.sin],
    Falsy: [[], false]
  },
  Boolean: {
    Truthy: [true, false, Boolean(true)],
    Falsy: [1, 0]
  },
  Number: {
    Truthy: [123, -99.99, Number(1)],
    Falsy: ['123', void 0]
  },
  Error: {
    Truthy: [new Error(), new TypeError(), new SyntaxError()],
    Falsy: ['123', void 0]
  },
  Null: {
    Truthy: [null],
    Falsy: ['foo', void 0]
  },
  Undefined: {
    Truthy: [undefined, void 0],
    Falsy: ['foo', null, false]
  }
}

describe('type', () => {
  for (let tp in TYPES) {
    let assertions = TYPES[tp]

    test(`it should check ${tp} type`, () => {
      for (let assertion in assertions) {
        for (let val of assertions[assertion]) expect(type[`is${tp}`](val))[`toBe${assertion}`]()
      }
    })
  }
})
