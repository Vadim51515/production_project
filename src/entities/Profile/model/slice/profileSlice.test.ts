import {
    Contry,
    Currency,
    ErrorsStatuses,
    RuntimeStatuses
} from '../../../../shared/const/common'
import {
    type IProfile,
    type IProfileState
} from '../../types'
import { fetchProfileData } from '../services/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData'
import {
    profileReducer,
    profileSliceActions
} from './profileSlice'

describe(' profileSlice', () => {
    const state = {
        isReadonly: false,
        status: RuntimeStatuses.Ready,
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
            firstName: 'Иван',
            surname: 'Пупкин',
            age: 16,
            city: 'Москва',
            avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
            country: Contry.Russia,
            currency: Currency.RUB,
            id: 1
        }
    } as IProfileState

    test('Поле isReadonly корректно изменяется', () => {
        expect(profileReducer(
            state,
            profileSliceActions.setIsReadonly(true)
        )).toStrictEqual({
            ...state,
            isReadonly: true
        })
    })

    test('Функция cancelEdit корректно отменяет режим редактирования', () => {
        expect(profileReducer(
            state,
            profileSliceActions.cancelEdit()
        )).toStrictEqual({
            ...state,
            form: undefined,
            formErrors: undefined,
            isReadonly: true
        })
    })

    test('setFormField корректно меняет значение поля по ключу', () => {
        expect(profileReducer(
            state,
            profileSliceActions.setFormField({
                fieldKey: 'firstName',
                value: 'Полина'
            })
        )).toStrictEqual({
            ...state,
            form: {
                ...state.form,
                firstName: 'Полина'
            }
        })
    })

    test('setError корректно меняет значение ошибки и статуса при получении ошибки, и при ее очищении', () => {
        expect(profileReducer(
            state,
            profileSliceActions.setError('Тестовая ошибка')
        )).toStrictEqual({
            ...state,
            error: 'Тестовая ошибка',
            status: RuntimeStatuses.Error
        })

        expect(profileReducer(
            state,
            profileSliceActions.setError('')
        )).toStrictEqual({
            ...state,
            error: '',
            status: RuntimeStatuses.Ready
        })
    })

    test('setForm корректно изменяет поле form', () => {
        const testForm = {
            firstName: 'test1',
            surname: 'test2',
            avatar: 'test3',
            id: 4,
            age: 55,
            city: 'test6'
        } as IProfileState['form']
        expect(profileReducer(
            state,
            profileSliceActions.setForm(testForm)
        )).toStrictEqual({
            ...state,
            form: testForm
        })
    })

    test('fetchProfileData.pending корректно очищает поля error и меняет status', () => {
        expect(profileReducer(
            state,
            fetchProfileData.pending('')
        )).toStrictEqual({
            ...state,
            error: undefined,
            status: RuntimeStatuses.Loading
        })
    })

    test('fetchProfileData.fulfilled изменяет поле data и устанавливает статус в Ready', () => {
        expect(profileReducer(
            state,
            fetchProfileData.fulfilled(state.data as IProfile, '')
        )).toStrictEqual({
            ...state,
            data: state.data,
            status: RuntimeStatuses.Ready
        })
    })

    test('fetchProfileData.rejected изменяет ошибку и статус', () => {
        expect(profileReducer(
            state,
            fetchProfileData.rejected(null, '', undefined, 'Тестовая ошибка')
        )).toStrictEqual({
            ...state,
            status: RuntimeStatuses.Error,
            error: 'Тестовая ошибка'
        })
    })

    test('updateProfileData.pending корректно очищает поля error и formErrors, а так же меняет status', () => {
        expect(profileReducer(
            state,
            updateProfileData.pending('')
        )).toStrictEqual({
            ...state,
            error: undefined,
            formErrors: undefined,
            status: RuntimeStatuses.Loading
        })
    })

    test(
        'updateProfileData.fulfilled изменяет поле data, делает isReadonly=true и устанавливает статус в Ready',
        () => {
            expect(profileReducer(
                state,
                updateProfileData.fulfilled(state.data as IProfile, '')
            )).toStrictEqual({
                ...state,
                data: state.data,
                isReadonly: true,
                status: RuntimeStatuses.Ready
            })
        }
    )

    test(
        'updateProfileData.rejected изменяет статус, а так же взависимости от значения поля error или formErrors',
        () => {
            expect(profileReducer(
                state,
                updateProfileData.rejected(null, '', undefined, 'Тестовая ошибка')
            )).toStrictEqual({
                ...state,
                status: RuntimeStatuses.Error,
                error: 'Тестовая ошибка'
            })

            expect(profileReducer(
                state,
                updateProfileData.rejected(null, '', undefined, { firstName: ErrorsStatuses.FieldRequired })
            )).toStrictEqual({
                ...state,
                status: RuntimeStatuses.Error,
                formErrors: { firstName: ErrorsStatuses.FieldRequired }
            })
        }
    )
})
