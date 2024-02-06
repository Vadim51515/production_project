import React, { type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Rating } from '../../../../entities/Rating';
import { userAuthDataSelector } from '../../../../entities/User';
import { Skeleton } from '../../../../shared/ui/Skeleton/ui/Skeleton';
import { useGetArticleRatingQuery, useRateArticleMutation } from '../../api/articleRatingApi';
import styles from './ArticleRating.module.scss';
export interface IArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating: FC<IArticleRatingProps> = ({ articleId }) => {
    const authData = useSelector(userAuthDataSelector);
    const { t } = useTranslation();

    const { data, isLoading } = useGetArticleRatingQuery({
        userId: authData?.id ?? '',
        articleId,
    });
    const [rateArticle] = useRateArticleMutation();

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticle({
                    userId: authData?.id ?? '',
                    articleId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                // handle error
                console.log(e);
            }
        },
        [articleId, authData?.id],
    );

    const onConfirm = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    const rating = data?.[0];

    if (isLoading) {
        return (
            <Skeleton
                width={'100%'}
                height={'92px'}
            />
        );
    }

    return (
        <Rating
            hasFeedback
            onConfirm={onConfirm}
            onCancel={onCancel}
            rate={rating?.rate}
            className={styles.articleRating}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставте обратную связь')}
        />
    );
};
export default ArticleRating;
