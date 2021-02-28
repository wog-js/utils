/**
 * Tests whether an object is empty.
 *
 * @param {object} obj The object to test.
 * @returns {boolean} Whether the object is empty.
 */
module.exports = obj => Object.keys(obj).length === 0 && obj.constructor === Object;
