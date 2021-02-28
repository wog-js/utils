// Require modules
const test = require('ava');
const isEmptyObject = require('../lib/is-empty-object');

test('is-empty-object',
    /** @param {import('ava').ExecutionContext} t */
    t => {
        t.true( isEmptyObject({}) );
        t.false( isEmptyObject({ foo: 1 }) );
        t.throws(() => {
            isEmptyObject(null);
        });
    }
);
