import { userActions } from '../../../../../entities/User'
import { TestAsyncThunk } from '../../../../../shared/lib/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'

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
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: loginResponse }))
        const result = await thunk.callThunk(loginData)

        console.log('result', result)
        // Проверяем что action был вызван с данными которые мы получили из запроса
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(loginResponse))

        // Проверяем что диспатч был вызван 3 раза
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)

        // Проверяем что диспатч был вызван
        expect(thunk.api.post).toHaveBeenCalled()

        // Проверяем что запрос был завешен со статусом fulfilled
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(loginResponse)
    })

    test('Функция отработала с ошибкой авторизации', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk(loginData)
        // Проверяем что диспатч был вызван 2 раза
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)

        // Проверяем что запрос был завешен со статусом rejected
        expect(result.meta.requestStatus).toBe('rejected')

        // Возвращаемое значение равно "Вы ввели неверный логин или пароль"
        expect(result.payload).toBe('Вы ввели неверный логин или пароль')
    })
})
