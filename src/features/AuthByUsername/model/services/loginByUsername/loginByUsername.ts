import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    type IThunkConfig
} from '../../../../../app/providers/StoreProvider'
import {
    type IUser,
    userActions
} from '../../../../../entities/User'
import { lStorage } from '../../../../../helpers/function/lStorage'
import { USER_LOCAL_STORAGE_KEY } from '../../../../../shared/const/localStorage'

interface ILoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, IThunkConfig<string>>(
    'login/loginByUsername',
    async (
        authData,
        {
            dispatch,
            extra,
            rejectWithValue
        }
    ) => {
        try {
            const response = await extra.api.post('/login', authData)
            console.log('response', response)

            const { data } = response

            if (!data) {
                throw new Error('Нет данных')
            }

            lStorage.set(USER_LOCAL_STORAGE_KEY, JSON.stringify(data))
            dispatch(userActions.setAuthData(data))

            extra.navigate?.('/profile')
            return data
        } catch (e) {
            console.log('e', e)
            return rejectWithValue('Вы ввели неверный логин или пароль')
        }
    }
)
