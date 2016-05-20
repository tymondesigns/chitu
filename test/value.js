import test from 'ava';
import value from '../src/value';

test('it should return correct value if a function is passed', t => {
    let foo = (a, b, c) => `${a}${b}${c}`;
    let bar = (x, y, z) => (x + y) * z;

    t.is(value(foo, 'foo', 'bar', 'baz'), 'foobarbaz');
    t.is(value(bar, 1, 2, 3), 9);
});

test('it should return correct value if not a function', t => {
    let foo = 'bar';

    t.is(value(foo), 'bar');
});
