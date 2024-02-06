import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from '@/app/providers/StoreProvider';
import { type IArticle } from '../../types';

export const fetchArticleById = createAsyncThunk<IArticle, string, IThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<IArticle>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(e as string);
        }
    },
);
