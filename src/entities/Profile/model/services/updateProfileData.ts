import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from '../../../../app/providers/StoreProvider'

import {
    type IProfile
} from '../../types'
import { profileFormSelector } from '../selectors/selectors'

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'profile/updateProfileData',
    async (
        _,
        {
            extra,
            rejectWithValue,
            getState
        }
    ) => {
        try {
            const state = getState()
            const form = profileFormSelector(state)
            const response = await extra.api.put<IProfile>('/profile', form)

            return response.data
        } catch (e) {
            console.log('e', e)
            return rejectWithValue('Вы ввели неверный логин или пароль')
        }
    }
)
