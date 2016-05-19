import test from 'ava';
import value from '../src/value';

test('it should return correct value if a function is passed', t => {
    let foo = (a, b, c) => `${a}${b}${c}`;

    t.is(value(foo, 'foo', 'bar', 'baz'), 'foobarbaz');
});

test('it should return correct value if not a function', t => {
    let foo = 'bar';

    t.is(value(foo), 'bar');
});
