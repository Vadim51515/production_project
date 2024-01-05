import { TestAsyncThunk } from '../../../../../shared/lib/TestAsyncThunk'
import { mockArticle } from '../../constants'
import { fetchArticleById } from './fetchArticleById'

describe('fetchArticleById', () => {
    test('Функция отработала корректно', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById)
        thunk.api.get.mockReturnValue(Promise.resolve({ data: mockArticle }))
        const result = await thunk.callThunk('1')

        // Проверяем что диспатч был вызван
        expect(thunk.api.get).toHaveBeenCalled()

        // Проверяем что запрос был завешен со статусом fulfilled
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(mockArticle)
    })

    test('Функция fetchArticleById отработала с ошибкой авторизации', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')

        // Проверяем что запрос был завешен со статусом rejected
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
