import { getMean, getStdDev } from '../utils/math-utils';

/**
 * Represents thermometer sensor validation logic
 * 
 * @implements {SensorValidation}
 */
export class ThermometerValidation {
    /**
     * @param {ReferenceValues} reference
     * @param {ValidationConfig} config
     */
    constructor(reference, config) {
        /** @type {ReferenceValues} */
        this.reference = reference;
        /** @type {ValidationConfig} */
        this.config = config;
    }

    /**
     * Categorizes thermometer sensor by temperature readings
     * 
     * @public
     * @param {number[]} values
     * @returns {string}
     */
    validate(values) {
        /** @type {number} */
        const meanDiff = Math.abs(this.reference.temperature - getMean(values));
        /** @type {number} */
        const stdDev = getStdDev(values);
        /** @type {PrecisionCategory} */
        let precisionCategory = this.config.categories.find((category) => {
            return meanDiff <= category.thresholds[0] && stdDev < category.thresholds[1];
        });

        precisionCategory = precisionCategory || { name: this.config.defaultCategory, thresholds: [] };

        return precisionCategory.name;
    }
}
