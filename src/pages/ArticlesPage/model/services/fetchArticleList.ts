import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider'
import { type IArticle } from '../../../../entities/Article'
import {
    articlesPagePaginationLimitSelector
} from '../selectors/articlesPage'

interface IFetchArticleListProps {
    page?: number
}

export const fetchArticleList = createAsyncThunk<IArticle[], IFetchArticleListProps, IThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (
        { page = 1 },
        {
            extra,
            rejectWithValue,
            getState
        }
    ) => {
        try {
            const state = getState()

            const limit = articlesPagePaginationLimitSelector(state)

            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page
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
