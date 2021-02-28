// Require modules
const isDebug = require('./is-debug');

/**
 * Logs an error message and immediately terminates the application.
 *
 * @param {string|Error} err The error message.
 * @param {number} code The exit code. 
 * @param {object} logger An object with a function called `error` to use for logging. Defaults to `console`.
 */
module.exports = (err, code = -1, logger = console) => {
    logger.error(isDebug ? err : err.message || err);
    process.exit(code);
};
