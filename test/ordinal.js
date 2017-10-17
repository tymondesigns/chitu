import test from 'ava';
import ordinal from '../src/ordinal';

test('it should return the ordinal value for a given number', t => {
    t.is(ordinal(1), '1st');
    t.is(ordinal(2), '2nd');
    t.is(ordinal(3), '3rd');
    t.is(ordinal(4), '4th');
    t.is(ordinal(12), '12th');
    t.is(ordinal(22), '22nd');
    t.is(ordinal(33), '33rd');
    t.is(ordinal(101), '101st');
});
