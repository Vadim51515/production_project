import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    type IArticle,
    type TArticleViewType
} from '../../model/types'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import styles from './ArticleList.module.scss'

interface IArticleListProps {
    className?: string
    articles: IArticle[]
    isLoading?: boolean
    view: TArticleViewType
}

const getSkeletons = (view: TArticleViewType) => new Array(view === 'list'
    ? 9
    : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            className={styles.card}
            key={index}
            view={view}
        />
    ))

export const ArticleList: FC<IArticleListProps> = ({
    className,
    articles,
    view = 'tile',
    isLoading
}) => {
    const renderArticle = (article: IArticle) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
        />
    )

    return (
        <div
            className={classNames(
                styles.articleList,
                {},
                [
                    className,
                    styles[view]
                ]
            )}
        >
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && (<div
                className={classNames(
                    styles.articleList,
                    {},
                    [
                        className,
                        styles[view]
                    ]
                )}
            >
                {getSkeletons(view)}
            </div>)}
        </div>
    )
}
