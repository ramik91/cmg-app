import * as parserUtils from './parser-utils';

describe('parser-utils: extractNumbers', () => {
    test('should extract numbers', () => {
        /** @type {number[]} */
        const numbers = [1.25, 2, -3, 4];
        /** @type {string} */
        const text = numbers.join('some text');

        expect(parserUtils.extractNumbers(text)).toEqual(numbers);
    });
});

describe('parser-utils: getReferenceValues', () => {
    test('should get reference values', () => {
        /** @type {number[]} */
        const values = [70, 45, 6];
        /** @type {string} */
        const text = `reference ${values.join(' ')}`;

        expect(parserUtils.getReferenceValues(text)).toEqual({
            monoxide: values[2],
            humidity: values[1],
            temperature: values[0]
        });
    });
});
