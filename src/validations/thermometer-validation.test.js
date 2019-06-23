import { ThermometerValidation } from './thermometer-validation';
import { config } from '../models/config';

describe('ThermometerValidation: validate', () => {
    /** @type {SensorValidation} */
    let validation;
    /** @type {ReferenceValues} */
    const reference = {
        carbonMonoxide: 6,
        humidity: 45,
        temperature: 70
    };

    /** @type {number[]} */
    const ultraPreciseValues = [70, 71, 69];
    /** @type {number[]} */
    const veryPreciseValues = [75, 70, 65];
    /** @type {number[]} */
    const preciseValues = [80, 70, 60];

    beforeAll(() => {
        validation = new ThermometerValidation(
            reference,
            config.validations.thermometer
        );
    });

    test('should be ultra precise', () => {
        expect(validation.validate(ultraPreciseValues)).toBe('ultra precise');
    });

    test('should be very precise', () => {
        expect(validation.validate(veryPreciseValues)).toBe('very precise');
    });

    test('should be precise values', () => {
        expect(validation.validate(preciseValues)).toBe('precise');
        expect(validation.validate([])).toBe('precise');
        expect(validation.validate([NaN])).toBe('precise');
    });
});
