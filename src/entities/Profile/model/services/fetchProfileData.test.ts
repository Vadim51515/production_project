import { Contry, Currency } from '../../../../shared/constants/common';
import { TestAsyncThunk } from '../../../../shared/lib/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData', () => {
    const getResponse = {
        firstName: 'Вадим',
        surname: 'Пушкин',
        age: 22,
        city: 'Екатеринбург',
        avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
        country: Contry.Russia,
        currency: Currency.RUB,
        id: 1,
    };

    test('Функция отработала корректно', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: getResponse }));
        const result = await thunk.callThunk('1');

        // Проверяем что диспатч был вызван
        expect(thunk.api.get).toHaveBeenCalled();

        // Проверяем что запрос был завешен со статусом fulfilled
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(getResponse);
    });

    test('Функция отработала с ошибкой авторизации', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        // Проверяем что запрос был завешен со статусом rejected
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
