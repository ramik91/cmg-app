import * as parserUtils from '../utils/parser-utils';

/**
 * @param {string[]} lines
 * @returns {SensorReading[]}
 */
const getSensorReadings = lines => {
    /** @type {SensorReading[]} */
    const readings = [];
    /** @type {SensorReading} */
    let lastReading;

    for (const line of lines) {
        /** @type {boolean} */
        const isReadingLine =  parserUtils.isReadingLine(line);

        if (!isReadingLine) {
            const [type, name] = line.split(' ');

            lastReading = {
                name,
                type,
                values: []
            };

            readings.push(lastReading);
        }

        if (isReadingLine && lastReading) {
            /** @type {number} */
            const readingValue = parserUtils.extractNumbers(line.split(' ')[1])[0];

            lastReading.values.push(readingValue);
        }
    }

    return readings;
};

/**
 * Parse content of log text file.
 * 
 * @param {string} fileContent
 * @returns {Log}
 */
export const parse = fileContent => {
    /** @type {string[]} */
    const lines = fileContent
        .trim()
        .match(/[^\r\n]+/g)
        .filter(line => /\S/.test(line));

    return {
        reference: parserUtils.getReferenceValues(lines.splice(0, 1)[0]),
        sensorReadings: getSensorReadings(lines)
    };
};
