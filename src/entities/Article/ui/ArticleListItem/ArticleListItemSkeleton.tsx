import { classNames } from '../../../../shared/lib/classNames/classNames'
import { Card } from '../../../../shared/ui/Card/Card'
import { Skeleton } from '../../../../shared/ui/Skeleton/ui/Skeleton'
import type { TArticleViewType } from '../../model/types'
import styles from './ArticleListItem.module.scss'
import React from 'react'
interface ArticleListItemSkeletonProps {
    className?: string
    view: TArticleViewType
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view
    } = props

    if (view === 'tile') {
        return (
            <div
                className={classNames(
                    styles.ArticleListItem,
                    {},
                    [
                        className,
                        styles[view]
                    ]
                )}
            >
                <Card className={styles.card}>
                    <div className={styles.header}>
                        <Skeleton
                            borderRadius='50%'
                            height={30}
                            width={30}
                            marginBottom={10}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={styles.username}
                            marginBottom={10}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={styles.date}
                            marginBottom={10}
                        />
                    </div>
                    <Skeleton
                        width={250}
                        height={24}
                        className={styles.title}
                        marginBottom={10}
                    />
                    <Skeleton
                        height={200}
                        className={styles.img}
                        marginBottom={10}
                    />
                    <div className={styles.footer}>
                        <Skeleton
                            height={36}
                            width={200}
                        />
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div
            className={classNames(
                styles.ArticleListItem,
                {},
                [
                    className,
                    styles[view]
                ]
            )}
        >
            <Card className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Skeleton
                        width={200}
                        height={200}
                        className={styles.img}
                        marginBottom={10}
                    />
                </div>
                <div className={styles.infoWrapper}>
                    <Skeleton
                        width={130}
                        height={16}
                        marginBottom={10}
                    />
                </div>
                <Skeleton
                    width={150}
                    height={16}
                    className={styles.title}
                />
            </Card>
        </div>
    )
}
