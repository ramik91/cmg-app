/**
 * @param {string} line
 * @returns {number[]}
 */
export const extractNumbers = line => line.match(/[+-]?\d+(\.\d+)?/g).map(Number);

/**
 * @param {string} line 
 * @returns {boolean}
 */
export const isReadingLine = line => /^(\d+(-)?){3}T(\d+(:)?){2}/.test(line);

/**
 * @param {string} referenceString
 * @return {ReferenceValues}
 */
export const getReferenceValues = referenceString => {
    /** @type {number[]} */
    const [temperature, humidity, carbonMonoxide] = extractNumbers(
        referenceString
    );

    return {
        monoxide: carbonMonoxide,
        humidity,
        temperature
    };
};
