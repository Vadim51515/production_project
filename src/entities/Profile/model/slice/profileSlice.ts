import {
    createSlice,
    type PayloadAction
} from '@reduxjs/toolkit'
import { RuntimeStatuses } from '../../../../shared/const/common'
import { type IProfileState } from '../../types'
import { fetchProfileData } from '../services/fetchProfileData'

const initialState: IProfileState = {
    isReadonly: true,
    status: RuntimeStatuses.BeforeInitial
}

export const {
    reducer: profileReducer,
    actions: profileSliceActions
} = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setIsReadonly (state, { payload }: PayloadAction<boolean>) {
            state.isReadonly = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.status = RuntimeStatuses.Loading
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
                state.status = RuntimeStatuses.Ready
                state.data = payload
            })
            .addCase(fetchProfileData.rejected, (state, { payload }) => {
                state.status = RuntimeStatuses.Error
                state.error = payload as string
            })
    }

})
