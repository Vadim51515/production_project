import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Rating } from '../../../entities/Rating';
import { getFeatureFlag, toggleFeatures } from '../../../shared/lib/features';
import { Card } from '../../../shared/ui/Card';
import { Page } from '../../../widgets/Page';
import { Text } from '../../../shared/ui/Text';

const MainPage = () => {
    const { t } = useTranslation('main');
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');

    const rating = toggleFeatures({
        name: 'isArticleRatingEnabled',
        on: () => (
            <Rating
                title={'Пожалуйста оцените новый дизайн'}
                feedbackTitle={'Напишите ощущение'}
                onCancel={() => {}}
                onConfirm={() => {}}
                hasFeedback
            />
        ),
        off: () => (
            <Card>
                <Text tag={'h3'}>{t('Скоро на этом месте будет оценка')}</Text>
            </Card>
        ),
    });

    return (
        <Page dataTestId={'MainPage'}>
            <Text tag="h1">{t('Главная страница')}</Text>

            {isCounterEnabled && <Counter />}

            {rating}
        </Page>
    );
};
export default MainPage;
