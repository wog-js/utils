// Require modules
const test = require('ava');
const bindFn = require('../lib/bind-fn');

class Test {

    constructor() {
        this.message = 'hello there';
    }

    test() {
        return this.message;
    }

}

test('bind-fn',
    /** @param {import('ava').ExecutionContext} t */
    t => {
        const clazz = new Test();
        const bound = bindFn(clazz, 'test');

        t.throws(() => {
            bindFn(null, 'test');
        });
        t.throws(() => {
            bindFn(clazz, 'notFound');
        });
        t.throws(() => {
            clazz.test.call(null);
        });
        t.is( bound(), 'hello there' );
    }
);
