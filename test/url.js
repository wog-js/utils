// Require modules
const test = require('ava');
const url = require('../lib/url');

process.env.APP_URL = 'https://wog.example.org';

test('url',
    /** @param {import('ava').ExecutionContext} t */
    t => {
        t.is( url('login'), 'https://wog.example.org/login' )
        t.is( url('auth', { u: 2 }), 'https://wog.example.org/auth?u=2' )
        t.is( url('#'), '#' );
        t.is( url(), 'https://wog.example.org/' );
        t.is( url(''), 'https://wog.example.org/' );
        t.is( url(null), 'https://wog.example.org/' );
        t.is( url(undefined), 'https://wog.example.org/' );
    }
);
