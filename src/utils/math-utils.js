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