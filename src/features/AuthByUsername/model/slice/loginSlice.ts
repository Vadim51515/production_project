import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RuntimeStatuses } from '../../../../shared/constants/common';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { type ILoginState } from '../types';

const initialState: ILoginState = {
    status: RuntimeStatuses.BeforeInitial,
    isLoading: false,
    password: '',
    username: '',
};

export const {
    reducer: loginReducer,
    actions: { setUsername, setPassword },
} = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername(state, { payload }: PayloadAction<string>) {
            state.username = payload;
        },

        setPassword(state, { payload }: PayloadAction<string>) {
            state.password = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.username = payload.username;
            })
            .addCase(loginByUsername.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload as string;
            });
    },
});
