import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from '../../../../entities/Article';
import { useActions } from '../../../../shared/hooks/useActions';
import { useInitialEffect } from '../../../../shared/hooks/useInitialEffect';
import { Text } from '../../../../shared/ui/Text';
import { articlesPageActions } from '../../model/actions';
import {
    articlesPageErrorSelector,
    articlesPageIsInitSelector,
    articlesPageLoadingSelector,
    articlesPageViewSelector,
} from '../../model/selectors/articlesPage';
import { getArticles } from '../../model/slices/articlesPageSlice';

interface IArticleInfinityListProps {
    className?: string;
}

export const ArticleInfinityList: FC<IArticleInfinityListProps> = () => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(articlesPageLoadingSelector);
    const view = useSelector(articlesPageViewSelector);
    const error = useSelector(articlesPageErrorSelector);

    const isInit = useSelector(articlesPageIsInitSelector);

    const { fetchArticleList, initState } = useActions(articlesPageActions);

    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        if (!isInit) {
            initState(searchParams);
            fetchArticleList({});
        }
    });

    if (error) return <Text isError>{error}</Text>;

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
        />
    );
};
