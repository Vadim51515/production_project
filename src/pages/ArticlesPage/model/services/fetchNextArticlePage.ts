import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from '@/app/providers/StoreProvider';
import {
    articlesPageLoadingSelector,
    articlesPagePaginationHasMoreSelector,
    articlesPagePaginationPageSelector,
} from '../selectors/articlesPage';
import { articlesPageSliceActions } from '../slices/articlesPageSlice';
import { fetchArticleList } from './fetchArticleList';

export const fetchNextArticlePage = createAsyncThunk<void, void, IThunkConfig<string>>(
    'articlesPage/fetchNextArticlePage',
    async (_, { getState, dispatch }) => {
        const state = getState();
        const page = articlesPagePaginationPageSelector(state);
        const hasMore = articlesPagePaginationHasMoreSelector(state);
        const isLoading = articlesPageLoadingSelector(state);

        if (hasMore && !isLoading) {
            const newPage = page + 1;
            dispatch(articlesPageSliceActions.setPage(newPage));
            dispatch(fetchArticleList({}));
        }
    },
);
