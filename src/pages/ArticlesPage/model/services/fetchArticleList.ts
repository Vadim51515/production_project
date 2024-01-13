import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider'
import {
    ArticleType,
    type IArticle
} from '../../../../entities/Article'
import { addQueryParams } from '../../../../shared/lib/url/addQueryParams'
import {
    articlesPageOrderSelector,
    articlesPagePaginationLimitSelector,
    articlesPagePaginationPageSelector,
    articlesPageSearchSelector,
    articlesPageSortFieldNameSelector,
    articlesPageTypeSelector
} from '../selectors/articlesPage'

interface IFetchArticleListProps {
    hasReplace?: boolean
}

export const fetchArticleList = createAsyncThunk<IArticle[], IFetchArticleListProps, IThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (
        _,
        {
            extra,
            rejectWithValue,
            getState
        }
    ) => {
        try {
            const state = getState()

            const limit = articlesPagePaginationLimitSelector(state)
            const order = articlesPageOrderSelector(state)
            const sortFieldName = articlesPageSortFieldNameSelector(state)
            const search = articlesPageSearchSelector(state)
            const type = articlesPageTypeSelector(state)
            const page = articlesPagePaginationPageSelector(state)
            addQueryParams({
                sortFieldName,
                order,
                search,
                type
            })

            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sortFieldName,
                    _order: order,
                    q: search,
                    type: type === ArticleType.All ? undefined : type
                }
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('')
        }
    }
)
