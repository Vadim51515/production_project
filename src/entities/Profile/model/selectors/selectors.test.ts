import type { IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import {
    loginUsernameSelector
} from '../../../../features/AuthByUsername/model/selectors/selectors'
import {
    Contry,
    Currency,
    RuntimeStatuses
} from '../../../../shared/const/common'
import { type IProfileState } from '../../types'
import {
    profileAvatarSelector,
    profileDataSelector,
    profileErrorSelector,
    profileFieldErrorSelector,
    profileFieldValue,
    profileFormSelector,
    profileIsLoadingSelector,
    profileIsReadonlySelector
} from './selectors'

describe('profile selectors', () => {
    const state = {
        profile: {
            isReadonly: false,
            status: RuntimeStatuses.Loading,
            error: 'test error',
            formErrors: { firstName: '' },
            data: {
                firstName: 'Вадим',
                surname: 'Пушкин',
                age: 22,
                city: 'Екатеринбург',
                avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
                country: Contry.Russia,
                currency: Currency.RUB,
                id: 1
            },
            form: {
                firstName: 'Петя',
                surname: 'Пупкин',
                age: 16,
                city: 'Москва',
                avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
                country: Contry.Russia,
                currency: Currency.RUB,
                id: 1
            }
        }
    } as unknown as IStateSchema

    const emptyState = {} as IStateSchema

    test('profileAvatarSelector возвращает корректное значение', () => {
        expect(profileAvatarSelector(state)).toBe(state.profile?.data?.avatar)
    })
    test('profileAvatarSelector возвращает корректное значение при пустом state', () => {
        expect(loginUsernameSelector(emptyState)).toBe('')
    })

    test('profileIsLoadingSelector возвращает корректное значение', () => {
        expect(profileIsLoadingSelector(state)).toBe(true)
    })
    test('profileIsLoadingSelector возвращает корректное значение при пустом state', () => {
        expect(profileIsLoadingSelector(emptyState)).toBe(false)
    })

    test('profileIsReadonlySelector возвращает корректное значение', () => {
        expect(profileIsReadonlySelector(state)).toBe(false)
    })
    test('profileIsReadonlySelector возвращает корректное значение при пустом state', () => {
        expect(profileIsReadonlySelector(emptyState)).toBe(undefined)
    })

    test('profileDataSelector возвращает корректное значение', () => {
        expect(profileDataSelector(state)).toEqual(state.profile?.data)
    })
    test('profileDataSelector возвращает корректное значение при пустом state', () => {
        expect(profileDataSelector(emptyState)).toBe(undefined)
    })

    test('profileErrorSelector возвращает корректное значение', () => {
        expect(profileErrorSelector(state)).toBe(state.profile?.error)
    })
    test('profileErrorSelector возвращает корректное значение при пустом state', () => {
        expect(profileErrorSelector(emptyState)).toBe(undefined)
    })

    test('profileFormSelector возвращает корректное значение', () => {
        expect(profileFormSelector(state)).toBe(state.profile?.form)
    })
    test('profileFormSelector возвращает корректное значение при пустом state', () => {
        expect(profileFormSelector(emptyState)).toBe(undefined)
    })

    test('profileFieldErrorSelector возвращает корректное значение', () => {
        expect(profileFieldErrorSelector(state, 'firstName')).toBe(state.profile?.formErrors?.firstName)
    })
    test('profileFieldErrorSelector возвращает корректное значение при пустом state', () => {
        expect(profileFieldErrorSelector(emptyState, 'firstName')).toBe(undefined)
    })

    test('profileFieldValue возвращает корректное значение при наличии открытой формы', () => {
        expect(profileFieldValue(state, 'firstName')).toBe(state.profile?.form?.firstName)
    })
    test('profileFieldValue возвращает корректное значение при отсутвии открытой формы', () => {
        expect(profileFieldValue({
            ...state,
            profile: {
                ...state.profile as IProfileState,
                isReadonly: true
            }
        }, 'firstName')).toBe(state.profile?.data?.firstName)
    })
    test('profileFieldValue возвращает корректное значение при пустом state', () => {
        expect(profileFieldValue(emptyState, 'firstName')).toBe(undefined)
    })
})
