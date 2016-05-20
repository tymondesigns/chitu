# chitu (Chuck Her In The Ute)

![Chuck Her In The Ute](https://cloud.githubusercontent.com/assets/1801923/15432591/ce7337fc-1ea6-11e6-86d0-c796891bb04b.png)

[youtube.com/watch?v=9i2eZaJsC7g](https://www.youtube.com/watch?v=9i2eZaJsC7g)

Utilities

[![Travis](https://img.shields.io/travis/tymondesigns/chitu.svg?style=flat-square)](https://travis-ci.org/tymondesigns/chitu)

## Modules available

### Check
A module to check the type of a given value.

```js
import { check } from 'chitu';

check.isArray(['foo', 'bar']); // = true
check.isObject({ foo: 'bar' }); // = true
check.isString('foo'); // = true
check.isDate(new Date()); // = true
check.isRegExp(/foo/g); // = true
check.isFunction(function () {}); // = true
check.isBoolean(false); // = true
check.isNumber(123); // = true
check.isError(new Error()); // = true
check.isNull(null); // = true
check.isUndefined(void 0); // = true
check.isSymbol(Symbol('foo')); // = true
```

### Value

