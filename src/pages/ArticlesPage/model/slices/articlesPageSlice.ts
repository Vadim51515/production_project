import {
    createEntityAdapter,
    createSlice,
    type PayloadAction
} from '@reduxjs/toolkit'
import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import {
    type IArticle,
    type TArticleViewType
} from '../../../../entities/Article'
import { lStorage } from '../../../../helpers/function/lStorage'
import { RuntimeStatuses } from '../../../../shared/const/common'
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from '../../../../shared/const/localStorage'
import { fetchArticleList } from '../services/fetchArticleList'
import { type IArticlesPageState } from '../types'

const articlesAdapter = createEntityAdapter<IArticle>()

export const getArticles = articlesAdapter
    .getSelectors<IStateSchema>((state) => state.articlesPage || articlesAdapter.getInitialState())

export const {
    reducer: articlesPageReducer,
    actions: articlesPageSliceActions
} = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<IArticlesPageState>({
        status: RuntimeStatuses.BeforeInitial,
        view: 'list',
        ids: [],
        entities: {}
    }),
    reducers: {
        setView (state, { payload }: PayloadAction<TArticleViewType>) {
            state.view = payload
            lStorage.set(ARTICLES_VIEW_LOCAL_STORAGE_KEY, payload)
        },
        initState (state) {
            state.view = lStorage.get(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as TArticleViewType
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.error = undefined
                state.status = RuntimeStatuses.Loading
            })
            .addCase(fetchArticleList.fulfilled, (state, { payload }) => {
                state.status = RuntimeStatuses.Ready
                articlesAdapter.setAll(state, payload)
            })
            .addCase(fetchArticleList.rejected, (state, { payload }) => {
                state.status = RuntimeStatuses.Error
                state.error = payload
            })
    }
})
