import React, { type FC } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { CommentList } from '../../../../entities/Comment'
import { AddCommentForm } from '../../../../features/addCommentForm'
import { useActions } from '../../../../shared/hooks/useActions'
import { useInitialEffect } from '../../../../shared/hooks/useInitialEffect'
import { articleDetailsCommentsActions } from '../../model/actions'
import { articleDetailsCommentsIsLoadingSelector } from '../../model/selectors/comments'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'

interface IArticleDetailsCommentsProps {
    className?: string
    id: string
}

export const ArticleDetailsComments: FC<IArticleDetailsCommentsProps> = ({
    className,
    id
}) => {
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(articleDetailsCommentsIsLoadingSelector)

    const {
        addCommentForArticle,
        fetchCommentsByArticleId
    } = useActions(articleDetailsCommentsActions)

    useInitialEffect(() => {
        if (id) fetchCommentsByArticleId(id)
    })

    return (
        <div className={classNames('', {}, [className])}>
            <AddCommentForm sendComment={addCommentForArticle} />
            <CommentList
                isLoading={isLoading}
                comments={comments}
            />
        </div>
    )
}
