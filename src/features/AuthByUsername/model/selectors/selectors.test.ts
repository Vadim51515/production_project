import type { IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'

import {
    loginErrorSelector,
    loginIsLoadingSelector,
    loginPasswordSelector,
    loginUsernameSelector
} from './selectors'

describe('login selectors', () => {
    const state = {
        login: {
            username: 'admin',
            password: '123',
            isLoading: true,
            error: 'error'
        }
    } as IStateSchema

    const emptyState = {} as IStateSchema

    test('loginUsernameSelector возвращает корректное значение', () => {
        expect(loginUsernameSelector(state)).toBe(state.login?.username)
    })

    test('loginUsernameSelector возвращает корректное значение при пустом state', () => {
        expect(loginUsernameSelector(emptyState)).toBe('')
    })

    test('loginPasswordSelector возвращает корректное значение', () => {
        expect(loginPasswordSelector(state)).toBe(state.login?.password)
    })

    test('loginPasswordSelector возвращает корректное значение при пустом state', () => {
        expect(loginPasswordSelector(emptyState)).toBe('')
    })

    test('loginIsLoadingSelector возвращает корректное значение', () => {
        expect(loginIsLoadingSelector(state)).toBe(state.login?.isLoading)
    })

    test('loginIsLoadingSelector возвращает корректное значение при пустом state', () => {
        expect(loginIsLoadingSelector(emptyState)).toBe(undefined)
    })

    test('loginErrorSelector возвращает корректное значение', () => {
        expect(loginErrorSelector(state)).toBe(state.login?.error)
    })

    test('loginErrorSelector возвращает корректное значение при пустом state', () => {
        expect(loginErrorSelector(emptyState)).toBe(undefined)
    })
})
