import { Contry, Currency, ErrorsStatuses } from '../../../../shared/constants/common';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
    const profile = {
        firstName: 'Вадим',
        surname: 'Пушкин',
        age: 22,
        city: 'Екатеринбург',
        avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
        country: Contry.Russia,
        currency: Currency.RUB,
        id: '1',
    };

    test('Все значения корректны, валидация не выдала ошибку', async () => {
        const result = validateProfileData(profile);

        expect(result).toEqual({});
    });

    test('Поля firstName и surname не заполненны ', async () => {
        const result = validateProfileData({ ...profile, surname: '', firstName: '' });

        expect(result).toStrictEqual({
            firstName: ErrorsStatuses.FieldRequired,
            surname: ErrorsStatuses.FieldRequired,
        });
    });
});
