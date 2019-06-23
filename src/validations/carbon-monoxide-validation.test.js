import { CarbonMonoxideValidation } from './carbon-monoxide-validation';
import { config } from '../models/config';

describe('CarbonMonoxideValidation: validate', () => {
    /** @type {CarbonMonoxideValidation} */
    let validation;
    /** @type {ReferenceValues} */
    const reference = {
        carbonMonoxide: 6,
        humidity: 45,
        temperature: 70,
    };
    /** @type {number} */
    const keepValues = [3, 6, 9];
    const discardValues = [4, ...keepValues, 10]

    beforeAll(() => {
        validation = new CarbonMonoxideValidation(
            reference,
            config.validations.carbonMonoxide,
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