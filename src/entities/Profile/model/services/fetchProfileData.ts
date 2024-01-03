import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from '../../../../app/providers/StoreProvider'

import {
    type IProfile
} from '../../types'

export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'profile/fetchProfileData',
    async (
        _,
        {
            extra,
            rejectWithValue
        }
    ) => {
        try {
            const response = await extra.api.get<IProfile>('/profile')

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log('e', e)
            return rejectWithValue('Вы ввели неверный логин или пароль')
        }
    }
)
