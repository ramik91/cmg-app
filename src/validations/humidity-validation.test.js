import { HumidityValidation } from './humidity-validation';
import { config } from '../models/config';

describe('HumidityValidation: validate', () => {
    /** @type {HumidityValidation} */
    let validation;
    /** @type {ReferenceValues} */
    const reference = {
        monoxide: 6,
        humidity: 45,
        temperature: 70
    };
    /** @type {number[]} */
    const keepValues = [46, 45, 44];
    /** @type {number} */
    const discardValues = [47, ...keepValues, 43];

    beforeAll(() => {
        validation = new HumidityValidation(
            reference,
            config.validations.humidity
        );
    });

    test('should keep sensor', () => {
        expect(validation.validate(keepValues)).toBe('keep');
    });

    test('should discard sensor', () => {
        expect(validation.validate(discardValues)).toBe('discard');
        expect(validation.validate([])).toBe('discard');
        expect(validation.validate([NaN])).toBe('discard');
    });
});
