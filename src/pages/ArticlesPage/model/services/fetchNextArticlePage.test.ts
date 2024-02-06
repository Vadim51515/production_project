import { ArticleType } from '../../../../entities/Article';
import { RuntimeStatuses } from '../../../../shared/constants/common';
import { TestAsyncThunk } from '../../../../shared/lib/TestAsyncThunk';
import { type IArticlesPageState } from '../types';
import { fetchArticleList } from './fetchArticleList';
import { fetchNextArticlePage } from './fetchNextArticlePage';

jest.mock('./fetchArticleList');
describe('fetchNextArticlePage', () => {
    const state = {
        articlesPage: {
            page: 2,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: false,
            hasMore: true,
            status: RuntimeStatuses.Ready,
            view: 'list',
            type: ArticleType.All,
            order: 'asc',
            search: '',
            sortFieldName: 'createdAt',
        } as IArticlesPageState,
    };

    test('Функция отработала с ошибкой авторизации', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            ...state,
            articlesPage: {
                ...state.articlesPage,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
    test('Функция отработала корректно', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, state);
        await thunk.callThunk();

        // Проверяем что диспатч был вызван 4 раза
        expect(thunk.dispatch).toBeCalledTimes(4);

        // Проверяем что диспатч был вызван с правильными параметрами
        expect(fetchArticleList).toHaveBeenCalledWith({});
    });
});
