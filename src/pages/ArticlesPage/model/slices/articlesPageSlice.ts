import {
    createEntityAdapter,
    createSlice,
    type PayloadAction
} from '@reduxjs/toolkit'
import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import { type TSortOrder } from '../../../../app/types'
import {
    ArticleType,
    type IArticle,
    type TArticleViewType
} from '../../../../entities/Article'
import type { TArticleSortField } from '../../../../entities/Article/model/types'
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
        view: lStorage.get(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as TArticleViewType ?? 'tile',
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
        search: '',
        sortFieldName: 'createdAt',
        order: 'asc',
        limit: 4,
        type: ArticleType.All
    }),
    reducers: {
        setView (state, { payload }: PayloadAction<TArticleViewType>) {
            state.view = payload
            lStorage.set(ARTICLES_VIEW_LOCAL_STORAGE_KEY, payload)
        },
        setPage (state, { payload }: PayloadAction<number>) {
            state.page = payload
        },
        setOrder (state, { payload }: PayloadAction<TSortOrder>) {
            state.order = payload
        },
        setSortFieldName  (state, { payload }: PayloadAction<TArticleSortField>) {
            state.sortFieldName = payload
        },
        setSearch (state, { payload }: PayloadAction<string>) {
            state.search = payload
        },
        setType (state, { payload }: PayloadAction<ArticleType>) {
            state.type = payload
        },
        initState (state, { payload }: PayloadAction<URLSearchParams>) {
            const sortFieldNameFromUrl = payload.get('sortFieldName') as TArticleSortField
            const searchFromUrl = payload.get('search')
            const orderFromUrl = payload.get('order') as TSortOrder
            const typeFromUrl = payload.get('type') as ArticleType

            if (sortFieldNameFromUrl) state.sortFieldName = sortFieldNameFromUrl
            if (searchFromUrl) state.search = searchFromUrl
            if (orderFromUrl) state.order = orderFromUrl
            if (typeFromUrl) state.type = typeFromUrl

            const view = lStorage.get(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as TArticleViewType
            state.view = view
            state.limit = view === 'list' ? 9 : 4
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, { meta }) => {
                state.error = undefined
                state.status = RuntimeStatuses.Loading
                if (meta.arg.hasReplace) {
                    articlesAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticleList.fulfilled, (state, { payload, meta }) => {
                state.status = RuntimeStatuses.Ready
                articlesAdapter.setMany(state, payload)
                state.hasMore = payload.length >= state.limit

                if (meta.arg.hasReplace) {
                    articlesAdapter.setAll(state, payload)
                } else {
                    articlesAdapter.addMany(state, payload)
                }
            })
            .addCase(fetchArticleList.rejected, (state, { payload }) => {
                state.status = RuntimeStatuses.Error
                state.error = payload
            })
    }
})
