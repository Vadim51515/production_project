import type { IStateSchema } from '../../app/providers/StoreProvider/config/stateSchema';
import { Contry, Currency, RuntimeStatuses } from './common';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const mockStore: IStateSchema = {
    profile: {
        isReadonly: true,
        status: RuntimeStatuses.Loading,
        data: {
            firstName: 'Вадим',
            surname: 'Пушкин',
            age: 22,
            city: 'Екатеринбург',
            avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
            country: Contry.Russia,
            currency: Currency.RUB,
            id: '1',
        },
        form: {
            firstName: 'Вадим',
            surname: 'Пушкин',
            age: 22,
            city: 'Екатеринбург',
            avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
            country: Contry.Russia,
            currency: Currency.RUB,
            id: '1',
        },
    },
    user: {
        isInit: true,
        authData: {
            id: '1',
            username: 'inhellim 123',
        },
    },
};
