import test from 'ava';
import type from '../src/type';

const types = {
    'Array': {
        'true': [
            ['foo'],
            [],
            'foo.bar'.split('.')
        ],
        'false': [
            'foo',
            true
        ]
    },
    'Object': {
        'true': [
            { foo: 'bar' },
            {}
        ],
        'false': [
            void 0
        ]
    },
    'String': {
        'true': [
            'foo',
            String('foo')
        ],
        'false': [
            [],
            false
        ]
    },
    'Date': {
        'true': [
            new Date()
        ],
        'false': [
            [],
            false
        ]
    },
    'RegExp': {
        'true': [
            /test/g
        ],
        'false': [
            [],
            false
        ]
    },
    'Function': {
        'true': [
            () => {},
            Math.sin
        ],
        'false': [
            [],
            false
        ]
    },
    'Boolean': {
        'true': [
            true,
            false,
            Boolean(true)
        ],
        'false': [
            1,
            0
        ]
    },
    'Number': {
        'true': [
            123,
            -99.99,
            Number(1)
        ],
        'false': [
            '123',
            void 0
        ]
    },
    'Error': {
        'true': [
            new Error,
            new TypeError,
            new SyntaxError
        ],
        'false': [
            '123',
            void 0
        ]
    },
    'Null': {
        'true': [
            null
        ],
        'false': [
            'foo',
            void 0
        ]
    },
    'Undefined': {
        'true': [
            undefined,
            void 0
        ],
        'false': [
            'foo',
            null,
            false
        ]
    },
    'Symbol': {
        'true': [
            Symbol('foo'),
            Symbol.iterator
        ],
        'false': [
            'foo',
            null,
            false
        ]
    }
};

// Execute the tests
for (let tp in types) {
    let assertions = types[tp];

    test(`it should check ${tp} type`, t => {
        for (let assertion in assertions) {
            for (let val of assertions[assertion]) t[assertion](type[`is${tp}`](val));
        }
    });
}
