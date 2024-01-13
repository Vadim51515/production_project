import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {
    useParams
} from 'react-router-dom'
import {
    ArticleDetails,
    ArticleList
} from '../../../../entities/Article'
import { CommentList } from '../../../../entities/Comment'
import { AddCommentForm } from '../../../../features/addCommentForm'
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig'
import { useActions } from '../../../../shared/hooks/useActions'
import {
    type TReducersList,
    useAsyncReducer
} from '../../../../shared/hooks/useAsyncReducer'
import { useInitialEffect } from '../../../../shared/hooks/useInitialEffect'
import { classNames } from '../../../../shared/lib/classNames/classNames'
import { Button } from '../../../../shared/ui/Button'
import { Page } from '../../../../widgets/Page'
import { Text } from '../../../../shared/ui/Text'
import { articleDetailsCommentsActions } from '../../model/actions'
import {
    articleDetailsCommentsIsLoadingSelector
} from '../../model/selectors/comments'
import {
    articleDetailsCommentsReducer,
    getArticleComments
} from '../../model/slices/articleDetailsCommentsSlice'
import {
    articleDetailsRecommendationReducer,
    getArticleRecommendation
} from '../../model/slices/articleDetailsRecommendation'
import styles from './ArticleDetailsPage.module.scss'
interface IArticleDetailsPageProps {
    className?: string
}

const initialReducers: TReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleRecommendation: articleDetailsRecommendationReducer
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
    useAsyncReducer(initialReducers, true)

    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(articleDetailsCommentsIsLoadingSelector)
    const recommendations = useSelector(getArticleRecommendation.selectAll)

    const {
        fetchCommentsByArticleId,
        addCommentForArticle,
        fetchArticleRecommendations
    } = useActions(articleDetailsCommentsActions)

    const { t } = useTranslation('article-details')

    const { id } = useParams<{ id: string }>()

    useInitialEffect(() => {
        if (id) fetchCommentsByArticleId(id)
        fetchArticleRecommendations()
    })

    const navigate = useNavigate()

    const onBackToList = () => {
        navigate(RoutePath.articles)
    }

    const renderContent = () => {
        if (!id && __PROJECT__ !== 'storybook') return <Text>{t('Статья не найдена')}</Text>
        return <>
            <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
            <ArticleDetails id={id ?? ''} />
            <AddCommentForm sendComment={addCommentForArticle} />
            <Text>{'Рекомендуемые:'}</Text>
            <ArticleList
                articles={recommendations}
                view={'list'}
                className={styles.recommendationsContainer}
                target={'_blank'}
            />
            <CommentList
                isLoading={isLoading}
                comments={comments}
            />
        </>
    }

    return (
        <Page className={classNames('', {}, [className])}>
            {renderContent()}
        </Page>
    )
}

export default ArticleDetailsPage
