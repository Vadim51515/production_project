import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from '../../../../shared/constants/localStorage';
import { setFeatureFlags } from '../../../../shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { type IUser, type IUserState } from '../types';

const initialState: IUserState = {
    isInit: false,
};

export const { reducer: userReducer, actions: userActions } = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData(state, { payload }: PayloadAction<IUser>) {
            state.authData = payload;
            setFeatureFlags(payload.features);
        },

        initAuthData(state) {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
            if (user) {
                const parseUser = JSON.parse(user) as IUser;
                state.authData = parseUser;
                setFeatureFlags(parseUser.features);
            }
            state.isInit = true;
        },

        logout(state) {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(saveJsonSettings.fulfilled, (state, { payload }) => {
            if (state.authData) {
                state.authData.jsonSettings = payload;
            }
        });
    },
});
