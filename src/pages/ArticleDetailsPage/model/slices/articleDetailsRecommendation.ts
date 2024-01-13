import {
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit'
import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import { type IArticle } from '../../../../entities/Article'
import { RuntimeStatuses } from '../../../../shared/const/common'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations'
import {
    type IArticleRecommendationState
} from '../types'

const recommendationAdapter = createEntityAdapter<IArticle>()

export const getArticleRecommendation = recommendationAdapter
    .getSelectors<IStateSchema>((state) => state.articleRecommendation || recommendationAdapter.getInitialState())

export const {
    reducer: articleDetailsRecommendationReducer,
    actions: articleDetailsRecommendationSliceActions
} = createSlice({
    name: 'articleDetailsRecommendation',
    initialState: recommendationAdapter.getInitialState<IArticleRecommendationState>({
        status: RuntimeStatuses.BeforeInitial,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined
                state.status = RuntimeStatuses.Loading
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, { payload }) => {
                state.status = RuntimeStatuses.Ready
                recommendationAdapter.setAll(state, payload)
            })
            .addCase(fetchArticleRecommendations.rejected, (state, { payload }) => {
                state.status = RuntimeStatuses.Error
                state.error = payload
            })
    }
})
