import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CommentList } from '../../../../entities/Comment';
import { AddCommentForm } from '../../../../features/addCommentForm';
import { useActions } from '../../../../shared/hooks/useActions';
import { useInitialEffect } from '../../../../shared/hooks/useInitialEffect';
import { articleDetailsCommentsActions } from '../../model/actions';
import { articleDetailsCommentsIsLoadingSelector } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import styles from './ArticleDetailsComments.module.scss';
interface IArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments: FC<IArticleDetailsCommentsProps> = ({ className, id }) => {
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(articleDetailsCommentsIsLoadingSelector);

    const { addCommentForArticle, fetchCommentsByArticleId } = useActions(articleDetailsCommentsActions);

    useInitialEffect(() => {
        if (id) fetchCommentsByArticleId(id);
    });

    return (
        <div
            data-testid={'ArticleDetailsComments'}
            className={classNames('', {}, [className])}
        >
            <AddCommentForm
                sendComment={addCommentForArticle}
                className={styles.addCommentsForm}
            />

            <CommentList
                isLoading={isLoading}
                comments={comments}
            />
        </div>
    );
};
