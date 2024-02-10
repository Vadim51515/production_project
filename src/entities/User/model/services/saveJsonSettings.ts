import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from '../../../../app/providers/StoreProvider';
import { setJsonSettingsMutation } from '../../api/userApi';
import { type IJsonSettings } from '../jsonSettings';
import { getJsonSettings } from '../selectors/jsonSettingsSelector';
import { userAuthDataSelector } from '../selectors/selectors';

export const saveJsonSettings = createAsyncThunk<IJsonSettings, IJsonSettings, IThunkConfig<string>>(
    'user/saveJsonSettings',
    async (newJsonSettings, thunkApi) => {
        const { rejectWithValue, getState, dispatch } = thunkApi;

        const state = getState();
        const userData = userAuthDataSelector(state);
        const currentSettings = getJsonSettings(state);

        if (!userData) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(
                setJsonSettingsMutation({
                    userId: userData.id,
                    jsonSettings: {
                        ...currentSettings,
                        ...newJsonSettings,
                    },
                }),
            ).unwrap();

            if (!response.jsonSettings) {
                return rejectWithValue('');
            }

            return response.jsonSettings;
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    },
);
