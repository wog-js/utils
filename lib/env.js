/**
 * Retrieve a value from the environment.
 */
module.exports = {

    /**
     * Generic retriever for environment variables.
     *
     * @param {string} key The environment key to retrieve.
     * @param {any} def A default value.
     * @param {Function} validate A validation function that consumes the raw value from the environment.
     * @returns {string|any|undefined} The retrieved value, the default value or `undefined` (in this order).
     */
    get(key, def, validate) {
        if (Object.prototype.hasOwnProperty.call(process.env, key)) {
            const value = process.env[key];
            return validate(value) ? value : def;
        } else {
            return def;
        }
    },

    /**
     * Retrieves a text value from the environment.
     *
     * @param {string} key The environment key to retrieve.
     * @param {any} def A default value.
     * @returns {string|any|undefined} The retrieved value, the default value or `undefined` (in this order).
     */
    text(key, def) {
        return this.get(key, def, value => typeof value === 'string');
    },

    /**
     * Retrieves an int value from the environment.
     *
     * @param {string} key The environment key to retrieve.
     * @param {any} def A default value.
     * @param {number} min The minimum number to allow.
     * @returns {number|any|undefined} The retrieved value, the default value or `undefined` (in this order).
     */
    int(key, def, min) {
        const value = this.get(key, def, value => ! isNaN( parseInt(value) ));

        if (! value) return def;
        else if (min !== undefined) {
            return parseInt( value >= min ? value : min );
        }
        else {
            return parseInt( value );
        }
    },

    /**
     * Retrieves a boolean value from the environment.
     *
     * @param {string} key The environment key to retrieve.
     * @param {any} def A default value.
     * @returns {boolean|any|undefined} The retrieved value, the default value or `undefined` (in this order).
     */
    bool(key, def) {
        const result = this.get(key, def, value => {
            if (typeof value !== 'string') return false;
            else return ['true', 'false'].includes(value.toLowerCase());
        });
        
        if (typeof result === 'string') {
            if (result.toLowerCase() === 'true') return true;
            else if (result.toLowerCase() === 'false') return false;
            else return !!def;
        }
        else return !!def;
    }
	
};
