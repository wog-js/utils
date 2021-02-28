// Require modules
const nanoid = require('nanoid/generate');
const alphabet = require('./nanoid-alphabet');
const DEFAULT_LENGTH = 10;

/**
 * Generates a random unique identifier.
 * 
 * @param {number} length The length of the identifier. Defaults to 10.
 */
module.exports = (length = DEFAULT_LENGTH) => nanoid(alphabet, length || DEFAULT_LENGTH);
