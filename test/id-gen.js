// Require modules
const test = require('ava');
const idGen = require('../lib/id-gen');

test('sync',
    /** @param {import('ava').ExecutionContext} t */
    t => {
        t.true( typeof idGen.sync() === 'string' );
    }
);

test('async',
    /** @param {import('ava').ExecutionContext} t */
    async (t) => {
        await t.notThrowsAsync(async () => {
            t.true( typeof await idGen() === 'string' );
        });
    }
);