import {
    createSlice,
    type PayloadAction
} from '@reduxjs/toolkit'
import { RuntimeStatuses } from '../../../../shared/constants/common'
import { type ICommentFormState } from '../types'

const initialState: ICommentFormState = {
    status: RuntimeStatuses.BeforeInitial
}

export const {
    reducer: addCommentReducer,
    actions: addCommentSliceActions
} = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText  (state, { payload }: PayloadAction<string>) {
            state.text = payload
        }
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined
    //             state.isLoading = true
    //         })
    //         .addCase(loginByUsername.fulfilled, (state, { payload }) => {
    //             state.isLoading = false
    //             state.username = payload.username
    //         })
    //         .addCase(loginByUsername.rejected, (state, { payload }) => {
    //             state.isLoading = false
    //             state.error = payload as string
    //         })
    // }
})
