// Require modules
const nanoidSync = require('nanoid/generate');
const nanoidAsync = require('nanoid/async/generate');
const alphabet = require('./nanoid-alphabet');

const DEFAULT_LENGTH = 10;

/**
 * Asynchronously generates a random unique identifier.
 * 
 * @param {number} length The length of the identifier. Defaults to 10.
 */
module.exports = (length = DEFAULT_LENGTH) => nanoidAsync(alphabet, length || DEFAULT_LENGTH);

/**
 * Synchronously generates a random unique identifier.
 * 
 * @param {number} length The length of the identifier. Defaults to 10.
 */
module.exports.sync = (length = DEFAULT_LENGTH) => nanoidSync(alphabet, length || DEFAULT_LENGTH);