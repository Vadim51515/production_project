import {
    createSlice
} from '@reduxjs/toolkit'
import { RuntimeStatuses } from '../../../../shared/constants/common'

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type IArticleDetailsState } from '../types'

const initialState: IArticleDetailsState = {
    status: RuntimeStatuses.BeforeInitial,
    data: undefined
}

export const {
    reducer: articleDetailsReducer,
    actions: articleDetailsSliceActions
} = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined
                state.status = RuntimeStatuses.Loading
            })
            .addCase(fetchArticleById.fulfilled, (state, { payload }) => {
                state.status = RuntimeStatuses.Ready
                state.data = payload
            })
            .addCase(fetchArticleById.rejected, (state, { payload }) => {
                state.status = RuntimeStatuses.Error
                state.error = payload
            })
    }
})
