/**
 * Compute mean value
 * @param {number[]} values 
 * @returns {number}
 */
export const getMean = (values) => {
    /** @type {number} */
    const sum = values.reduce((acc, value) => (acc + value), 0);

    return (sum / values.length);
};

/**
 * Compute standard deviation of the whole population
 * @param {number[]} values 
 * @returns {number}
 */
export const getStdDev = (values) => {
    /** @type {number} */
    const valuesMean = getMean(values);
    /** @type {number[]} */
    const meanSquaredDiffs = values.map((value) => Math.pow((value - valuesMean), 2));
    /** @type {number} */
    const diffsMean = getMean(meanSquaredDiffs);

    return Math.sqrt(diffsMean);
};
