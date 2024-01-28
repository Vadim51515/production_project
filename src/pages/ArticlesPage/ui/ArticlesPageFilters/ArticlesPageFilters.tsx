import React, {
    type FC,
    useMemo
} from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    type IOption,
    type TOptions,
    type TSortOrder
} from '../../../../app/types'
import {
    ArticleSortSelector,
    ArticleType,
    ArticleViewSelector,
    type TArticleSortField,
    type TArticleViewType
} from '../../../../entities/Article'
import { useActions } from '../../../../shared/hooks/useActions'
import { useDebounce } from '../../../../shared/hooks/useDebounce'
import { Input } from '../../../../shared/ui/Input'
import { Tabs } from '../../../../shared/ui/Tabs/ui/Tabs'
import { articlesPageActions } from '../../model/actions'
import {
    articlesPageOrderSelector,
    articlesPageSearchSelector,
    articlesPageSortFieldNameSelector,
    articlesPageTypeSelector,
    articlesPageViewSelector
} from '../../model/selectors/articlesPage'
import styles from './ArticlesPageFilters.module.scss'

interface IArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters: FC<IArticlesPageFiltersProps> = ({ className }) => {
    const view = useSelector(articlesPageViewSelector)
    const order = useSelector(articlesPageOrderSelector)
    const sortFieldName = useSelector(articlesPageSortFieldNameSelector)
    const search = useSelector(articlesPageSearchSelector)
    const type = useSelector(articlesPageTypeSelector)

    const {
        setView,
        setOrder,
        setSortFieldName,
        setSearch,
        setPage,
        fetchArticleList,
        setType
    } = useActions(articlesPageActions)

    const fetchData = () => {
        fetchArticleList({ hasReplace: true })
    }

    const debounceFetchData = useDebounce(fetchData, 300)

    const typeTubs = useMemo(() => Object.keys(ArticleType).map((label) => ({
        label,
        value: ArticleType[label as keyof typeof ArticleType]
    })), [])

    const onChangeView = (newView: TArticleViewType) => {
        setView(newView)
        setPage(1)
        fetchData()
    }

    const onChangeOrder = (newOrder: IOption<TSortOrder>) => {
        setOrder(newOrder.value)
        setPage(1)
        fetchData()
    }

    const onChangeSortFieldName = (newSortFieldName: IOption<TArticleSortField>) => {
        setSortFieldName(newSortFieldName.value)
        setPage(1)
        fetchData()
    }

    const onChangeSearch = (newSearch: string) => {
        setSearch(newSearch)
        setPage(1)
        debounceFetchData()
    }

    const onChangeType = (newType: ArticleType) => {
        setType(newType)
        setPage(1)
        fetchData()
    }

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
            <Input className={styles.search} onChange={onChangeSearch} placeholder={'Поиск'} value={search}/>
            <Tabs tabs={typeTubs as TOptions<ArticleType>} value={type} onTabClick={onChangeType} />
        </div>
    )
}
