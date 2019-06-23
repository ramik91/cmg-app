import { HumiditySensorValidation } from './humidity-sensor-validation';
import { config } from '../models/config';

describe('HumiditySensorValidation: validate', () => {
    /** @type {HumiditySensorValidation} */
    let validation;
    /** @type {ReferenceValues} */
    const reference = {
        carbon: 6,
        humidity: 45,
        temperature: 70
    };
    /** @type {number[]} */
    const keepValues = [46, 45, 44];
    /** @type {number} */
    const discardValues = [47, ...keepValues, 43];

    beforeAll(() => {
        validation = new HumiditySensorValidation(
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
