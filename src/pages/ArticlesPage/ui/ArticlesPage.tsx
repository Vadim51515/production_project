import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
    ArticleList,
    ArticleViewSelector,
    type TArticleViewType
} from '../../../entities/Article'
import { useActions } from '../../../shared/hooks/useActions'
import {
    type TReducersList,
    useAsyncReducer
} from '../../../shared/hooks/useAsyncReducer'
import { useInitialEffect } from '../../../shared/hooks/useInitialEffect'
import { Page } from '../../../widgets/Page'
import { Text } from '../../../shared/ui/Text'
import { articlesPageActions } from '../model/actions'
import {
    articlesPageIsInitSelector,
    articlesPageLoadingSelector,
    articlesPageViewSelector
} from '../model/selectors/articlesPage'
import {
    articlesPageReducer,
    getArticles
} from '../model/slices/articlesPageSlice'

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
        setView,
        initState,
        fetchNextArticlePage
    } = useActions(articlesPageActions)
    console.log('isInit', isInit)

    useInitialEffect(() => {
        console.log('isInit', isInit)
        if (!isInit) {
            initState()
            fetchArticleList({
                page: 1
            })
        }
    })

    const { t } = useTranslation()

    const onChangeView = (newView: TArticleViewType) => {
        setView(newView)
    }

    const onLoadNextPart = () => {
        if (isInit) fetchNextArticlePage()
    }

    return (
        <Page onScrollEnd={onLoadNextPart}>
            <Text>{t('ArticlesPage')}</Text>
            <ArticleViewSelector
                view={view}
                onViewClick={onChangeView}
            />
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </Page>
    )
}
export default ArticlesPage
