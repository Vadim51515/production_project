import React, { type FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useActions } from '../../../../shared/hooks/useActions';
import { type TReducersList, useAsyncReducer } from '../../../../shared/hooks/useAsyncReducer';
import { Avatar } from '../../../../shared/ui/Avatar/ui/Avatar';
import { Icon } from '../../../../shared/ui/Icon/Icon';
import { Text } from '../../../../shared/ui/Text';
import { articleDetailsActions } from '../../model/actions';
import { articleDataSelector, articleErrorSelector, articleIsLoadingSelector } from '../../model/selectors/selectors';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlocks } from '../ArticleBlocks/ArticleBlocks';
import styles from './ArticleDetails.module.scss';
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';
import EyeIcon from '@/shared/assets/icons/Eye.svg?react';
import CalendarIcon from '@/shared/assets/icons/Calendar.svg?react';

interface IArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: TReducersList = { articleDetails: articleDetailsReducer };

export const ArticleDetails: FC<IArticleDetailsProps> = ({ className, id }) => {
    useAsyncReducer(reducers, true);

    const isLoading = useSelector(articleIsLoadingSelector);
    const article = useSelector(articleDataSelector);
    const error = useSelector(articleErrorSelector);

    const { fetchArticleById } = useActions(articleDetailsActions);

    const { t } = useTranslation('article-details');

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            fetchArticleById(id);
        }
    }, [id]);

    if (error) {
        return (
            <Text
                tag="h2"
                isError
            >
                {t('При загрузке статьи произошла ошибка: ') + error}
            </Text>
        );
    }

    if (isLoading) return <ArticleDetailsSkeleton />;

    return (
        <div
            data-testid={'ArticleDetails'}
            className={classNames(styles.articleDetails, {}, [className])}
        >
            <div className={styles.avatarWrapper}>
                <Avatar image={article?.img} />
            </div>
            <Text tag="h1">{article?.title}</Text>
            <Text tag="h2">{article?.subtitle}</Text>
            <div className={styles.infoBlock}>
                <Icon
                    Svg={EyeIcon}
                    withRightMargin
                />
                <Text>{article?.views}</Text>
            </div>
            <div className={styles.infoBlock}>
                <Icon
                    Svg={CalendarIcon}
                    withRightMargin
                />
                <Text>{article?.createdAt}</Text>
            </div>
            <ArticleBlocks />
        </div>
    );
};
