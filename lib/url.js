// Require modules
const querystring = require('querystring');
const env = require('./env');

/**
 * Formats a relative URL to be absolute with the app url as base.
 *
 * @param {string} path The relative path.
 * @param {object} query An object to be serialized as query parameters (e.g. id=1&name=john)
 * @returns {string} The absolute url.
 */
module.exports = (path = '/', query = {}) => {
    if (! path) path = '/';
    if (path === '#') return path;

    const base = env.text('APP_URL');
    const url = new URL(path, base);
    url.search = querystring.stringify(query);
    return url.toString();
};