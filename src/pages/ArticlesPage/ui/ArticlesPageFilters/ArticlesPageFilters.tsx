import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type IOption, type TSortOrder } from '../../../../app/types';
import { type TArticleSortField, type TArticleViewType } from '../../../../entities/Article';
import { ArticleSortSelector } from '../../../../features/ArticleSortSelector';
import { ArticleTypeTabs } from '../../../../features/ArticleTypeTabs';
import { ArticleViewSelector } from '../../../../features/ArticleViewSelector';
import { useActions } from '../../../../shared/hooks/useActions';
import { useDebounce } from '../../../../shared/hooks/useDebounce';
import { Input } from '../../../../shared/ui/Input';
import { articlesPageActions } from '../../model/actions';
import {
    articlesPageOrderSelector,
    articlesPageSearchSelector,
    articlesPageSortFieldNameSelector,
    articlesPageViewSelector,
} from '../../model/selectors/articlesPage';
import styles from './ArticlesPageFilters.module.scss';

interface IArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters: FC<IArticlesPageFiltersProps> = ({ className }) => {
    const { t } = useTranslation();
    const view = useSelector(articlesPageViewSelector);
    const order = useSelector(articlesPageOrderSelector);
    const sortFieldName = useSelector(articlesPageSortFieldNameSelector);
    const search = useSelector(articlesPageSearchSelector);

    const { setView, setOrder, setSortFieldName, setSearch, setPage, fetchArticleList } = useActions(articlesPageActions);

    const fetchData = () => {
        fetchArticleList({ hasReplace: true });
    };

    const debounceFetchData = useDebounce(fetchData, 300);

    const onChangeView = (newView: TArticleViewType) => {
        setView(newView);
        setPage(1);
        fetchData();
    };

    const onChangeOrder = (newOrder: IOption<TSortOrder>) => {
        setOrder(newOrder.value);
        setPage(1);
        fetchData();
    };

    const onChangeSortFieldName = (newSortFieldName: IOption<TArticleSortField>) => {
        setSortFieldName(newSortFieldName.value);
        setPage(1);
        fetchData();
    };

    const onChangeSearch = (newSearch: string) => {
        setSearch(newSearch);
        setPage(1);
        debounceFetchData();
    };

    return (
        <div className={classNames(styles.articlesPageFilters, {}, [className])}>
            <div className={styles.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sortFieldName}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSortFieldName}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Input
                className={styles.search}
                onChange={onChangeSearch}
                placeholder={t('Поиск')}
                value={search}
            />
            <ArticleTypeTabs />
        </div>
    );
};
