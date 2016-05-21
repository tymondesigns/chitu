import test from 'ava';
import Str from '../src/Str';

test('it should capitalize all words in a string', t => {
    t.is(Str.capitalize('Lorem ipsum dolor sit amet'), 'Lorem Ipsum Dolor Sit Amet');
});

test('it should capitalize the first word in a string', t => {
    t.is(Str.ucfirst('foo'), 'Foo');
});

test('it should determine whether a string conatins another string', t => {
    t.true(Str.contains('foobarbaz', 'bar'));
    t.false(Str.contains('foobarbaz', 'bob'));
});

test('it should limit a string', t => {
    t.is(Str.limit('Lorem ipsum dolor sit amet', 20), 'Lorem ipsum dolor si...');
    t.is(Str.limit('Lorem ipsum dolor sit amet', 10, '***'), 'Lorem ipsu***');
});

test('it should generate a random string', t => {
    const strs = [];
    for (let i = 100 - 1; i >= 0; i--) {
        let val = Str.random();
        strs.push(val);

        t.is(val.length, 32);
        t.false(strs.indexOf(val) === -1);
    }
});

test('it should check if a string starts with a string', t => {
    t.true(Str.startsWith('Lorem ipsum dolor sit amet', 'Lorem'));
    t.false(Str.startsWith('Lorem ipsum dolor sit amet', 'ipsum'));

    t.true(Str.startsWith('Lorem ipsum dolor sit amet', 'ipsum', 6));
});

test('it should convert a string into studly case', t => {
    t.is(Str.studly('chuck_her_in_the_ute'), 'ChuckHerInTheUte');
    t.is(Str.studly('chuck_her_in_the_u_t_e'), 'ChuckHerInTheUTE');
    t.is(Str.studly('chuck  -_-  her  -_-  in  -_-  the  -_-  ute'), 'ChuckHerInTheUte');
    t.is(Str.studly('tymon_designs'), 'TymonDesigns');
    t.is(Str.studly('tymondesigns'), 'Tymondesigns');
});

test('it should convert a string into camel case', t => {
    t.is(Str.camel('chuck_her_in_the_ute'), 'chuckHerInTheUte');
    t.is(Str.camel('chuck_her_in_the_u_t_e'), 'chuckHerInTheUTE');
    t.is(Str.camel('chuck  -_-  her  -_-  in  -_-  the  -_-  ute'), 'chuckHerInTheUte');
    t.is(Str.camel('tymon_designs'), 'tymonDesigns');
    t.is(Str.camel('tymonDesigns'), 'tymonDesigns');
});
