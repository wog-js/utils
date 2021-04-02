// Require modules
const test = require('ava');
const env = require('../lib/env');

process.env.SOME_TEXT = 'hello there';
process.env.SOME_NUMBER = '314159265359';
process.env.SOME_OTHER_NUMBER = '10';
process.env.SOME_BOOL = 'true';
process.env.SOME_OTHER_BOOL = 'false';
process.env.SOME_EMPTY_BOOL = '';

test('text',
    /** @param {import('ava').ExecutionContext} t */
    t => {
        t.is( env.text('SOME_TEXT'), 'hello there' );
        t.is( env.text('SOME_UNKNOWN_TEXT', 'unknown'), 'unknown' );
        t.is( env.text('SOME_UNKNOWN_TEXT'), undefined );
    }
);

test('int',
    /** @param {import('ava').ExecutionContext} t */
    t => {
        t.is( env.int('SOME_NUMBER'), 314159265359 );
        t.is( env.int('SOME_OTHER_NUMBER', 0, 20), 20 );
        t.is( env.int('SOME_UNKNOWN_NUMBER', 123456), 123456 );
        t.is( env.int('SOME_UNKNOWN_NUMBER'), undefined );
    }
);

test('bool',
    /** @param {import('ava').ExecutionContext} t */
    t => {
        t.is( env.bool('SOME_BOOL'), true );
        t.is( env.bool('SOME_OTHER_BOOL'), false );
        t.is( env.bool('SOME_EMPTY_BOOL'), false );
        t.is( env.bool('SOME_UNKNOWN_BOOL', false), false );
        t.is( env.bool('SOME_UNKNOWN_BOOL', true), true );
        t.is( env.bool('SOME_UNKNOWN_BOOL'), false );
        t.is( env.bool('SOME_UNKNOWN_BOOL', null), false );
        t.is( env.bool('SOME_UNKNOWN_BOOL', 'null'), true );
        t.is( env.bool('SOME_UNKNOWN_BOOL', 3), true );
        t.is( env.bool('SOME_TEXT', true), true );
        t.is( env.bool('SOME_TEXT'), false );
        t.is( env.bool('SOME_TEXT', 4), true );
        t.is( env.bool('SOME_TEXT', 0), false );
    }
);