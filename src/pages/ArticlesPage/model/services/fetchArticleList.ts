import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider'
import { type IArticle } from '../../../../entities/Article'

export const fetchArticleList = createAsyncThunk<IArticle[], void, IThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (
        _,
        {
            extra,
            rejectWithValue
        }
    ) => {
        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user'
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
