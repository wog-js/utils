/**
 * Shortcut for binding a function to it's parent object. Useful for use with classes.
 *
 * @param {object} obj The object to bind to.
 * @param {string} func The name of the function to bind.
 */
module.exports = (obj, func) => obj[func].bind(obj);
