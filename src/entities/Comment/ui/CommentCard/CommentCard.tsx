import React, { type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { getRouteProfile } from '../../../../shared/constants/common';
import { AppLink } from '../../../../shared/ui/AppLink/AppLink';
import { Avatar } from '../../../../shared/ui/Avatar/ui/Avatar';
import { Skeleton } from '../../../../shared/ui/Skeleton/ui/Skeleton';
import { Text } from '../../../../shared/ui/Text';
import { type IComment } from '../../model/types';
import styles from './CommentCard.module.scss';

interface ICommentCardProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

export const CommentCard: FC<ICommentCardProps> = ({ className, comment, isLoading }) => {
    if (isLoading) {
        return (
            <div
                className={classNames(styles.CommentCard, {}, [className])}
                data-testid={'LoadingCommentCard'}
            >
                <div className={styles.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        borderRadius="50%"
                    />
                    <Skeleton
                        height={16}
                        width={100}
                        className={styles.username}
                    />
                </div>
                <Skeleton
                    className={styles.text}
                    width="100%"
                    height={50}
                />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div
            className={classNames(styles.commentCard, {}, [className])}
            data-testid={'CommentCard'}
        >
            <AppLink to={getRouteProfile(comment.user.id)}>
                <div className={styles.header}>
                    <Avatar
                        image={comment.user.avatar}
                        size={30}
                    />
                    <Text>{comment.user.username}</Text>
                </div>
            </AppLink>

            <Text>{comment.text}</Text>
        </div>
    );
};
