import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {
    useParams
} from 'react-router-dom'
import { ArticleDetails } from '../../../../entities/Article'
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
import { Page } from '../../../../shared/ui/Page'
import { Text } from '../../../../shared/ui/Text'
import { articleDetailsCommentsActions } from '../../model/actions'
import {
    articleDetailsCommentsIsLoadingSelector
} from '../../model/selectors/comments'
import {
    articleDetailsCommentsReducer,
    getArticleComments
} from '../../model/slices/articleDetailsCommentsSlice'

interface IArticleDetailsPageProps {
    className?: string
}

const initialReducers: TReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
    useAsyncReducer(initialReducers, true)

    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(articleDetailsCommentsIsLoadingSelector)
    // const error = useSelector(articleDetailsCommentsErrorSelector)

    const { fetchCommentsByArticleId, addCommentForArticle } = useActions(articleDetailsCommentsActions)

    const { t } = useTranslation('article-details')

    const { id } = useParams<{ id: string }>()

    useInitialEffect(() => {
        if (id) fetchCommentsByArticleId(id)
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
            <AddCommentForm sendComment={addCommentForArticle}/>
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
