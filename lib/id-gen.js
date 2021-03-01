// Require modules
const nanoidSync = require('nanoid').customAlphabet;
const nanoidAsync = require('nanoid/async').customAlphabet;
const alphabet = require('./nanoid-alphabet');

const DEFAULT_LENGTH = 10;

/**
 * @typedef {(() => string) | (() => Promise<string>)} GeneratorFunction
 */

/**
 * @type {Object.<number, GeneratorFunction>}
 */
const cache = {};

/**
 * Creates a generator function or returns one from the cache.
 * 
 * @param {number} length The string length
 * @param {Function} fun A function which creates the generator function.
 * @returns {GeneratorFunction}
 */
const create = (length, fun) => {
    const theLength = length || DEFAULT_LENGTH;
    if ( cache.hasOwnProperty(theLength) ) {
        return cache[length];
    } else {
        const generator = fun(alphabet, theLength);
        cache[theLength] = generator;
        return generator;
    }
};

/**
 * Asynchronously generates a random unique identifier.
 * 
 * @param {number} length The length of the identifier. Defaults to 10.
 * @returns {GeneratorFunction}
 */
module.exports = (length = DEFAULT_LENGTH) => create(length, nanoidAsync);

/**
 * Synchronously generates a random unique identifier.
 * 
 * @param {number} length The length of the identifier. Defaults to 10.
 * @returns {GeneratorFunction}
 */
module.exports.sync = (length = DEFAULT_LENGTH) => create(length, nanoidSync);