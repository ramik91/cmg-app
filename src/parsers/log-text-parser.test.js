import { parse } from './log-text-parser';

/** @type {string} */
const readingMock = [
    'reference 70 45 6',
    'thermometer temp-1',
    '2007-04-05T22:00 0.0',
    '2007-04-05T22:01 0.1',
    'humidity hum-1',
    '2007-04-05T22:00 0.0',
    '2007-04-05T22:01 0.1',
    'monoxide mon-1',
    '2007-04-05T22:00 0',
    '2007-04-05T22:01 1',
].join('\r\n');

describe('log-text-parser: parse', () => {

    test('should parse readings log', () => {
        /** @type {Log} */
        const log = parse(readingMock);

        expect(log.reference).toEqual({
            monoxide: 6,
            humidity: 45,
            temperature: 70,
        });

        expect(log.sensorReadings).toEqual([
            {
                name: 'temp-1',
                type: 'thermometer',
                values: [0, 0.1],
            },
            {
                name: 'hum-1',
                type: 'humidity',
                values: [0, 0.1],
            },
            {
                name: 'mon-1',
                type: 'monoxide',
                values: [0, 1],
            }
        ]);
    });
});
