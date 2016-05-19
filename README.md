# chitu (Chuck Her In The Ute)

[https://www.youtube.com/watch?v=9i2eZaJsC7g](youtube.com/watch?v=9i2eZaJsC7g)

Utilities

[![Travis](https://img.shields.io/travis/tymondesigns/chitu.svg?style=flat-square)](https://travis-ci.org/tymondesigns/chitu)

## Modules provided

### Check
A module to check the type of a given value.

```js
import { check } from 'chitu';

check.isArray(['foo', 'bar']); // = true
check.isObject({ foo: 'bar' }); // = true
check.isString('foo'); // = true
```

# Usage

## ES2015

```js
import { check, value } from 'chitu';
```

