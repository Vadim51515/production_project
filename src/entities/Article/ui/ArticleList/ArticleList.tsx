import React, { type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type IArticle, type TArticleViewType } from '../../model/types';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view: TArticleViewType;
    target?: React.HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: TArticleViewType) =>
    new Array(view === 'list' ? 9 : 3).fill(0).map((item, index) => (
        <ArticleListItemSkeleton
            className={styles.card}
            key={index}
            view={view}
        />
    ));

export const ArticleList: FC<IArticleListProps> = ({ className, articles, view = 'tile', isLoading, target }) => {
    const renderArticle = (index: number) => (
        <div
            data-testid={'ArticleListItem'}
            style={{ paddingBottom: 20 }}
        >
            <ArticleListItem
                target={target}
                key={articles[index].id}
                article={articles[index]}
                view={view}
            />
        </div>
    );

    return (
        <div>
            <div className={styles[view]}>
                {articles.map((_, index) => {
                    return renderArticle(index);
                })}
            </div>
            {isLoading && (
                <div className={classNames(styles.articleList, {}, [className, styles[view]])}>{getSkeletons(view)}</div>
            )}
        </div>
    );
};
