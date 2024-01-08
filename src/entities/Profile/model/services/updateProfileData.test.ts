import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import {
    Contry,
    Currency,
    ErrorsStatuses
} from '../../../../shared/const/common'
import { TestAsyncThunk } from '../../../../shared/lib/TestAsyncThunk'
import { updateProfileData } from './updateProfileData'

describe('updateProfileData', () => {
    const mockResponse = {
        firstName: 'Вадим',
        surname: 'Пушкин',
        age: 22,
        city: 'Екатеринбург',
        avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
        country: Contry.Russia,
        currency: Currency.RUB,
        id: '1'
    }

    const state = {
        profile: {
            form: mockResponse
        }
    } as IStateSchema

    const stateWithEmptyField = {
        profile: {
            form: {
                ...mockResponse,
                firstName: '',
                surname: ''
            }
        }
    } as IStateSchema

    test('Функция отработала корректно', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, state)
        thunk.api.put.mockReturnValue(Promise.resolve({ data: mockResponse }))
        const result = await thunk.callThunk('1')

        console.log('result', result)
        // Проверяем что диспатч был вызван
        expect(thunk.api.put).toHaveBeenCalled()

        // Проверяем что запрос был завешен со статусом fulfilled
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(mockResponse)
    })

    test('Функция отработала с ошибкой авторизации', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, state)
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')

        // Проверяем что запрос был завершен со статусом rejected
        expect(result.meta.requestStatus).toBe('rejected')

        // Проверяем что запрос был завершен с ошибкой ServerError
        expect(result.payload).toBe(ErrorsStatuses.ServerError)
    })

    test('Функция обработала валидационную ошибку', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, stateWithEmptyField)
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')

        // Проверяем что запрос был завершен со статусом rejected
        expect(result.meta.requestStatus).toBe('rejected')

        // Проверяем что запрос был завершен с ошибкой ServerError
        expect(result.payload).toStrictEqual({
            firstName: ErrorsStatuses.FieldRequired,
            surname: ErrorsStatuses.FieldRequired
        })
    })
})
