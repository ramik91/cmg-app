/**
 * @implements {SensorValidation}
 */
export class CarbonMonoxideValidation {
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
     * Keeps or discard carbon monoxide sensor based on its readings
     * 
     * @param {number[]} values 
     * @return {string}
     */
    validate(values) {
        /** @type {number[]} */
        const referenceDiffs = values.map((value) => Math.abs(this.reference.carbonMonoxide - value));
        /** @type {PrecisionCategory} */
        let precisionCategory = this.config.categories.find((category) => {
            return referenceDiffs.length && referenceDiffs.every((diff) => diff <= category.thresholds[0]);
        });

        precisionCategory = precisionCategory || { name: this.config.defaultCategory, thresholds: [] };
        return precisionCategory.name;
    }
}
