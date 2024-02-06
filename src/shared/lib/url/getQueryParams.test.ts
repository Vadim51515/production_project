import { getQueryParams } from './getQueryParams';

describe('addQueryParams', () => {
    test('Функция принимает 1 параметр', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('Функция принимает 2 параметра', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2',
        });
        expect(params).toBe('?test=value&second=2');
    });
    test('Функция принимает undefined 1 из параметров', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
