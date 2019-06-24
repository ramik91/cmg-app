export class ValidationFactory {
    constructor() {
        /**
         * @private
         * @type {[key: string]: Function}
         */
        this.validations = {};
    }

    /**
     * Get validation logic for specified sensor type
     *
     * @param {string} key
     * @param {ReferenceValues} reference
     * @param {ValidationConfig} config
     */
    getValidation(key, reference, config) {
        if (!this.validations.hasOwnProperty(key)) {
            return null;
        }

        /** @type {Function} */
        const ctor = this.validations[key];

        return new ctor(reference, config);
    }

    /**
     * Register validation class logic to specified sensor type.
     *
     * @param {string} key
     * @param {Function} ctor
     * @returns {ValidationFactory}
     */
    registerValidation(key, ctor) {
        if (typeof ctor.prototype.validate === 'function') {
            this.validations[key] = ctor;
        }

        return this;
    }
}
