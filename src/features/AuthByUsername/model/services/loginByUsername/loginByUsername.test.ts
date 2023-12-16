import axios from 'axios'
import { userActions } from '../../../../../entities/User'
import { TestAsyncThunk } from '../../../../../shared/lib/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, { shallow: false })
describe('loginByUsername', () => {
    const loginData = {
        username: 'admin',
        password: '123'
    }

    const loginResponse = {
        username: 'admin',
        id: 1
    }

    test('Функция отработала корректно', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: loginResponse }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk(loginData)

        console.log('result', result)
        // Проверяем что action был вызван с данными которые мы получили из запроса
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(loginResponse))

        // Проверяем что диспатч был вызван 3 раза
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)

        // Проверяем что диспатч был вызван
        expect(mockedAxios.post).toHaveBeenCalled()

        // Проверяем что запрос был завешен со статусом fulfilled
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(loginResponse)
    })

    test('Функция отработала с ошибкой авторизации', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk(loginData)
        // Проверяем что диспатч был вызван 2 раза
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)

        // Проверяем что запрос был завешен со статусом rejected
        expect(result.meta.requestStatus).toBe('rejected')

        // Возвращаемое значение равно "Вы ввели неверный логин или пароль"
        expect(result.payload).toBe('Вы ввели неверный логин или пароль')
    })
})
