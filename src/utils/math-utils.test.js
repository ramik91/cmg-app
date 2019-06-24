import { getMean, getStdDev } from './math-utils';

describe('math-utils: getMean', () => {
    /** @type {number[]} */
    const values = new Array(10).fill(NaN).map((element, index) => index);

    test('it should commpute mean: 4.5', () => {
        /** @type {number} */
        const meanValue = getMean(values);

        expect(meanValue).toBe(4.5);
    });

    test('it should compute mean: NaN', () => {
        /** @type {number} */
        const meanValue = getMean([]);

        expect(meanValue).toBe(NaN);
    });
});

describe('math-utils: getStdDev', () => {
    /** @type {number[]} */
    const sameValues = new Array(10).fill(2);

    test('it should compute standard deviation: 0', () => {
        /** @type {number} */
        const stdDev = getStdDev(sameValues);

        expect(stdDev).toBe(0);
    });

    test('it should compute standard deviation: 2.5', () => {
        /** @type {number} */
        const stdDev = getStdDev([10, 5]);

        expect(stdDev).toBe(2.5);
    });

    test('it should compute standard deviation: NaN', () => {
        /** @type {number} */
        const stdDev = getStdDev([]);

        expect(stdDev).toBe(NaN);
    })
});
