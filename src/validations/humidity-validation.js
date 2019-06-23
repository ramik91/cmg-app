/**
 * Represents humidity sensor validation logic
 * 
 * @implements {SensorValidation}
 */
export class HumidityValidation {
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
     * Keeps or discards humidity sensor by validating reading results
     * 
     * @param {number[]} values
     * @return {string}
     */
    validate(values) {
        /** @type {number[]} */
        const referenceDiffs = values.map((value) => Math.abs(this.reference.humidity - value));
        /** @type {PrecisionCategory} */
        let precisionCategory = this.config.categories.find((category) => {
            return referenceDiffs.length && referenceDiffs.every((diff) => diff <= category.thresholds[0]);
        });

        precisionCategory = precisionCategory || { name: this.config.defaultCategory, thresholds: [] };
        return precisionCategory.name;
    }
}
