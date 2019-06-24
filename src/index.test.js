import { evaluateLogFile } from './index';
import { logText } from '../__mocks__/log-text';

describe('evaluateLogFile', () => {
    test('should evaluate log file', () => {
        expect(evaluateLogFile(logText)).toEqual({
            'temp-1': 'precise',
            'temp-2': 'ultra precise',
            'hum-1': 'keep',
            'hum-2': 'discard',
            'mon-1': 'keep',
            'mon-2': 'discard'
        });
    });
});
