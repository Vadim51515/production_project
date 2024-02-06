import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema';
import { type IComment } from '../../../../entities/Comment';
import { RuntimeStatuses } from '../../../../shared/constants/common';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { type IArticleCommentsState } from '../types';

const commentsAdapter = createEntityAdapter<IComment>();

export const getArticleComments = commentsAdapter.getSelectors<IStateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

export const { reducer: articleDetailsCommentsReducer, actions: articleDetailsCommentsSliceActions } = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState<IArticleCommentsState>({
        status: RuntimeStatuses.BeforeInitial,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.status = RuntimeStatuses.Loading;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, { payload }) => {
                state.status = RuntimeStatuses.Ready;
                commentsAdapter.setAll(state, payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
                state.status = RuntimeStatuses.Error;
                state.error = payload;
            });
    },
});
