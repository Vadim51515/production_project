import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { ArticlePageGreeting } from '../../../../features/articlePageGreeting';

import { useActions } from '../../../../shared/hooks/useActions';
import { type TReducersList, useAsyncReducer } from '../../../../shared/hooks/useAsyncReducer';
import { Page } from '../../../../widgets/Page';
import { articlesPageActions } from '../../model/actions';
import { articlesPageIsInitSelector } from '../../model/selectors/articlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface IArticlesPageProps {
    className?: string;
}

const initialReducers: TReducersList = {
    articlesPage: articlesPageReducer,
};
const ArticlesPage: FC<IArticlesPageProps> = () => {
    useAsyncReducer(initialReducers, false);

    const isInit = useSelector(articlesPageIsInitSelector);

    const { fetchNextArticlePage } = useActions(articlesPageActions);

    const onLoadNextPart = () => {
        if (isInit) fetchNextArticlePage();
    };

    return (
        <Page
            onScrollEnd={onLoadNextPart}
            dataTestId={'ArticlesPage'}
        >
            <ArticlesPageFilters />
            <ArticleInfinityList />
            <ArticlePageGreeting />
        </Page>
    );
};
export default ArticlesPage;
