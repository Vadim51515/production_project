import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from '../../../../shared/ui/Text'
import { type IComment } from '../../model/types'
import { CommentCard } from '../CommentCard/CommentCard'
import styles from './CommentList.module.scss'

interface ICommentListProps {
    className?: string
    title?: string
    comments?: IComment[]
    isLoading?: boolean
}

export const CommentList: FC<ICommentListProps> = ({
    className,
    title,
    comments,
    isLoading
}) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.CommentList, {}, [className])}>
            <Text
                tag={'h1'}
                withMarginBottom
                marginBottom={20}
            >{title ?? t('Комментарии')}</Text>
            <div className={styles.comments}>
                {comments?.length
                    ? comments.map((comment) => (<CommentCard
                        isLoading={isLoading}
                        key={comment.id}
                        comment={comment}
                    />))
                    : <Text>{t('Комментариев нет')}</Text>}
            </div>
        </div>
    )
}
