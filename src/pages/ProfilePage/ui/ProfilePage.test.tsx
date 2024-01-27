import type { ReducersMapObject } from '@reduxjs/toolkit'
import {
    screen
} from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import React from 'react'
import type { IStateSchema } from '../../../app/providers/StoreProvider/config/stateSchema'
import type { DeepPartial } from '../../../app/types'
import {
    profileReducer
} from '../../../entities/Profile'
import { $api } from '../../../shared/api'
import {
    Contry,
    Currency,
    RuntimeStatuses
} from '../../../shared/const/common'
import { componentRender } from '../../../shared/lib/tests/componentRender'
import ProfilePage from './ProfilePage'

describe('ProfilePage', () => {
    const state: DeepPartial<IStateSchema> = {
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
                id: '1'
            },
            form: {
                firstName: 'Вадим',
                surname: 'Пушкин',
                age: 22,
                city: 'Екатеринбург',
                avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
                country: Contry.Russia,
                currency: Currency.RUB,
                id: '1'
            }
        },
        user: {
            authData: {
                id: '1',
                username: 'inhellim 123'
            }
        }
    }

    const options = {
        initialState: state,
        asyncReducers: {
            profile: profileReducer
        } as DeepPartial<ReducersMapObject<IStateSchema>>
    }

    test('Переключили режим профайла на readonly:false', async () => {
        componentRender(<ProfilePage />, options)
        await userEvent.click(screen.getByTestId('ProfileEditBtn'))
        screen.debug()
        expect(screen.getByTestId('ProfileCancelBtn')).toBeInTheDocument()
    })

    test(
        'Заполнение обязательных полей работает, при отмене обязательные филды меняют значение на initial  ',
        async () => {
            componentRender(<ProfilePage />, options)
            await userEvent.click(screen.getByTestId('ProfileEditBtn'))

            expect(screen.getByTestId('firstNameInput')).toHaveValue(state.profile?.form?.firstName)
            expect(screen.getByTestId('surnameInput')).toHaveValue(state.profile?.form?.surname)

            await userEvent.clear(screen.getByTestId('firstNameInput'))
            await userEvent.clear(screen.getByTestId('surnameInput'))

            await userEvent.type(screen.getByTestId('firstNameInput'), 'firstName')
            await userEvent.type(screen.getByTestId('surnameInput'), 'surnameInput')

            expect(screen.getByTestId('firstNameInput')).toHaveValue('firstName')
            expect(screen.getByTestId('surnameInput')).toHaveValue('surnameInput')

            await userEvent.click(screen.getByTestId('ProfileCancelBtn'))

            expect(screen.getByTestId('firstNameReadonlyText').textContent).toBe('Вадим')
            expect(screen.getByTestId('surnameReadonlyText').textContent).toBe('Пушкин')
        }
    )

    test('При попытке сохранить с пустым обязательным полем выпадет ошибка', async () => {
        componentRender(<ProfilePage />, options)
        await userEvent.click(screen.getByTestId('ProfileEditBtn'))

        await userEvent.clear(screen.getByTestId('firstNameInput'))

        await userEvent.click(screen.getByTestId('ProfileSaveBtn'))

        expect(screen.getByTestId('firstNameErrorText')).toBeInTheDocument()
    })

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        componentRender(<ProfilePage />, options)
        await userEvent.click(screen.getByTestId('ProfileEditBtn'))

        await userEvent.type(screen.getByTestId('firstNameInput'), 'test_name')

        await userEvent.click(screen.getByTestId('ProfileSaveBtn'))

        expect(mockPutReq).toHaveBeenCalled()
    })
})
