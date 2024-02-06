import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from '../../../../app/providers/StoreProvider';
import { type TFormErrors } from '../../../../app/types';
import { ErrorsStatuses } from '../../../../shared/constants/common';

import { type IProfile } from '../../types';
import { profileFormSelector } from '../selectors/selectors';
import { validateProfileData } from './validateProfileData';

export const updateProfileData = createAsyncThunk<IProfile, string, IThunkConfig<string | TFormErrors<string>>>(
    'profile/updateProfileData',
    async (profileId, { extra, rejectWithValue, getState }) => {
        try {
            const state = getState();
            const form = profileFormSelector(state);
            const formErrors = validateProfileData(form);

            if (Object.keys(formErrors).length) {
                return rejectWithValue(formErrors);
            }

            const response = await extra.api.put<IProfile>('/profile/' + profileId, form);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(ErrorsStatuses.ServerError);
        }
    },
);
