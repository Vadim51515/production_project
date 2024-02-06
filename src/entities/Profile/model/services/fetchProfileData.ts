import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from '../../../../app/providers/StoreProvider';

import { type IProfile } from '../../types';

export const fetchProfileData = createAsyncThunk<IProfile, string, IThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IProfile>('/profile/' + profileId);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
