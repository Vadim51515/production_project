import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '../../../../entities/Article';
import { articleDetailsCommentsActions } from '../../../../pages/ArticleDetailsPage/model/actions';
import { useActions } from '../../../../shared/hooks/useActions';
import { useInitialEffect } from '../../../../shared/hooks/useInitialEffect';
import { Text } from '../../../../shared/ui/Text';
import { useGetArticleRecommendationListQuery } from '../../api/articleRecommendationsListApi';
import styles from './ArticleRecommendationsList.module.scss';

interface IArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList: FC<IArticleRecommendationsListProps> = () => {
    const { data } = useGetArticleRecommendationListQuery(3);

    const { t } = useTranslation();

    const { fetchArticleRecommendations } = useActions(articleDetailsCommentsActions);

    useInitialEffect(() => {
        fetchArticleRecommendations();
    });

    if (!data) return null;

    return (
        <div
            className={styles.recommendationsList}
            data-testid={'ArticleRecommendationsList'}
        >
            <Text withMarginBottom>{t('Рекомендуемые') + ':'}</Text>

            <ArticleList
                articles={data}
                view={'list'}
                className={styles.recommendationsContainer}
                target={'_blank'}
            />
        </div>
    );
};
