import type { IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema';
import { RuntimeStatuses } from '../../../../shared/constants/common';
import { mockArticle } from '../constants';
import { articleDataSelector, articleErrorSelector, articleIsLoadingSelector } from './selectors';

describe('profile selectors', () => {
    const state = {
        articleDetails: {
            error: 'test error',
            status: RuntimeStatuses.Loading,
            data: mockArticle,
        },
    } as IStateSchema;

    const emptyState = {} as IStateSchema;

    test('articleIsLoadingSelector возвращает корректное значение', () => {
        expect(articleIsLoadingSelector(state)).toBe(true);
    });
    test('articleIsLoadingSelector возвращает корректное значение при пустом state', () => {
        expect(articleIsLoadingSelector(emptyState)).toBe(false);
    });

    test('articleDataSelector возвращает корректное значение', () => {
        expect(articleDataSelector(state)).toEqual(state.articleDetails?.data);
    });
    test('articleDataSelector возвращает корректное значение при пустом state', () => {
        expect(articleDataSelector(emptyState)).toBe(undefined);
    });

    test('articleErrorSelector возвращает корректное значение', () => {
        expect(articleErrorSelector(state)).toEqual(state.articleDetails?.error);
    });
    test('articleErrorSelector возвращает корректное значение при пустом state', () => {
        expect(articleErrorSelector(emptyState)).toBe(undefined);
    });
});
