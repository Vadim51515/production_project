import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
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

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData)
            console.log('response', response)
            const { data } = response
            if (!data) {
                throw new Error('Нет данных')
            }
            lStorage.set(USER_LOCAL_STORAGE_KEY, JSON.stringify(data))
            thunkAPI.dispatch(userActions.setAuthData(data))
            return data
        } catch (e) {
            console.log('e', e)
            return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль')
        }
    }
)
