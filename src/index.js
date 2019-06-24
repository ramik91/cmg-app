import { parse as parseText } from './parsers/log-text-parser';
import { config } from './models/config';

import { CarbonMonoxideValidation } from './validations/carbon-monoxide-validation';
import { HumidityValidation } from './validations/humidity-validation';
import { ThermometerValidation } from './validations/thermometer-validation';
import { ValidationFactory } from './factories/validation-factory';

/** @type {ValidationFactory} */
const validationFactory = new ValidationFactory();

validationFactory
    .registerValidation('monoxide', CarbonMonoxideValidation)
    .registerValidation('humidity', HumidityValidation)
    .registerValidation('thermometer', ThermometerValidation);

/**
 * Evaluate sensor readings in provided text log.
 *
 * @param {string} logContentsStr
 * @returns {{[key: string]: string}}
 */
export const evaluateLogFile = logContentsStr => {
    /** @type {Log} */
    const log = parseText(logContentsStr);
    /** @type {{[key: string]: string}} */
    const evaluationResult = {};

    for (const reading of log.sensorReadings) {
        /** @type {SensorValidation} */
        const validation = validationFactory.getValidation(
            reading.type,
            log.reference,
            config.validations[reading.type]
        );

        evaluationResult[reading.name] = validation.validate(reading.values);
    }

    return evaluationResult;
};
