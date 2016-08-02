import test from 'ava';
import round from '../src/round';

test('it should return a number to a given number of decimal places', t => {
    t.is(round(1, 2), 1.00);
    t.is(round(1.937, 2), 1.94);
    t.is(round(1.93788456, 4), 1.9379);
    t.is(round(1.93788456, 0), 2);
});
