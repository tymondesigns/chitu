import test from 'ava';
import Str from '../src/Str';
import type from '../src/type';

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
    t.is(Str.limit('Lorem ipsum dolor sit amet', 100), 'Lorem ipsum dolor sit amet');
});

test('it should generate a random string', t => {
    t.true(type.isString(Str.random()));
    t.is(Str.random(16).length, 16);
});

test('it should check if a string starts with a string', t => {
    t.true(Str.startsWith('Lorem ipsum dolor sit amet', 'Lorem'));
    t.false(Str.startsWith('Lorem ipsum dolor sit amet', 'ipsum'));
    t.true(Str.startsWith('Lorem ipsum dolor sit amet', 'ipsum', 6));
});

test('it should check if a string ends with a string', t => {
    t.true(Str.endsWith('Lorem ipsum dolor sit amet', 'amet'));
    t.false(Str.endsWith('Lorem ipsum dolor sit amet', 'ipsum'));
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

test('it should check if a string is lowercase', t => {
    t.true(Str.isLowerCase('foo bar'));
    t.false(Str.isLowerCase('Foo Bar'));
});

test('it should check if a string is uppercase', t => {
    t.true(Str.isUpperCase('FOO'));
    t.false(Str.isUpperCase('FOO bar'));
});

test('it should convert a string into snake case', t => {
    t.is(Str.snake('chuckHerInTheUte'), 'chuck_her_in_the_ute');
    t.is(Str.snake('chuckHerInTheUTE'), 'chuck_her_in_the_u_t_e');
    t.is(Str.snake('chuckherintheute'), 'chuckherintheute');
});
