import { getMean } from './math-utils';

describe('math-utils: getMean', () => {
    /** @type {number[]} */
    const values = new Array(10).fill(NaN).map((element, index) => index);

    test('it should commpute mean value 4.5', () => {
        /** @type {number} */
        const meanValue = getMean(values);

        expect(meanValue).toBe(4.5);
    });

    test('it should compute mean value NaN', () => {
        /** @type {number} */
        const meanValue = getMean([]);

        expect(meanValue).toBe(NaN);
    })
});