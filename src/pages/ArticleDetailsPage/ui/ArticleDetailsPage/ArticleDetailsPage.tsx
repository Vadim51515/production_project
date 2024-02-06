import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '../../../../entities/Article';
import { ArticleRating } from '../../../../features/articleRating';
import { ArticleRecommendationsList } from '../../../../features/articleRecommendationsList';
import { type TReducersList, useAsyncReducer } from '../../../../shared/hooks/useAsyncReducer';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { Page } from '../../../../widgets/Page';
import { Text } from '../../../../shared/ui/Text';

import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice';
import { articleDetailsRecommendationReducer } from '../../model/slices/articleDetailsRecommendation';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
interface IArticleDetailsPageProps {
    className?: string;
}

const initialReducers: TReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleRecommendation: articleDetailsRecommendationReducer,
};

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
    useAsyncReducer(initialReducers, true);

    const { t } = useTranslation('article-details');

    const { id } = useParams<{ id: string }>();

    if (!id && __PROJECT__ !== 'storybook') return <Text>{t('Статья не найдена')}</Text>;

    return (
        <Page
            className={classNames('', {}, [className])}
            dataTestId={'ArticleDetailsPage'}
        >
            <ArticleDetailsPageHeader />
            <ArticleDetails id={id ?? ''} />
            <ArticleRating articleId={id ?? ''} />
            <ArticleRecommendationsList />
            <ArticleDetailsComments id={id ?? ''} />
        </Page>
    );
};

export default ArticleDetailsPage;
