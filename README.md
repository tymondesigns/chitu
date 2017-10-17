# chitu (Chuck Her In The Ute)

![Chuck Her In The Ute](https://cloud.githubusercontent.com/assets/1801923/15432591/ce7337fc-1ea6-11e6-86d0-c796891bb04b.png)

[youtube.com/watch?v=9i2eZaJsC7g](https://www.youtube.com/watch?v=9i2eZaJsC7g)

JavaScript Utilities

[![Travis](https://img.shields.io/travis/tymondesigns/chitu.svg?style=flat-square)](https://travis-ci.org/tymondesigns/chitu)
[![Codecov](https://img.shields.io/codecov/c/github/tymondesigns/chitu.svg?maxAge=2592000&style=flat-square)](https://codecov.io/gh/tymondesigns/chitu)
[![npm](https://img.shields.io/npm/v/chitu.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/chitu)

## Installation

#### via npm
```js
> npm install chitu --save
```

#### via yarn
```js
> yarn add chitu
```

## Modules available

### type
A module to check the type of a given value.

```js
import { type } from 'chitu';

type.isArray(['foo', 'bar']); // = true
type.isObject({ foo: 'bar' }); // = true
type.isString('foo'); // = true
type.isDate(new Date()); // = true
type.isRegExp(/foo/g); // = true
type.isFunction(function () {}); // = true
type.isBoolean(false); // = true
type.isNumber(123); // = true
type.isError(new Error()); // = true
type.isNull(null); // = true
type.isUndefined(void 0); // = true
type.isSymbol(Symbol('foo')); // = true

// or for anything else
type.is('Array', ['foo']);
type.is('Object', { baz: 'bob' });
// etc
```

### value

Check if the value is a function and execute it (with provided parameters) or simply return the value.

```js
import { value } from 'chitu';

const foo = (a, b, c) => a * b * c;
const bar = ['baz'];

const fooVal = value(foo, 2, 2, 2); // = 8
const barVal = value(bar); // = ['baz']
```

### round

Round a number to a given number of decimal places.

```js
import { round } from 'chitu';

round(123.456); // = 123.46
round(1, 2); // = 1.00
round(1.937); // = 1.94
// etc
```

### ordinal

Return the ordinal value for a given number.

```js
import { ordinal } from 'chitu';

ordinal(1) // = '1st'
ordinal(2) // = '2nd'
ordinal(3) // = '3rd'
ordinal(4) // = '4th'
ordinal(12) // = '12th'
ordinal(101) // = '101st'
// etc
```

