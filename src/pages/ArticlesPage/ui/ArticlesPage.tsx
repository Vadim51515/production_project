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
import { Text } from '../../../shared/ui/Text'
import { articlesPageActions } from '../model/actions'
import {
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
    useAsyncReducer(initialReducers, true)

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(articlesPageLoadingSelector)
    const view = useSelector(articlesPageViewSelector)

    const { fetchArticleList, setView, initState } = useActions(articlesPageActions)

    useInitialEffect(() => {
        fetchArticleList()
        initState()
    })

    const { t } = useTranslation()

    const onChangeView = (newView: TArticleViewType) => {
        setView(newView)
    }

    return (
        <div>
            <Text>{t('ArticlesPage')}</Text>
            <ArticleViewSelector view={view} onViewClick={onChangeView}/>
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </div>
    )
}
export default ArticlesPage
