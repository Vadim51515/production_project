import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RuntimeStatuses } from '../../../../shared/constants/common';
import { type IProfileState } from '../../types';
import { fetchProfileData } from '../services/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData';
import { type ISetFormFieldPayload } from '../types';

const initialState: IProfileState = {
    isReadonly: true,
    status: RuntimeStatuses.BeforeInitial,
    form: undefined,
};

export const { reducer: profileReducer, actions: profileSliceActions } = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setIsReadonly(state, { payload }: PayloadAction<boolean>) {
            state.isReadonly = payload;
        },

        setForm(state, { payload }: PayloadAction<IProfileState['form']>) {
            state.form = payload;
        },

        setFormField(state, { payload }: PayloadAction<ISetFormFieldPayload>) {
            if (state.form) Object.assign(state.form, { [payload.fieldKey]: payload.value });
        },

        setError(state, { payload }: PayloadAction<IProfileState['error']>) {
            state.error = payload;
            state.status = payload ? RuntimeStatuses.Error : RuntimeStatuses.Ready;
        },

        cancelEdit(state) {
            state.isReadonly = true;
            state.form = undefined;
            state.formErrors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.status = RuntimeStatuses.Loading;
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
                state.status = RuntimeStatuses.Ready;
                state.data = payload;
            })
            .addCase(fetchProfileData.rejected, (state, { payload }) => {
                state.status = RuntimeStatuses.Error;
                state.error = payload;
            })

            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.formErrors = undefined;
                state.status = RuntimeStatuses.Loading;
            })
            .addCase(updateProfileData.fulfilled, (state, { payload }) => {
                state.status = RuntimeStatuses.Ready;
                state.isReadonly = true;
                state.data = payload;
            })
            .addCase(updateProfileData.rejected, (state, { payload }) => {
                state.status = RuntimeStatuses.Error;
                if (typeof payload === 'string') {
                    state.error = payload;
                } else {
                    state.formErrors = payload;
                }
            });
    },
});
