import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {
    ArticleList
} from '../../../../entities/Article'
import { useActions } from '../../../../shared/hooks/useActions'
import {
    type TReducersList,
    useAsyncReducer
} from '../../../../shared/hooks/useAsyncReducer'
import { useInitialEffect } from '../../../../shared/hooks/useInitialEffect'
import { Page } from '../../../../widgets/Page'
import { Text } from '../../../../shared/ui/Text'
import { articlesPageActions } from '../../model/actions'
import {
    articlesPageIsInitSelector,
    articlesPageLoadingSelector,
    articlesPageViewSelector
} from '../../model/selectors/articlesPage'
import {
    articlesPageReducer,
    getArticles
} from '../../model/slices/articlesPageSlice'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'

interface IArticlesPageProps {
    className?: string
}

const initialReducers: TReducersList = {
    articlesPage: articlesPageReducer
}
const ArticlesPage: FC<IArticlesPageProps> = () => {
    useAsyncReducer(initialReducers, false)

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(articlesPageLoadingSelector)
    const view = useSelector(articlesPageViewSelector)
    const isInit = useSelector(articlesPageIsInitSelector)

    const {
        fetchArticleList,
        initState,
        fetchNextArticlePage
    } = useActions(articlesPageActions)

    const [searchParams] = useSearchParams()

    console.log('searchParams', searchParams)

    useInitialEffect(() => {
        if (!isInit) {
            initState(searchParams)
            fetchArticleList({})
        }
    })

    const { t } = useTranslation()

    const onLoadNextPart = () => {
        if (isInit) fetchNextArticlePage()
    }

    return (
        <Page onScrollEnd={onLoadNextPart}>
            <Text>{t('ArticlesPage')}</Text>
            <ArticlesPageFilters />
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </Page>
    )
}
export default ArticlesPage
